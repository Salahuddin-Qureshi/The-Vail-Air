import React from 'react';
import '../styles/Filter.css';

const Filter = () => {
  return (
    <div className="filter-container">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Where"
          className="filter-input where-input"
        />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="February 05 - March 14"
          className="filter-input when-input"
        />
      </div>
      <div className="input-wrapper">
        <select className="filter-select tour-type">
          <option value="">Tour Type</option>
          <option value="all-tour">All tour</option>
          <option value="group-tour">Group tour</option>
          <option value="private-tour">Private tour</option>
        </select>
      </div>
      <button className="filter-search-btn">Search</button>
    </div>
  );
};

export default Filter;