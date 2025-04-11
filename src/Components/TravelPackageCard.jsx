import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/TravelPackageCard.css";
import { Pagination, Navigation } from "swiper/modules";

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

function TravelPackageCard() {
  return (
    <div className="travel-card-section">
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        // pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="travel-swiper"
      >
        {travelPackages.map((pkg, index) => (
          <SwiperSlide key={index}>
            <TravelCard {...pkg} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TravelPackageCard;
