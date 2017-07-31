import { createLogger as reduxLogger } from 'redux-logger';
import Immutable from 'immutable';

export default function createLogger() {
  return reduxLogger({
  	stateTransformer: (state) => {
	    return state.toJS();
	  },
    collapsed: true,
  });
}
