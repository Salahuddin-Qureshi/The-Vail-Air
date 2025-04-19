// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "../styles/CustomerReview.css"; // Add this CSS file for styling

// // Customer data
// const reviews = [
//   {
//     name: "John Doe",
//     image: "path_to_image1.jpg",  // Replace with actual image path
//     review: "This trip was an amazing experience! The team was very professional, and the destinations were just breathtaking. Highly recommended!",
//   },
//   {
//     name: "Jane Smith",
//     image: "path_to_image2.jpg",  // Replace with actual image path
//     review: "A fantastic experience from start to finish. The service was top-notch, and I can't wait to plan my next trip!",
//   },
//   {
//     name: "Michael Brown",
//     image: "path_to_image3.jpg",  // Replace with actual image path
//     review: "The whole process was seamless, and the tour guides were extremely knowledgeable. I had an unforgettable time!",
//   },
//   {
//     name: "Emily White",
//     image: "path_to_image4.jpg",  // Replace with actual image path
//     review: "What an adventure! Great value for the money. I felt safe and cared for throughout the entire journey!",
//   },
// ];

// const CustomerReview = () => {
//   return (
//     <div className="review-section">
//       <h2 className="text-center">Customer Reviews</h2>
//       <Swiper
//         navigation={true}
//         slidesPerView={3}
//         spaceBetween={30}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         modules={[Navigation, Pagination]}
//         className="review-swiper"
//       >
//         {reviews.map((review, index) => (
//           <SwiperSlide key={index}>
//             <div className="review-card">
//               <img src={review.image} alt={review.name} className="review-image" />
//               <div className="review-text">
//                 <h3 className="review-name">{review.name}</h3>
//                 <p className="review-content">{review.review}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default CustomerReview;

import React, { useState } from "react";
import "../styles/CustomerReview.css"; // Add this CSS file for styling

// Customer data
const reviews = [
  {
    name: "John Doe",
    image: "path_to_image1.jpg",  // Replace with actual image path
    review: "This trip was an amazing experience! The team was very professional, and the destinations were just breathtaking. Highly recommended!",
  },
  {
    name: "Jane Smith",
    image: "path_to_image2.jpg",  // Replace with actual image path
    review: "A fantastic experience from start to finish. The service was top-notch, and I can't wait to plan my next trip!",
  },
  {
    name: "Michael Brown",
    image: "path_to_image3.jpg",  // Replace with actual image path
    review: "The whole process was seamless, and the tour guides were extremely knowledgeable. I had an unforgettable time!",
  },
  {
    name: "Emily White",
    image: "path_to_image4.jpg",  // Replace with actual image path
    review: "What an adventure! Great value for the money. I felt safe and cared for throughout the entire journey!",
  },
];

const CustomerReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next and previous buttons
  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <div className="review-section">
      <h2 className="text-center">Customer Reviews</h2>
      <div className="carousel-container">
        {/* Review Card */}
        <div className="review-card">
          <img
            src={reviews[currentIndex].image}
            alt={reviews[currentIndex].name}
            className="review-image"
          />
          <div className="review-text">
            <h3 className="review-name">{reviews[currentIndex].name}</h3>
            <p className="review-content">{reviews[currentIndex].review}</p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="carousel-buttons">
          <button onClick={prevReview} className="carousel-button prev-button">
            &#10094;
          </button>
          <button onClick={nextReview} className="carousel-button next-button">
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
