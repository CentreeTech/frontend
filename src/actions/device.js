/* eslint-disable import/prefer-default-export */

import { SET_DEVICE, SET_DEVICE_EVENTS, SET_EVENT_SEEN } from '../constants';

export const setDevice = ({ device_id, device }) => {
  return {
    type: SET_DEVICE,
    payload: {
      device_id,
      device,
    },
  };
}

export const setDeviceEvents = ({ device, events }) => {
  return {
    type: SET_DEVICE_EVENTS,
    payload: {
      device,
      events,
    },
  };
}

export const setEventSeen = ({ device, event, seen }) => {
  return {
    type: SET_EVENT_SEEN,
    payload: {
      device,
      event,
      seen,
    },
  };
}
