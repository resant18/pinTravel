import { merge } from "lodash";

import { RECEIVE_BOARDS, RECEIVE_BOARD, REMOVE_BOARD, CLEAR_BOARDS } from '../actions/board_actions';
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USERS,
  RECEIVE_USER
} from "../actions/user_actions";
import { RECEIVE_PINS, RECEIVE_PIN } from "../actions/pin_actions";

const boardsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BOARDS:
      return action.boards;
    case RECEIVE_BOARD:
      return merge({}, state, { [action.board.id]: action.board });
    case REMOVE_BOARD:
      const newState = merge({}, state);
      delete newState[action.boardId];
      return newState;
    case (RECEIVE_CURRENT_USER, RECEIVE_USERS, RECEIVE_USER):
      return merge({}, state, action.boards);
    case CLEAR_BOARDS:
      return {};
    case RECEIVE_PINS:
      return merge({}, state, action.boards);
    case RECEIVE_PIN:
      return merge({}, state, { [action.board.id]: action.board });
    default:
      return state;
  }
};

export default boardsReducer;
