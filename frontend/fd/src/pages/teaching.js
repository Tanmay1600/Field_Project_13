// Teaching.js
import React from 'react';
import '../styles/teaching.css';

const Teaching = () => {
  return (
    <div className="mission-smile-container">
      <div className="top-section">
        <p className="section-label">OUR WORK</p>
        <h1 className="title">Volunteer Teaching for Underserved Children</h1>
        <p className="description">
          Education is at the heart of our mission. Our NGO organizes volunteer teaching programs for children who do not have access to basic education. These sessions are led by passionate volunteers who dedicate their time to teaching subjects like language, math, science, and general knowledge.
        </p>
      </div>

      <div className="image-section">
        <img src="/assets/teaching.png" alt="Volunteer Teaching" />
      </div>

      <div className="bottom-section">
        <p>
          We focus on helping children build strong foundational skills while also nurturing their curiosity and creativity. Classes are conducted in safe, informal settings that foster interaction and confidence. By bringing education to their doorstep, we aim to break the cycle of poverty and empower children with the knowledge they deserve.
        </p>
      </div>
    </div>
  );
};

export default Teaching;
