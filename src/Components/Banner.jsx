import React from 'react';
import Filter from './Filter';
import '../styles/Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <h1 className="banner-title">Your world of joy</h1>
        <p className="banner-tagline">
          From local escapes to far-flung adventures, find what makes you happy anytime, anywhere
        </p>
        <div className="banner-filter">
          <Filter />
        </div>
      </div>
    </div>
  );
};

export default Banner;