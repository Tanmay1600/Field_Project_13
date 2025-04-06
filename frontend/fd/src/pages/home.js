import React , { useEffect, useState } from "react";
import "../styles/home.css";
import { FaGraduationCap, FaTshirt, FaBook } from "react-icons/fa"; // Importing icons
import Header from "../components/header"; // Adjust the path if needed


const Home = () => {
  const [initiatives, setInitiatives] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/initiatives") // Replace with actual API endpoint
      .then((response) => response.json())
      .then((data) => setInitiatives(data))
      .catch((error) => console.error("Error fetching initiatives:", error));
  }, []);

  return (

    <>
    <Header /> {/* Add the header here */}
    
    <div className="home-container">
      <div className="home-header">
  <img src="assets/home.png" alt="Banner" className="home-banner" />
</div>

      {/* About Us Section */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-header">
            <span className="line"></span>
            <h3>ABOUT US</h3>
          </div>
          <h2>
            We provide basic education for children and essential living amenities
            for those in need
          </h2>
          <p>
            We believe in nurturing young minds by providing basic education, essential
            care, and opportunities to help them.
          </p>
          <p>
            We are committed to making a difference by ensuring that basic needs and
            educational opportunities reach those who need them most.
          </p>
          <button className="learn-more-btn">Learn more</button>
        </div>
      </section>

      <section className="services-section">
        <div className="services-content">
          <span className="line"></span>
          <h3 className="services-title">WHAT WE DO</h3>
          <h2 className="services-heading">Some services we provide for our children</h2>
          <p className="services-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>

          <div className="services-list">
            <div className="service-item">
              <FaGraduationCap className="service-icon" />
              <div>
                <h3>Education</h3>
                <p>By offering children a strong educational foundation, we empower them to build a better and more promising future.</p>
              </div>
            </div>

            <div className="service-item">
              <FaTshirt className="service-icon" />
              <div>
                <h3>Clothes</h3>
                <p>We provide children with clothing donated by generous supporters.</p>
              </div>
            </div>

            <div className="service-item">
              <FaBook className="service-icon" />
              <div>
                <h3>Books</h3>
                <p>We provide children with books, storybooks, and educational materials to nurture their curiosity and love for learning.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right-side Image */}
        <div className="services-image">
          <img src="assets/kid-education.jpg" alt="Children learning" />
        </div>
      </section>
       {/* Initiatives Section */}
       <section className="initiatives-section">
        <div className="initiatives-content">
          <span className="line"></span>
          <h3 className="initiatives-title">OUR INITIATIVES</h3>
          <h2 className="initiatives-heading">
            We are creating a place where children in need can thrive
          </h2>
          <div className="initiatives-list">
            {initiatives.map((initiative) => (
              <div key={initiative.id} className="initiative-card">
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="initiative-image"
                />
                <div className="initiative-overlay">
                  <h3>{initiative.title}</h3>
                  <p>{initiative.description}</p>
                  <button className="learn-more-btn">Learn more</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contribution Section */}
<section className="contribution-section">
  <img src="assets/contribution.png" alt="Children" className="contribution-image" />
  <h2 className="contribution-heading">You can contribute to provide a place for children in need!</h2>
  <div className="contribution-buttons">
    <button className="volunteer-btn">Join as a volunteer</button>
    <button className="donate-btn44">Donate</button>
  </div>
</section>

{/* Events Section */}
<section className="events-section">
  <div className="events-header">
    <h3 className="events-title">Our Events</h3>
    <div className="line2"></div>
  </div>

  <div className="events-list">
    <div className="event-card">
      <div className="event-date">
        <span>13</span>
        <span>APR</span>
      </div>
      <div className="event-info">
        <p className="event-tag">NEXT EVENTS</p>
        <h4>A day with our wonderful children</h4>
      </div>
      <div className="event-arrow">➜</div>
    </div>

    <div className="event-card">
      <div className="event-date">
        <span>25</span>
        <span>APR</span>
      </div>
      <div className="event-info">
        <p className="event-tag">NEXT EVENTS</p>
        <h4>Seminar: Caring for children with autism</h4>
      </div>
      <div className="event-arrow">➜</div>
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
              <h3>Home</h3>
              <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">What we do</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>More</h3>
              <ul>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Donate</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Connect</h3>
              <ul>
                <li><a href="#">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
};

export default Home;
