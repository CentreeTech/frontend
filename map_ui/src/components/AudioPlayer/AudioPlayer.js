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
import s from './AudioPlayer.css';
import Link from '../Link';
import classNames from 'classnames';

class AudioPlayer extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			progress: 0,
			loading: false,
      playing: false,
		}
	}

	// componentDidMount() {
 //    let t = this;
	// 	t.context = new AudioContext();
	// 	t.source = null;
 //    var req = new XMLHttpRequest();
 //    req.open("GET", "http://localhost:3000/audio/" + this.props.device_id + "/" + this.props.event_id + ".wav", true);
 //    req.responseType = "arraybuffer";
 //    t.setState({loading: true});
 //    req.onload = function() {
 //      t.setState({loading: false});
 //      t.process(req.response);
 //    };
 //    req.send();
	// }

  // componentWillUpdate() {
  //   let t = this;
  //   if (!t.source) return;
  //   t.source.start(t.context.currentTime);
  //   t.source.stop(t.context.currentTime);
  //   t.source.disconnect(t.context.destination);
  //   t.source = null;
  // }

  componentDidUpdate() {
  //   let t = this;
  //   var request = new XMLHttpRequest();
  //   request.open("GET", "http://localhost:3000/audio/" + this.props.device_id + "/" + this.props.event_id + ".wav", true);
  //   request.responseType = "arraybuffer";
  //   request.onload = function() {
  //     var data = request.response;
  //     t.process(data);
  //   };
  //   request.send();
  }

  render() {
    console.log(this.props)
    return (
      <div className={s.root}>
        <audio controls><source src={"http://localhost:3000/audio/" + this.props.device_id + "/" + this.props.event_id + ".wav"} type="audio/wav"/></audio>
      </div>
    );
  }
  // <div className={s.controls}>
  //         <div className={classNames(s.play, s.button)} onClick={this.play.bind(this)}></div>
  //         <div className={classNames(s.pause, s.button)}></div>
  //       </div>
  //       <div className={s.progress}>
  //         <div className={s.bar}></div>
  //       </div>

  play() {
    this.source.start(this.context.currentTime);
  }

  process(data) {
    let t = this;
    console.log(data);
    t.source = t.context.createBufferSource();
    t.context.decodeAudioData(data, function(buffer) {
      t.source.buffer = buffer;
      t.source.connect(t.context.destination);
    });
  }
}

export default withStyles(s)(AudioPlayer);
