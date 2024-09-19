import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { fetchToken } from '../../Auth';
import { useNavigate } from "react-router";

function Navbar() {

    //signout
    const navigate = useNavigate();
    const signOut = () => {
        localStorage.removeItem("temitope");
        navigate("/");
    };



    const isAuthenticated = fetchToken(); // Check if the user is authenticated
    return (
        <nav className='navbar'>
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to ="/">Home</Link>
                </li>
                
                <li className="navbar-item">
                    <Link to ="/dashboard">Dashboard</Link>
                </li>
                <li className="navbar-item">
                    <Link to ="/aboutus">About Us</Link>
                </li>
                {isAuthenticated ? (
                    <li className="navbar-item">
                        <button className='text-white' onClick={signOut}>Logout</button> {/* Assuming you have a logout route */}
                    </li>
                ) : (
                    <>
                        <li className="navbar-item">
                            <Link to="/login">Login</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/signup">Signup</Link>
                        </li>
                    </>
                )}
                
            </ul>
        </nav>
    )
}

export default Navbar
