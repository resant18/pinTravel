import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_BOARD, RECEIVE_BOARDS } from '../actions/board_actions'
import { RECEIVE_PINS, RECEIVE_PIN } from '../actions/pin_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {
        [action.currentUser.username]: action.currentUser
      });
    case RECEIVE_USER:      
             
      return merge({}, state, {
        [action.user.username]: action.user,
      });          
    case RECEIVE_BOARDS:
      return merge({}, state, action.users);
    case RECEIVE_BOARD:
      return merge({}, state, { [action.user.username]: action.user });
    case RECEIVE_PINS:
      return merge({}, state, action.users);
    case RECEIVE_PIN:
      return merge({}, state, { [action.user.username]: action.user });
    default:
      return state;
  }
};

export default usersReducer;
