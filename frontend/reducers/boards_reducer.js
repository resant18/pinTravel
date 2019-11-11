import { merge } from "lodash";

import { RECEIVE_BOARDS, RECEIVE_BOARD, REMOVE_BOARD, CLEAR_BOARDS } from '../actions/board_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_PINS, RECEIVE_PIN } from "../actions/pin_actions";

const boardsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BOARDS:
      return action.boards;
    case RECEIVE_BOARD:
      newState[action.board.id] = action.board;
      return newState;
    case REMOVE_BOARD:
      delete newState[action.boardId];
      return newState;
    case RECEIVE_USER:
      return merge({}, state, action.boards);
    case CLEAR_BOARDS:
      return {};
    case RECEIVE_PINS:
      return merge({}, newState, action.boards);
    case RECEIVE_PIN:
      return merge({}, newState, { [action.board.id]: action.board });
    default:
      return state;
  }
};

export default boardsReducer;
