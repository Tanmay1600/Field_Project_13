import React from "react";
import "../styles/contact.css";
import { Link } from "react-router-dom";
import Header from "../components/header"; // Adjust the path if needed

export default function Contact() {
  return (
    <>
    <Header />
    <div className="contact-page">
     

      <section className="contact-section">
        <div className="contact-content">
         
        </div>

        <div className="contact-info">
          <div className="contact-details">
          <h2>CONTACT US</h2>
          <h1>We'd love to hear from you</h1>
          <p>
            Have any question in mind or want to enquire? Please feel free to
            contact us through the form or the following details.
          </p>
            <h3>Let's talk!</h3>
            <p>
              <a href="tel:+919637541696">+91 9637541696</a>
            </p>
            <p>
              <a href="mailto:chetanchelke7795@gmail.com">chetanchelke7795@gmail.com</a>
            </p>

            <h3>Main Office</h3>
            <p>Sai Nagar, Anand Nagar, Thane</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input 
              type="text" 
              id="firstName" 
              name="firstName" 
              placeholder="John" 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input 
              type="text" 
              id="lastName" 
              name="lastName" 
              placeholder="Doe" 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Id</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="johndoe@gmail.com" 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
            />
          </div>
          
          <div className="form-group full-width">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              placeholder="Type your Message..." 
              rows="6"
            ></textarea>
          </div>
          
          <button type="submit" className="send-message-btn">Send message</button>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1617215381306!5m2!1sen!2sin" 
        width="1500px" 
        height="500px" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy"
        title="Office Location"
      />
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
          <p>&copy; 2025 Ek Hath Madticha. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </>
  );
}