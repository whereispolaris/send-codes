import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import logo from './send-codes-logo.png';

const Header = (props) => {

    if (props.loggedIn) {
        return(
                    <div>
            <nav className="navbar navbar-expand-lg navbar-light bg justify-content-between">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item linkstr">
                        <Link className="nav-link" to="/"><img className="main-logo" src={logo} alt="Send Codes Logo"/></Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item linkstr">
                        <Link className="nav-link" to="/snippets">Snippets</Link>
                    </li>
                    <li className="nav-item linkstr">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item linkstr">
                        <Link className="nav-link" onClick={props.logOut}>Log Out</Link>
                    </li>
                </ul>
            </nav>
        </div>
        )
    } else {
            return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg justify-content-between">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item linkstr">
                        <Link className="nav-link" to="/"><img className="main-logo" src={logo} alt="Send Codes Logo"/></Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
    }


}

export default Header;