import merge from 'lodash/merge';

import {
  RECEIVE_PINS,
  RECEIVE_PIN,
  REMOVE_PIN,
  CLEAR_PINS,
} from '../actions/pin_actions';

const pinsReducer = (state = {}, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_PINS:
      return merge({}, newState, action.pins);
    case RECEIVE_PIN:
      return merge({}, newState, { [action.pin.id]: action.pin });
    case REMOVE_PIN:
      delete newState[action.pinId];
      return newState;    
    case CLEAR_PINS:
      return {};
    default:
      return state;
  }
};

export default pinsReducer;
