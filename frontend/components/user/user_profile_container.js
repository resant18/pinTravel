import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser } from '../../actions/user_actions';
import { selectUserBoards, selectUserPins } from '../../reducers/selector';
import { showModal, hideModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {       
  const currentUser = state.entities.users[state.session.id];  
  const username = ownProps.match.params.username;
  const user = state.entities.users[username];  
  const permitted = currentUser ? (username === currentUser.username) : false;
  const userBoards = selectUserBoards(state.entities, user, permitted);
  const userTotalPins = user ? user['pin_ids'].length : 0;
  
  return {
     currentUser,
     username,
     user,
     permitted,
     userBoards,
     userTotalPins
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
