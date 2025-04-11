import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/TrendingDestinations.css"; // Import CSS

const destinations = [
  { name: "France", image: "https://source.unsplash.com/100x100/?france" },
  { name: "Italy", image: "https://source.unsplash.com/100x100/?italy" },
  { name: "Japan", image: "https://source.unsplash.com/100x100/?japan" },
  { name: "USA", image: "https://source.unsplash.com/100x100/?usa" },
  { name: "Turkey", image: "https://source.unsplash.com/100x100/?turkey" },
  { name: "UAE", image: "https://source.unsplash.com/100x100/?dubai" },
  { name: "UK", image: "https://source.unsplash.com/100x100/?london" },
  { name: "Thailand", image: "https://source.unsplash.com/100x100/?thailand" },
  { name: "Australia", image: "https://source.unsplash.com/100x100/?australia" },
  { name: "Germany", image: "https://th.bing.com/th/id/R.9373cbde6a7c4c1029a2e63d780906dc?rik=nVcsqfnHP22uRw&pid=ImgRaw&r=0" },
  { name: "Spain", image: "https://source.unsplash.com/100x100/?spain" },
  { name: "Greece", image: "https://source.unsplash.com/100x100/?greece" },
  { name: "Brazil", image: "https://source.unsplash.com/100x100/?brazil" },
  { name: "Canada", image: "https://source.unsplash.com/100x100/?canada" },
  { name: "Egypt", image: "https://source.unsplash.com/100x100/?egypt" },
  { name: "China", image: "https://source.unsplash.com/100x100/?china" },
  { name: "Switzerland", image: "https://source.unsplash.com/100x100/?switzerland" },
  { name: "South Korea", image: "https://source.unsplash.com/100x100/?korea" },
  { name: "Indonesia", image: "https://source.unsplash.com/100x100/?indonesia" },
  { name: "Mexico", image: "https://source.unsplash.com/100x100/?mexico" },
];

const TrendingDestinations = () => {
  return (
    <div className="trending-section">
      <h2 className="section-title">Trending Destinations</h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={6}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {destinations.map((destination, index) => (
          <SwiperSlide key={index}>
            <div className="destination-card">
              <img src={destination.image} alt={destination.name} className="destination-image" />
              <p className="destination-name">{destination.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrendingDestinations;
