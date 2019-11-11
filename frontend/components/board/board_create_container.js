import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_action';
import BoardForm from './board_form';

const mapStateToProps = (state, ownProps) => ({
  board: {
    name: '',
    category_id: '',
    cover_id: '',
    secret: false,    
  },
  formType: 'Create Board',
  errors: state.errors.boards,
});

const mapDispatchToProps = dispatch => ({
  action: board => dispatch(createBoard(board)),
  showModal: modal => dispatch(showModal(modal)),
  hideModal: () => dispatch(hideModal()),
  receiveBoardErrors: errors => dispatch(receiveBoardErrors(errors)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardForm);
