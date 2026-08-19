import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Scroll detection for transparent → solid navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setIsServicesOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  const services = [
    { name: 'Wedding', path: '/Wedding' },
    { name: 'Pre Wedding', path: '/Prewedding' },
    { name: 'Maternity', path: '/Maternity' },
    { name: 'Kids & Baby', path: '/Kids' },
    { name: 'Party', path: '/Party' },
    { name: 'Vacation', path: '/Vacation' },
  ];

  const isServicePage = services.some(s => location.pathname === s.path);

  return (
    <>
      <nav className={`ts-navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="ts-navbar-inner">
          {/* Logo */}
          <Link to="/" className="ts-logo" onClick={closeMenu}>
            <span className="ts-logo-accent">TYSON</span> STUDIO
          </Link>

          {/* Navigation Links */}
          <div className={`ts-nav-links ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/" className={`ts-nav-link ${isActive('/') ? 'active' : ''}`} onClick={closeMenu}>
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="ts-dropdown" ref={dropdownRef}>
              <button
                className={`ts-nav-link ts-dropdown-trigger ${isServicePage ? 'active' : ''}`}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                Services
                <svg className={`ts-dropdown-arrow ${isServicesOpen ? 'open' : ''}`} width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className={`ts-dropdown-menu ${isServicesOpen ? 'open' : ''}`}>
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className={`ts-dropdown-item ${isActive(service.path) ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/Gallery" className={`ts-nav-link ${isActive('/Gallery') ? 'active' : ''}`} onClick={closeMenu}>
              Gallery
            </Link>
            <Link to="/About" className={`ts-nav-link ${isActive('/About') ? 'active' : ''}`} onClick={closeMenu}>
              About
            </Link>
            <Link to="/Review" className={`ts-nav-link ${isActive('/Review') ? 'active' : ''}`} onClick={closeMenu}>
              Reviews
            </Link>
            <Link to="/Contact" className={`ts-nav-link ${isActive('/Contact') ? 'active' : ''}`} onClick={closeMenu}>
              Contact
            </Link>

            {/* Mobile Only CTA inside mobile drawer */}
            <div className="ts-mobile-cta-wrapper">
              <Link to="/Contact" className="ts-mobile-btn" onClick={closeMenu}>
                Book a Shoot <span className="arrow">→</span>
              </Link>
            </div>
          </div>

          {/* Desktop Only CTA Button */}
          <Link to="/Contact" className="ts-desktop-cta">
            Book a Shoot <span className="arrow">→</span>
          </Link>

          {/* Hamburger Toggle */}
          <button
            className={`ts-hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <span className="ts-hamburger-line"></span>
            <span className="ts-hamburger-line"></span>
            <span className="ts-hamburger-line"></span>
          </button>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {isMenuOpen && <div className="ts-nav-overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default Navbar;
