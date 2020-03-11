import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createBoard, clearBoardErrors } from '../../actions/board_actions';
import { showModal, hideModal } from '../../actions/modal_actions';
import BoardCreateForm from './board_create_form';

const mapStateToProps = (state, ownProps) => ({
   board: {
      name: "",
      category_id: 1,
      cover_id: "",
      secret: false
   },
   currentUser: state.entities.users[state.session.id] || {},
   errors: state.errors.board
});

const mapDispatchToProps = dispatch => ({
  createBoard: board => dispatch(createBoard(board)),  
  showModal: modal => dispatch(showModal(modal)),
  hideModal: () => dispatch(hideModal()),
  clearBoardErrors: () => dispatch(clearBoardErrors()),
  // receiveBoardErrors: errors => dispatch(receiveBoardErrors(errors)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardCreateForm));
