import React from "react";
import { FaGlobe, FaSuitcaseRolling, FaHotel } from "react-icons/fa";
import "../styles/WhyChooseUs.css";

const WhyChooseUs = () => {
  const features = [
    { icon: <FaGlobe className="feature-icon" />, title: "Explore the World", desc: "Discover breathtaking destinations across the globe." },
    { icon: <FaSuitcaseRolling className="feature-icon" />, title: "Hassle-Free Travel", desc: "Enjoy stress-free vacations with our expert planning." },
    { icon: <FaHotel className="feature-icon" />, title: "Luxury Accommodations", desc: "Stay in top-rated hotels and resorts for ultimate comfort." },
  ];

  return (
    <div className="why-choose-us">
      <h2>Why Choose Us?</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-box">
            {feature.icon}
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-desc">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
