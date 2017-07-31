import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import format from 'format-duration';
import classNames from 'classnames'

import Dropdown from 'components/Dropdown';
import Select from 'react-select';
import DataWindow from 'components/DataWindow';

import styles from './Entry.css';
import select from 'react-select/dist/react-select.css';

class Entry extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			open: false
		}
	}
							// {this.props.adder && <div className={classNames(styles.button, styles.spacer)} />}
  render() {
    return (
      <div 
      	className={classNames(styles.root, {[styles.adder]: this.props.adder})}
      	onMouseEnter={this.props.onMouseEnter}
      	onMouseLeave={this.props.onMouseLeave}>
				<div className={styles.container}>
					<div className={styles.bar}>
						<div className={styles.buttons}>
							{!this.props.adder && <div className={classNames(styles.button, styles.del)} onClick={this.props.onDelete} />}
							{!this.props.adder && <div className={classNames(styles.button, styles.edit, {[styles.done]: this.props.editing})}
								onClick={() => {this.props.onEdit(this.props.editing)}} />}

							{this.props.adder && <div className={classNames(styles.button, styles.add)} onClick={this.props.onAdd} />}
						</div>
						<div className={styles.info}>
							<div 
								className={styles.service}>
							  <Dropdown
							  	options={this.props.services ? Object.keys(this.props.services) : []}
							  	selected={this.props.service}
							  	onSelect={value => {
							  		if (value === this.props.service) return; 
							  		this.props.editEntry(this.props.entry_id, 'service', value)
							  		this.props.editEntry(this.props.entry_id, 'attributes', {})
							  	}} />
						  </div>
							<div className={styles.spacer}></div>
							<div className={styles.time}>
								<span className={styles.start}>{format(this.props.start || 0)}</span>
								-
								<span className={styles.end}>{format(this.props.end || 0)}</span>
							</div>
						</div>
					</div>
					<div className={styles.data}>
						<DataWindow
							// alt={this.props.adder}
							open={(this.state.open || this.props.adder)}
							attributes={this.props.attributes}
							services={this.props.services}
							service={this.props.service}
							editAttribute={(attribute, value) => {this.props.editAttribute(this.props.entry_id, attribute, value)}} />
					</div>
      	</div>
      </div>
    );
  }

  // <Dropdown 
  // 	options={this.props.services ? Object.keys(this.props.services) : []}
  // 	selected={this.props.service}
  // 	onSelect={this.setEntryService.bind(this)} />

}
export default withStyles(styles, select)(Entry);
