import { connect } from 'react-redux';

import { fetchBoard } from '../../actions/board_actions';
import { selectBoard, selectUserBoardPins, selectUserCreator } from '../../reducers/selector';
import { showModal } from '../../actions/modal_actions';
import BoardShow from '../board/board_show';

const mapStateToProps = (state, { match }) => {
  const currentUser = state.entities.users[state.session.id];  
  const boardId = parseInt(match.params.boardId);
  const board = selectBoard(state.entities, boardId);    
  const board_pins = selectUserBoardPins(state.entities, boardId);
  const user = selectUserCreator(state.entities, board);
  
  return {
    currentUser,
    boardId,
    board,
    board_pins,
    user
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBoard: id => dispatch(fetchBoard(id)),
  showModal: modal => dispatch(showModal(modal)),  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardShow);
