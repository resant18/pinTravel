import React from 'react';
import { Redirect, Route, Link, NavLink } from 'react-router-dom';
//import SearchBarContainer from '../search_bar/searchBarContainer';

class NavBar extends React.Component {  
    constructor(props) {
        super(props);
    } 

    componentDidMount() {        
        if (this.props.loggedIn) {
            this.props.fetchUser(this.props.currentUser.username);
        }
    }

    render() { 
        if (this.props.loggedIn)        
            return (
                <header>
                    <nav className="navbar">
                        <div className="navbar-content">
                            <div className="left-nav">
                                <a className="active" aria-current="page" href="#/">
                                    <img className="logo" src={window.logo} alt="PinTravel"/>                        
                                </a>                    
                                <a><span className="pin-travel">Pintravel</span></a>
                            </div>
                            <div className="right-nav">
                                <a aria-current="page" href="#/">Home</a>
                                <Link to={`/${this.props.currentUser.username}`}>
                                    <img className="user-img" 
                                        src="https://s.pinimg.com/images/user/default_280.png" />                            
                                    <span className="fname">{this.props.currentUser.first_name}</span>
                                </Link>
                                
                                <Link to="/" onClick={this.props.logout} >Log out</Link>
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
                                    <img className="logo" src={window.logo} alt="Pinterest"/>
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
}

export default NavBar;