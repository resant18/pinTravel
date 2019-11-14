import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import board from './board_errors_reducer';
import user from "./user_errors_reducer";

export default combineReducers({
  session,
  board,
  user
});
