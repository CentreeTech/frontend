import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';

import Dropdown from 'components/Dropdown';

import styles from './DataWindow.css';

class DataWindow extends React.Component {
  render() {
    return (
      <div className={classNames(styles.root, {[styles.alt]: this.props.alt, [styles.open]: this.props.open})}>
				<div className={styles.container}>
					{this.getAttributes()}	
      	</div>
      </div>
    );
  }

  getAttributes() {
  	if (!this.props.service || !this.props.services
  		|| Object.keys(this.props.services[this.props.service]).length < 1) return <h3>No Attributes</h3>;
  	const attributes = Object.entries(this.props.services[this.props.service]).map((attribute, index) => 
			<tr key={index} className={styles.attribute}>
				<td className={styles.name}>
					{attribute[0]}
				</td>
				<td className={styles.value}>
					{this.parseAttribute(attribute[0], attribute[1], this.props.attributes[attribute[0]])}
				</td>
			</tr>
		);
  	return (
  		<table className={styles.attributes}>
				<tbody>
					{attributes}
				</tbody>
			</table>
		)
  }

  parseAttribute(attribute, possible, value) {
  	if (possible === 'NUMERIC')
  		return <input type="number" value={value} onChange={(e) => {this.props.editAttribute(attribute, e.target.value)}}/>
  	if (possible instanceof Array)
  		return (
  			<Dropdown
					options={possible}
					selected={value}
					onSelect={value => {this.props.editAttribute(attribute, value)}}
  			/>
			);
  }
}

export default withStyles(styles)(DataWindow);
