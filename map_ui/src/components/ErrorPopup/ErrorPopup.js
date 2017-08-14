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
import s from './ErrorPopup.css';
import Link from '../Link';

class ErrorPopup extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
        	<h1><span className={s.severity}>{this.props.severity}!: </span><span className={s.type}>{this.props.type}</span></h1>
        	<p className={s.message}>{this.props.message}</p>
        	{(this.props.handleError && <button className={s.solution} onClick={this.props.handleError}>{this.props.solution_text}</button>)}
        	<button className={s.close} onClick={this.handleClose.bind(this)}>Close</button>
        </div>
      </div>
    );
  }
  handleClose() {
  	if (this.props.handleClose) this.props.handleClose();
  }
}

export default withStyles(s)(ErrorPopup);
