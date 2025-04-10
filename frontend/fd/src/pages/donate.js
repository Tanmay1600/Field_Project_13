import React, { useState } from "react";
import "../styles/donate.css";
import Header from "../components/header";
import { Link } from 'react-router-dom';


export default function Donation() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://ek-hath-madticha-backend.onrender.com/api/donations/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Donation submitted successfully!");
        setFormData({ fullName: "", mobile: "", email: "", message: "" });
        setShowForm(false);
      } else {
        alert("Failed to submit donation.");
      }
    } catch (error) {
      console.error("Error submitting donation:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <Header />
      <div className="donation-container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-text">
            <div className="donation-heading">
              <span className="line"></span>
              <p className="subheading">DONATE</p>
            </div>
            <h1>Making a donation for<br />our children.</h1>
            <p>
              When you donate, you’re supporting effective care to children with special needs—an investment in the leaders of tomorrow.
            </p>
            <button className="donate-button1" onClick={() => setShowForm(!showForm)}>
              {showForm ? "Close Form" : "Donate now"}
            </button>
          </div>
          <div className="hero-image">
            <img src="/assets/donation.png" alt="Donate" />
          </div>
        </section>

        {/* Donation Form */}
        {showForm && (
          <section className="donation-form-section">
            <form className="donation-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />
              <button type="submit">Submit Donation</button>
            </form>
          </section>
        )}

        {/* Contribution Section */}
        <section className="contribution">
          <div className="contribution-left">
            <h2>How you can contribute to<br />caring for our kids</h2>
            <p>
              Every child deserves a bright future, and your support can make that happen. By contributing to our cause, you help provide essential resources such as education, healthcare, and a safe environment for children in need. Your generosity ensures that these young minds have the opportunity to learn, grow, and thrive.
            </p>
          </div>
          <div className="contribution-right">
            <div className="tabs">
              <span className="active">Overview</span>
            </div>
            <p className="tab-content">
              Through our initiatives, we ensure that every child in our vicinity has the opportunity to grow, learn, and succeed. Our dedicated team and volunteers work tirelessly to make a meaningful impact in their lives, offering guidance, mentorship, and essential resources.<br /><br />
              By joining hands with us, you become a part of this transformative journey. Every effort counts, and together, we can make a difference in the lives of countless children.
            </p>
          </div>
        </section>

        {/* Use of Donation */}
        <section className="usage">
          <h2>How we use your donation</h2>
          <p>
          Every donation we receive goes directly into creating a meaningful impact in the lives of those who need it most. Whether it's clothing, books, food items, or educational supplies — we carefully collect, sort, and distribute your contributions through our verified outreach channels. Our volunteers ensure that every item reaches children, families, and communities that truly benefit from it. Nothing is wasted, and everything is handled with respect and care.          </p>
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
