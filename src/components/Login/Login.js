// src/components/Login/Login.js
import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom'
export default function Login() {
    return (
        <div className="login-wrapper">
            <div className="login-card">
                <h1>Welcome Back!</h1>
                <p className="login-subtitle">Please log in to your account</p>
                <form>
                    <label>
                        <p>Username</p>
                        <input type="text" placeholder="Enter your username" />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" placeholder="Enter your password" />
                    </label>
                    <div className="submit-container">
                        <button type="submit" className="submit-button">Log In</button>
                    </div>
                </form>
                <div className="login-footer">
                    <p>Don't have an account?  <Link to="/signup">Signup</Link></p>
                </div>
            </div>
        </div>
    );
}
