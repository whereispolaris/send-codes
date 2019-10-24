import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            {/* previously nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between" */}
            <nav className="navbar navbar-expand-lg navbar-light bg justify-content-between">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item" className="linkstr">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                </ul>
                <h1 className="display-4 text-center">SEND CODES</h1>
                <p className="lead text-center">Find boilerplate for your project.</p>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item" className="linkstr">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item" className="linkstr">
                        <a className="nav-link" href="#">Login</a>
                    </li>
                    <li className="nav-item" className="linkstr">
                        <a className="nav-link" href="#">Contribute</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;