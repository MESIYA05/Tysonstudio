import React, { useState } from 'react';
import './Navbar.css'; // Optional: For styling
import { Link, } from 'react-router-dom';


import NavDropdown from 'react-bootstrap/NavDropdown';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="headport">
        <a href="/"><span>TYSON</span> STUDIO</a>
      </div>
      <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
      
        <Link to="/">HOME</Link>
        <NavDropdown title="SERVICES" id="basic-nav-dropdown">
          <NavDropdown.Item href="./Wedding">WEDDING</NavDropdown.Item>
          <NavDropdown.Item href="./Prewedding">PRE WEDDING</NavDropdown.Item>
          <NavDropdown.Item href="./Maternity">MATERNITY</NavDropdown.Item>
          <NavDropdown.Item href="./Kids">KIDS & BABY</NavDropdown.Item>
          <NavDropdown.Item href="./Party">PARTY</NavDropdown.Item>
          <NavDropdown.Item href="./Vacation">VACATION</NavDropdown.Item>
        </NavDropdown>
        <Link to="/Gallery">GALLERY</Link>
        <Link to="/About">ABOUT </Link>
        <Link to="/Review" className='twomenu'>REVIEWS</Link>
        <Link to="/Contact" className='twomenu'>CONTACT US</Link>
      </div>
      <div className={`menu-toggle ${isMenuOpen ? "active" : ""}`}               onClick={toggleMenu}>
       
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
