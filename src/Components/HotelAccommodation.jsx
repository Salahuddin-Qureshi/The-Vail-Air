import React from 'react';
import '../styles/HotelAccommodation.css';
import Header from './Header';
import Footer from './Footer';

const countries = [
  "Turkey", "UAE", "Saudi Arabia", "Malaysia", "Thailand", "USA", "UK", "France",
  "Switzerland", "Italy", "Germany", "Indonesia", "Maldives", "Azerbaijan", "Qatar"
];

const hotelChains = [
  "Marriott International", "Hilton Hotels & Resorts", "AccorHotels", "IHG (InterContinental)", 
  "Radisson Blu", "Shangri-La Hotels", "Hyatt", "Four Seasons", "Taj Hotels", "Holiday Inn"
];

const offers = [
  "✨ Book 5 nights in Dubai, get 1 night free!",
  "🕌 Umrah travel + hotel starting from $399 per person.",
  "🛎️ Free breakfast & late checkout in Makkah and Madinah hotels.",
  "🏖️ 25% off beach resorts in Thailand and Maldives.",
  "🌆 Save up to 30% on European city hotels this spring.",
  "🌄 Family packages in Turkey with guided tours & hotels included.",
];

const HotelAccommodation = () => {
  return (
      <>
    <Header/>
    <div className="hotel-container">
      <h1>🌍 Hotel Accommodation</h1>
      <p className="subtitle">We help you find the perfect stay in the most visited countries worldwide.</p>

      <section className="top-destinations">
        <h2>📌 Top Countries to Book Hotels</h2>
        <div className="destination-grid">
          {countries.map((country, index) => (
            <div key={index} className="country-card">
              <img src={`https://source.unsplash.com/400x250/?${country},hotel`} alt={country} />
              <h3>{country}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="hotel-partners">
        <h2>🏨 Trusted Hotel Chains</h2>
        <div className="partner-grid">
          {hotelChains.map((hotel, idx) => (
            <div key={idx} className="partner-card">
              {hotel}
            </div>
          ))}
        </div>
      </section>

      <section className="offers">
        <h2>🔥 Exclusive Offers</h2>
        <ul className="offer-list">
          {offers.map((offer, i) => (
            <li key={i}>{offer}</li>
          ))}
        </ul>
      </section>

      <section className="cta-book">
        <h2>Ready to Book Your Stay?</h2>
        <p>Our experts will help you get the best hotel deals worldwide. Contact us now!</p>
        <a href="/contact" className="book-btn">Contact Us</a>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default HotelAccommodation;
