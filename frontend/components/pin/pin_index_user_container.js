import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { clearPins, fetchUserPins } from '../../actions/pin_actions';
import { showModal } from '../../actions/modal_actions';
import PinIndex from './pin_index';

// User's all Pins collection
const mapStateToProps = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id] || {};
  const user = ownProps.user;
  const username = user.username;
  const boards = ownProps.boards;
  const pins = Object.values(state.entities.pins);

  return {
    fetchType: 'user',
    currentUser,
    user,
    username,
    boards,
    pins
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPins: (username, page) => dispatch(fetchUserPins(username, page)),
  clearPins: () => dispatch(clearPins()),
  showModal: modal => dispatch(showModal(modal))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PinIndex)
);
