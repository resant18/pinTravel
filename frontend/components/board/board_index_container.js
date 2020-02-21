import { connect } from "react-redux";
import { showModal, hideModal } from "../../actions/modal_actions";
import { fetchUserPins } from "../../actions/pin_actions";
import BoardIndex from "./board_index";
import { selectUserPins } from "../../reducers/selector";

const mapStateToProps = (state, ownProps) => {
   const currentUser = state.entities.users[state.session.id];
   const user = ownProps.user;
   const username = user.username;
   const boards = ownProps.boards;
   const pins = selectUserPins(state.entities, user);

   return {
      currentUser,
      user,
      username,
      boards,
      pins
   };
};

const mapDispatchToProps = dispatch => {
   return {
      fetchUserPins: (username, page) => dispatch(fetchUserPins(username, page)),
      hideModal: () => dispatch(hideModal()),
      showModal: modal => dispatch(showModal(modal))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);
