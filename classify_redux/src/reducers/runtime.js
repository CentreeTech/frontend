import { 
	SET_RUNTIME_VARIABLE,
	SET_SERVICES,
	ADD_EXAMPLES,
  DEL_EXAMPLE,
  PUSH_EXAMPLE_ENTRY,
  DEL_EXAMPLE_ENTRY,
  SET_CUR_EXAMPLE_ID,
  SET_HOVER_ENTRY_ID,
  SET_CUR_ENTRY_ID,
  ADD_ENTRY,
  EDIT_ENTRY,
  EDIT_ENTRY_ATTRIBUTE,
} from '../constants';
import { Map, fromJS, toJS, List } from 'immutable';

export default function runtime(state = Map(), action) {
  switch (action.type) {
    case SET_RUNTIME_VARIABLE:
      return state.set(action.payload.name, fromJS(action.payload.value));

  	case SET_SERVICES:
  		return state.set('services', fromJS(action.payload.services));

    case ADD_EXAMPLES:
    	return state.update('examples', list => {
        if (list) return list.concat(fromJS(action.payload.examples));
        else return List(action.payload.examples);
      });

    case DEL_EXAMPLE:
    return state.update('examples', list => {
      if (list && list.size && list.get(action.payload.example_id)) return list.splice(action.payload.example_id, 1);
      else return list
    })

    case SET_CUR_EXAMPLE_ID:
      return state.set('cur_example_id', action.payload.example_id);

    case PUSH_EXAMPLE_ENTRY:
      return state.updateIn(['examples', action.payload.example_id, 'entries'], list => {
        if (list) return list.unshift(fromJS(action.payload.entry));
        else return List(action.payload.entry);
      });

    case DEL_EXAMPLE_ENTRY:
      return state.updateIn(['examples', action.payload.example_id, 'entries'], list => {
        if (list && list.size > action.payload.entry_id && action.payload.entry_id > -1)
          return list.splice(action.payload.entry_id, 1);
        else return list;
      });

    case SET_CUR_ENTRY_ID:
      return state.set('cur_entry_id', action.payload.entry_id);

    case SET_HOVER_ENTRY_ID:
      return state.set('hover_entry_id', action.payload.entry_id);

    case EDIT_ENTRY:
      return state.setIn(['examples', action.payload.example_id, 'entries', action.payload.entry_id, action.payload.name], fromJS(action.payload.value));

    case EDIT_ENTRY_ATTRIBUTE:
      return state.setIn(['examples', action.payload.example_id, 'entries', 
        action.payload.entry_id, 'attributes', action.payload.attribute], action.payload.value);

    default:
      return state;
  }
}
