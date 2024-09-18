import React from 'react'
import './Signup.css';
import { Link } from 'react-router-dom';
function Signup() {
  return (
    <div className="signup-wrapper">
      <div className="signup-card">
        <h1>Create Account</h1>
        <p className="signup-subtitle">Sign up to get started!</p>
        <form>
          <label>
            <p>Username</p>
            <input type="text" placeholder="Enter your username" />
          </label>
          <label>
            <p>Email</p>
            <input type="email" placeholder="Enter your email" />
          </label>
          <label>
            <p>Contact</p>
            <input type="text" placeholder="Enter your contact number" />
          </label>
          <label>
            <p>Password</p>
            <input type="password" placeholder="Enter your password" />
          </label>
          <div className="submit-container">
            <button type="submit" className="submit-button">Sign Up</button>
          </div>
        </form>
        <div className="signup-footer">
          <p>Already have an account? <Link to="/login">Log In</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Signup