// foodDonation.js
import React from 'react';
import '../styles/foodDonation.css';

const FoodDonation = () => { // ✅ Capitalized
  return (
    <div className="mission-smile-container">
      <div className="top-section">
        <p className="section-label">OUR PROJECT</p>
        <h1 className="title">Mission Smile 1k: Outdoor charity outreach</h1>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </p>
      </div>

      <div className="image-section">
        <img src="/images/outreach.jpg" alt="Charity Event" />
      </div>

      <div className="bottom-section">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </p>
      </div>
    </div>
  );
};

export default FoodDonation; // ✅ Export with capital F
