import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Preferences from './components/Preferences/Preferences'; 
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Landingpage from './components/Landingpage/Landingpage';
import Signup from './components/Signup/Signup';
import AboutUs from './components/AboutUs/AboutUs';
import { RequireToken } from './Auth';
function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route
          path="/dashboard"
          element={
            <RequireToken>
              <Dashboard />
            </RequireToken>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
