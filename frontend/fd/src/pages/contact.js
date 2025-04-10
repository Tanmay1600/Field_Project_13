
import React , { useEffect, useState } from "react";
import "../styles/contact.css";
import Header from "../components/header"; // Adjust the path if needed
import { Link } from 'react-router-dom';


export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://ek-hath-madticha-backend.onrender.com/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("Thank you for contacting us!");
        setFormData({ firstName: "", lastName: "", email: "", mobile: "", message: "" });
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      alert("Error submitting form. Server might be down.");
    }
  };
  
  return (
    <>
    <Header />
    <div className="contact-container">
      {/* Top Section */}
      <section className="contact-top">
        <div className="left">
          <div className="contact-heading">
            <span className="line1111"></span>
            <p className="subheading">CONTACT US</p>
          </div>
          <h1>We'd love to hear<br />from you</h1>
          <p>
            Have any question in mind or want to enquire? Please feel free to contact us
            through the form or the following details.
          </p>
        </div>
        <div className="right">
          <h4>Let's talk!</h4>
          <p className="contact-info">
            +91 9637541696 &nbsp;&nbsp;&nbsp; chetanchelke7795@gmail.com
          </p>
          <h4>Main Office</h4>
          <p className="contact-info">
            📍 Sai Nagar, Anand Nagar, Thane
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="form-section">
      <form className="form" onSubmit={handleSubmit}>
  <div className="form-row">
    <div className="input-group">
      <label>First Name</label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
    </div>
    <div className="input-group">
      <label>Last Name</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
    </div>
  </div>
  <div className="form-row">
    <div className="input-group">
      <label>Email Id</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>
    <div className="input-group">
      <label>Mobile No.</label>
      <input
        type="text"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        required
      />
    </div>
  </div>
  <div className="input-group full-width">
    <label>Message</label>
    <textarea
      name="message"
      placeholder="Type your message..."
      rows="5"
      value={formData.message}
      onChange={handleChange}
      required
    />
  </div>
  <button type="submit">Send message</button>
</form>

      </section>

      {/* Map Section */}
      <section className="map-section">
        <img src="/assets/map.png" alt="Map" className="map-image" />
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
