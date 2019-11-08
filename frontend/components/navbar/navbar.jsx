import React from 'react';
import { Redirect, Link, NavLink } from 'react-router-dom';
//import SearchBarContainer from '../search_bar/searchBarContainer';


const NavBar = (props) => {
    if (!props.loggedInUser) return null;
    return (
        <header>
            <nav className="navbar">
                <div className="navbar-content">
                    <div className="left-nav">
                        <a className="active" aria-current="page" href="#/">
                            <img className="logo" src={window.logo} />                        
                        </a>                    
                        <a><span className="pin-travel">PinTravel</span></a>
                    </div>
                    <div className="right-nav">
                        <a aria-current="page" href="#/">Home</a>
                        <Link to={`/${props.currentUser.username}`}>
                            <img className="user-img" src="https://s.pinimg.com/images/user/default_280.png" />                            
                            <span className="fname">{props.currentUser.first_name}</span>
                        </Link>
                        
                        <a className="logout-button" onClick={() => props.logout().then(props.showModal)} >Log out </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;