import React from 'react';
import '../styles/CustomizedPackages.css';
import Footer from './Footer';
import Header from './Header';

const categories = [
    {
      name: "Honeymoon",
      image: "https://images.unsplash.com/photo-1515023115689-589c33039e4d?auto=format&fit=crop&w=800&q=60",
      desc: "Romantic getaways designed for unforgettable memories."
    },
    {
      name: "Adventure",
      image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=60",
      desc: "Thrilling experiences for adrenaline junkies."
    },
    {
      name: "Family Trips",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=60",
      desc: "Fun-packed vacations for all generations."
    },
    {
      name: "Luxury Tours",
      image: "https://images.unsplash.com/photo-1519821172141-b5d8f5e40c4e?auto=format&fit=crop&w=800&q=60",
      desc: "Premium hotels, flights, and private guides."
    },
    {
      name: "Budget Packages",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764ce7?auto=format&fit=crop&w=800&q=60",
      desc: "Affordable travel options with great value."
    },
    {
      name: "Cultural Tours",
      image: "https://images.unsplash.com/photo-1580674286990-9e5e55b9b2fc?auto=format&fit=crop&w=800&q=60",
      desc: "Immerse in local traditions, cuisine, and history."
    },
    {
      name: "Wildlife Safaris",
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=60",
      desc: "Explore the wild with expert guides and safe adventures."
    },
    {
      name: "Beach Holidays",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
      desc: "Relax on pristine beaches with crystal clear waters."
    }
  ];
  
const CustomizedPackages = () => {
  return (
    <>
    <Header/>
    <div className="package-container">
      <h1>🎒 Customized Travel Packages</h1>
      <p className="package-subtitle">
        Create your dream journey. From romantic escapes to thrill-seeking adventures — we've got it all covered!
      </p>

      <div className="category-grid">
        {categories.map((item, index) => (
          <div className="category-card" key={index}>
            <img src={`https://source.unsplash.com/400x300/?${item.image}`} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="cta-customize">
        <h2>💼 Ready to Customize Your Journey?</h2>
        <p>
          Our travel experts will tailor a perfect plan just for you — flights, hotels, experiences, and more.
        </p>
        <a href="/contact" className="custom-btn">Start Planning</a>
      </div>
    </div>
        <Footer/>
    </>
  );
};

export default CustomizedPackages;
