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
import BoardShowContainer from './board/board_show_container';
import PinIndexFeedContainer from './pin/pin_index_feed_container';
import { AuthRoute, ProtectedRoute, SessionRoute } from '../util/route_util';


const App = () => (
  <div>
    <Modal />
    <Switch>
      <SessionRoute exact path='/' />
      <Route path='/' component={NavBarContainer} />
    </Switch>
    <Switch>
      <Route exact path='/:username/boards/:boardId' component={BoardShowContainer} />
      <Route exact path='/feeds' component={PinIndexFeedContainer} />
      {/* <Route exact path='/:username/pins' component={UserProfileContainer} /> */}
      <Route exact path='/:username' component={UserProfileContainer} />
      <Route exact path='/' component={PinIndexFeedContainer} />
    </Switch>
  </div>
);

export default App;
