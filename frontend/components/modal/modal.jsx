import React from 'react';
import { hideModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';

const Modal = ({ modal, hideModal }) => {       
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        default:
            return null;
    }

    if (modal === 'login' || modal === 'signup') return (<div>{component} </div>);
    return (
        <div className="modal-main" onClick={hideModal}>
            <section className="modal-content" onClick={e => e.stopPropagation()}>
                {component}
            </section>
        </div>
    );
}

const mapStateToProps = state => {    
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        hideModal: () => dispatch(hideModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
