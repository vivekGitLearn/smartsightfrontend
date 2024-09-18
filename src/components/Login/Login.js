import React, { useState } from 'react';
import './Login.css';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Function to handle form submission
    const handleLogin = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        console.log("Username:", username);
        console.log("Password:", password);
    };

    return (
        <div className="login-wrapper">
            <div className="login-card">
                <h1>Login Form</h1>
                <form onSubmit={handleLogin}>
                    <label>
                        <p>Username</p>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    <label>
                        <p>Password</p>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <div className="submit-container">
                        <button type="submit" className="submit-button">
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
