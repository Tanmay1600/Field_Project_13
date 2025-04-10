import React from "react";
import "../styles/what_we_do.css";
import { Link } from "react-router-dom";
import Header from "../components/header"; // Adjust the path if needed


export default function WhatWeDo() {
  return (
    <>
    <Header />
  <div className="what-we-do-page">

      {/* Hero Section */}
      <section className="hero-section">
    <div className="hero-content">
        <div className="section-heading">
  <span className="heading-line"></span>
  <p className="subheading">WHAT WE DO</p>
</div>
          <h2>Our efforts span across Thane, Raigad and Sangli</h2>
          <p>
            Through our dedicated initiatives, we provide education, healthcare, and essential
            resources to uplift communities across Thane, Raigad, and Sangli. Our mission is to
            create sustainable change and improve lives.
          </p>
        </div>
        <div className="hero-image">
          <img src="/assets/happy-children.png" alt="Happy children" />
    </div>
      </section>

      {/* Services Section */}
      <section className="services-section1">
        <h2>What we do for our kids with special needs</h2>
        
        <div className="services-container">
          <div className="service-card">
            <div className="service-icon1">
              <span className="icon">📚</span>
            </div>
            <h3>Books</h3>
            <p>
              We provide children with books, magazines, and educational materials to nurture their curiosity and love for learning.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon1">
              <span className="icon">🎓</span>
            </div>
            <h3>Education</h3>
            <p>
              By offering children a strong educational foundation, we empower them to build a better and more prosperous future.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon1">
              <span className="icon">👕</span>
            </div>
            <h3>Clothes</h3>
            <p>
            We provide clothes with clothing donated by generous supporters. These items are carefully sorted and distributed to those in need.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
      <div className="section-heading">
  <span className="heading-line"></span>
  <p className="subheading">OUR INITIATIVES</p>
</div>        <h2>Our mission is to create a sustainable and supportive environment where everyone can thrive</h2>
        
<div className="three-cards">
      <div className="initiative-card">
        <img src="/assets/image1.png" alt="Education Support" className="card-image" />
        <div className="card-overlay">
          <h3>Cloth Donation</h3>
          <p>We provide children in need with clothes, ensuring they have the comfort and dignity every child deserves.</p>
          <Link to="/cloth-donation"><button className="learn-more-btn1">Learn more</button></Link>    
        </div>
      </div>

      <div className="initiative-card">
        <img src="/assets/image2.png" alt="Healthcare Access" className="card-image" />
        <div className="card-overlay">
          <h3>Book Distribution</h3>
          <p>We provide children with books, storybooks, and educational materials to nurture their curiosity and love for learning.</p>
          <Link to="/book-distribution"><button className="learn-more-btn1">Learn more</button></Link>    
        </div>
      </div>

      <div className="initiative-card">
        <img src="/assets/image3.png" alt="Nutrition Programs" className="card-image" />
        <div className="card-overlay">
          <h3>Teaching Sessions</h3>
          <p>By offering children a strong educational foundation, we empower them to build a better and more promising future.</p>
          <Link to="/teaching"><button className="learn-more-btn1">Learn more</button></Link>    
        </div>
      </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          {/* Brand Name */}
          <div className="footer-brand">
            <h2>Ek Hath Madticha</h2>
          </div>
      
          {/* Navigation Links */}
          <div className="footer-links">
            <div className="footer-column">
              <ul>
              <li><Link to="/"><h3>Home</h3></Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/what-we-do">What We Do</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/donate">Donate</Link></li>
              </ul>
            </div>
      
            <div className="footer-column">
              <h3>Connect</h3>
              <ul>
              <li><a href="https://www.instagram.com/ekhatmadticha?igsh=MXR1Mmo2Z2h0cW4wZA==" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="mailto:chetanchalke7795@gmail.com">Gmail</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
    <p>© {new Date().getFullYear()} Ek Hath Madticha. All rights reserved.</p>
  </div>
      </footer>
    </div>
    </>
  );
}