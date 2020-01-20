import { connect } from 'react-redux';
import {   
   updateBoard,
   deleteBoard
} from '../../actions/board_actions';
import { showModal, hideModal } from '../../actions/modal_actions';
import BoardEditForm from './board_edit_form';
import { selectUserCreator } from '../../reducers/selector';


const mapStateToProps = (state, ownProps) => {
  const boardId = state.ui.modal.selectedData;
  const board = state.entities.boards[boardId];
  const user = selectUserCreator(state.entities, board);

  return {
    boardId,
    board,    
    user
    // formType: 'Update Board'
  }
};

const mapDispatchToProps = dispatch => ({   
   showModal: modal => dispatch(showModal(modal)),
   hideModal: () => dispatch(hideModal()),
   updateBoard: board => dispatch(updateBoard(board)),
   deleteBoard: boardId => dispatch(deleteBoard(boardId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardEditForm);
