import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo-768x138.png';

export default function Header() {

    return (
        <nav className="header">
            <Link to="/">
                <img src={logo} alt="DRO Health" />
            </Link>
            <div className="navlinks">
                <Link to="/signin" className="signin">Login</Link>
                <Link to="/signup" className="signup">Register</Link>
            </div>
        </nav>
    )
}
