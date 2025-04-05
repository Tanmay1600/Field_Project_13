import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/donate.css';
import Header from '../components/header'; // Adjust the path if needed

function Donate() {
  return (
    <>
    <Header />
    <>
    <div>
      

    <div className="donate-page">
      {/* Hero Section */}
      <section className="donate-hero">
        <div className="donate-header">
          <span className="donate-label">DONATE</span>
          <h1>Making a donation for our children.</h1>
          <p>When you donate, you're supporting effective care to children with special needs—an investment in the leaders of tomorrow.</p>
          <button className="donate-now-btn">Donate now</button>
        </div>
        <div className="donate-image">
          <img src="/images/donate-box.jpg" alt="Donation box" />
        </div>
      </section>

      {/* How to Contribute Section */}
      <section className="contribute-section">
        <div className="contribute-content">
          <h2>How you can contribute to caring for our kids</h2>
          <p>Every child deserves a bright future, and your support can make that happen. By contributing to our cause, you help provide essential resources such as education, healthcare, and a safe environment for children in need. Your generosity ensures that these young minds have the opportunity to learn, grow, and thrive.</p>
        </div>
        
        <div className="contribute-tabs">
          <div className="tab-navigation">
            <button className="tab-button active">Overview</button>
            <button className="tab-button">Impact</button>
            <button className="tab-button">What You get</button>
          </div>
          
          <div className="tab-content">
            <p>Through our initiatives, we ensure that every child in our vicinity has the opportunity to grow, learn, and succeed. Our dedicated team and volunteers work tirelessly to make a meaningful impact in their lives, offering guidance, mentorship, and essential resources.</p>
            <p>By partnering with us, you become a part of this transformative journey. Every effort counts, and together, we can make a difference in the lives of countless children.</p>
          </div>
        </div>
      </section>

      {/* How We Use Your Donation Section */}
      <section className="donation-usage-section">
        <h2>How we use your donation</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, similique incidunt! Impedit cum ratione facilis corporis incidunt iusto neque commodi ducimus exercitationem voluptatibus debitis obcaecat excepturi voluptas quidem, quas ullam aliquam quibusdam accusantium nostrum id ipsum architecto fuga quasi quis! Vel quam et esse, quasi iste consectetur dicta rem vitae blanditiis eius cupiditate doloremque est hic nostrum totam? Ipsum explicabo nobis velit hic iste tempora assumenda! Sint aspernatur quidem, iure porro accusamus aperiam labore, quasi adipisci laudantium mollitia saepe odio vero aliquam cumque neque autem et sunt omnis aliquid necessitatibus? Cum porro ad amet mollitia quos, accusantium perferendis impedit quasi!</p>
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
  </div>
      
    </>
    </>
  );
}

export default Donate;