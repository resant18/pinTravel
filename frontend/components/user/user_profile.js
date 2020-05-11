import React from 'react';
import BoardIndexContainer from '../board/board_index_container';
import PinIndexUserContainer from '../pin/pin_index_user_container';

class UserProfile extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         tabItem: location.hash.includes('/pins') ? 'pins' : 'boards',
         dropDownOpen: false
      };

      this.showDropDown = this.showDropDown.bind(this);
      this.hideDropDown = this.hideDropDown.bind(this);
      this.showModal = this.showModal.bind(this);
      this.showUserBoards = this.showUserBoards.bind(this);
      this.showUserPins = this.showUserPins.bind(this);
   }

   // TODO: How to not fetch again if navigate back from board show
   componentDidMount() {      
      // if (this.props.currentUser.username !== this.props.username) {        
        this.props.fetchUser(this.props.username);
      // }
   }

   componentWillUnmount() {
      document.removeEventListener('mousedown', this.hideDropDown);
   }

   showDropDown(e) {
      e.preventDefault();

      this.setState({ dropDownOpen: true }, () => {
         document.addEventListener("mousedown", this.hideDropDown);
      });      
   }

   hideDropDown(e) {      
      // if the target is an element (a children) that the menu contains.
      if (!this.node.contains(e.target)) {         
         this.setState({ dropDownOpen: false }, () => {
            document.removeEventListener('mousedown', this.hideDropDown);
         });
      }      
   }

   renderDropDown() {
      if (this.state.dropDownOpen) {
         return (
            <div id='profile-menu-list' ref={node => (this.node = node)} className='profile-add-board-pin drop-down'>
               <div className='frame'>
                  <div className='list' role='list'>
                     <div
                        title='Create board'
                        className='create-board item'
                        onClick={this.showModal({ name: 'create-board' })}
                     >
                        Create board
                     </div>
                     <div title='Create pin' className='create-pin item'>
                        <a href='#/pin-builder'>Create Pin</a>
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
         this.hideDropDown(e);
      };
   }

   displayProfileToolbar() {
      if (this.props.permitted) {
         return (
            <nav className='profile-toolbar'>
               <div>
                  <button
                     className='add-board-pin'
                     onClick={this.showDropDown}
                     aria-label='Add board or pin'
                     type='button'
                  >
                     <svg height='24' width='24' viewBox='0 0 24 24' aria-hidden='true' aria-label='' role='img'>
                        <path d='M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M3 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm18 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z'></path>
                     </svg>
                  </button>
                  {this.renderDropDown()}
               </div>
            </nav>
         );
      }
   }

   showUserBoards() {
      this.setState({ tabItem: 'boards' });
   }

   showUserPins() {
      this.setState({ tabItem: 'pins' });
   }

   displayTabList() {
      return (
         <nav>
            <button
               id='board-tab'
               onClick={this.showUserBoards.bind(this)}
               className={`board-tab ${this.state.tabItem === 'boards' ? 'active' : ''}`}
            >
               Boards
            </button>
            <button
               id='pin-tab'
               onClick={this.showUserPins.bind(this)}
               className={`pin-tab ${this.state.tabItem === 'pins' ? 'active' : ''}`}
            >
               Pins
            </button>
         </nav>
      );
   }

   renderChildComponent(user, userBoards, permitted) {
      if (this.state.tabItem === 'boards')
         return (
            <BoardIndexContainer
               user={user}
               boards={userBoards}
               permitted={permitted}
               showModal={this.props.showModal}
            />
         );
      else
         return (
            <PinIndexUserContainer
               user={user}
               boards={userBoards}               
               permitted={permitted}
               showModal={this.props.showModal}
            />
         );
   }

   render() {
      const { user, permitted, userBoards, userTotalPins } = this.props;

      if (!user) return null;
      let userProfileName = user.first_name + ' ' + (user.last_name === null ? '' : user.last_name);

      return (
         <div>
            <section className='user-profile-header'>
               <div className='tilted-pins'></div>
               <div className='user-profile-detail-container'>
                  <div className='user-profile-avatar'>
                     <div className='-pos'>
                        <div className='-shadow-wrapper'>
                           <img
                              alt={userProfileName}
                              className='user-profile-image'
                              src={
                                 window.userProfile[user.username] || "https://s.pinimg.com/images/user/default_280.png"
                              }
                           />
                        </div>
                     </div>
                  </div>
                  <div className='user-profile-detail'>
                     <div className='user-profile-name'>
                        <h5>{userProfileName}</h5>
                     </div>
                     <div className='user-boards-pins-count'>
                        <div className='boards-count'>
                           <p className='boards-count-title'>Boards</p>
                           <p className='boards-count-number'>{userBoards.length}</p>
                        </div>
                        <div className='pins-count'>
                           <p className='boards-count-title'>Pins</p>
                           <p className='boards-count-number'>{userTotalPins}</p>
                        </div>
                     </div>
                  </div>
                  {this.displayProfileToolbar()}
               </div>
            </section>
            <section className='tab-list'>{this.displayTabList()}</section>
            <section className='user-profile-content'>
               {this.renderChildComponent(user, userBoards, permitted)}
            </section>
         </div>
      );
   }
}

export default UserProfile;
