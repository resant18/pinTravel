import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPin } from '../../actions/pin_actions';
import { fetchBoards } from '../../actions/board_actions';
import { selectUserBoards } from '../../reducers/selector';
import PinCreateForm from './pin_create_form';

const mapStateToProps = (state, ownProps) => {   
   const currentUser = state.entities.users[state.session.id] || {};
   const username = ownProps.match.params.username;
   const boards = selectUserBoards(state.entities, currentUser);

   return {
      currentUser,
      username,
      boards
   };
};

const mapDispatchToProps = dispatch => ({
   createPin: (pin, boardId) => dispatch(createPin(pin, boardId)),
   fetchBoards: () => dispatch(fetchBoards())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinCreateForm));
