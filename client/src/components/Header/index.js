import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import logo from './send-codes-logo.png';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg justify-content-between">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item linkstr">
                        <Link className="nav-link" to="/"><img className="main-logo" src={logo} alt="Send Codes Logo"/></Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item linkstr">
                        <Link className="nav-link" to="/testarticle">Test Article</Link>
                    </li>
                    <li className="nav-item linkstr">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item linkstr">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item linkstr">
                        <Link className="nav-link" to="/contribute">Contribute</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;