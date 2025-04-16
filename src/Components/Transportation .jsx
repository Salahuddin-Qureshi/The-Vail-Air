import React from "react";
import "../styles/Transportation.css";
import Footer from "./Footer";
import Header from "./Header";

const transportationOptions = [
  {
    name: "Economy Bus",
    price: "$50",
    description: "Affordable and comfortable transport for budget travelers.",
    image: "https://images.unsplash.com/photo-1606741814246-1cdcb53cf928?auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Private Car",
    price: "$120",
    description: "Enjoy a private ride with full comfort and convenience.",
    image: "https://images.unsplash.com/photo-1593477992791-b44060aaf15b?auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Luxury SUV",
    price: "$250",
    description: "Travel in style with our luxury SUVs equipped with premium features.",
    image: "https://images.unsplash.com/photo-1606091897101-cb0388b5390d?auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "VIP Limousine",
    price: "$500",
    description: "Experience the ultimate luxury with our VIP limousine service.",
    image: "https://images.unsplash.com/photo-1518703186947-22507bdb467b?auto=format&fit=crop&w=800&q=60",
  },
];

const Transportation = () => {
  return (
    <>
    <Header/>   
    <div className="transport-container">
      <h1 className="transport-title">Choose Your Mode of Transportation</h1>
      <p className="transport-subtitle">We offer a variety of transportation options to suit your preferences.</p>

      <div className="transport-options">
        {transportationOptions.map((option, index) => (
          <div className="transport-card" key={index}>
            <img src={option.image} alt={option.name} />
            <h3>{option.name}</h3>
            <p><strong>Price:</strong> {option.price}</p>
            <p>{option.description}</p>
            <button>Book Now</button>
          </div>
        ))}
      </div>

      <div className="cta-customize">
        <h2>Need Something Special?</h2>
        <a href="/customize-transportation" className="custom-btn">Customize Your Transport</a>
      </div>
    </div>
        <Footer/>
    </>
  );
};

export default Transportation;
