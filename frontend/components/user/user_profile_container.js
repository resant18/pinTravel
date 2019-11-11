import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser } from '../../actions/user_actions';
import { selectUserBoards } from '../../reducers/selector';

const mapStateToProps = (state, ownProps) => {    
  let username = ownProps.match.params.username;
  let user = state.entities.users[username];  
  const boards = selectUserBoards(state.entities, user);

  return {
    currentUser: state.entities.users[state.session.id],
    username,
    user,
    boards
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
