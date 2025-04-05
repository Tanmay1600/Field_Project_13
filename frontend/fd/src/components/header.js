import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="nav_home">
      <nav className="navbar">
        {/* Left Side - Logo & Name */}
        <div className="navbar-left">
          <div className="namanlogo">
            <img
              src="/assets/logongo1.png"
              alt="Ek Hath Madticha Logo"
              className="logo"
            />
            <Link to="/" className="sitename">
              Ek Hath Madticha
            </Link>
          </div>
        </div>

        {/* Menu Toggle Button (for Mobile) */}
        <div
          className={`menu-toggle ${menuActive ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Right Side - Navigation Links */}
        <div className={`navbar-right ${menuActive ? "active" : ""}`}>
          <Link to="/" className="nav-button">
            Home
          </Link>
          <Link to="/about" className="nav-button">
            About Us
          </Link>
          <Link to="/what-we-do" className="nav-button">
            What We Do
          </Link>
          <Link to="/contact" className="nav-button">
            Contact
          </Link>
          <Link to="/donate" className="nav-button donate-button">
            Donate
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
