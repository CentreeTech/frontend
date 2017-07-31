import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

// Import Components

import styles from './EditDataWindow.css';

class EditDataWindow extends React.Component {
   render() {
    return (
      <div className={styles.root}>
				<div className={styles.container}>
					{this.getAttributes()}
      	</div>
      </div>
    );
  }

  componentDidMount() {
		this.props.onRef(this);
	}

	componentWillUnnount() {
		this.props.onRef(undefined);
	}

  getAttributes() {
    if (!this.props.attributes || Object.keys(this.props.attributes).length < 1)
    	return <div className={styles.alert}>No Attributes</div>;
  	return <table><tbody>{Object.entries(this.props.attributes).map(entry => (
			<tr className={styles.attribute} key={entry[0]}>
				<td className={styles.name}>{entry[0]}</td>
				<td className={styles.options}>{this.parseAttribute(entry[1])}</td>
			</tr>
		))}</tbody></table>
  }

  parseAttribute(attr) {
		if (attr instanceof Array) {
			return <ul>{attr.map(a => (<li key={a} className={styles.arrayitem}>{a}</li>))}</ul>
		} else if (attr === 'NUMERIC') {
			return 'Numeric';
		} else if (attr === 'STRING') {
			return 'String';
		}
  }
}

export default withStyles(styles)(EditDataWindow);
