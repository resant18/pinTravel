import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PinIndex from './pin_index';
import { fetchPinsFeed, clearPins } from '../../actions/pin_actions';
import { showModal } from '../../actions/modal_actions';
import { selectUserPinFeeds } from '../../reducers/selector';


const mapStateToProps = (state, ownProps) => {
  const loggedIn = state.session.id;
  const currentUser = state.entities.users[state.session.id];
  const pins = Object.values(state.entities.pins);  

  return {
    loggedIn,
    fetchType: 'feed',
    currentUser,
    pins
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPins: page => dispatch(fetchPinsFeed(page)),
  clearPins: () => dispatch(clearPins()),
  showModal: modal => dispatch(showModal(modal))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PinIndex)
);
