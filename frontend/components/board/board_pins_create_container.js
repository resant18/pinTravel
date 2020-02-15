import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchBoards } from '../../actions/board_actions';
import { createPinInBoard } from '../../actions/pin_actions';
import { hideModal } from '../../actions/modal_actions';
import { selectUserBoards } from '../../reducers/selector';
import BoardPinsCreateForm from "./board_pins_create_form";

const mapStateToProps = (state, ownProps) => {   
   const username = state.session.id;
   const currentUser = state.entities.users[username] || {};
   const pin = state.ui.modal.selectedData;   
   const boards = selectUserBoards(state.entities, currentUser, true);

   return {
      currentUser,
      username,      
      boards,
      pin,
   };
};

const mapStateToDispatch = dispatch => ({
   createPinInBoard: (pin, boardId) => dispatch(createPinInBoard(pin, boardId)),
   fetchBoards: () => dispatch(fetchBoards()),
   hideModal: modal => dispatch(hideModal(modal))
});

export default withRouter(
   connect(mapStateToProps, mapStateToDispatch)(BoardPinsCreateForm)
);
