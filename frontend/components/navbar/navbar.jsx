import React from 'react';
import { Redirect, Link, NavLink } from 'react-router-dom';
//import SearchBarContainer from '../search_bar/searchBarContainer';


const NavBar = (props) => {        
    if (!props.loggedInUser) return null;
    return (
        <header>
            <nav className="navbar">
                <div aria-label="Home" className="logo-wrapper">
                    <NavLink to="/">
                        <div className="logo">
                            <img className="logo" src="/logo.png" />
                        </div>
                    </NavLink>                        
                </div>
                <div className="search">
                    {"Search Container"}
                </div>
                <div>
                    Home | Following | ProfileImage | {props.currentUsername.first_name} | Menu | 
                </div>
                <div>
                    <a className="logout-button" onClick={ () => props.logout().then(props.showModal) }>Log out</a>
                </div>                    
            </nav>
        </header>
    );    
}

export default NavBar;
