import React from "react";
import "../styles/DiscountOffer.css";

const DiscountOffer = () => {
  return (
    <div className="discount-container">
      <div className="discount-box">
        <h2 className="discount-heading">🌍 Limited Time Travel Offer!</h2>
        <p className="discount-text">
          Book your dream vacation now and get up to <span className="highlight">40% OFF</span> on select destinations.
          Explore France, Japan, USA and many more!
        </p>
        <button className="discount-btn">Book Now</button>
      </div>
    </div>
  );
};

export default DiscountOffer;
