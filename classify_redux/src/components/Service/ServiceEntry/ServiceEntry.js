import React from 'react';
import ReactDOM from 'react-dom';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames'

import DataWindow from 'components/Service/EditDataWindow';

import styles from './ServiceEntry.css';

class ServiceEntry extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			minimize: true
		};
		this.dataWindowBound;
	}

	componentDidMount() {
		this.dataWindowBound = ReactDOM.findDOMNode(this.dataWindow).getBoundingClientRect();
	}

	componentDidRecieveProps(next) {
		if (this.dataWindow && Object.keys(next.attributes).length !== Object.keys(this.props.attributes).length)
			this.dataWindowBound = ReactDOM.findDOMNode(this.dataWindow).getBoundingClientRect();
	}

  render() {
    return (
      <div className={styles.root}>
				<div className={styles.container}>
					<div className={styles.bar} onClick={this.toggleDataWindow.bind(this)}>
						<div className={styles.buttons}>
							{/*<div className={classNames(styles.button, styles.edit)}
								onClick={this.editEntry.bind(this)}/>*/}
							<div className={classNames(styles.button, (this.state.minimize ? styles.max : styles.min))}/>
						</div>
						<div className={styles.infobar}>
							<span className={styles.name}>{this.props.service}</span>
						</div>
					</div>
					<div className={styles.datawindow}
						style={{height: (this.state.minimize ? 0 : this.dataWindowBound.height)}}>
						<DataWindow attributes={this.props.attributes} onRef={dataWindow => {this.dataWindow = dataWindow}}/>
					</div>
      	</div>
      </div>
    );
  }

  toggleDataWindow() {
  	console.log(1)
  	this.setState(prev => ({minimize: !prev.minimize}));
  }

  editEntry(e) {
  	this.props.onEdit(this.props.service)
  	this.setState(prev => ({minimize: false}));
  	if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
  }
}

export default withStyles(styles)(ServiceEntry);
