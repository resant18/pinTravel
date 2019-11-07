import { connect } from "react-redux";
import { showModal, hideModal } from "../../actions/modal_actions";
import { fetchUserBoards } from '../../actions/board_action';
//import { fetchUser } from "../../actions/user_actions";
import BoardIndex from "./board_index";

const mapStateToProps = (state, ownProps) => {  
  debugger
  return {
    boards: Object.values(state.entities.boards || []),
    //currentId: ownProps.userId || ownProps.match.params.id,
    currentUserId: ownProps.match.params.id || state.session.id,
    loggedInUser: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserBoards: userId => dispatch(fetchUserBoards(userId)),
    //fetchUser: id => dispatch(fetchUser(id)),
    hideModal: () => dispatch(hideModal()),
    showModal: modal => dispatch(showModal(modal))
  }; 
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardIndex);
