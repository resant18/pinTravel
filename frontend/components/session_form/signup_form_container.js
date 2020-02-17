import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, signup } from '../../actions/session_actions';
import { showModal, hideModal } from '../../actions/modal_actions';
import { clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {  
  return {
    errors: {
      username: errors.session.username || [],
      email: errors.session.email || [],
      password: errors.session.password || [],      
    },
    // errors: errors.session,
    formType: 'Sign up',
    passwordHolder: 'Create a Password',
    navLink: <Link to='/login'>log in instead</Link>
  };
};

const mapDispatchToProps = dispatch => {  
  return {
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearSessionErrors()),
    switchAction: () => dispatch(showModal('login')),
    hideModal: () => dispatch(hideModal()),
    login: user => dispatch(login(user)) // this is for log demo user in
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
