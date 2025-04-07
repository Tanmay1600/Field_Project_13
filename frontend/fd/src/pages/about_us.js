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
            <img src="/ngo_o.png" alt="Team Member" />
            <h4>Bhavesh Shukla</h4>
            <h6>Co-Founder</h6>
          </div>
          <div className="team-member">
            <img src="/ngo_p.png" alt="Team Member" />
            <h4>Kyle Obrien</h4>
            <h6>Head of Authority</h6>
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
              <li><Link to="/about_us">About Us</Link></li>
              <li><Link to="/about_us">Team</Link></li>
              <li><Link to="/what_we_do">What We Do</Link></li>
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
              <li><a href="[https://instagram.com](https://instagram.com)">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Ek Hath Madticha. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </>
  );
}