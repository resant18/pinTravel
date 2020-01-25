import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import SignUpFormContainer from '../components/session_form/signup_form_container';
import LogInFormContainer from '../components/session_form/login_form_container';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to="/" />
            )
    )} />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to="/" />
            )
    )} />
);

const Session = ({ path, sessionType, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => {       
        if (!loggedIn) {              
            if (sessionType === 'signup' || sessionType === null) 
                return <SignUpFormContainer {...props} />
            else if (sessionType === 'login')
                return <LogInFormContainer {...props} />
        }
    }}  />
);


const mapStateToProps = state => (
    { 
        loggedIn: Boolean(state.session.id),
        sessionType: state.ui.modal,
    }
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
export const SessionRoute = withRouter(connect(mapStateToProps)(Session));