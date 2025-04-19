// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "../styles/TravelPackageCard.css";
// import { Pagination, Navigation } from "swiper/modules";

// import TravelCard from "./TravelCard";

// // Images
// import maldivesImage from "../assets/maldives.jpg";
// import parisImage from "../assets/paris.jpg";
// import turkeyImage from "../assets/turkey.jpg";
// import thailandImage from "../assets/thailand.jpg";
// import dubaiImage from "../assets/dubai.jpg";
// import switzerlandImage from "../assets/switzerland.jpg";
// import indonesiaImage from "../assets/indonesia.jpg";
// import malaysiaImage from "../assets/malaysia.jpg";
// import italyImage from "../assets/italy.jpg";
// import japanImage from "../assets/japan.jpg";

// // Travel package data
// const travelPackages = [
//   { destination: "Maldives", duration: "5 Days / 4 Nights", price: "PKR 150,000", accommodation: "5-Star Hotel", transport: "Return Air Ticket", image: maldivesImage },
//   { destination: "Paris, France", duration: "6 Days / 5 Nights", price: "PKR 250,000", accommodation: "Luxury Hotel", transport: "Return Air Ticket", image: parisImage },
//   { destination: "Istanbul, Turkey", duration: "7 Days / 6 Nights", price: "PKR 180,000", accommodation: "Boutique Hotel", transport: "Return Air Ticket", image: turkeyImage },
//   { destination: "Bangkok, Thailand", duration: "5 Days / 4 Nights", price: "PKR 130,000", accommodation: "4-Star Hotel", transport: "Return Air Ticket", image: thailandImage },
//   { destination: "Dubai, UAE", duration: "4 Days / 3 Nights", price: "PKR 200,000", accommodation: "5-Star Resort", transport: "Return Air Ticket", image: dubaiImage },
//   { destination: "Switzerland", duration: "6 Days / 5 Nights", price: "PKR 300,000", accommodation: "Luxury Chalet", transport: "Return Air Ticket", image: switzerlandImage },
//   { destination: "Bali, Indonesia", duration: "7 Days / 6 Nights", price: "PKR 220,000", accommodation: "Beach Resort", transport: "Return Air Ticket", image: indonesiaImage },
//   { destination: "Kuala Lumpur, Malaysia", duration: "5 Days / 4 Nights", price: "PKR 140,000", accommodation: "City Hotel", transport: "Return Air Ticket", image: malaysiaImage },
//   { destination: "Rome, Italy", duration: "6 Days / 5 Nights", price: "PKR 270,000", accommodation: "Historic Hotel", transport: "Return Air Ticket", image: italyImage },
//   { destination: "Tokyo, Japan", duration: "7 Days / 6 Nights", price: "PKR 350,000", accommodation: "Ryokan", transport: "Return Air Ticket", image: japanImage },
// ];

// function TravelPackageCard() {
//   return (
//     <div className="travel-card-section">
//       <Swiper
//         slidesPerView={4}
//         spaceBetween={10}
//         // pagination={{ clickable: true }}
//         navigation={true}
//         modules={[Pagination, Navigation]}
//         className="travel-swiper"
//       >
//         {travelPackages.map((pkg, index) => (
//           <SwiperSlide key={index}>
//             <TravelCard {...pkg} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default TravelPackageCard;
import React, { useState } from "react";
import "../styles/TravelPackageCard.css";
import TravelCard from "./TravelCard";

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

// Data
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

const TravelPackageCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsPerPage = window.innerWidth <= 768 ? 1 : 3;
  const totalPages = Math.ceil(travelPackages.length / cardsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const startIndex = currentIndex * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const visiblePackages = travelPackages.slice(startIndex, endIndex);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <button className="nav-button prev" onClick={prevSlide}>
          &#8592;
        </button>

        <div className="carousel-content">
          {visiblePackages.map((pkg, index) => (
            <div className="carousel-card" key={index}>
              <TravelCard {...pkg} />
            </div>
          ))}
        </div>

        <button className="nav-button next" onClick={nextSlide}>
          &#8594;
        </button>
      </div>

      <div className="pagination-dots">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TravelPackageCard;
 