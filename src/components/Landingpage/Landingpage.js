// src/components/LandingPage/LandingPage.js
import React from 'react';
import './LandingPage.css'; // Add styles for the landing page

function LandingPage() {
    return (
        <div className="landing-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to BrahamaAi</h1>
                    <p>Unlock the power of AI to transform your business and accelerate innovation.</p>
                    <button className="cta-button">Get Started</button>
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <h2>Why Choose BrahamaAi?</h2>
                <div className="feature-cards">
                    <div className="feature-card">
                        <h3>Advanced AI Models</h3>
                        <p>Access cutting-edge AI models tailored to your business needs.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Scalable Solutions</h3>
                        <p>Scale your AI capabilities seamlessly as your business grows.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Expert Support</h3>
                        <p>Leverage our team of experts to implement AI solutions effectively.</p>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="call-to-action">
                <h2>Ready to Transform Your Business?</h2>
                <p>Join thousands of companies using BrahamaAi to innovate and succeed.</p>
                <button className="cta-button">Contact Us</button>
            </section>
        </div>
    );
}

export default LandingPage;
