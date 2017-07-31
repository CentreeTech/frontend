// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
import user from './user';
import runtime from './runtime';

export default combineReducers({
  user,
  runtime,
});
