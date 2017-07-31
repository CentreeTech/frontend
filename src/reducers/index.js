import { combineReducers } from 'redux-immutable';
import user from './user';
import runtime from './runtime';
import device from './device';

export default combineReducers({
  user,
  runtime,
  device,
});