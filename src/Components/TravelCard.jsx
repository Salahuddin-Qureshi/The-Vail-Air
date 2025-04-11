// TravelCard.jsx
import React from "react";
import "../styles/TravelCard.css";

const TravelCard = ({ destination, duration, price, accommodation, transport, image, showBadge = true }) => {
  return (
    <div className="travel-card">
      {showBadge && <div className="travel-badge">Exclusive Deal</div>}
      <img src={image} alt={destination} className="travel-image" />
      <div className="travel-details">
        <h3>{destination}</h3>
        <p>{duration}</p>
        <p>{price}</p>
        <div className="travel-info">
          <span>🏨 {accommodation}</span>
          <span>✈️ {transport}</span>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
