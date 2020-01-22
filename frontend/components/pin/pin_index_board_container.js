import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PinIndex from './pin_index';
import { fetchBoardPins, clearPins } from '../../actions/pin_actions';
import { selectUserBoardPins } from '../../reducers/selector';
import { showModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id] || {};
  const user = ownProps.user;
  const board = ownProps.board;
  const boardId = board.id;
  const pins = selectUserBoardPins(state.entities, boardId);
  
  return {
     fetchType: 'board',
     currentUser,
     user,
     board,
     boardId,
     pins,  
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPins: (boardId, page) => dispatch(fetchBoardPins(boardId, page)),
  clearPins: () => dispatch(clearPins()),
  showModal: modal => dispatch(showModal(modal))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PinIndex)
);
