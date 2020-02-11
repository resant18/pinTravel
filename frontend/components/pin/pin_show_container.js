import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPin } from '../../actions/pin_actions';
import { showModal } from '../../actions/modal_actions';
import PinShow from './pin_show';

const mapStateToProps = (state, ownProps) => {
   const currentUser = state.entities.users[state.session.id].username || {};   
   const pinId = ownProps.match.params.pinId;
   const pin = state.entities.pins[pinId];      
   let board, creator;

   if (pin) {
      board = state.entities.boards[pin.board_id];
      creator = state.entities.users[pin.user.username].username;
   }

   return ({
      currentUser, 
      creator, 
      board, 
      pinId,
      pin
   });
};

const mapDispatchToProps = dispatch => ({
   fetchPin: id => dispatch(fetchPin(id)),
   showModal: modal => dispatch(showModal(modal)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinShow));

