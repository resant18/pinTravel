import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser } from '../../actions/user_actions';
import { selectUserBoards, selectUserPins } from '../../reducers/selector';

const mapStateToProps = (state, ownProps) => { 
    
  
  const username = ownProps.match.params.username;
  const user = state.entities.users[username];  
  const boards = selectUserBoards(state.entities, user);

  const pins = Object.values(state.entities.pins);
  
  const pinIds = user ? user["pin_ids"] : [];  
  // const userPins = selectUserPins(state.entities, pinIds); 

  
  
  return {
    currentUser: state.entities.users[state.session.id],
    username,
    user,
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
