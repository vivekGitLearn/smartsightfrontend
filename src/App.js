import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Preferences from './components/Preferences/Preferences'; 
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Landingpage from './components/Landingpage/Landingpage';

function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/preferences" element={<Preferences />} />
      </Routes>
    </Router>
  );
}

export default App;
