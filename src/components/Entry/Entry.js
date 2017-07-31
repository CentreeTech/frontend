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
import s from './Entry.css';
import classNames from 'classnames';

class Entry extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleSelectDevice = this.handleSelectDevice.bind(this);
  }
  render() {
    return (
      <div className={classNames(s.root, {[s.active]: this.props.current})} >
        <div className={s.container}>
          <div className={s.data} onClick={this.handleSelectDevice}>
            <h2 className={s.name}>{this.props.name}</h2>
            <span className={s.latest}>updated: {this.props.latest}</span>
            <div className={s.arrow}></div>
          </div>
          
        </div>
      </div>
    );
  }
  handleSelectDevice() {
    this.props.setCurDevice(this.props.id);
    this.props.toggleEvents();
    this.props.setDeviceAlert(this.props.id, false);
  }

  // <div className={s.stream} onClick={this.props.viewStream}>Click to view stream</div>
}

export default withStyles(s)(Entry);
