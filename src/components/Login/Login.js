import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
// import { fetchToken, setToken } from "./Auth";
import axios from "axios";
import { setToken } from '../../Auth';
import { fetchToken } from '../../Auth';

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Function to handle form submission
    const handleLogin = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        console.log("Username:", username);
        console.log("Password:", password);
        if ((username === "") & (password === "")) {
            return;
        } else {
            // make api call to our backend. we'll leave thisfor later
            // axios.post("https://www.brahama.work.gd/api/loginTest", {
            // axios.post("/api/loginTest", {
            //     username: username,
            //     password: password,
            // })
            axios.post("/api/loginTest", {
                username: username,
                password: password
            })
                .then((response) =>{
                    console.log("login");
                    console.log(response.data, "response.data.token");
                    if (response.data.token) {
                        setToken(response.data);
                        navigate("/dashboard");
                    }
                })
                .catch((error) => {
                    console.log(error, "error");
                });
        }

    };

    return (
        <div className="login-wrapper">
            <div className="login-card">
                <h1>Login Form</h1>
                {fetchToken() ? (
                    <p>you are logged in</p>
                ) : (
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
                        <div className="login-footer">
                            <p>Don't have an account?  <Link to="/signup">Signup</Link></p>
                        </div>

                    </form>
                )}
            </div>
        </div>
    );
}







// // src/components/Login/Login.js
// import React from 'react';
// import './Login.css';
// import { Link } from 'react-router-dom'
// export default function Login() {
//     return (
//         <div className="login-wrapper">
//             <div className="login-card">
//                 <h1>Welcome Back!</h1>
//                 <p className="login-subtitle">Please log in to your account</p>
//                 <form>
//                     <label>
//                         <p>Username</p>
//                         <input type="text" placeholder="Enter your username" />
//                     </label>
//                     <label>
//                         <p>Password</p>
//                         <input type="password" placeholder="Enter your password" />
//                     </label>
//                     <div className="submit-container">
//                         <button type="submit" className="submit-button">Log In</button>
//                     </div>
//                 </form>
//                 <div className="login-footer">
//                     <p>Don't have an account?  <Link to="/signup">Signup</Link></p>
//                 </div>
//             </div>
//         </div>
//     );
// }
