import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_actions';
import { showModal, hideModal } from '../../actions/modal_actions';
import BoardForm from './board_form';

const mapStateToProps = (state, ownProps) => { 
  debugger
  return ({
  board: {
    name: '',
    category_id: 1,
    cover_id: '',
    secret: false,    
  },
  formType: 'Create Board',
  errors: state.errors.board,
})};

const mapDispatchToProps = dispatch => ({
  action: board => dispatch(createBoard(board)),
  showModal: modal => dispatch(showModal(modal)),
  hideModal: () => dispatch(hideModal()),
  // receiveBoardErrors: errors => dispatch(receiveBoardErrors(errors)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardForm);
