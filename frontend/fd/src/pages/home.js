import React , { useEffect, useState } from "react";
import "../styles/home.css";
import { FaGraduationCap, FaTshirt, FaBook } from "react-icons/fa"; // Importing icons
import Header from "../components/header"; // Adjust the path if needed
import { Link } from 'react-router-dom';


const Home = () => {
  const [initiatives, setInitiatives] = useState([]);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
const [showEventPopup, setShowEventPopup] = useState(false);
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);
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
    const response = await fetch("https://ek-hath-madticha-backend.onrender.com/api/volunteers/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Thank you for volunteering!");
      setFormData({ firstName: "", lastName: "", email: "", mobile: "", message: "" });
      setShowVolunteerForm(false);
    } else {
      alert("Failed to submit form. Please try again.");
    }
  } catch (err) {
    alert("Error submitting form. Server might be down.");
  }
};

  useEffect(() => {
    fetch("http://localhost:3000/initiatives") // Replace with actual API endpoint
      .then((response) => response.json())
      .then((data) => setInitiatives(data))
      .catch((error) => console.error("Error fetching initiatives:", error));
  }, []);
  useEffect(() => {
  
    fetch("https://ek-hath-madticha-backend.onrender.com/api/events/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => {
      });
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
          <Link to="/about">
      <button className="learn-more-btn">Learn more</button>
    </Link>        </div>
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
          <Link to="/book-distribution"><button className="learn-more-btn1">Learn more</button></Link>        </div>
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

        </div>
      </section>
      {/* Contribution Section */}
<section className="contribution-section">
  <img src="assets/contribution.png" alt="Children" className="contribution-image" />
  <h2 className="contribution-heading">You can contribute to provide a place for children in need!</h2>
  <div className="contribution-buttons">
    <button className="volunteer-btn" onClick={() => setShowVolunteerForm(true)}>Join as a volunteer</button>
    {/* <button className="donate-btn44"></button> */}
  </div>
</section>
{showVolunteerForm && (
  <div className="modal-overlay">
    <div className="volunteer-form-container">
      <h2>Join as a Volunteer</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} required />
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />
        <button type="submit">Submit</button>
        <button type="button" className="cancel-btn" onClick={() => setShowVolunteerForm(false)}>Cancel</button>
      </form>
    </div>
  </div>
)}
{showEventPopup && selectedEvent && (
  <div className="modal-overlay">
    <div className="event-popup">
      <h2>{selectedEvent.eventName}</h2>
      <p><strong>Date:</strong> {new Date(selectedEvent.dateTime).toLocaleString()}</p>
      <p>{selectedEvent.msg}</p>
      <button onClick={() => setShowEventPopup(false)}>Close</button>
    </div>
  </div>
)}

{/* Events Section */}
<section className="events-section">
  <div className="events-header">
    <h3 className="events-title">Our Events</h3>
    <div className="line2"></div>
  </div>

  <div className="events-list">
  {events.map((event) => {
    const eventDate = new Date(event.dateTime);

    // Extract day and short month safely
    const day = eventDate.toLocaleDateString("en-US", { day: "2-digit" });
    const month = eventDate.toLocaleDateString("en-US", { month: "short" }).toUpperCase();

    return (
      <div className="event-card" key={event._id}>
        <div className="event-date">
          <span>{day}</span>
          <span>{month}</span>
        </div>
        <div className="event-info">
          <p className="event-tag">NEXT EVENTS</p>
          <h4>{event.eventName}</h4>
        </div>
        <div className="event-arrow" onClick={() => {
  setSelectedEvent(event);
  setShowEventPopup(true);
}}>➜</div>
      </div>
    );
  })}
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
};

export default Home;
