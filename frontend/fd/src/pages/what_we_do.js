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
          <img src="/assets/image.png" alt="Happy children" />
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
  <p className="subheading">PROJECTS WE HAVE DONE</p>
</div>        <h2>Our mission is to create a sustainable and supportive environment where everyone can thrive</h2>
        
        <div className="projects-container">
          <div className="project-card">
            <div className="project-image">
            <h3>Clothes Donation Drive</h3>
            <p>
              We provide children with clothing donated by generous supporters.
            </p>
            <button className="learn-more-btn">Learn more</button>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <h3>Book Distribution</h3>
              <p>
                We provide children with books, magazines, and educational materials to nurture their curiosity and love for learning.
              </p>
              <button className="learn-more-btn">Learn more</button>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <h3>Teaching Session</h3>
              <p>
                We offer regular teaching sessions to enhance education, help children learn to build a better and more successful future.
              </p>
              <button className="learn-more-btn">Learn more</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Ek Hath Madticha</h3>
          </div>
          
          <div className="footer-links">
            <h4>Home</h4>
            <ul>
              <li><Link to="/about_us">About us</Link></li>
              <li><Link to="/about_us">Team</Link></li>
              <li><Link to="/what_we_do">What we do</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>More</h4>
            <ul>
              <li><Link to="/project_readmore">Projects</Link></li>
              <li><Link to="/event_readmore">Events</Link></li>
              <li><Link to="/donate">Donate</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Connect</h4>
            <ul>
              <li><a href="[https://instagram.com](https://instagram.com)" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Ek Hath Maditcha. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </>
  );
}