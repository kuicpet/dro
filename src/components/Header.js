import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../images/logo-768x138.png';

export default function Header() {
    
    const history = useHistory();
    const isLoggedIn = () => {
        return localStorage.getItem("token") !== null;
    }
    const signOut = () => {
        localStorage.removeItem("token");
        return history.push("/signin");
    }
    return (
        <nav className="header">
            <Link to="/">
                <img src={logo} alt="DRO Health" />
            </Link>
            <div className="navlinks">
                {isLoggedIn() ? (
                    <>
                    <Link to="/dashboard" className="signout mx-5">
                        My Dashboard
                    </Link>
                    <Link
                        onClick={()=> signOut()}
                        className="signout"
                    >
                        Sign out
                    </Link>
                    </>
                ): (
                    <>
                    <Link to="/signin" className="signin">Log in</Link>
                    <Link to="/signup" className="signup">Register</Link>
                    </> 
                )}
            </div>
        </nav>
    )
}
