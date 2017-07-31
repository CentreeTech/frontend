import React from 'react';
import update from 'immutability-helper';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';

import Dropdown from 'components/Dropdown';

import styles from './CreateType.css';

class CreateType extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: '',
      attributes: {},
      new_attr_name: '',
      new_attr_type: 'ENUM',
    }
  }

  componentDidMount() {
    this.props.onRef(this);
  }

  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  componentWillReceiveProps(props) {
    if (!props.edit_name) return;
    this.setState({
      name: props.edit_name,
      attributes: props.edit_attrs
    });
  }

  render() {
    return (
      <div className={styles.root}>
				<div className={styles.container}>
					<div className={styles.type}><input type="text" value={this.state.name} placeholder="Service Name" onChange={e => {this.setState({name: e.target.value})}}/></div>
          <table className={styles.attributes}><tbody>{this.getAttributes()}</tbody></table>
      	</div>
      </div>
    );
  }
  
  getAttributes() {
  	return Object.entries(this.state.attributes).map((entry, index) => (
			<tr className={styles.attribute} key={index}>
				<td><div className={styles.button} onClick={() => {this.removeAttribute(entry[0])}}></div></td>
				<td><div className={styles.name}>{entry[0]}</div></td>
				<td><div className={styles.options}>{this.parseAttribute(entry[1], entry[0])}</div></td>
			</tr>
		)).concat([
      <tr className={styles.attribute} key="-1">
        <td><div className={classNames(styles.button, styles.add)} onClick={this.addAttribute.bind(this)}></div></td>
        <td><input 
          className={styles.name}
          type="text"
          placeholder="Attribute"
          onChange={e => {this.setState({new_attr_name: e.target.value})}}
          value={this.state.new_attr_name}/>
        </td>
        <td><div className={styles.options}>
          <Dropdown
            options={['NUMERIC', 'ENUM']}
            selected={this.state.new_attr_type}
            onSelect={(option) => this.setState({new_attr_type: option})}/>
        </div></td>
      </tr>
    ])
  }

  addAttribute() {
    let type;
    if (this.state.new_attr_type === 'NUMERIC') type = 'NUMERIC';
    else if (this.state.new_attr_type === 'ENUM') type = [];
    else type = null; 
    this.setState(prev => update(prev, {
      attributes: {$merge: {[this.state.new_attr_name]: type}},
      new_attr_name: {$set: ''}
    }))
  }

  removeAttribute(type) {
    this.setState(prev => update(prev, {
      attributes: {$unset: [type]}
    }))
  }

  parseAttribute(attr, type) {
  	if (typeof attr === 'string')
  		return attr;
  	else if (attr instanceof Array)
  		return <table><tbody>{attr.map((item, index) => (
				<tr key={index} className={styles.option}>
          <td><div className={styles.button} onClick={() => {this.removeAttributeOption(type, index)}}/></td>
          <td><div className={styles.value}>{item}</div></td>
        </tr>
			)).concat([
        <AddAttributeOption key="-1" type={type} onClick={this.addAttributeOption.bind(this)}/>
      ])}</tbody></table>;
  }

  addAttributeOption(type, val) {
    this.setState(prev => update(prev, {
      attributes: {[type]: {$push: [val]}}
    }));
  }

  removeAttributeOption(type, index) {
    this.setState(prev => update(prev, {
      attributes: {[type]: {$splice: [[index, 1]]}}
    }))
  }
}

class AddAttributeOption extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      option: ''
    }
  }

  render() {
    return (
      <tr key="-1" className={styles.option_adder}>
        <td><div className={classNames(styles.button, styles.add)} 
          onClick={() => {
            this.props.onClick(this.props.type, this.state.option);
            this.setState({option: ''})
          }}/></td>
        <td><input 
          type="text"
          placeholder="Add Item"
          value={this.state.option}
          onChange={e => {this.setState({option: e.target.value})}}/></td>
      </tr>
    );
  }
}

export default withStyles(styles)(CreateType);
