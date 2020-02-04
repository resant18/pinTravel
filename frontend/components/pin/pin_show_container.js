import { connect } from 'react-redux';
import { fetchPin } from '../../actions/pin_actions';
import { showModal } from '../../actions/modal_actions';
import PinShow from './pin_show';

const mapStateToProps = (state, ownProps) => {
   const currentUser = state.entities.users[state.session.id] || {};   
   const pin = state.entities.pins[pinId];
   const pinId = ownProps.match.params.pinId;
   let board, user;

   if (pin) {
      board = state.entities.boards[pin.board_id];
      user = state.entities.users[pin.user.username];
   }

   return ({
      currentUser, 
      user, board, pin, pinId
   });
};

const mapDispatchToProps = dispatch => ({
   fetchPin: id => dispatch(fetchPin(id)),
   showModal: modal => dispatch(showModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PinShow);

