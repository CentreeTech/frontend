import { SET_DEVICE, SET_DEVICE_EVENTS, SET_EVENT_SEEN } from '../constants';
import { Map, List, fromJS } from 'immutable';


export default function device(state = Map(), action) {
  switch (action.type) {
    case SET_DEVICE:
      return state.setIn(['devices', action.payload.device_id], fromJS(action.payload.device))
        .setIn(['events', action.payload.device_id], fromJS([]));
    case SET_DEVICE_EVENTS:
      return state.updateIn(['events', action.payload.device], list => list.concat(fromJS(action.payload.events)));
    case SET_EVENT_SEEN:
      return state.setIn(['events', action.payload.device, action.payload.event], action.payload.latest);;
    default:
      return state;
  }
}
