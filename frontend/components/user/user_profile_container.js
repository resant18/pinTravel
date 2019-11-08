import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser } from '../../actions/user_action';

const mapStateToProps = (state, ownProps) => {  
    return {
        
        currentUsername: ownProps.match.params.username 
            || state.entities.users[state.session.id].username,        
    }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: username => dispatch(fetchUser(username)),    
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
