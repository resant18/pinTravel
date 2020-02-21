import merge from 'lodash/merge';

import {
  RECEIVE_PINS,
  RECEIVE_PIN,
  REMOVE_PIN,
  CLEAR_PINS
} from '../actions/pin_actions';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USERS,
  RECEIVE_USER
} from '../actions/user_actions';

import { RECEIVE_BOARDS, RECEIVE_BOARD } from '../actions/board_actions';

const pinsReducer = (state = {}, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_PINS:            
      return merge({}, state, action.pins);      
    case RECEIVE_PIN:      
      return merge({}, state, { [action.pin.id]: action.pin });
    case REMOVE_PIN:
      const newState = merge({}, state);
      delete newState[action.pinId];
      return newState;
    case (RECEIVE_BOARDS, RECEIVE_BOARD):
      return merge({}, state, action.pins);
    // case (RECEIVE_CURRENT_USER, RECEIVE_USERS, RECEIVE_USER):      
    //  return merge({}, state, action.pins);
    case CLEAR_PINS:
      return {};
    default:
      return state;
  }
};

export default pinsReducer;
