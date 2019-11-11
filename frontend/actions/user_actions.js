import * as ApiUtil from "../util/user_api_util";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

export const receiveUsers = ( {users, boards, pins } ) => {  
  return {
    type: RECEIVE_USERS,
    users,
    boards,
    pins,
  };
};

export const receiveUser = ({ user, boards, pins }) => { 
  return {
    type: RECEIVE_USER,
    user,
    boards,
    pins,
  };
};

export const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

// =====

export const fetchUsers = () => dispatch => (
  ApiUtil.fetchUsers()
  .then(
    users => dispatch(receiveUsers(users)), 
    err => dispatch(receiveUserErrors(err.responseJSON))
  )
);

export const fetchUser = username => dispatch => (
  ApiUtil.fetchUser(username)
  .then(
    user => (dispatch(receiveUser(user))), 
    err => (dispatch(receiveUserErrors(err.responseJSON)))
  )
);

export const updateUser = (userData, id) => dispatch => (
  ApiUtil.updateUser(userData, id)
  .then(
    user => dispatch(receiveUser(user)), 
    err => dispatch(receiveUserErrors(err.receiveUserErrors))
  )
);
