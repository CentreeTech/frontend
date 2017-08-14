/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import update from 'react-addons-update';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {EVENT_UPDATE_MILLIS, EVENT_RECENT_WINDOW} from '../../constants';
import {withGoogleMap, GoogleMap, Marker} from "react-google-maps";
import classNames from 'classnames';
// import jsmpeg from 'jsmpeg';

import Sidebar from 'components/Sidebar';

import styles from './Home.css';
import marker from './marker.png';
import markerAlert from './marker-alert.png';

const DeviceMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    center={props.center}>
    {props.markers.map(marker => (
      <Marker {...marker} onClick={() => props.onMarkerClick(marker)}/>
    ))}
  </GoogleMap>
));


class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      devices: {},
      events: {},
      loading_devices: true,
      cur_device: null,
      cur_event: null,
    };
    this.latestEvent = '2017-06-30 16:56:54'; //new Date(new Date() - EVENT_RECENT_WINDOW).toISOString().substring(0, 19).replace('T', ' ');
  }
  componentDidMount() {
    this.fetchDevices(() => {
      this.fetchEvents(true);
      setInterval(() => {
        this.fetchEvents()
      }, EVENT_UPDATE_MILLIS);
    });
    // var ctx = this.streamer.getContext('2d');
    // ctx.fillStyle = '#34e';
    // ctx.fillText('Loading...', this.streamer.width/2-30, this.streamer.height/3);

    // // Setup the WebSocket connection and start the player
    // var client = new WebSocket('ws://${ADDRESS}/');
    // var player = new jsmpeg(client, {canvas:this.streamer});
  }

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.container}>
          <Sidebar 
            onRef={ref => { this.sidebar = ref }}
            events={this.state.events}
            devices={this.state.devices}
            cur_event={this.state.cur_event}
            cur_device={this.state.cur_device}
            setDeviceAlert={this.setDeviceAlert.bind(this)}
            setEventSeen={this.setEventSeen.bind(this)}
            setCurDevice={this.setCurDevice.bind(this)}
            setCurEvent={this.setCurEvent.bind(this)}
            loading_devices={this.state.loading_devices}
            viewStream={() => this.toggleStream(true)}
          />
          <DeviceMap
            containerElement={<div style={{height: `100%`, flex: '1'}} />}
            mapElement={<div style={{height: `100%`}} />}
            onMarkerClick={this.handleMarkerClick.bind(this)}
            center={this.state.cur_device ? this.state.devices[this.state.cur_device].location : {lat: 33, lng: -84}}
            markers={this.mapMarkers()}
          />
          
        </div>
      </div>
    );
  }

  // <div className={classNames(styles.stream, {[styles.active]: this.state.stream})}>
  //           {/*H264 STREAM HERE
  //             It should work if you just associate a link into device.stream
  //             If it's an API call, however, see Server.js:88 and DataContainer.js:34*/}
  //           <div className={styles.close} onClick={() => this.toggleStream(false)}></div>
  //           <canvas ref={ref=>{this.streamer = ref}} style={{width:"100%", height:"100%"}}>
  //             <p>
  //               Please use a browser that supports the Canvas Element, like
  //               <a href="http://www.google.com/chrome">Chrome</a>,
  //               <a href="http://www.mozilla.com/firefox/">Firefox</a>,
  //               <a href="http://www.apple.com/safari/">Safari</a> or Internet Explorer 10
  //             </p>
  //           </canvas>
  //         </div>

  fetchDevices(postFunc, attempt=0) {
    if (attempt === 5) {
      alert("Unable to fetch devices");
      return;
    }
    fetch("http://backend.centree.xyz:5000/list_user_devices", {
      method: "GET", 
      headers: {
        'Authorization': "Basic " + btoa("b4ed218e-0ef6-4c0a-b7e3-ac86e6edffb2:make_america_great_again"),
        'Content-Type': 'application/json'
       }
    })
    .then(res => {
      if (res.ok) return res.json();
      else throw new Error("Fetch Error")
    })
    .then(function(data) {
      this.setState({ loading_devices: false });
      Object.entries(data).forEach(device => {
        if (!(device[0] in this.state.devices))
          this.addDevice(device[0], Object.assign(device[1], 
            {location: this.parseLocation(device[1].location)}));
      });
      if (postFunc) postFunc();
    }.bind(this))
    .catch(() => {
      setTimeout(() => this.fetchDevices(postfunc, attempt + 1), attempt * attempt * 3000);
    });
  }

  fetchEvents(isInitial=false) {
    fetch("http://backend.centree.xyz:5000/list_new_events", {
      method: "POST", 
      headers: {
        'Authorization': "Basic " + btoa("b4ed218e-0ef6-4c0a-b7e3-ac86e6edffb2:make_america_great_again"),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "timestamp" : this.latestEvent
      })
    })
    .then(res => {
      if (res.ok) return res.json();
      else throw new Error("Fetch Error")
    })
    .then(function(data) {
      this.latestEvent = data.most_recent_event_timestamp || this.latestEvent;

      Object.entries(data.events).forEach(device => {
        if (!this.state.devices[device[0]])
          this.fetchDevices();

        if (!isInitial && this.sidebar.state.cur_device !== device[0] && !this.sidebar.state.show_events)
          this.alertMarker(device[0]);

        this.setDeviceLatest(device[0], this.latestEvent);

        const events = device[1];
        Object.keys(events).forEach(event_id => {
          const event = events[event_id];
          event.seen = isInitial;
        });

        this.addEvents(device[0], events);
      });
    }.bind(this))
    .catch(e => {
      console.log("failed to fetch events")
    });
  }

  toggleStream(val) {
    this.setState({stream: val});
  }

  mapMarkers() {
    return Object.entries(this.state.devices).map(device => ({
      key: device[0],
      position: device[1].location,
      icon: this.state.devices[device[0]].alerted ? markerAlert : marker,
    }));
  }

  parseLocation(locstring) {
    var latlng = locstring.split(',');
    return {lat: parseFloat(latlng[0]), lng: parseFloat(latlng[1])}
  }

  handleMarkerClick(target) {
    this.setDeviceAlert(target.key, false);
    this.setCurDevice(target.key)
    this.sidebar.toggleEvents();
  }

  setCurDevice(device) {
    console.log(device)
    this.setState({ cur_device: device });
  }

  setCurEvent(event) {
    this.setState({ cur_event: event });
  }

  setEventSeen(event_id, device_id, val) {
    this.setState(prev => {
      return update(prev, {
        events: {[device_id]: {[event_id]: {seen: {$set: val}}}}
      });
    });
  }

  setDeviceAlert(device_id, val) {
    this.setState(prev => {
      return update(prev, {
        devices: {[device_id]: {alerted: {$set: val}}}
      });
    });
  }

  addDevice(device_id, device) {
    this.setState(prev => {
      return update(prev, {
        devices: {[device_id]: {$set: device}},
        events: {[device_id]: {$set: {}}}
      });
    });
  }

  setDeviceLatest(device_id, latest) {
    this.setState(prev => update(prev, {
      devices: {[device_id]: {$merge: {latest: latest}}}
    }))
  }

  addEvents(device_id, events) {
    this.setState(prev => {
      return update(prev, {
        events: {[device_id]: {$merge: events}}
      });
    });
  }
}

export default withStyles(styles)(Home);