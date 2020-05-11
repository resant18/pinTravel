import React from "react";
import { Redirect, Route, Link, NavLink } from "react-router-dom";

class NavBar extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         dropDownOpen: false,
      };

      this.showDropDown = this.showDropDown.bind(this);
      this.hideDropDown = this.hideDropDown.bind(this);
   }

   componentDidMount() {
      if (this.props.currentUser.username) {
         console.log("fetching pins from navbar component");

         this.props.fetchUser(this.props.currentUser.username);
      }
   }

   showDropDown(e) {
      e.preventDefault();

      this.setState({ dropDownOpen: true }, () => {
         document.addEventListener("mousedown", this.hideDropDown);
      });      
   }

   hideDropDown(e) {
      if (!this.node.contains(e.target)) {
         this.setState({ dropDownOpen: false }, () => {
            document.removeEventListener('mousedown', this.hideDropDown);
         })
      }
   }

   renderDropDown() {
      if (this.state.dropDownOpen) {
         return (
            <div id='navbar-menu-list' ref={(node) => (this.node = node)} onClick={this.showDropDown} className='drop-down'>
               <div className='frame'>
                  <div className='list' role='list'>
                     <div className='item' onClick={this.props.logout}>
                        Logout
                     </div>
                  </div>
               </div>
            </div>
         );
      }
   }

   render() {
      if (this.props.loggedIn) {
         return (
            <header className='header'>
               <nav className='navbar'>
                  <div className='navbar-content'>
                     <div className='left-nav'>
                        <a className='logo' aria-current='page' href='#/'>
                           <img className='logo' src={window.logo} alt='PinTravel' />
                        </a>
                        <div>
                           <img className='logo-title' src={window.logoTitle} alt='PinTravel' />
                        </div>
                     </div>
                     <div className='right-nav'>
                        <a aria-current='page' href='#/'>
                           Home
                        </a>
                        <Link to={`/${this.props.currentUser.username}`} className='username'>
                           <img
                              className='user-img'
                              src={
                                 window.userProfile[this.props.currentUser.username] ||
                                 "https://s.pinimg.com/images/user/default_280.png"
                              }
                           />
                           <span className='fname'>{this.props.currentUser.first_name}</span>
                        </Link>
                        
                        <button className='menu' type='button' aria-label='Menu options' onClick={this.showDropDown}>
                           <svg
                              className='gUZ B9u U9O kVc'
                              height='12'
                              width='12'
                              viewBox='0 0 24 24'
                              aria-hidden='true'
                              aria-label=''
                              role='img'
                           >
                              <path d='M12 19.5L.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z'></path>
                           </svg>
                        </button>
                        {this.renderDropDown()}                        
                     </div>
                  </div>
               </nav>
            </header>
         );
      } else {
         return (
            <header className='header'>
               <nav className='navbar'>
                  <div className='navbar-content'>
                     <div className='left-nav'>
                        <a className='active' aria-current='page' href='#/'>
                           <img className='logo' src={window.logo} alt='Pintravel' />
                        </a>
                        <div>
                           <img className='logo-title' src={window.logoTitle} alt='PinTravel' />
                        </div>
                     </div>
                     <div className='right-nav-session'>
                        <Link to='/' className='button form-primary'>
                           Sign Up
                        </Link>
                        <Link to='/' className='button form-secondary'>
                           Login
                        </Link>
                     </div>
                  </div>
               </nav>
            </header>
         );
      }
   }
}

export default NavBar;
