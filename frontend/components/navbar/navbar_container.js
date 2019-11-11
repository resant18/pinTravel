import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { showModal } from "../../actions/modal_actions";
import NavBar from "./navbar";

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id] || {},
    loggedIn: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()), 
    showModal: () => dispatch(showModal('signup')),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
