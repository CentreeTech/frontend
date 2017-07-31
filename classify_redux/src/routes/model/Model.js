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

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  setServices,
} from '../../actions/runtime';
import {toJS} from 'immutable';

import Entry from 'components/Classify/Entry';
import DatWindow from 'components/Service/EditDataWindow';

import styles from './Model.css';

class Model extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selected: {},
      filter: '',
      models: {}
    }
  }

  componentDidMount() {
    this.fetchServices()
  }

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.container}>
          <div className={styles.service_search}>
            <h2>Select Services</h2>
            <div className={styles.nav}>
              <input className={styles.search} type="text" placeholder="Search" onChange={e => this.setState({filter: e.target.value})}/>
            </div>
            <div className={styles.services}>{this.getServices()}</div>
          </div>
          <div className={styles.models}>
          <h2>Models</h2>
          {this.getModels()}</div>
        </div>
      </div>
    );
  }

  getServices() {
    if (!this.props.services || Object.keys(this.props.services).length < 1)
      return <h3>No Services</h3>;
    return Object.entries(this.props.services)
    .sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase()))
    .filter(service => (this.state.filter === ''
      || service[0].toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1))
    .map((service, index) => (
      <div key={index} className={styles.service} onClick={() => this.setState(prev => ({
          selected: {...prev.selected, [service[0]]: !prev.selected[service[0]]}           
        }), this.fetchModels.bind(this))}>
        <div className={classNames(styles.bar, {[styles.selected]: this.state.selected[service[0]]})}>
          <div className={styles.check}/>
          <span className={styles.name}>{service[0]}</span>
        </div>
      </div>
    ))
  }

  getModels() {
    if (!this.state.models || Object.keys(this.state.models).length < 1)
      return <h3>No Models</h3>;
    return Object.entries(this.state.models).map((model, index) => 
        <div key={index} className={styles.model}>
          <div className={styles.name}>
            <h1>{model[1].model_name}</h1>
            <div className={styles.id}>id: {model[0]}</div>
          </div>
          <div className={styles.info}>
            <div className={styles.positive}>
              <h4>Positive Cases</h4>
              {model[1].positive_cases.map((service, index) => <div key={index} className={styles.service}>{service}</div>)}
            </div>
            <div className={styles.negative}>
              <h4>Negative Cases</h4>
              {!model[1].negative_cases.length ? <h3>No Negative Cases</h3> 
                : model[1].negative_cases.map((service, index) => <div key={index} className={styles.service}>{service}</div>)}
            </div>
            <div className={styles.status}>
              <h4>Status</h4>
              {model[1].state ? model[1].state.replace('_', ' ') : 'Normal'}
            </div>
          </div>
        </div>
      );
  }

  fetchModels(attempt=0) {
    if (attempt === 5) {
      alert("Unable to fetch models");
      return;
    }
    fetch('http://backend.centree.xyz:5000/get_models_under_constraint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Basic " + btoa("b4ed218e-0ef6-4c0a-b7e3-ac86e6edffb2:make_america_great_again"),
      },
      body: JSON.stringify({
        "positive_cases" : [],
        "negative_cases" : [],
        "algorithm_name" : "cnn_neural_net_v1_0"
      })
    })
    .then(res => {
      if (res.ok) return res.json();
      else throw new Error("Fetch Error")
    })
    .then(data => {
      this.setState({models: data});
    })
    .catch(() => {
      setTimeout(() => this.fetchModels(attempt + 1), attempt * attempt * 3000);
    })
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
      const obj = {};
      if (!(data instanceof Array)) throw new Error("Fetch data not correct format");
      data.forEach(elem => {
        obj[elem] = false
      });
      this.setState({selected: obj});
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
    })
  }
}

const mapState = state => {
  const s = state.toJS();
  return {
    services: s.runtime.services,
  }
}

const mapDispatch = (dispatch) => bindActionCreators({
  setServices: setServices,
}, dispatch);

export default connect(mapState, mapDispatch)(withStyles(styles)(Model));
