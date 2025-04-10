// BookDistribution.js
import React from 'react';
import '../styles/bookDistribution.css';

const BookDistribution = () => {
  return (
    <div className="mission-smile-container">
      <div className="top-section">
        <p className="section-label">OUR WORK</p>
        <h1 className="title">Books for Brighter Futures</h1>
        <p className="description">
          Our NGO believes in the power of books to educate, inspire, and transform lives. We regularly distribute books to children who lack access to quality reading material. These include storybooks, academic books, and school supplies tailored to different age groups.
        </p>
      </div>

      <div className="image-section">
        <img src="/assets/books.png" alt="Book Distribution" />
      </div>

      <div className="bottom-section">
        <p>
          We collaborate with local schools, community centers, and shelters to ensure these books reach children who need them most. Our goal is to cultivate a love for reading and provide the tools that enable children to learn, grow, and dream. Every donated book is a step toward a more educated and empowered generation.
        </p>
      </div>
    </div>
  );
};

export default BookDistribution;
