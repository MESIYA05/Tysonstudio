import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/Wedding.css';
import Footer from './Footer';

import wedding1 from '../ASSETS/wedding/Wedding1.png';
import wedding2 from '../ASSETS/wedding/Wedding2.png';
import wedding3 from '../ASSETS/wedding/Wedding3.png';
import wedding4 from '../ASSETS/wedding/Wedding4.png';
import wedding5 from '../ASSETS/wedding/Wedding5.png';
import wedding6 from '../ASSETS/wedding/Wedding6.png';
import wedding7 from '../ASSETS/wedding/Wedding7.png';
import wedding8 from '../ASSETS/wedding/Wedding8.png';
import wedding9 from '../ASSETS/wedding/Wedding9.png';
import wedding10 from '../ASSETS/wedding/Wedding10.png';
import wedding11 from '../ASSETS/wedding/Wedding11.png';
import wedding12 from '../ASSETS/wedding/Wedding12.png';

const Wedding = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const galleryImages = [
    wedding11, wedding12, wedding10, wedding4,
    wedding5, wedding6, wedding7, wedding8,
    wedding9, wedding1, wedding2, wedding3
  ];

  return (
    <div className="service-page">
      {/* Hero Banner */}
      <section className="service-hero-banner">
        <div className="container">
          <span className="label" data-aos="fade-down">SERVICE COLLECTION</span>
          <h1 className="service-hero-title" data-aos="fade-up">
            WEDDINGS <span className="text-accent">.</span>
          </h1>
          <p className="service-hero-sub" data-aos="fade-up" data-aos-delay="100">
            Make sure the moment of a lifetime is captured for eternity with cinematic grandeur and authentic emotion.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="service-pricing-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="label">INVESTMENT & PACKAGES</span>
            <h2 className="display-md">Transparent Pricing Plans</h2>
            <p>Heirloom-grade coverage at exceptional value. 100% refund guarantee on cancellations within 48 hours.</p>
          </div>

          <div className="pricing-cards-grid">
            {/* Grand Wedding */}
            <div className="pricing-card" data-aos="fade-right">
              <h3 className="tier-title">Grand Wedding</h3>
              <span className="tier-tagline">Photography + Video + Drone Coverage</span>

              <div className="tier-features-list">
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>3 Functions — 4 Member Specialized Crew</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>1 Traditional + 1 Candid Photographer</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>1 Traditional + 1 Cinematic Videographer</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>1-Min Teaser, 4-Min Trailer, Full-Length Feature Video</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>1,000+ Curated High-Resolution Master Images</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>Full-frame bodies, prime & wide glass, gimbal & pro lighting</span>
                </div>
              </div>

              <div className="tier-pricing-wrap">
                <span className="pricing-label">Exclusive Offer Price</span>
                <div className="pricing-numbers">
                  <span className="price-strike">₹ 1,80,000</span>
                  <span className="price-current">₹ 1,50,000</span>
                </div>
              </div>

              <Link to="/Wedding.instabooking" className="btn btn-outline pricing-btn">
                Book Grand Shoot <span className="arrow">→</span>
              </Link>
            </div>

            {/* Luxury Wedding */}
            <div className="pricing-card featured-tier" data-aos="fade-left">
              <span className="tier-badge">POPULAR CHOICE</span>
              <h3 className="tier-title">Luxury Wedding</h3>
              <span className="tier-tagline">Full Production + Drone + Senior Team</span>

              <div className="tier-features-list">
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>5 Functions — 5 Member Senior Team</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>1 Traditional + 2 Candid Senior Photographers</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>1 Traditional + 1 Cinematic Senior Videographer</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>1-Min Teaser, 4-Min Trailer, Full-Length 4K Video</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>1,000+ Master Retouched Gallery Images</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>Top-tier cinema gear, lighting rig, dedicated art director</span>
                </div>
              </div>

              <div className="tier-pricing-wrap">
                <span className="pricing-label">Exclusive Offer Price</span>
                <div className="pricing-numbers">
                  <span className="price-strike">₹ 2,50,000</span>
                  <span className="price-current">₹ 2,20,000</span>
                </div>
              </div>

              <Link to="/Wedding.luxurybooking" className="btn btn-primary pricing-btn">
                Book Luxury Shoot <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="service-gallery-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="label">VISUAL INSPIRATION</span>
            <h2 className="display-md">Ideas for Wedding Photoshoot</h2>
            <p>Explore selected frames from our real wedding captures.</p>
          </div>

          <div className="service-gallery-grid">
            {galleryImages.map((img, i) => (
              <div 
                key={i} 
                className="gallery-showcase-item"
                data-aos="fade-up"
                data-aos-delay={(i % 4) * 100}
              >
                <img src={img} alt={`Wedding Shoot Inspiration ${i + 1}`} className="gallery-showcase-img" />
                <div className="gallery-showcase-overlay">
                  <span className="gallery-showcase-caption">Wedding Archive 0{i + 1}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="copyright-note-card" data-aos="fade-up">
            <span className="copyright-note-title">✦ STUDIO NOTICE:</span>
            <p className="copyright-note-text">
              All images are protected by Copyright Act and licensed to TYSON STUDIO. Unauthorized copying or redistribution is strictly prohibited.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Wedding;
