import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/header.css';
import logo from '../../assets/images/hastavem.png';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

 
  return (
    <div className='nav_home' >
      <nav className="navbar">
        <div className="navbar-left">
          <div className='namanlogo'>
            <div className="logo-container">
              <img src={logo} alt="CanteenConnect Logo" className="logo" />
            </div>
            <Link to="/" className='sitename'>Ek Hath Madticha</Link>
          </div>
          <div className={`menu-toggle ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={`navbar-right ${menuActive ? 'active' : ''}`}>
          
          
          
            
            <Link to="/wishlist" className="nav-button">Home</Link>
            <Link to="/cart" className="nav-button">About us</Link>
            <Link to="/orders" className="nav-button">What we do</Link>
            <Link to="/orders" className="nav-button">Contact</Link>
            <Link to="/orders" className="nav-button">Donate</Link>
           
          
        </div>
      </nav>
    </div>
  );
};

export default Header;