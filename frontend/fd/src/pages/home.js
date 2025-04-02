import React from "react";
import "../styles/home.css";
import WhatWeDo from "../assets/whatWeDo.png";

const Homepage = () => {
  return (
    <div className="homepage-container">
      {/* About Us Section */}
      <section className="homepage-about">
        <div className="homepage-about-content">
          <h3>ABOUT US</h3>
          <h2>
            We provide basic education for children and essential living amenities for those in need
          </h2>
          <p>
            We believe in nurturing young minds by providing basic education, essential care, and opportunities to help them.
          </p>
          <p>
            We are committed to making a difference by ensuring that basic needs and educational opportunities reach those who need them most.
          </p>
          <button className="homepage-learn-more">Learn more</button>
        </div>
      </section>
        <section>
        <img src={WhatWeDo} alt="What We Do" className="homepage-image"/>
        </section>
      {/* Services Section */}
      <section className="homepage-services">
        <div className="homepage-services-content">
          <h3>WHAT WE DO</h3>
          <h2>Some services we provide for our children</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>
          <div className="homepage-services-list">
            <div className="homepage-service-item">
              <h4>Education</h4>
              <p>
                By offering children a strong educational foundation, we empower them to build a better and more promising future.
              </p>
            </div>
            <div className="homepage-service-item">
              <h4>Clothes</h4>
              <p>
                We provide children with clothing donated by generous supporters.
              </p>
            </div>
            <div className="homepage-service-item">
              <h4>Books</h4>
              <p>
                We provide children with books, storybooks, and educational materials to nurture their curiosity and love for learning.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
