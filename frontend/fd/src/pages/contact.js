
import React , { useEffect, useState } from "react";
import "../styles/contact.css";
import Header from "../components/header"; // Adjust the path if needed

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
      const response = await fetch("http://localhost:5000/api/contacts", {
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.5487001321544!2d72.97305501490445!3d19.12758018705647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b920b28298cf%3A0x9a1d97d229e2391b!2sSai%20Nagar%2C%20Anand%20Nagar%2C%20Thane%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1712386485803"
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        />
      </section>
    </div>
    </>
  );
}
