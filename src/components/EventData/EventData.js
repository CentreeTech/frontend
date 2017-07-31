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
import s from './EventData.css';
import Link from '../Link';
import classNames from 'classnames';

class EventData extends React.Component {
	render() {
		if (this.props.eventData.sound_file) {
			let context = new AudioContext();
			let source = context.createBufferSource();
			context.decodeAudioData(this.props.eventData.sound_file, function(buffer) {
				source.buffer = buffer;
				source.connect(context.destination);
        // source.start();
			});
		}
		return (
			<div className={s.root}>
				<div className={s.nav}>
          <p>Event</p>
					<div className={s.close_events} onClick={() => {this.handleToggleEvents(false).bind(this)}}></div>
				</div>
				<div className={s.container}>
					<audio controls>
						<source src="horse.ogg" type="audio/ogg"/>
						Your browser does not support the audio element.
					</audio>
					<span>{this.props.eventData.other_media}</span>
				</div>
			</div>
		);
	}
	handleToggleEvents() {

	}
}

export default withStyles(s)(EventData);