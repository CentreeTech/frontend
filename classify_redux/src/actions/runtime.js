/* eslint-disable import/prefer-default-export */

import { 
	SET_RUNTIME_VARIABLE,
	SET_SERVICES,
	ADD_EXAMPLES,
  DEL_EXAMPLE,
  PUSH_EXAMPLE_ENTRY,
  DEL_EXAMPLE_ENTRY,
  SET_CUR_EXAMPLE_ID,
  SET_CUR_ENTRY_ID,
  SET_HOVER_ENTRY_ID,
  EDIT_ENTRY,
  EDIT_ENTRY_ATTRIBUTE,
} from '../constants';

export function setRuntimeVariable({ name, value }) {
  return {
    type: SET_RUNTIME_VARIABLE,
    payload: {
      name,
      value,
    },
  };
}

export function setServices({ services }) {
  return {
    type: SET_SERVICES,
    payload: {
      services,
    },
  };
}

export function addExamples({ examples }) {
  return {
    type: ADD_EXAMPLES,
    payload: {
      examples,
    },
  };
}

export function delExample({ example_id }) {
  return {
    type: DEL_EXAMPLE,
    payload: {
      example_id,
    },
  };
}

export function pushExampleEntry({ example_id, entry }) {
  return {
    type: PUSH_EXAMPLE_ENTRY,
    payload: {
      example_id,
      entry,
    },
  };
}

export function delExampleEntry({ example_id, entry_id }) {
  return {
    type: DEL_EXAMPLE_ENTRY,
    payload: {
      example_id,
      entry_id,
    },
  };
}

export function setCurExampleID({ example_id }) {
  return {
    type: SET_CUR_EXAMPLE_ID,
    payload: {
      example_id,
    },
  };
}

export function setCurEntryID({ entry_id }) {
  return {
    type: SET_CUR_ENTRY_ID,
    payload: {
      entry_id,
    },
  };
}

export function setHoverEntryID({ entry_id }) {
  return {
    type: SET_HOVER_ENTRY_ID,
    payload: {
      entry_id,
    },
  };
}

export function editEntry({ example_id, entry_id, name, value }) {
  return {
    type: EDIT_ENTRY,
    payload: {
      example_id,
      entry_id,
      name,
      value,
    },
  };
}

export function editEntryAttribute({ example_id, entry_id, attribute, value }) {
  return {
    type: EDIT_ENTRY_ATTRIBUTE,
    payload: {
      example_id,
      entry_id,
      attribute,
      value,
    },
  };
}