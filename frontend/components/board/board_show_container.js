import { connect } from "react-redux";

import { fetchBoard } from "../../actions/board_actions";
import { selectReviewsForBoard, selectBoard } from "../../reducers/selectors";
import BoardShow from "./bench_show";

const mapStateToProps = (state, { match }) => {
  const boardId = parseInt(match.params.boardId);
  const board = selectBoard(state.entities, boardId);
  const pins = selectReviewsForBoard(state.entities, board);
  return {
    benchId,
    bench,
    reviews
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBoard: id => dispatch(fetchBoard(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardShow);
