import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
   updatePin, 
   deletePin 
} from '../../actions/pin_actions';
import { showModal, hideModal } from "../../actions/modal_actions";
import PinEditForm from './pin_edit_form';


const msp = (state, ownProps) => {
   const currentUser = state.entities.users[state.session.id] || {};
   const pinId = state.ui.modal.selectedData;
   const pin = state.entities.pins[pinId];
         
   return {
      currentUser,
      pin,      
   };
};

const mdp = dispatch => ({
   updatePin: pin => dispatch(updatePin(pin)),
   deletePin: pinId => dispatch(deletePin(pinId)),
   showModal: (modal) => dispatch(showModal(modal)),
   hideModal: modal => dispatch(hideModal(modal)),   
});

export default withRouter(connect(msp, mdp)(PinEditForm));