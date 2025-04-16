import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
<Link to="/" className="header-logo" >
  <span className="logo-icon">✈️</span>
  <span className="logo-text">The Vail Air</span>
</Link>
      <nav className="header-nav">
        <div className="nav-item">
          <Link to="#" className="nav-link">Destinations</Link>
          <div className="dropdown">
            <Link to="/flight-booking"><strong>Flight Booking</strong><br /><span>Book affordable flights</span></Link>
            <Link to="/popular-destinations"><strong>Popular Destinations</strong><br /><span>Top-rated travel spots</span></Link>
            <Link to="/vacation-packages"><strong>Vacation Packages</strong><br /><span>Plan your dream holiday</span></Link>
          </div>
        </div>

        <div className="nav-item">
          <Link to="#" className="nav-link">Activities</Link>
          <div className="dropdown">
            <Link to="/adventure"><strong>Adventure</strong><br /><span>Thrilling outdoor fun</span></Link>
            <Link to="/city-tours"><strong>City Tours</strong><br /><span>Explore major cities</span></Link>
            <Link to="/cultural"><strong>Cultural</strong><br /><span>Local traditions & arts</span></Link>
          </div>
        </div>

        <div className="nav-item">
          <Link to="#" className="nav-link">Services</Link>
          <div className="dropdown">
            <Link to="/visa-processing"><strong>Visa Processing</strong><br /><span>Fast & reliable assistance</span></Link>
            <Link to="/flights"><strong>Flights</strong><br /><span>Best airfare deals</span></Link>
            <Link to="/hotel-accommodation"><strong>Hotel Accommodation</strong><br /><span>Comfortable stays worldwide</span></Link>
            <Link to="/customize-packages"><strong>Customize Packages</strong><br /><span>Tailored for your needs</span></Link>
            <Link to="/umrah-packages"><strong>Umrah Packages</strong><br /><span>Spiritual travel support</span></Link>
            <Link to="/transportations"><strong>Transportations</strong><br /><span>Local & airport pickups</span></Link>
            <Link to="/tours"><strong>Tours</strong><br /><span>Guided experiences</span></Link>
          </div>
        </div>
      </nav>

      <div className="header-actions">
        <Link to="/signup" className="signup-link">Sign up</Link>
        <Link to="/login" className="login-btn">Log in</Link>
      </div>
    </header>
  );
};

export default Header;
