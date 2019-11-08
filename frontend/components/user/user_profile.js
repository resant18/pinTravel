import React from "react";
import { Link, withRouter } from "react-router-dom";
import BoardIndexContainer from "../board/board_index_container";
// import PinIndexContainer from "../pin/pin_index_container";

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabItem: "board"
        };
    }

  componentDidMount() {        
    this.props.fetchUser(this.props.currentUsername);    
    console.log(this.props);
  }


//   getDerivedStateFromProps(props, state) {
//     // debugger
//     if (this.props.userId != nextProps.match.params.id) {
//       this.props.requestUser(nextProps.match.params.id);
//       this.props.requestAllBoards();
//       this.props.requestUserPins(this.props.userId);
//     }
//   }

  handleClick(type) {
    return e => this.setState({ tabItem: [type] })      
  }

  render() {
    // debugger
    // if (this.props.loading) {
    //   return <div></div>;
    // }
    const { currentUsername } = this.props;
      
    let currentComponent;
    // debugger
    // if (this.props.path === `/users/${this.props.userId}`) {
    //   currentComponent = <BoardIndexContainer userId={this.props.userId} />;
    // } else {
    //   currentComponent = <div></div>;
    // }

    return (
      <div className="user-profile-page">
        <div className="tilted-pins"></div>
        <div className="user-profile-container">
          <div className="user-avatar">
            <div className="-pos">
              <div className="-shadow-wrapper">
                <img
                  alt={currentUsername}
                  className="user-profile-image"
                  src={window.userProfile}
                />
              </div>
            </div>
          </div>
          <div className="user-profile-detail">
            <div className="user-profile-name">
              <h5>{currentUsername}</h5>
            </div>
            <div className="user-boards-pins-count">
              <div className="boards-count">
                <p>Boards</p>
                <p>5</p>
              </div>
              <div className="pins-count">
                <p>Pins</p>
                <p>25</p>
              </div>
            </div>
          </div>
          <div className="add-board">
            <button aria-label="Add Board" type="button">
              <div>
                <div className="add-board-svg">
                  <svg height="16" width="16" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img" >
                    <path d="M22 10h-8V2a2 2 0 0 0-4 0v8H2a2 2 0 0 0 0 4h8v8a2 2 0 0 0 4 0v-8h8a2 2 0 0 0 0-4"></path>
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
