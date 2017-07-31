import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addExamples} from 'components/../actions/runtime';

import Dropzone from 'react-dropzone';

import arrow from './arrow.svg';
import styles from './Import.css';

class Import extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			files: []
		}
	}
  render() {
    return (
      <div className={styles.root}>
      	<div className={styles.container}>
      		<Dropzone 
            className={styles.dropzone}
            accept="audio/*"
            activeClassName={styles.active}
            rejectClassName={styles.reject}
            onDrop={(accept, reject) => {this.handleDrop(accept)}}>
      			<div className={styles.border}>
              <div className={styles.text}>
                <svg className={styles.arrow} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 31">
                  <title>arrow</title>
                  <polyline className={styles.line} points="1.5 19.5 11.5 29.5 21.5 19.5"/>
                  <line className={styles.line} x1="11.5" y1="29.5" x2="11.5" y2="1.5"/>
                </svg>
                <h2 className={styles.upload}>Click to Upload Files</h2>
                <h2 className={styles.drag}>or drag folder</h2>
              </div>
            </div>
  				</Dropzone>
          {this.state.files.length > 0 && <div className={styles.confirmation}>Files Added</div>}
				</div>
      </div>
    );
  }

  handleDrop(files) {
    if (!files || files.length < 1) alert("Filetype Not Supported\nAudio File Required");
    else this.parseFiles(files).then(files => {this.props.addExamples({examples: files})});
  }

  parseFiles(files) {
    return Promise.all(files.map(file => {
      return new Promise((resolve, reject) => {
        const audio = new Audio(file.preview);
        audio.addEventListener('loadedmetadata', () => {
          resolve(this.props.createExample(file.name, file.preview, file.type, file, audio.duration * 1000));
        });
      });
    }));
  }
}

const mapDispatch = (dispatch) => bindActionCreators({
  addExamples: addExamples,
}, dispatch);

export default connect(null, mapDispatch)(withStyles(styles)(Import));