import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check user authentication status (e.g., check for a token in local storage)
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div className="landing-page">
      <header className="header">
        <div className="nav-links">
          {!isAuthenticated && (
            <>
              <Link to="/register" className="nav-link">Sign Up</Link>
              <Link to="/login" className="nav-link">Login</Link>
            </>
          )}
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h1>Protect Your Devices</h1>
          <p>Advanced tracking and security features to keep your devices safe.</p>
          <Link to="/register" className="cta-button">Start Now</Link>
        </div>
      </section>

      <section className="features-section">
        <h2>Our Key Features</h2>
        <div className="features">
          <div className="feature">
            <h3>Live Tracking</h3>
            <p>Monitor your devices in real-time with precise location updates.</p>
          </div>
          <div className="feature">
            <h3>Remote Actions</h3>
            <p>Remotely lock or erase your device to protect your data.</p>
          </div>
          <div className="feature">
            <h3>Geofencing Alerts</h3>
            <p>Receive notifications when your device enters or leaves predefined zones.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Phone Tracker App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
