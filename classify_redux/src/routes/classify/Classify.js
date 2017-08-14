/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';
import {fromJS} from 'immutable';
import format from 'format-duration';
import AWS from 'aws-sdk';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  setServices,
  setCurExampleID,
  setCurEntryID,
  setHoverEntryID,
  editEntry,
  editEntryAttribute,
  addEntry,
  pushExampleEntry,
  delExampleEntry,
  delExample,
} from '../../actions/runtime';
import {toJS} from 'immutable';

import AudioClipper from 'components/Classify/AudioClipper';
import Import from 'components/Classify/Import';
import Entry from 'components/Classify/Entry';
import Dropdown from 'components/Dropdown';

import styles from './Classify.css';

class Classify extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.s3;
  }

  componentDidMount() {
    this.audio = new Audio();
    this.fetchServices();
    this.fetchCredentials().then(credentials => {
      AWS.config.update({accessKeyId: credentials.AWS_ACCESS_KEY_ID, secretAccessKey: credentials.AWS_SECRET_ACCESS_KEY});
      this.s3 = new AWS.S3();
    });
  }

  render() {
    const example = this.props.examples[this.props.cur_example_id];
    const t = {examples: [{entries: [{}]}]}
    return (
      <div className={styles.root}>
        <div className={styles.container}>
          <div className={styles.upper}>
            <AudioClipper
              src={example ? example.src : undefined}
              entries={example ? example.entries : undefined}
              cur_entry_id={this.props.cur_entry_id || 0}
              hover_entry_id={this.props.hover_entry_id}
              duration={example ? example.duration : undefined}
              editEntry={(attr, value) => {
                this.props.editEntry({
                  example_id: this.props.cur_example_id,
                  entry_id: this.props.cur_entry_id || 0,
                  name: attr,
                  value: value
                });
              }} />
          </div>
          <div className={styles.mid}>
            <div className={classNames(styles.import, styles.col)}>
              <div className={styles.import_cont}>
                <Import createExample={this.createExample.bind(this)} />
              </div>
              <div className={styles.submit} onClick={this.submitExample.bind(this)}>Submit Example</div>
              <div className={styles.queue}>
                <h2>Examples</h2>
                <div className={styles.examples}>{this.getExamples()}</div>
              </div>
            </div>
            <div className={classNames(styles.edit, styles.col)}>
              <h1>{example ? example.name : 'No Example Selected'}</h1>
              <h2>Add Entries</h2>
              <div className={styles.entries_cont}>
                {example && <div className={styles.entry_adder}>
                   <Entry
                    adder={true}
                    entry_id={0}
                    example_id={this.props.cur_example_id}
                    services={this.props.services}
                    editEntry={this.editEntry.bind(this)}
                    editAttribute={this.editEntryAttribute.bind(this)}
                    onAdd={() => {this.pushEntry(example.duration)}}
                    onMouseEnter={() => {this.props.setHoverEntryID({entry_id: 0})}}
                    onMouseLeave={() => {this.props.setHoverEntryID({entry_id: undefined})}}
                    {...example.entries[0]} />
                </div>}
                <div className={styles.entries}>{this.getEntries()}</div>
              </div>
            </div>
            <div className={classNames(styles.data, styles.col)}>
              <h2>Data</h2>
              <h3>No Data</h3>
            </div>
          </div>
          <div className={styles.lower}>
            
          </div>
        </div>
      </div>
    );
  }

  submitExample(attempt=0) {
    // TODO 
    // Make sure users can't mess with interface during this process
    const example = this.props.examples[this.props.cur_example_id];
    if (!example) return;
    this.fetchCredentials()
    .then(credentials => {
      this.fetchFilename()
      .then(data => {
        this.uploadExample(credentials, example.file, data.filename + example.type.replace(/audio\//, '.'))
        .then(() => {
          this.uploadEntries(example.entries.map(entry => {
            const attributes = Object.assign(this.getDefaultServiceValues(entry.service), entry.attributes);
            return {
              start_time: entry.start,
              end_time: entry.end,
              service: entry.service,
              attributes: attributes,
              media: data.filename + example.type.replace(/audio\//, '.')
            }
          }))
          .then(() => {console.log(1);this.removeExample(this.props.cur_example_id)})
        });
      });
    });
  }

  getDefaultServiceValues(service) {
    const obj = {};
    Object.entries(this.props.services[service]).forEach(attr => {
      if (attr[1] instanceof Array) obj[attr[0]] = attr[1][0];
      else obj[attr[0]] = attr[1];
    })
    return obj;
  }

  fetchCredentials() {
    return new Promise((resolve, reject) => {
      fetch('http://backend.centree.xyz:5000/get_data_storage_credentials', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Basic " + btoa("b4ed218e-0ef6-4c0a-b7e3-ac86e6edffb2:make_america_great_again"),
        }
      })
      .then(res => res.json(), reason => reject(reason))
      .then(data => resolve(data));
    });
  }

  fetchFilename() {
    return new Promise((resolve, reject) => {
      fetch('http://backend.centree.xyz:5000/get_new_filename', {
        method: 'GET',
        headers: {
          'Authorization': "Basic " + btoa("b4ed218e-0ef6-4c0a-b7e3-ac86e6edffb2:make_america_great_again"),
        }
      })
      .then(res => res.json(), reason => reject(reason))
      .then(data => resolve(data));
    });
  }

  uploadExample(credentials, file, filename) {
    return new Promise((resolve, reject) => {
      // console.log(credentials, file, filename);
      var params = {Bucket: credentials.BUCKET_NAME, Key: "classifications/" + filename, Body: file};//new File([file], filename)
      this.s3.upload(params, (err, data) => {
        // console.log(err, data)
        resolve()
      });
    })
  }

  uploadEntries(entries) {
    return new Promise((resolve, reject) => {
      // console.log('uploading entires');
      // console.log(entries);
      fetch('http://backend.centree.xyz:5000/add_classifications', {
        method: 'POST',
        headers: {
          'Authorization': "Basic " + btoa("b4ed218e-0ef6-4c0a-b7e3-ac86e6edffb2:make_america_great_again"),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(entries)
      }).then(() => resolve());
    });
  }

  createExample(name, src, type, file, duration) {
    return {
      name: name,
      src: src,
      type: type,
      file: file,
      duration: duration,
      entries: [this.createEntry(duration)]
    }
  }

  removeExample(example_id) {
    this.props.setCurExampleID({example_id: 0});
    this.props.delExample({example_id: example_id})
  }

  createEntry(duration, start, end, service, attributes) {
    return {
      start: (start || 0),
      end: (end || duration),
      service: (service || Object.keys(this.props.services)[0]),
      attributes: (attributes || {})
    }
  }

  pushEntry(duration) {
    this.props.pushExampleEntry({
      example_id: this.props.cur_example_id,
      entry: this.createEntry(duration)
    });
  }

  editEntry(entry_id, name, value) {
    this.props.editEntry({
      example_id: this.props.cur_example_id,
      entry_id: entry_id,
      name: name,
      value: value
    })
  }

  editEntryAttribute(entry_id, attribute, value) {
    this.props.editEntryAttribute({
      example_id: this.props.cur_example_id,
      entry_id: entry_id,
      attribute: attribute,
      value: value
    })
  }

  delEntry(entry_id) {
    this.props.delExampleEntry({
      example_id: this.props.cur_example_id,
      entry_id: entry_id,
    });
  }

  getExamples() {
    if (!this.props.examples || this.props.examples.length < 1) return <h3>No Examples</h3>;
    return this.props.examples.map((example, index) => (
      <div 
        className={classNames(styles.example, {[styles.selected]: index == this.props.cur_example_id})}
        key={index}
        title={example.name}
        onClick={() => {this.props.setCurExampleID({example_id: index})}}>
        <div className={styles.example_name}> {example.name}</div>
        <div className={styles.example_length}>Length: {format(example.duration)}</div>
      </div>
    ));
  }

  getEntries() {
    if (!this.props.examples || this.props.examples.length < 1
      || this.props.examples[this.props.cur_example_id].entries.length < 2) return <h3>No Entries</h3>;
    return this.props.examples[this.props.cur_example_id].entries.slice(1).map((entry, index) => (
      <Entry 
        key={index}
        entry_id={index + 1}
        example_id={this.props.cur_example_id}
        services={this.props.services}
        editEntry={this.editEntry.bind(this)}
        editAttribute={this.editEntryAttribute.bind(this)}
        onDelete={() => {this.delEntry(index + 1)}}
        onEdit={(done) => {this.props.setCurEntryID({entry_id: done ? 0 : index + 1})}}
        editing={this.props.cur_entry_id == index + 1}
        onMouseEnter={() => {this.props.setHoverEntryID({entry_id: index + 1})}}
        onMouseLeave={() => {this.props.setHoverEntryID({entry_id: undefined})}}
        {...entry} />
    ));
  }

  fetchServices(attempt=0) {
    if (attempt === 5) {
      alert("Unable to fetch services");
      return;
    }
    fetch('http://backend.centree.xyz:5000/get_user_services', {
      method: 'GET',
      headers: {
        'Authorization': "Basic " + btoa("b4ed218e-0ef6-4c0a-b7e3-ac86e6edffb2:make_america_great_again"),
      }
    })
    .then(res => {
      if (res.ok) return res.json();
      else throw new Error("Fetch Error")
    })
    .then(data => {
      fetch('http://backend.centree.xyz:5000/get_services_attributes', {
        method: 'POST',
        headers: {
          'Authorization': "Basic " + btoa("b4ed218e-0ef6-4c0a-b7e3-ac86e6edffb2:make_america_great_again"),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({service_names: data})
      })
      .then(res => res.json())
      .then(data => {
        this.props.setServices({services: data});
      });
    })
    .catch(() => {
      setTimeout(() => this.fetchServices(attempt + 1), attempt * attempt * 3000);
    });
  }
}

const mapState = state => {
  const s = state.toJS();
  return {
    services: s.runtime.services,
    examples: s.runtime.examples,
    cur_example_id: s.runtime.cur_example_id,
    cur_entry_id: s.runtime.cur_entry_id,
    hover_entry_id: s.runtime.hover_entry_id,
  }
}

const mapDispatch = (dispatch) => bindActionCreators({
  setServices: setServices,
  setCurExampleID: setCurExampleID,
  setCurEntryID: setCurEntryID,
  setHoverEntryID: setHoverEntryID,
  editEntry: editEntry,
  editEntryAttribute: editEntryAttribute,
  pushExampleEntry: pushExampleEntry,
  delExampleEntry: delExampleEntry,
  delExample: delExample,
}, dispatch);

export default connect(mapState, mapDispatch)(withStyles(styles)(Classify));
