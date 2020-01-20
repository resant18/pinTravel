import { connect } from 'react-redux';
import {
   fetchBoard,
   updateBoard,
   deleteBoard
} from "../../actions/board_actions";
import BoardEditForm from './board_edit_form';


const mapStateToProps = (state, ownProps) => {
  const boardId = state.ui.currentObject;
  const board = state.entities.boards[boardId];
  const currentUser = state.entities.users[state.session.id];

  debugger
  return {
    boards,    
    // formType: 'Update Board'
  }
};

const mapDispatchToProps = dispatch => ({
   fetchBoard: boardId => dispatch(fetchBoard(boardId)),   
   showModal: modal => dispatch(showModal(modal)),
   hideModal: () => dispatch(hideModal()),
   updateBoard: board => dispatch(updateBoard(board)),
   deleteBoard: boardId => dispatch(deleteBoard(boardId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardEditForm);
