import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../actions/session_actions";
import { showModal } from "../../actions/modal_actions";
import { clearErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "Log in",
    passwordHolder: "Password",
    navLink: <Link to="/signup">sign up instead</Link>
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    switchAction: () => dispatch(showModal("signup")),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
