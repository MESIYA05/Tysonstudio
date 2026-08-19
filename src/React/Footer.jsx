import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <h2 className="footer-logo">
              <span className="text-accent">TYSON</span> STUDIO
            </h2>
            <p className="body-sm" style={{ marginTop: '1rem', maxWidth: '300px' }}>
              Creating timeless visual stories that capture your most meaningful moments with artistry and intention.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/mesiya.mesiya.927?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.instagram.com/darkness_shadow_boy_05" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="http://wa.me/+919361726533" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">Navigation</h4>
            <nav className="footer-nav" aria-label="Footer navigation">
              <Link to="/">Home</Link>
              <Link to="/Gallery">Gallery</Link>
              <Link to="/About">About</Link>
              <Link to="/Review">Reviews</Link>
              <Link to="/Contact">Contact</Link>
            </nav>
          </div>

          {/* Services Column */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">Services</h4>
            <nav className="footer-nav" aria-label="Services navigation">
              <Link to="/Wedding">Wedding</Link>
              <Link to="/Prewedding">Pre Wedding</Link>
              <Link to="/Maternity">Maternity</Link>
              <Link to="/Kids">Kids & Baby</Link>
              <Link to="/Party">Party</Link>
              <Link to="/Vacation">Vacation</Link>
            </nav>
          </div>

          {/* Contact Column */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">Get in Touch</h4>
            <div className="footer-contact">
              <a href="tel:9361726533">
                <FontAwesomeIcon icon={faPhone} className="footer-contact-icon" />
                +91 9361726533
              </a>
              <a href="mailto:mesiya.career@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} className="footer-contact-icon" />
                mesiya.career@gmail.com
              </a>
              <a href="http://wa.me/+919361726533" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} className="footer-contact-icon" />
                Send a Message
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; 2026 <span className="text-accent">TYSON</span> STUDIO. All rights reserved.</p>
          <p className="footer-credit">Premium Photography Services</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
