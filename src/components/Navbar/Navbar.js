import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
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
                    <Link to="/login">Login</Link>
                </li>
                <li className="navbar-item">
                    <Link to ="/signup">Signup</Link>
                </li>
                
            </ul>
        </nav>
    )
}

export default Navbar
