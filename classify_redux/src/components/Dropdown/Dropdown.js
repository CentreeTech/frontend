import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';

// Import Components

import styles from './Dropdown.css';

class Dropdown extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			show_options: false,
			options_hover: false,
		}
    this.timeout = null;
	}

  render() {
  	const show_options = this.props.options && this.props.options.length > 0;
    return (
      <div className={classNames(styles.root, {[styles.alt]: this.props.alt})}>
				<div className={styles.container} >
					<div 
            className={styles.select} 
            onClick={() => {
              clearTimeout(this.timeout);
              this.setState({show_options: true});
            }}
            onMouseLeave={() => {
              if (!this.state.options_hover) 
                this.timeout = setTimeout(() => {
                  this.setState({show_options: false})
                }, 250);
            }}>
						<span className={styles.selected}>{this.props.selected ? this.props.selected : (this.props.options ? this.props.options[0] : undefined)}</span>
						{show_options && <span className={styles.arrow}></span>}
					</div>
					{show_options && <div 
						className={classNames(styles.options)}
						style={{height: this.state.show_options ? ((this.props.options.length + 1) * 22) + 'px' : 0 /*TODO CORRECT VALUE*/}}
						onMouseLeave={this.optionsMouseLeave.bind(this)}
            onMouseEnter={() => {
              clearTimeout(this.timeout);
              this.setState({options_hover: true});
            }}>{this.getOptions()}</div>}
      	</div>
      </div>
    );
  }
  
  optionsMouseLeave() {
    this.setState({options_hover: false});
  	this.timeout = setTimeout(() => {
			this.setState({show_options: false})
		}, 250);
  }

  getOptions() {
  	if (!this.props.options) return;
  	const arr = this.props.options.slice();
  	if(this.props.selected) arr.unshift(this.props.selected);
    else arr.unshift(arr[0]);
  	return arr.map((option, index) =>
			<div key={index} className={styles.option} style={index === 0 ? {opacity: 0.7} : undefined} onClick={() => {this.onSelect(option)}}>{option}</div>
		);
  }

  onSelect(value) {
  	this.setState({show_options: false});
    this.setState({options_hover: false});
  	this.props.onSelect(value);
  }
}

export default withStyles(styles)(Dropdown);
