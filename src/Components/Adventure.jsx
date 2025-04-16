import React from "react";
import { Link } from "react-router-dom";
import "../styles/Adventure.css";
import Footer from "./Footer";
import Header from "./Header";

const adventureTours = [
  {
    name: "Mountain Trekking",
    price: "$150",
    description: "Trek through rugged terrains and reach breathtaking mountain peaks.",
    image: "https://images.unsplash.com/photo-1461512692097-cf61a9f2de66?auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Desert Safari",
    price: "$180",
    description: "Experience the thrills of dune bashing and stargazing under the desert sky.",
    image: "https://images.unsplash.com/photo-1559049781-b497b6a8e27f?auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Whitewater Rafting",
    price: "$200",
    description: "Navigate through thrilling rapids on an adrenaline-pumping rafting adventure.",
    image: "https://images.unsplash.com/photo-1604522695140-65e018f0c2f1?auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Ziplining",
    price: "$130",
    description: "Fly through the treetops and enjoy stunning views of the forest below.",
    image: "https://images.unsplash.com/photo-1506899831414-8f30f2901976?auto=format&fit=crop&w=800&q=60",
  },
];

const Adventure = () => {
  return (
    <>
    <Header/>
    <div className="adventure-container">
      <h1 className="adventure-title">Adventure Awaits</h1>
      <p className="adventure-subtitle">Dive into the ultimate adventure experiences designed for thrill-seekers!</p>

      <div className="adventure-tours">
        {adventureTours.map((tour, index) => (
          <div className="adventure-card" key={index}>
            <img src={tour.image} alt={tour.name} />
            <div className="adventure-card-content">
              <h3>{tour.name}</h3>
              <p><strong>Price:</strong> {tour.price}</p>
              <p>{tour.description}</p>
              <Link to="/book-adventure" className="adventure-btn">Book Now</Link>
            </div>
          </div>
        ))}
      </div>

      <div className="cta-adventure">
        <h2>Want a Custom Adventure?</h2>
        <Link to="/customize-adventure" className="custom-btn">Customize Your Adventure</Link>
      </div>
    </div>
        <Footer/>
    </>
  );
};

export default Adventure;
