import React from 'react';
import '../styles/Flights.css';
import Footer from './Footer';
import Header from './Header';

const Flights = () => {
  const airlines = [
    { name: 'Emirates', logo: '🛫', offer: 'Save up to 20% on round-trip tickets' },
    { name: 'Qatar Airways', logo: '✈️', offer: 'Free meal and seat upgrade on select routes' },
    { name: 'Turkish Airlines', logo: '🛬', offer: 'Winter discount: up to 30% off' },
    { name: 'Etihad Airways', logo: '🌍', offer: 'Fly to Europe from $499' },
    { name: 'PIA', logo: '🇵🇰', offer: 'Exclusive Umrah Packages with flight deals' },
  ];

  return (
    <>
    <Header/>
    <div className="flights-page">
      <h1 className="flights-title">Book Your Flights With Confidence ✈️</h1>
      <p className="flights-intro">We provide the best flight deals, instant bookings, and exclusive offers from top airlines around the globe.</p>

      <section className="airlines-section">
        <h2>Partner Airlines</h2>
        <div className="airlines-list">
          {airlines.map((airline, index) => (
            <div className="airline-card" key={index}>
              <div className="airline-logo">{airline.logo}</div>
              <h3>{airline.name}</h3>
              <p>{airline.offer}</p>
              <button className="book-btn">Book Now</button>
            </div>
          ))}
        </div>
      </section>

      <section className="why-us">
        <h2>Why Book with The Vail Air?</h2>
        <ul>
          <li>✔️ Affordable one-way and round-trip tickets</li>
          <li>✔️ Real-time ticket availability</li>
          <li>✔️ 24/7 customer support</li>
          <li>✔️ Secure online payments</li>
          <li>✔️ Travel insurance options available</li>
        </ul>
      </section>

      <section className="cta-section">
        <h2>Ready to Fly?</h2>
        <p>Start your travel journey today. Let us handle your flights, comfort, and convenience.</p>
        <button className="cta-btn">Search Flights</button>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default Flights;
