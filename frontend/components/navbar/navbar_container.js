import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id] || {},
    loggedIn: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (username) => dispatch(fetchUser(username)),
    logout: () => dispatch(logout()),     
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
