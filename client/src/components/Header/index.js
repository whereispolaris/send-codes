import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg justify-content-between">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item" className="linkstr">
                        <Link className="nav-link" to="/">Send Codes</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item" className="linkstr">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item" className="linkstr">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item" className="linkstr">
                        <Link className="nav-link" to="/contribute">Contribute</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;