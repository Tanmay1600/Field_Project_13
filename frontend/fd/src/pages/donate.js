import React, { useState } from "react";
import "../styles/donate.css";
import Header from "../components/header";

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
      const response = await fetch("http://localhost:5000/api/donations/", {
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
            <img src="/donation-box.jpg" alt="Donate" />
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
              <span>Impact</span>
              <span>What You get</span>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, similique incidunt! Impedit cum ratione facilis corporis incidunt iusto neque commodi ducimus exercitationem voluptatibus debitis obcaecati excepturi voluptas quidem, quas ullam aliquam quibusdam accusantium nostrum id ipsam architecto fuga quasi quis! Vel quam sit esse, quasi iste consectetur dicta rem vitae blanditiis eius cupiditate doloremque est hic nostrum totam?
          </p>
        </section>
      </div>
    </>
  );
}
