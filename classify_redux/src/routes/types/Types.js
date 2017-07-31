import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s3 from 'aws-sdk/clients/s3';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  setServices,
} from '../../actions/runtime';
import {toJS} from 'immutable';

import ServiceEntry from 'components/Service/ServiceEntry';
import CreateType from 'components/Service/CreateType';

import styles from './Types.css';

class Types extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      cur_service: null
    }
  }

  componentDidMount() {
    this.fetchServices();
  }

  render() {
    console.log(2)
    return (
      <div className={styles.root}>
        <div className={styles.container}>
          <div className={styles.type_cont}>
            <h2>Types</h2>
            <div className={styles.types}>{this.getTypes()}</div>
          </div>
          <div className={styles.create_cont}>
            <h2>Create Type</h2>
            <CreateType onRef={ref => {this.createType = ref}} edit_attrs={this.state.cur_service ? this.props.services[this.state.cur_service] : undefined} edit_name={this.state.cur_service}/>
          </div>
          <div className={styles.buttons}>
            <div className={styles.submit} onClick={this.submitService.bind(this)}>Submit</div>
          </div>
        </div>
      </div>
    );
  }

  getTypes() {
    if (!this.props.services || Object.keys(this.props.services).length < 1) return <div className={styles.alert}>No Types</div>
    return Object.entries(this.props.services).map(service => (
      <ServiceEntry key={service[0]} service={service[0]} attributes={service[1]} onEdit={this.setEditType.bind(this)}/>
    ));
  }

  setEditType(service) {
    this.setState({cur_service: service});
  }

  submitService() {
    const name = this.createType.state.name;
    const attrs = this.createType.state.attributes;
    if (name.length < 1) {
      alert("Service must have name");
      return;
    }
    // console.log(name, attrs);
    fetch('http://backend.centree.xyz:5000/add_service', {
      method: 'POST',
      headers: {
        'Authorization': "Basic " + btoa("b4ed218e-0ef6-4c0a-b7e3-ac86e6edffb2:make_america_great_again"),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({service_name: name, attributes: attrs})
    })
    .then(() => {
      fetch('http://backend.centree.xyz:5000/add_user_service', {
        method: 'POST',
        headers: {
          'Authorization': "Basic " + btoa("b4ed218e-0ef6-4c0a-b7e3-ac86e6edffb2:make_america_great_again"),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: name})
      })
      .then(this.fetchServices.bind(this));
    });
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
  }
}

const mapDispatch = (dispatch) => bindActionCreators({
  setServices: setServices,
}, dispatch);

export default connect(mapState, mapDispatch)(withStyles(styles)(Types));
