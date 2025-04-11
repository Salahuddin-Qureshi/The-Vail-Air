import React from "react";
import Banner from "./Banner";
import Header from "./Header";
import WhyChooseUs from "./WhyChooseUs";
import TrendingDestinations from "./TrendingDestinations";
import TravelPackageCard from "./TravelPackageCard";
import Footer from "./Footer";
import DiscountOffer from "./DiscountOffer";
import ThingsToDoGallery from "./ThingsToDoGallery";
import TrendingTours from "./TrendingTours";
import CustomerReview from "./CustomerReview";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <WhyChooseUs />
      <TrendingDestinations />
      
      <TravelPackageCard />
      <DiscountOffer/>
      <ThingsToDoGallery/>
      <TrendingTours/>
      <CustomerReview/>
      <Footer />

      {/* <TrendingDestinationCard/> */}

      {/* Add more sections later, e.g., featured packages
      <section className="p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Explore Our Packages</h2>
        <p className="text-center text-gray-600">
          (Featured packages will go here once we connect to the backend.)
        </p>
      </section> */}
    </div>
  );
};

export default Home;
