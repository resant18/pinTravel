import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { showModal } from "../../actions/modal_actions";
import Dashboard from "./dashboard";

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  showModal: modal => dispatch(showModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
