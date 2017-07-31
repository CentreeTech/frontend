import React from 'react';
import ReactDOM from 'react-dom'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';

// Import Components

import styles from './AudioClipper.css';

class AudioClipper extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			playing: false,
			side: null,
			progress: 0,
		}
		this.bounds = null;
		this.hover = null;
		this.selected = null;

		this.getRect = this.getRect.bind(this);
		this.windowMouseMove = this.windowMouseMove.bind(this);
		this.windowMouseUp = this.windowMouseUp.bind(this);
	}

	componentDidMount() {
		this.getRect();
		this.audio = new Audio();
		this.audio.addEventListener('timeupdate', () => {
			this.setState({ progress: this.audio.currentTime / this.audio.duration });
		});
		this.audio.addEventListener('canplaythrough', () => {
			this.setState({ progress: 0 });
		});
		window.addEventListener('resize', this.getRect);
		window.addEventListener('mousemove', this.windowMouseMove);
		window.addEventListener('mouseup', this.windowMouseUp);
	}

	windowMouseMove(e) {
  	if (!this.props.entries) return;
		if (this.selected == null) return;

		e.preventDefault();

		let x = (e.clientX - this.bounds.left) / this.bounds.width;
		if (x < 0) x = 0;
		else if (x > 1) x = 1;
		if (this.selected === 'selection') {
			const entry = this.props.entries[this.props.cur_entry_id];
	  	const mid = (entry.start + entry.end) / (2 * this.props.duration);
			this.setState({ side: x < mid ? 'left' : 'right' });
			this.props.editEntry(this.state.side === 'left' ? 'start' : 'end', x * this.props.duration);
		} else if (this.selected === 'progress' && this.audio) {
			this.audio.currentTime = this.audio.duration * x;
		}
	}

	windowMouseUp() {
  	if (!this.props.entries) return;
		this.selected = null;
		if (!this.hover) this.setState({ side: null });
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.getRect);
		window.removeEventListener('mousemove', this.windowMouseMove);
		window.removeEventListener('mouseup', this.windowMouseUp);
	}

	componentWillReceiveProps(next) {
		if (next.src && (!this.audio || next.src != this.audio.src))
			this.setAudio(next.src);
	}

  render() {
  	const trackFns = {
  		ref: (r) => { this.track = r; },
			onMouseMove: this.trackHover.bind(this),
			onMouseLeave: this.trackLeave.bind(this),
			onMouseDown: this.trackDown.bind(this),
		}
    return (
      <div className={styles.root} >
				<div className={styles.container}>
					<div className={styles.controls}>
						<span className={classNames(styles.button, styles.reset)}
							onClick={this.reset.bind(this)}></span>
						<span className={classNames(styles.button, {[styles.play]: !this.state.playing, [styles.pause]: this.state.playing})}
							onClick={this.togglePlay.bind(this)}></span>
					</div>
					<div className={styles.track} {...trackFns}>
						<div className={classNames(styles.selections, { [styles.left]: this.state.side === 'left', [styles.right]: this.state.side === 'right' })} 
							onMouseEnter={() => { this.hover = 'selection' }}>
							{this.getSelections()}
						</div>
						<div className={styles.progress} 
							onMouseEnter={() => { this.hover = 'progress' }}>
							<div className={styles.prog_bar} style={{width: (100 * this.state.progress) +  '%'}}></div>
						</div>
					</div>
      	</div>
      </div>
    );
  }

  setAudio(blob) {
  	this.audio.src = blob;
  	this.audio.load();
  }

  togglePlay() {
  	if (this.state.playing) this.audio.pause();
  	else this.audio.play();
  	this.setState(prev => ({ playing: !prev.playing}));
  }

  reset() {
  	if (!this.audio) return;
		this.audio.pause();
		this.audio.currentTime = 0;
		this.setState(prev => { playing: false });
  }

  trackHover(e) {
  	if (!this.props.entries) return;
  	const x = (e.clientX - this.bounds.left) / this.bounds.width;
		if (this.hover === 'selection' && !(this.selected === 'selection')) {
			const entry = this.props.entries[this.props.cur_entry_id];
	  	const mid = (entry.start + entry.end) / (2 * this.props.duration);
			this.setState({ side: x < mid ? 'left' : 'right' });
		} else {
			this.setState({ side: null });
		}
  }

  trackLeave() {
  	this.hover = null;
  	this.setState({ side: null });
  }

  trackDown(e) {
  	this.selected = this.hover;
  }

  getSelections() {
  	if (!this.props.entries) return;
  	return this.props.entries.map((entry, index) => {
  		const start = 100 * (entry.start / this.props.duration);
  		const end = 100 * ((entry.end - entry.start) / this.props.duration);
			return <div
				key={index}
				className={classNames(styles.sel_bar, {
					[styles.current]: index === this.props.cur_entry_id,
					[styles.hover]: index === this.props.hover_entry_id
				})}
				style={{left: start + '%', width: end + '%'}}/>;
  	});
  }

  getRect() {
		this.bounds = ReactDOM.findDOMNode(this.track).getBoundingClientRect();
  }
}

export default withStyles(styles)(AudioClipper);
