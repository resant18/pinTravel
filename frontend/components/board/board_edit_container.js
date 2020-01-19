 import { connect } from "react-redux";
import { fetchBoard, updateBoard } from "../../actions/board_actions";


const mapStateToProps = (state, ownProps) => ({
  boards: state.boards,
  formType: "Update Board"
});

const mapDispatchToProps = dispatch => ({
  fetchBoard: boardId => dispatch(fetchBoard(boardId)),
  updateBoard: board => dispatch(updateBoard(board)),
  deleteBoard = boardId => dispatch(deleteBoard(boardId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardEditForm);
