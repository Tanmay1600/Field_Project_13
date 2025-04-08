import React from "react";
import "../styles/about_us.css";
import { Link } from "react-router-dom";
import Header from "../components/header"; // Adjust the path if needed


export default function AboutUs() {
  return (
    <>
    <Header />
    <div className="about-us-page">

      {/* About Us Hero Section */}
      <section className="about-top">
  <div className="left">
    <div className="about-heading">
      <span className="line1111"></span>
      <p className="subheading">ABOUT US</p>
    </div>
    <h1>We are a non-governmental organization</h1>
    <p>
      Our NGO is committed to creating positive change in our communities through sustainable
      development, education, and humanitarian initiatives. Driven by a passion for social justice and
      equality, we work tirelessly to empower marginalized groups, advocate for human rights, and provide
      essential resources to those in need. Our team of dedicated volunteers and professionals collaborates
      with local partners to implement impactful projects. With transparency, compassion, and innovation
      at our core, we strive to build a brighter, more inclusive future for all.
    </p>
  </div>
</section>

      {/* Main Image */}
      <div className="main-image">
        <img src="/assets/aboutimage.png" alt="Our team with children" />
      </div>

      {/* Mission and Vision */}
      <div className="mission-vision-container">
        <div className="mission-box">
          <h3>OUR MISSION</h3>
          <h4>We provide basic education for children and essential living amenities for those in need</h4>
          <p>We strive to create a world where no child is deprived of basic education, food, shelter, and healthcare. Our goal is to help them thrive.</p>
        </div>
        
        <div className="vision-box">
          <h3>OUR VISION</h3>
          <h4>Provide more inclusive care to children in our community</h4>
          <p>We are committed to making a difference by ensuring that every child has access to essential services and a safe environment where they can grow and learn.</p>
        </div>
      </div>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet our team</h2>
        <p className="team-description">Learn more about our dedicated volunteers and staff who work tirelessly to make a difference in the lives of those in need.</p>
        
        <div className="team-members">
          <div className="team-member">
            <img src="/assets/chetan.png" alt="Team Member" />
            <h4>Chetan Chelke</h4>
            <h6>Founder</h6>
          </div>
          <div className="team-member">
            <img src="/assets/bhavesh.png" alt="Team Member" />
            <h4>Bhavesh Shukla</h4>
            <h6>Co-Founder</h6>
          </div>
          <div className="team-member">
            <img src="/assets/bhushan.png" alt="Team Member" />
            <h4>Bhushan Chalke</h4>
            <h6>Executive</h6>
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