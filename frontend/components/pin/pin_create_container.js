import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPin } from '../../actions/pin_actions';
import { fetchBoards } from '../../actions/board_actions';
import { selectUserBoards, selectUserPins } from '../../reducers/selector';
import PinCreateForm from './pin_create_form';

const mapStateToProps = (state, ownProps) => {   
   const currentUser = state.entities.users[state.session.id] || {};   
   // const boards = selectUserBoards(state.entities, currentUser, true);
   // const pins = selectUserPins(state.entities, currentUser);

   return {
      currentUser,      
      // boards,
      // pins
   };
};

const mapDispatchToProps = dispatch => ({
   createPin: (pin, boardId) => dispatch(createPin(pin, boardId)),
   // fetchBoards: () => dispatch(fetchBoards()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinCreateForm));
