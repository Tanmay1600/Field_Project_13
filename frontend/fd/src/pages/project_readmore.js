import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/project_readmore.css';

function ProjectReadMore() {
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

      <div className="project-detail-page">
        {/* Project Header */}
        <section className="project-header">
          <div className="label-container">
            <span className="project-label">OUR PROJECT</span>
          </div>
          <h1 className="project-title">Mission Smile 1k: Outdoor charity outreach</h1>
          
          <div className="project-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quia fugit dignissimos ullam, magnam dolorum quaerat? Natus quaerat, voluptatem, facere quidem, voluptates iste quos quam quia eum repellendus et Consequatur aliquam ut labore, amet ut maiores quia molestias ut dolor fugiat culpa assumenda dignissim recusandae, ut qui maxime quia. Nemo nemo corrupti ullam nesciunt quos aut accusamus consectetur dignissim corrupti fugiat supiente enim reprehenderit, quam, nulla eveniet architecto ipsum ipsa vel voluptates. Perferendis, quis officiis. Quia, minus, sed nulla cum temporibus eveniet repellat quaerat quia qui voluptate quisquam tenetur accusantium quo. Quisquam corporis temporibus ut aut dolore mollitia a autem accusantium repudiandae alias quis veniam laudantium quae quaerate autem a nemo mollitia perspiciatis voluptate laboriosam, et quam! Nemo eum, voluptatum quae quaerate autem a nemo mollitia perspiciatis voluptate laboriosam, et commutatur unde dolores. Impedit modi ex, magnam vitae dignissimos error exercitationem, quis quae alias dolorem assumenda maiore eligendi quibusdam omnis, nemo sapiente ipsa aut aut architecto molestias nostrum. Repudiandae quos, molestias magni illo nemo, minus blanditiis fugiatEx consectetur minus alias incidunt facere? adipisicing, Aliquid illo, assumenda facere qui perferis dolore repellendus dolores quaerat.</p>
          </div>
        </section>

        {/* Project Image */}
        <section className="project-image-container">
          <img src="/images/project-image.jpg" alt="Mission Smile 1k Charity Outreach" className="project-main-image" />
        </section>

        {/* Additional Project Details */}
        <section className="project-additional-details">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, similique incidunt! Impedit cum ratione facilis corporis incidunt iusto neque commodi ducimus exercitationem voluptatibus debitis obcaecat excepturi voluptas quidem, quas ullam aliquam quibusdam accusantium nostrum id ipsum architecto fuga quasi quis! Vel quam et esse, quasi iste consectetur dicta rem vitae blanditiis eius cupiditate doloremque est hic nostrum totam? Ipsum explicabo nobis velit hic iste tempora assumenda! Sint aspernatur quidem, iure porro accusamus aperiam labore, quasi adipisci laudantium mollitia saepe odio vero aliquam cumque neque autem et sunt omnis aliquid necessitatibus? Cum porro ad amet mollitia quos, accusantium perferendis impedit quasi!</p>
        </section>

        {/* More Projects Section */}
        <section className="more-projects-section">
          <div className="section-header">
            <span className="section-label">MORE PROJECTS</span>
          </div>

          <div className="projects-grid">
            {/* Project Card 1 */}
            <div className="project-card">
              <div className="project-card-image">
                <img src="/images/project1.jpg" alt="Mission smile 1k" />
              </div>
              <div className="project-card-content">
                <h3>Mission Learn Under the Sky</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos vitae quis illo quis.</p>
                <Link to="/projects/mission-smile" className="learn-more-btn">Learn more</Link>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="project-card">
              <div className="project-card-image">
                <img src="/images/project2.jpg" alt="Weekly excursions" />
              </div>
              <div className="project-card-content">
                <h3>Weekly excursions</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos vitae quis illo quis.</p>
                <Link to="/projects/weekly-excursions" className="learn-more-btn">Learn more</Link>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="project-card">
              <div className="project-card-image">
                <img src="/images/project3.jpg" alt="Monthly public awareness" />
              </div>
              <div className="project-card-content">
                <h3>Monthly public awareness</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos vitae quis illo quis.</p>
                <Link to="/projects/public-awareness" className="learn-more-btn">Learn more</Link>
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

export default ProjectReadMore;