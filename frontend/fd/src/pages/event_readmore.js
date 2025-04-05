import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/event_readmore.css';

function EventReadMore() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="logo">
          <Link to="/">
            <img src="/images/logo.png" alt="Ek Hath Madticha Logo" />
            <span>Ek Hath Madticha</span>
          </Link>
        </div>
        <nav className="nav-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about_us">About us</Link></li>
            <li><Link to="/what_we_do">What We Do</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Link to="/donate" className="donate-btn">Donate</Link>
      </header>

      <div className="event-detail-page">
        {/* Event Hero Section */}
        <section className="event-hero">
          <div className="event-hero-content">
            <h1>A day with our wonderful children</h1>
            <div className="event-meta">
              <div className="event-location">
                <i className="location-icon"></i>
                <span>Sai Nagar, Anand Nagar, Thane</span>
              </div>
              <div className="event-date">
                <i className="date-icon"></i>
                <span>FEB 13, 2025 9:30 AM</span>
              </div>
              <img src="/images/logo.png" alt="Ek Hath Madticha Logo" />
            </div>
          </div>
        </section>

        {/* Events Schedule Section */}
        <section className="events-schedule">
          <h2>Events and their Schedule</h2>
          
          <div className="events-list">
            {/* Event Card 1 */}
            <div className="event-card">
              <div className="event-date-box">
                <div className="event-day">23</div>
                <div className="event-month">APR</div>
              </div>
              <div className="event-details">
                <div className="event-label">NEXT EVENTS</div>
                <h3 className="event-title">Book Donation Drive</h3>
                <p className="event-description">Distributing educational books and storybooks to underprivileged children to encourage reading habits.</p>
              </div>
              <div className="event-arrow">
                <Link to="/events/book-donation">
                  <i className="arrow-icon">→</i>
                </Link>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="event-card">
              <div className="event-date-box">
                <div className="event-day">5</div>
                <div className="event-month">MAY</div>
              </div>
              <div className="event-details">
                <div className="event-label">NEXT EVENTS</div>
                <h3 className="event-title">Health & Hygiene Awareness Camp</h3>
                <p className="event-description">Conducting a workshop on basic hygiene practices and distributing hygiene kits to children and families.</p>
              </div>
              <div className="event-arrow">
                <Link to="/events/health-hygiene">
                  <i className="arrow-icon">→</i>
                </Link>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="event-card">
              <div className="event-date-box">
                <div className="event-day">16</div>
                <div className="event-month">MAY</div>
              </div>
              <div className="event-details">
                <div className="event-label">NEXT EVENTS</div>
                <h3 className="event-title">Tree Plantation Drive</h3>
                <p className="event-description">Engaging children and volunteers in planting trees to promote environmental awareness and sustainability.</p>
              </div>
              <div className="event-arrow">
                <Link to="/events/tree-plantation">
                  <i className="arrow-icon">→</i>
                </Link>
              </div>
            </div>

            {/* Event Card 4 */}
            <div className="event-card">
              <div className="event-date-box">
                <div className="event-day">25</div>
                <div className="event-month">MAY</div>
              </div>
              <div className="event-details">
                <div className="event-label">NEXT EVENTS</div>
                <h3 className="event-title">World Environment Day – Cleanliness Drive</h3>
                <p className="event-description">Encouraging children and volunteers to clean public spaces</p>
              </div>
              <div className="event-arrow">
                <Link to="/events/cleanliness-drive">
                  <i className="arrow-icon">→</i>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

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
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/what_we_do">What We Do</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>More</h4>
            <ul>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/events">Events</Link></li>
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
          <p>© 2025 Ek Hath Madticha. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default EventReadMore;