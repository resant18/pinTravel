import React from "react";
import { Redirect, Route, Link, NavLink } from "react-router-dom";

class NavBar extends React.Component {
   constructor(props) {
      super(props);
   }

   componentDidMount() {
      if (this.props.currentUser.username) {         
         this.props.fetchUser(this.props.currentUser.username);
      }
   }

   render() {
      if (this.props.loggedIn) {
         return (
            <header>
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

                        <Link to='/' onClick={this.props.logout}>
                           Log out
                        </Link>
                     </div>
                  </div>
               </nav>
            </header>
         );
      } else {
         return (
            <header>
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
