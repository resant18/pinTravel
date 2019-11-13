import React from "react";
import BoardIndex from "../board/board_index";
// import PinIndexContainer from "../pin/pin_index_container";

class UserProfile extends React.Component {  
    constructor(props) {      
        super(props);
        this.state = {
            tabItem: 'board',   
            showDropDown: false,         
        };      
        
        this.displayProfileToolbar = this.displayProfileToolbar.bind(this);
        this.toggleDropDown = this.toggleDropDown.bind(this);        
        this.showModal = this.showModal.bind(this);
    }

  componentDidMount() {                       
    this.props.fetchUser(this.props.username);           
    
  }

  handleClick(type) {
    return e => this.setState({ tabItem: [type] })      
  }

  toggleDropDown(e) {
    e.preventDefault();

    document.getElementById("drop-down").classList.toggle("show");
  }

  showModal(modal) {
    return e => this.props.showModal(modal);
  }

  displayProfileToolbar() {    
    if (this.props.user === this.props.currentUser) {
      return (
        <nav className="profile-toolbar">
          <div onClick={this.toggleDropDown}>
            <svg
              className="gUZ B9u U9O kVc"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
              aria-label=""
              role="img"
            >
              <path d="M22 10h-8V2a2 2 0 0 0-4 0v8H2a2 2 0 0 0 0 4h8v8a2 2 0 0 0 4 0v-8h8a2 2 0 0 0 0-4"></path>
            </svg>
            <div id="drop-down" className="drop-down">
              <div className="frame">
                <div className="list" role="list">
                  <div
                    title="Create board"
                    className="create-board"
                    onClick={this.showModal("create-board")}
                  >
                    Create board
                  </div>
                  <div
                    title="Create pin"
                    className="create-pin"
                    onClick={this.showModal("create-pin")}
                  >
                    Create Pin
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      );
    }
  }

  render() {        
  //   // if (this.props.loading) {
  //   //   return <div></div>;
  //   // }
    
    let userProfileName;
    const { user, boards, pins} = this.props;    

    if (!user) return null;
    userProfileName = user.first_name + ' ' + (user.last_name === null ? '' : user.last_name);      
    return (
      <section className="user-profile-page">
        <div className="tilted-pins"></div>
        <div className="user-profile-container">
          <div className="user-avatar">
            <div className="-pos">
              <div className="-shadow-wrapper">
                <img
                  alt={userProfileName}
                  className="user-profile-image"
                  src={window.userProfile}
                />
              </div>
            </div>
          </div>
          <div className="user-profile-detail">
            <div className="user-profile-name">
              <h5>{userProfileName}</h5>
            </div>
            <div className="user-boards-pins-count">
              <div className="boards-count">
                <p className="boards-count-title">Boards</p>
                <p className="boards-count-number">{boards.length}</p>
              </div>
              <div className="pins-count">
                <p className="boards-count-title">Pins</p>
                <p className="boards-count-number">{pins.length}</p>
              </div>
            </div>
          </div>
          {this.displayProfileToolbar()}
        </div>
        <BoardIndex user={user} boards={boards} pins={pins} />
      </section>
    );
   }
}

export default UserProfile;
