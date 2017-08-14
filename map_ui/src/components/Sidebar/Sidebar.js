/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';

import DataContainer from 'components/DataContainer';
import Entry from 'components/Entry';
import Event from 'components/Event';
import EventData from 'components/EventData';

import styles from './Sidebar.css';

class Sidebar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show_events: false,
      show_data: false,
    };
    this.toggleEvents = this.toggleEvents.bind(this);
    this.toggleData = this.toggleData.bind(this);
  }

  componentDidMount() {
    this.props.onRef(this);
  }

  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.devices}>
          <div className={styles.entry_container}>{this.getDevices()}</div>
        </div>
        <div className={classNames(styles.events, { [styles.active]: this.state.show_events })}>
          <div className={styles.nav}>
            <p>Events</p>
            <div className={styles.close} onClick={() => {this.toggleEvents(false)}}></div>
          </div>
          <div className={styles.event_container} >{this.getEvents()}</div>
        </div>
        <DataContainer
          visible={this.state.show_data}
          events_visible={this.state.show_events}
          event={(this.props.events && this.props.cur_device) ? this.props.events[this.props.cur_device][this.props.cur_event] : undefined}
          device_id={this.props.cur_device}
          event_id={this.props.cur_event}
          toggleData={this.toggleData.bind(this)}
        />
      </div>
    );
  }

  getDevices() {
    if (this.props.loading_devices)
      return (<div className={styles.placeholder}>
        <h2>Loading Devices</h2>
        <div className={styles.spinner}></div>
      </div>);

    var devices = this.props.devices;
    if (!devices) return;

    return Object.keys(devices).map((k) => {
      const device = devices[k];
      return <Entry 
        key={k}
        id={k}
        name={device.name}
        latest={device.latest}
        current={(this.props.cur_device == k && this.state.show_events)}
        toggleEvents={this.toggleEvents}
        setCurDevice={this.props.setCurDevice}
        setDeviceAlert={this.props.setDeviceAlert}
        viewStream={this.props.viewStream}
      />
    });
  }

  getEvents() {
    const events = this.props.events;
    const device = this.props.cur_device;

    if (!device) return;

    if (!events[device] || Object.keys(events[device]).length == 0) {
      return (<div className={styles.placeholder}>
        <h2>No New Events</h2>
      </div>);
    }

    return Object.keys(events[device]).sort((a, b) => {
      return new Date(events[device][b].created_at) - new Date(events[device][a].created_at);
    }).map((k) => {
      const event = events[device][k];
      return <Event 
        key={k}
        id={k}
        time={event.reported_at}
        seen={event.seen}
        type={event.service_name}
        device_id={device}
        setCurEvent={this.props.setCurEvent}
        toggleData={this.toggleData}
        setEventSeen={this.props.setEventSeen}
      />
    });
  }

  toggleEvents(s=true) {
    this.setState({ show_events: s });
    if (!s) this.setState({show_data: false});
  }

  toggleData(s=true) {
    console.log("data has been toggled!")
    this.setState({ show_data: s });
  }
}

export default withStyles(styles)(Sidebar);
