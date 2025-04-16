import React from "react";
import { Link } from "react-router-dom";
import "../styles/Tours.css";
import Footer from "./Footer";
import Header from "./Header";

const tourPackages = [
  {
    name: "City Tour",
    price: "$60",
    description: "Explore the top attractions and landmarks of the city with a professional guide.",
    image: "https://images.unsplash.com/photo-1597741481532-ff97822b52c2?auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Historical Tour",
    price: "$100",
    description: "Dive deep into the rich history of the region with expert guides.",
    image: "https://images.unsplash.com/photo-1576163157804-b29d0f9fdb79?auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Adventure Tour",
    price: "$120",
    description: "For the thrill-seekers, this tour offers outdoor adventures and adrenaline-pumping activities.",
    image: "https://images.unsplash.com/photo-1556742031-b6f47e1d2e0c?auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Cultural Tour",
    price: "$85",
    description: "Experience local cultures, cuisine, and traditions on a guided cultural tour.",
    image: "https://images.unsplash.com/photo-1501597262822-47cc7ec6105b?auto=format&fit=crop&w=800&q=60",
  },
];

const Tours = () => {
  return (
    <>
    <Header/>
    <div className="tours-container">
      <h1 className="tours-title">Explore Our Tour Packages</h1>
      <p className="tours-subtitle">Choose from a wide range of guided tours that fit your interests.</p>

      <div className="tour-packages">
        {tourPackages.map((tour, index) => (
          <div className="tour-card" key={index}>
            <img src={tour.image} alt={tour.name} />
            <h3>{tour.name}</h3>
            <p><strong>Price:</strong> {tour.price}</p>
            <p>{tour.description}</p>
            <Link to="/book-tour" className="tour-btn">Book Now</Link>
          </div>
        ))}
      </div>

      <div className="cta-customize">
        <h2>Want to Create a Custom Tour?</h2>
        <Link to="/customize-tours" className="custom-btn">Customize Your Tour</Link>
      </div>
    </div>
     <Footer/>   
    </>
  );
};

export default Tours;
