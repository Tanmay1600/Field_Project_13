// ClothDonation.js
import React from 'react';
import '../styles/clothDonation.css';

const ClothDonation = () => {
  return (
    <div className="mission-smile-container">
      <div className="top-section">
        <p className="section-label">OUR WORK</p>
        <h1 className="title">Clothing the Needy with Dignity</h1>
        <p className="description">
          Our NGO runs a continuous clothing donation initiative that aims to provide clean, wearable clothes to those in need—especially children. We collect garments from generous individuals, families, and communities who want to make a difference. These clothes are sorted, cleaned, and distributed to underprivileged children and families living in difficult conditions.
        </p>
      </div>

      <div className="image-section">
        <img src="/assets/clothes.png" alt="Clothing Donation" />
      </div>

      <div className="bottom-section">
        <p>
          We believe that clothing is more than just fabric—it’s about self-worth, confidence, and dignity. By ensuring that no one is left without proper clothing, we aim to uplift lives and restore hope. Your contribution helps us continue to bring warmth and care to those who need it the most.
        </p>
      </div>
    </div>
  );
};

export default ClothDonation;
