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
import s from './Event.css';
import Link from '../Link';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setRuntimeVariable} from '../../actions/runtime';
import classNames from 'classnames';

class Event extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.handleToggleData = this.handleToggleData.bind(this);
	}

	render() {
		if (this.props.onRef) {this.props.onRef(this);}
		let p = this.props;
		return (
			<div className={classNames(s.root, {[s.unseen]: !p.seen})} onMouseEnter={this.props.onMouseEnter}>
				<div className={s.container} onClick={this.handleToggleData}>
					<h2 className={s.type}>{this.props.type}</h2>
					<span className={s.time}>time: {new Date(this.props.time).toISOString().substring(0, 19).replace('T', ' ')}</span>
					<div className={s.arrow}></div>
				</div>
			</div>
		);
	}

	handleToggleData() {
		let p = this.props;
		console.log("clicked!!");
		p.toggleData();
		p.setCurEvent(p.id);
		p.setEventSeen(p.id, p.device_id, true);
	}
}

export default withStyles(s)(Event);