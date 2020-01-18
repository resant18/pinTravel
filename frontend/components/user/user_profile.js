import React from "react";
import BoardIndex from "../board/board_index";
import PinIndexUserContainer from "../pin/pin_index_user_container";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);    
    
    this.state = {
      tabItem: "boards",
      dropDown: false
    };
    
    this.showDropDown = this.showDropDown.bind(this);
    this.hideDropDown = this.hideDropDown.bind(this);
    this.showModal = this.showModal.bind(this);
    this.showUserBoards = this.showUserBoards.bind(this);
    this.showUserPins = this.showUserPins.bind(this);
  }

  componentDidMount() {
    if (!this.props.user) {            
      this.props.fetchUser(this.props.username);
    }    
  }

  componentDidUpdate(prevProps) {
    if (!this.props.user) {
      this.props.fetchUser(this.props.username);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.hideDropDown);
  }

  showDropDown(e) {    
    this.setState({ dropDown: true });
    document.addEventListener('mousedown', this.hideDropDown);
  }

  hideDropDown(e) {    
    if (!this.node.contains(e.target)) {
      this.setState({ dropDown: false });
      document.removeEventListener('mousedown', this.hideDropDown);
    }
  }

  renderDropDown() {    
    if (this.state.dropDown) {
      return (
         <div id="drop-down" 
              ref={ node => this.node = node }
              className="profile-add-board-pin drop-down">
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
      );
    }
  }

  showModal(modal) {    
    return e => {
      this.props.showModal(modal);    
      this.hideDropdown();
    }
  }

  displayProfileToolbar() {
    if (this.props.user === this.props.currentUser) {
      return (
         <nav className="profile-toolbar">
            <div>
               <button
                  className="add-board-pin"
                  onClick={this.showDropDown}
                  aria-label="Add board or pin"
                  type="button"
               >
                  <svg height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img" >
                     <path d="M22 10h-8V2a2 2 0 0 0-4 0v8H2a2 2 0 0 0 0 4h8v8a2 2 0 0 0 4 0v-8h8a2 2 0 0 0 0-4"></path>
                  </svg>
               </button>
               { this.renderDropDown() }
            </div>
         </nav>
      );
    }
  }

  showUserBoards() {
    this.setState({ tabItem: "boards" });
    document.getElementById("board-tab").classList.add("active");
    document.getElementById("pin-tab").classList.remove("active");
  }

  showUserPins() {    
    this.setState({ tabItem: "pins" });
    document.getElementById("board-tab").classList.remove("active");
    document.getElementById("pin-tab").classList.add("active");
  }

  displayTabList() {
    return (      
      <nav>
        <button 
          id="board-tab"
          onClick={this.showUserBoards.bind(this)}
          className="board-tab active" 
        >
          Boards
        </button>
        <button
          id = "pin-tab"
          onClick={this.showUserPins.bind(this)}
          className="pin-tab"
        >
          Pins
        </button>
      </nav>
    )
  }

  renderChildComponent(user, boards, userPins, permitted) {
    if (this.state.tabItem === 'boards') 
      return (
        <BoardIndex
          user={user}
          boards={boards}
          pins={userPins}
          permitted={permitted}
          showModal={this.props.showModal}
        />
      );
    else 
      return (
        <PinIndexUserContainer
          user={user}
          boards={boards}
          pins={userPins}
          permitted={permitted}
          showModal={this.props.showModal}
        />
      );
  }

  render() {
    const { user, permitted, boards, userPins, pins, pinIds} = this.props;    

    if (!user) return null;
    let userProfileName =
      user.first_name + " " + (user.last_name === null ? "" : user.last_name);        

    return (
      <div>
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
                  <p className="boards-count-number">{userPins.length}</p>
                </div>
              </div>
            </div>
            {this.displayProfileToolbar()}
          </div>
        </section>
        <section className="tab-list">{this.displayTabList()}</section>
        <section className={this.state.tabItem}>
          {
            this.renderChildComponent(user, boards, userPins, permitted)             
          }
        </section>
      </div>
    );
  }
}

export default UserProfile;
