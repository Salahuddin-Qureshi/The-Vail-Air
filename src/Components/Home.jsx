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
    </div>
  );
};

export default Home;
