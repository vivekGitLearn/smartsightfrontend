// src/components/Dashboard/Dashboard.js
import React, { useState } from 'react';
import './Dashboard.css';
import Card from '../Card/Card'; // Assuming you have a Card component
import { useLocation,Navigate } from 'react-router-dom';
// import { useNavigate } from "react-router";


function Dashboard() {
  
  
  
  //toggleSlider
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard">
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <button className="toggle-button" onClick={toggleSidebar}>
          <div style={{ width: '24px', height: '24px', display: 'block', fill: 'currentcolor' }}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{ pointerEvents: 'none', display: 'inherit', width: '100%', height: '100%' }}>
              <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
            </svg>
          </div>
        </button>
        <ul className="menu">
          <li>Dashboard</li>
          <li>Reports</li>
          <li>Settings</li>
          <li>Profile</li>
        </ul>
      </div>
      <div className="main-content">
        <h2>Dashboard</h2>
        <div className="card-grid">
          {/* Example cards */}
          <Card title="Card 1" content="This is the content of card 1." />
          <Card title="Card 2" content="This is the content of card 2." />
          <Card title="Card 3" content="This is the content of card 3." />
          <Card title="Card 4" content="This is the content of card 4." />
          <Card title="Card 5" content="This is the content of card 5." />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
