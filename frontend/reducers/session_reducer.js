import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, CLEAR_ERRORS} from "../actions/session_actions";

const _nullUser = Object.freeze({
  id: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id };
    case LOGOUT_CURRENT_USER:      
      return _nullUser;
    // case CLEAR_ERRORS:
    //   return [];
    default:
      return state;
  }
};

export default sessionReducer;
