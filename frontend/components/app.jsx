import React from 'react';

import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import Modal from './modal/modal';
import NavBarContainer from './navbar/navbar_container';
import BoardIndexContainer from './board/board_index_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Dashboard from './modal/dashboard';

const App = () => (
    <div>                  
        <Modal />                                 
        <Switch>                        
            <Route path="/" component={NavBarContainer} />
        </Switch>           
        <Switch>
            {/* <Route exact path="/:id/boards" component={BoardIndexContainer} /> */}
            <ProtectedRoute path="/users/:id" component={BoardIndexContainer} />
        </Switch>
    </div>
);

export default App;
