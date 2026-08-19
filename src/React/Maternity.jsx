import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/Wedding.css';
import Footer from './Footer';

import maternity1 from '../ASSETS/maternity/maternity1.png';
import maternity2 from '../ASSETS/maternity/maternity2.png';
import maternity3 from '../ASSETS/maternity/maternity3.png';
import maternity4 from '../ASSETS/maternity/maternity4.png';
import maternity5 from '../ASSETS/maternity/maternity5.png';
import maternity6 from '../ASSETS/maternity/maternity6.png';
import maternity7 from '../ASSETS/maternity/maternity7.png';
import maternity8 from '../ASSETS/maternity/maternity8.png';
import maternity9 from '../ASSETS/maternity/maternity9.png';
import maternity10 from '../ASSETS/maternity/maternity10.png';
import maternity11 from '../ASSETS/maternity/maternity11.png';
import maternity12 from '../ASSETS/maternity/maternity12.png';

const Maternity = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const galleryImages = [
    maternity1, maternity2, maternity3, maternity4,
    maternity5, maternity6, maternity7, maternity8,
    maternity9, maternity10, maternity11, maternity12
  ];

  return (
    <div className="service-page">
      {/* Hero Banner */}
      <section className="service-hero-banner">
        <div className="container">
          <span className="label" data-aos="fade-down">SERVICE COLLECTION</span>
          <h1 className="service-hero-title" data-aos="fade-up">
            MATERNITY <span className="text-accent">.</span>
          </h1>
          <p className="service-hero-sub" data-aos="fade-up" data-aos-delay="100">
            Preserve the tender grace of motherhood and joyful beginnings with soft, ethereal portraiture.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="service-pricing-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="label">INVESTMENT & PACKAGES</span>
            <h2 className="display-md">Maternity Pricing Plans</h2>
            <p>Comfortable studio and outdoor sessions designed for expecting mothers.</p>
          </div>

          <div className="pricing-cards-grid">
            {/* Insta Mom Shoot */}
            <div className="pricing-card" data-aos="fade-right">
              <h3 className="tier-title">Insta Mom Shoot</h3>
              <span className="tier-tagline">Essential Maternity Photography</span>

              <div className="tier-features-list">
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>15 Curated & Edited Fine Art Images</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>2 Hours Comfortable Shoot Duration</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>1 Studio / Outdoor Location & 2 Wardrobe Changes</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>1 Senior Portrait Artist with Soft Diffused Lighting</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>High-Resolution Digital Delivery</span>
                </div>
              </div>

              <div className="tier-pricing-wrap">
                <span className="pricing-label">Exclusive Offer Price</span>
                <div className="pricing-numbers">
                  <span className="price-strike">₹ 27,999</span>
                  <span className="price-current">₹ 25,999</span>
                </div>
              </div>

              <Link to="/Maternity.instabooking" className="btn btn-outline pricing-btn">
                Book Insta Mom Shoot <span className="arrow">→</span>
              </Link>
            </div>

            {/* Super Mom Shoot */}
            <div className="pricing-card featured-tier" data-aos="fade-left">
              <span className="tier-badge">POPULAR CHOICE</span>
              <h3 className="tier-title">Super Mom Shoot</h3>
              <span className="tier-tagline">Photography + Reels + Designer Gown</span>

              <div className="tier-features-list">
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>35 Master Retouched Portrait Images</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>2 Cinematic Social Reels (30s 4K)</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>1 Premium Maternity Designer Gown Included</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>Up to 4 Hours Extended Shoot Window</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>Full Frame Prime Studio Setup & Partner/Sibling Portraits</span>
                </div>
              </div>

              <div className="tier-pricing-wrap">
                <span className="pricing-label">Exclusive Offer Price</span>
                <div className="pricing-numbers">
                  <span className="price-strike">₹ 39,999</span>
                  <span className="price-current">₹ 34,999</span>
                </div>
              </div>

              <Link to="/Maternity.luxurybooking" className="btn btn-primary pricing-btn">
                Book Super Mom Shoot <span className="arrow">→</span>
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
            <h2 className="display-md">Ideas for Maternity Shoots</h2>
            <p>Capturing the anticipation, strength, and love of motherhood.</p>
          </div>

          <div className="service-gallery-grid">
            {galleryImages.map((img, i) => (
              <div 
                key={i} 
                className="gallery-showcase-item"
                data-aos="fade-up"
                data-aos-delay={(i % 4) * 100}
              >
                <img src={img} alt={`Maternity Inspiration ${i + 1}`} className="gallery-showcase-img" />
                <div className="gallery-showcase-overlay">
                  <span className="gallery-showcase-caption">Maternity Story 0{i + 1}</span>
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

export default Maternity;
