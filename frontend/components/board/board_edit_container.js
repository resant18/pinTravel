import React from "react";
import { connect } from "react-redux";
import { fetchBoard, updateBoard } from "../../actions/board_actions";
import BoardForm from "./Board_form";

class EditBoardForm extends React.Component {
  componentDidMount() {
    this.props.fetchBoard(this.props.board.id);
  }

  render() {    
    const { board, formType, action } = this.props;
    
    if (!board) return null;
    return (
      <BoardForm Board={board} formType={formType} action={action} />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  boards: state.boards,
  formType: "Update Board"
});

const mapDispatchToProps = dispatch => ({
  fetchBoard: boardId => dispatch(fetchBoard(boardId)),
  action: board => dispatch(updateBoard(board)),
  deleteBoard = boardId => dispatch(deleteBoard(boardId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditBoardForm);
