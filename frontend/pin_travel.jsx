import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';


// For testing only
import { logout, login, signup } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    const preloadedState = {};
    
    if (window.currentUser) {
        const preloadedState = {            
            entities: {
                users: { [window.currentUser.username]: window.currentUser }
            },
            session: { id: window.currentUser.username },
        };        
        // delete window.currentUser;    
    }
    store = configureStore(preloadedState);

    // for testing only
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login;
    window.signup = signup;
    window.logout = logout;

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});
