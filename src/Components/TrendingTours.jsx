import React, { useState } from "react";
import TravelCard from "./TravelCard";
import "../styles/TrendingTours.css"
// Images
import maldivesImage from "../assets/maldives.jpg";
import parisImage from "../assets/paris.jpg";
import turkeyImage from "../assets/turkey.jpg";
import thailandImage from "../assets/thailand.jpg";
import dubaiImage from "../assets/dubai.jpg";
import switzerlandImage from "../assets/switzerland.jpg";
import indonesiaImage from "../assets/indonesia.jpg";
import malaysiaImage from "../assets/malaysia.jpg";
import italyImage from "../assets/italy.jpg";
import japanImage from "../assets/japan.jpg";

// Travel package data
const travelPackages = [
  { destination: "Maldives", duration: "5 Days / 4 Nights", price: "PKR 150,000", accommodation: "5-Star Hotel", transport: "Return Air Ticket", image: maldivesImage },
  { destination: "Paris, France", duration: "6 Days / 5 Nights", price: "PKR 250,000", accommodation: "Luxury Hotel", transport: "Return Air Ticket", image: parisImage },
  { destination: "Istanbul, Turkey", duration: "7 Days / 6 Nights", price: "PKR 180,000", accommodation: "Boutique Hotel", transport: "Return Air Ticket", image: turkeyImage },
  { destination: "Bangkok, Thailand", duration: "5 Days / 4 Nights", price: "PKR 130,000", accommodation: "4-Star Hotel", transport: "Return Air Ticket", image: thailandImage },
  { destination: "Dubai, UAE", duration: "4 Days / 3 Nights", price: "PKR 200,000", accommodation: "5-Star Resort", transport: "Return Air Ticket", image: dubaiImage },
  { destination: "Switzerland", duration: "6 Days / 5 Nights", price: "PKR 300,000", accommodation: "Luxury Chalet", transport: "Return Air Ticket", image: switzerlandImage },
  { destination: "Bali, Indonesia", duration: "7 Days / 6 Nights", price: "PKR 220,000", accommodation: "Beach Resort", transport: "Return Air Ticket", image: indonesiaImage },
  { destination: "Kuala Lumpur, Malaysia", duration: "5 Days / 4 Nights", price: "PKR 140,000", accommodation: "City Hotel", transport: "Return Air Ticket", image: malaysiaImage },
  { destination: "Rome, Italy", duration: "6 Days / 5 Nights", price: "PKR 270,000", accommodation: "Historic Hotel", transport: "Return Air Ticket", image: italyImage },
  { destination: "Tokyo, Japan", duration: "7 Days / 6 Nights", price: "PKR 350,000", accommodation: "Ryokan", transport: "Return Air Ticket", image: japanImage },
];

function TrendingTours() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    if (currentIndex < travelPackages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="travel-card-section">
      <h1>Trending Now</h1>
      <div className="carousel-container">
        <button className="carousel-btn prev" onClick={prevSlide}>❮</button>
        <div className="carousel-content">
          {travelPackages.slice(currentIndex, currentIndex + 4).map((pkg, index) => (
            <TravelCard key={index} {...pkg} />
          ))}
        </div>
        <button className="carousel-btn next" onClick={nextSlide}>❯</button>
      </div>
      <div className="carousel-pagination">
        {travelPackages.map((pkg, index) => (
          <span
            key={index}
            className={`pagination-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default TrendingTours;
