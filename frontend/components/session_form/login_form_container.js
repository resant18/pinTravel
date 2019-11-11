import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../actions/session_actions";
import { showModal, hideModal } from "../../actions/modal_actions";
import { clearSessionErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: {
      username: errors.session.username || [],
      email: errors.session.email || [],
      password: errors.session.password || []
    },
    formType: "Log in",
    passwordHolder: "Password"
    // navLink: <Link to="/signup">Sign Up</Link>
  };
};

const mapDispatchToProps = dispatch => {  
  return {
    processForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearSessionErrors()),
    switchAction: () => dispatch(showModal("signup")),
    hideModal: () => dispatch(hideModal()),
    login: user => dispatch(login(user)), // this is for log demo user in
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
