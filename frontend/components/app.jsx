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
import UserProfileContainer from './user/user_profile_container';
import PinBoardIndexContainer from './pin/pin_index_board_container';
import { AuthRoute, ProtectedRoute, SessionRoute } from '../util/route_util';
import Dashboard from './modal/dashboard';

const App = () => (
  <div>
    <Modal />
    <Switch>
      <SessionRoute exact path="/" />
      <Route path="/" component={NavBarContainer} />
    </Switch>
    <Switch>
      <Route exact path="/:username/boards/:boardId" component={PinBoardIndexContainer} />
      <Route exact path="/:username/pins" component={UserProfileContainer} />
      <Route exact path="/:username" component={UserProfileContainer} />
    </Switch>
    {/* <Switch>
            <Route path="/:username/:boardId" component={BoardItemShowContainer} />
            <Route path="/:username/pins" component={UserPinsShowContainer} />
        </Switch> */}
  </div>
);

export default App;
