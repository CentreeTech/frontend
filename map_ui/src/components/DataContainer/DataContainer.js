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
import s from './DataContainer.css';
import Link from '../Link';
import classNames from 'classnames';
import ReactDOM from 'react-dom';

import AudioPlayer from 'components/AudioPlayer';

class DataContainer extends React.Component {
	
	componentWillUpdate() {
    ReactDOM.findDOMNode(this).classList.remove(s.animate);
	}

	componentDidUpdate() {
    var e = ReactDOM.findDOMNode(this);
    setTimeout(function(){
     e.classList.add(s.animate);
    }, 10);
    if (this.audio)this.audio.load();
	}

  render() {
  	var url = "http://map.centree.xyz:3000/audio/" + this.props.device_id + "/" + this.props.event_id + ".wav";
    return (
      <div className={classNames(s.root, {[s.active]: this.props.visible}, {[s.out]: this.props.events_visible})}>
	      <div className={s.nav}>
	        <p>Event</p>
	        {this.props.event && <div className={s.close} onClick={() => {this.props.toggleData(false)}}></div>}
	      </div>
	      {this.props.event && <div className={s.data_container}>
	        <span className={s.timestamp}>{this.props.event.reported_at}</span>
	      </div>}
		  <audio ref={(audio) => { this.audio = audio; }} controls><source src={url} type="audio/wav"/></audio>
      </div>
    );
  }
}


export default withStyles(s)(DataContainer);
