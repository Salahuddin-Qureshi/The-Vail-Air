import React from 'react';
import '../styles/VisaProcessing.css';
import Footer from './Footer';
import Header from './Header';

const VisaProcessing = () => {
  return (
    <>
    <Header/>
    <div className="visa-container">
      <div className="visa-hero">
        <h1>Visa Processing Services</h1>
        <p>Your gateway to hassle-free international travel starts here!</p>
      </div>

      <section className="visa-intro">
        <h2>Why Choose Our Visa Services?</h2>
        <p>
          We provide fast, secure, and professional visa assistance for your travel needs. Whether you’re planning a vacation, pilgrimage, or business trip, our experts are here to make the visa process simple and stress-free.
        </p>
      </section>

      <section className="visa-countries">
        <h2>Popular Visa Categories</h2>
        <div className="visa-grid">
          <div className="visa-card">
            <h3>Tourist Visa</h3>
            <p>Explore the world with smooth approvals for top travel destinations.</p>
          </div>
          <div className="visa-card">
            <h3>Business Visa</h3>
            <p>Attend meetings, conferences, and grow your network abroad.</p>
          </div>
          <div className="visa-card">
            <h3>Umrah Visa</h3>
            <p>Specialized assistance for Umrah & Hajj travelers.</p>
          </div>
          <div className="visa-card">
            <h3>Student Visa</h3>
            <p>Let us help you start your educational journey overseas.</p>
          </div>
          <div className="visa-card">
            <h3>Family Visit Visa</h3>
            <p>Visit your loved ones with simple documentation support.</p>
          </div>
        </div>
      </section>

      <section className="visa-steps">
        <h2>How It Works</h2>
        <ol>
          <li><strong>Consultation:</strong> Speak with our expert to find your visa type.</li>
          <li><strong>Documentation:</strong> We’ll guide you on collecting & verifying documents.</li>
          <li><strong>Submission:</strong> We submit the application on your behalf.</li>
          <li><strong>Approval & Collection:</strong> Sit back and receive your visa without stress.</li>
        </ol>
      </section>

      <section className="visa-cta">
        <h2>Ready to Apply?</h2>
        <p>Contact our team or fill the application form to begin your visa journey today!</p>
        <a href="#" className="visa-btn">Get Started</a>
      </section>
    </div>
    <Footer/>
    </>

  );
};

export default VisaProcessing;
