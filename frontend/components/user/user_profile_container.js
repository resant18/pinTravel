import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser } from '../../actions/user_actions';
import { selectUserBoards, selectUserPins } from '../../reducers/selector';
import { showModal, hideModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {     
  debugger 
  const currentUser = state.entities.users[state.session.id];  
  const username = ownProps.match.params.username;
  const user = state.entities.users[username];  
  const permitted = currentUser ? (username === currentUser.username) : false;
  const boards = selectUserBoards(state.entities, user);
  // const boards = Object.values(state.entities.boards).filter(
  //   board => board.user_id === user.id
  // );
  const pins = Object.values(state.entities.pins);  
  const pinIds = user ? user["pin_ids"] : [];  
  
  return {
    currentUser,
    username,
    user,
    permitted,
    boards,
    pinIds,
    // userPins,
    pins
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: username => dispatch(fetchUser(username)), 
    showModal: modal => dispatch(showModal(modal)),
    hideModal: () => dispatch(hideModal),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
