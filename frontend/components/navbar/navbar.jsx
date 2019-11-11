import React from 'react';
import { Redirect, Route, Link, NavLink } from 'react-router-dom';
//import SearchBarContainer from '../search_bar/searchBarContainer';


const NavBar = (props) => {         
    if (props.loggedIn)
        return (
            <header>
                <nav className="navbar">
                    <div className="navbar-content">
                        <div className="left-nav">
                            <a className="active" aria-current="page" href="#/">
                                <img className="logo" src={window.logo} />                        
                            </a>                    
                            <a><span className="pin-travel">Pintravel</span></a>
                        </div>
                        <div className="right-nav">
                            <a aria-current="page" href="#/">Home</a>
                            <Link to={`/${props.currentUser.username}`}>
                                <img className="user-img" 
                                    src="https://s.pinimg.com/images/user/default_280.png" />                            
                                <span className="fname">{props.currentUser.first_name}</span>
                            </Link>
                            
                            <Link to="/" onClick={props.logout} >Log out</Link>
                        </div>
                    </div>
                </nav>
            </header>
        )
    else 
        return (
            <header>
                <nav className="navbar">
                    <div className="navbar-content">
                        <div className="left-nav">
                            <a className="active" aria-current="page" href="#/">
                                <img className="logo" src={window.logo} />
                            </a>
                            <a><span className="pin-travel">Pintravel</span></a>
                        </div>
                        <div className="right-nav">                               
                            <Link to='/' className='button prim'>
                                Sign Up
                            </Link>
                            <Link to='/' className='button sec'>
                                Login
                            </Link>                            
                        </div>
                    </div>
                </nav>
            </header>
        );
}

export default NavBar;