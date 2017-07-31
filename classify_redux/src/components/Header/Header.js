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

import Link from '../Link';
import Navigation from '../Navigation';

import styles from './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.container}>
          <Navigation />
          <Link className={styles.brand} to="/">
            <span className={styles.brandTxt}>ClassUI</span>
          </Link>
          <div className={styles.adornment}>
            <div className={styles.yellow}></div>
            <div className={styles.orange}></div>
            <div className={styles.dgreen}></div>
            <div className={styles.lgreen}></div>
            <div className={styles.dblue}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
