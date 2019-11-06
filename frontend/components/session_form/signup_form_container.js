import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signup } from "../../actions/session_actions";
import { showModal } from "../../actions/modal_actions";
import { clearErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = ({ errors }) => {  
  return {
    errors: errors.session,
    formType: "Sign up",
    passwordHolder: "Create a Password",
    navLink: <Link to="/login">log in instead</Link>
  };
};

const mapDispatchToProps = dispatch => {  
  return {
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    switchAction: () => dispatch(showModal("login")),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
