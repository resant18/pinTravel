import * as ApiUtil from '../util/pin_api_util';

export const RECEIVE_PINS = 'RECEIVE_PINS';
export const RECEIVE_PIN = 'RECEIVE_PIN';
export const REMOVE_PIN = 'REMOVE_PIN';

export const RECEIVE_PIN_ERRORS = 'RECEIVE_PIN_ERRORS';
export const CLEAR_PINS = 'CLEAR_PINS';


export const receivePins = ({ users, boards, pins }) => {  
  return {
    type: RECEIVE_PINS,
    users,
    boards,
    pins,
  };
};

export const receivePin = ({ user, board, pin }) => {
  return {
    type: RECEIVE_PIN,
    user,
    board,
    pin
  };
};

export const removePin = payload => {
  return {
    type: REMOVE_PIN,
    pinId: payload.pin.id
  };
};

export const clearPins = () => ({
  type: CLEAR_PINS
});

export const receivePinErrors = errors => ({
  type: RECEIVE_PIN_ERRORS,
  errors
});

// =====

export const fetchAllPins = () => dispatch =>
  ApiUtil.fetchAllPins().then(
    payload => dispatch(receivePins(payload)),
    err => dispatch(receivePinErrors(err.responseJSON))
  );

export const fetchPinsFeed = page => dispatch =>
  ApiUtil.fetchPinsFeed(page)
  .then(
    payload => dispatch(receivePins(payload)),
    err => dispatch(receivePinErrors(err.responseJSON))
  );

export const fetchUserPins = (username, page) => dispatch =>
  ApiUtil.fetchUserPins(username, page).then(
    payload => dispatch(receivePins(payload)),
    err => dispatch(receivePinErrors(err.responseJSON))
  );

export const fetchBoardPins = (id, page) => dispatch =>
  ApiUtil.fetchBoardPins(id, page)
  .then(
    payload => dispatch(receivePins(payload)),
    err => dispatch(receivePinErrors(err.responseJSON))
  );

export const fetchPin = id => dispatch =>
  ApiUtil.fetchPin(id)
  .then(
    payload => dispatch(receivePin(payload)),
    err => dispatch(receivePinErrors(err.responseJSON))
  );

export const createPin = (formData, boardId) => dispatch =>
  ApiUtil.createPin(formData, boardId)
  .then(
    payload => dispatch(receivePin(payload)),
    err => dispatch(receivePinErrors(err.responseJSON))
  );

export const createPinInBoard = (pin, boardId) => dispatch =>
  ApiUtil.createPinInBoard(pin, boardId)
  .then(
    payload => dispatch(receivePin(payload)),
    err => dispatch(receivePinErrors(err.responseJSON))
  );

export const updatePin = pin => dispatch =>
  ApiUtil.updatePin(pin)
  .then(
    payload => dispatch(receivePin(payload)),
    err => dispatch(receivePinErrors(err.responseJSON))
  );

export const deletePin = id => dispatch =>
  ApiUtil.deletePin(id).then(
    payload => dispatch(removePin(payload)),
    err => dispatch(receivePinErrors(err.responseJSON))
  );
