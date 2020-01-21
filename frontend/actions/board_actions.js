import * as ApiUtil from '../util/board_api_util';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';
export const CLEAR_BOARDS = 'CLEAR_BOARDS';
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';
export const CLEAR_BOARD_ERRORS = 'CLEAR_BOARD_ERRORS';

export const receiveBoards = payload => {
  return {
    type: RECEIVE_BOARDS,
    users: payload.users,
    boards: payload.boards,
    pins: payload.pins
  };
};

export const receiveBoard = payload => {
  return {
    type: RECEIVE_BOARD,
    user: payload.user,
    board: payload.board,
    pins: payload.pins
  };
};

export const removeBoard = payload => {  
  return {
    type: REMOVE_BOARD,
    boardId: payload.board.id
  };
};

export const clearBoards = payload => {
  return {
    type: CLEAR_BOARDS    
  };
};

export const receiveBoardErrors = errors => {     
  return {
    type: RECEIVE_BOARD_ERRORS,
    errors
  };
};

export const clearBoardErrors = () => {  
  return {
    type: CLEAR_BOARD_ERRORS,
  }
}

// =====

export const fetchBoards = () => dispatch =>
  ApiUtil.fetchBoards().then(
    boards => dispatch(receiveBoards(boards)),
    err => dispatch(receiveBoardErrors(err.responseJSON))
  );

export const fetchBoard = id => dispatch =>
  ApiUtil.fetchBoard(id).then(
    board => dispatch(receiveBoard(board)),
    err => dispatch(receiveBoardErrors(err.responseJSON))
  );

export const createBoard = board => dispatch =>
  ApiUtil.createBoard(board).then(
    boardData => dispatch(receiveBoard(boardData)),
    err => dispatch(receiveBoardErrors(err.responseJSON))
  );

export const updateBoard = board => dispatch =>
  ApiUtil.updateBoard(board).then(
    boardData => dispatch(receiveBoard(boardData)),
    err => dispatch(receiveBoardErrors(err.responseJSON))
  );

export const deleteBoard = id => dispatch =>
  ApiUtil.deleteBoard(id).then(
    board => dispatch(removeBoard(board)),
    err => dispatch(receiveBoardErrors(err.responseJSON))
  );
