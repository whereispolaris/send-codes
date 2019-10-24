import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item" className="linkstr">
                        <a className="nav-link" href="#">Send Codes</a>
                    </li>
                </ul>
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