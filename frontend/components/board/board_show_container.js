import { connect } from "react-redux";

import { fetchBoard } from "../../actions/board_actions";
import { selectBoard } from '../../reducers/selector';
import BoardShow from '../board/board_show';

const mapStateToProps = (state, { match }) => {
  const currentUser = state.entities.users[state.session.id];  
  const boardId = parseInt(match.params.boardId);
  const board = selectBoard(state.entities, boardId);
  const pins = selectReviewsForBoard(state.entities, board);
  return {
    currentUser,
    boardId,
    board,
    pins
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBoard: id => dispatch(fetchBoard(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardShow);
