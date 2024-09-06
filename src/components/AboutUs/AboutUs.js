// src/components/AboutUs/AboutUs.js
import React from 'react';
import './AboutUs.css';


function AboutUs() {
    return (
        <div className="about-us">
            <header className="about-header">
                <h1>About Us</h1>
                <p>Discover more about our journey, values, and mission.</p>
            </header>
            <section className="about-section">
                <h2>Our Mission</h2>
                <p>To innovate and deliver top-notch solutions that empower businesses and individuals alike. We strive to lead the industry with our commitment to excellence, integrity, and passion for technology.</p>
            </section>
            <section className="about-section">
                <h2>Our Vision</h2>
                <p>We envision a world where technology bridges the gap between ideas and reality, creating opportunities and driving progress in every sector of life.</p>
            </section>
            <section className="about-section">
                <h2>Our Values</h2>
                <ul className="values-list">
                    <li>Innovation: Continuously pushing the boundaries of what's possible.</li>
                    <li>Integrity: Building trust through transparency and accountability.</li>
                    <li>Customer-Centricity: Putting our customers at the heart of everything we do.</li>
                    <li>Teamwork: Leveraging diverse perspectives to achieve collective success.</li>
                </ul>
            </section>
        </div>
    );
}

export default AboutUs;
