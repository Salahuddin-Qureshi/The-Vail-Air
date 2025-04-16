import React from "react";
import "../styles/UmrahPackages.css";
import Header from "./Header";
import Footer from "./Footer";

const packages = [
  {
    title: "Economy Umrah Package",
    price: "$799",
    duration: "7 Days / 6 Nights",
    hotel: "3-Star Hotel (Makkah & Madinah)",
    flights: "Round-trip Airfare",
    transport: "Shared Transport",
    image: "https://images.unsplash.com/photo-1584984037632-38c2a6fb06cd?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Standard Umrah Package",
    price: "$1199",
    duration: "10 Days / 9 Nights",
    hotel: "4-Star Hotel (Close to Haram)",
    flights: "Round-trip Airfare",
    transport: "Private A/C Transport",
    image: "https://images.unsplash.com/photo-1598683719343-c99ac8ecb8f6?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "VIP Umrah Package",
    price: "$1999",
    duration: "14 Days / 13 Nights",
    hotel: "5-Star Hotel (Walking Distance)",
    flights: "Business Class Flights",
    transport: "Private Luxury Transport",
    image: "https://images.unsplash.com/photo-1603437873662-2ab4c46209b3?auto=format&fit=crop&w=800&q=60",
},
];

const UmrahPackages = () => {
  return (
<>
    <Header/>
    <div className="umrah-container">
      <h1 className="umrah-title">Choose Your Umrah Package</h1>
      <p className="package-subtitle">Embark on your spiritual journey with our curated Umrah packages.</p>

      <div className="umrah-packages">
        {packages.map((pkg, index) => (
          <div className="umrah-card" key={index}>
            <img src={pkg.image} alt={pkg.title} />
            <h3>{pkg.title}</h3>
            <p><strong>Price:</strong> {pkg.price}</p>
            <p><strong>Duration:</strong> {pkg.duration}</p>
            <p><strong>Hotel:</strong> {pkg.hotel}</p>
            <p><strong>Flights:</strong> {pkg.flights}</p>
            <p><strong>Transport:</strong> {pkg.transport}</p>
            <button>Book Now</button>
          </div>
        ))}
      </div>

      <div className="cta-customize">
        <h2>Customize Your Own Umrah Package</h2>
        <a href="/customize-packages" className="custom-btn">Start Customizing</a>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default UmrahPackages;
