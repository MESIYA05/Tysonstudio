import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/Wedding.css';
import Footer from './Footer';

import Prewedding1 from '../ASSETS/pre wedding/prewedding1.png';
import Prewedding2 from '../ASSETS/pre wedding/prewedding2.png';
import Prewedding3 from '../ASSETS/pre wedding/prewedding3.png';
import Prewedding4 from '../ASSETS/pre wedding/prewedding4.png';
import Prewedding5 from '../ASSETS/pre wedding/prewedding5.png';
import Prewedding6 from '../ASSETS/pre wedding/prewedding6.png';
import Prewedding7 from '../ASSETS/pre wedding/prewedding7.png';
import Prewedding8 from '../ASSETS/pre wedding/prewedding8.png';
import Prewedding9 from '../ASSETS/pre wedding/prewedding9.png';
import Prewedding10 from '../ASSETS/pre wedding/prewedding10.png';
import Prewedding11 from '../ASSETS/pre wedding/prewedding12.png';
import Prewedding12 from '../ASSETS/pre wedding/prewedding12.png';

const Prewedding = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const galleryImages = [
    Prewedding1, Prewedding2, Prewedding3, Prewedding4,
    Prewedding5, Prewedding6, Prewedding7, Prewedding8,
    Prewedding9, Prewedding10, Prewedding11, Prewedding12
  ];

  return (
    <div className="service-page">
      {/* Hero Banner */}
      <section className="service-hero-banner">
        <div className="container">
          <span className="label" data-aos="fade-down">SERVICE COLLECTION</span>
          <h1 className="service-hero-title" data-aos="fade-up">
            PRE WEDDINGS <span className="text-accent">.</span>
          </h1>
          <p className="service-hero-sub" data-aos="fade-up" data-aos-delay="100">
            Intimate portraits, cinematic outdoor journeys, and romantic love stories crafted with artistic grace.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="service-pricing-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="label">INVESTMENT & PACKAGES</span>
            <h2 className="display-md">Pre Wedding Pricing Plans</h2>
            <p>Tailored session packages suited for scenic locations and natural storytelling.</p>
          </div>

          <div className="pricing-cards-grid">
            {/* Insta Shoot */}
            <div className="pricing-card" data-aos="fade-right">
              <h3 className="tier-title">Insta Shoot</h3>
              <span className="tier-tagline">Photography Session Only</span>

              <div className="tier-features-list">
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>25 Master Retouched High-Res Images</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>4 Hours Active Shoot Duration</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>2 Curated Locations & 2 Wardrobe Changes</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>Full Frame Camera & 1 Senior Photographer</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>Prime Portrait Lenses & Ambient Light Balancing</span>
                </div>
              </div>

              <div className="tier-pricing-wrap">
                <span className="pricing-label">Exclusive Offer Price</span>
                <div className="pricing-numbers">
                  <span className="price-strike">₹ 16,999</span>
                  <span className="price-current">₹ 15,999</span>
                </div>
              </div>

              <Link to="/Prewedding.instabooking" className="btn btn-outline pricing-btn">
                Book Insta Shoot <span className="arrow">→</span>
              </Link>
            </div>

            {/* Luxury Shoot */}
            <div className="pricing-card featured-tier" data-aos="fade-left">
              <span className="tier-badge">POPULAR CHOICE</span>
              <h3 className="tier-title">Luxury Shoot</h3>
              <span className="tier-tagline">Photography + Cinematic Video</span>

              <div className="tier-features-list">
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>35 Master Retouched Gallery Images</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>2-3 Minutes Cinematic 4K Teaser/Video</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>8 Hours Extended Shoot Duration</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>3 Locations with up to 3 Wardrobe Changes</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>1 Senior Photographer + 1 Cinematographer</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>Full Frame Cinema Rig, Gimbal & Pro Audio/Lighting</span>
                </div>
              </div>

              <div className="tier-pricing-wrap">
                <span className="pricing-label">Exclusive Offer Price</span>
                <div className="pricing-numbers">
                  <span className="price-strike">₹ 35,999</span>
                  <span className="price-current">₹ 33,999</span>
                </div>
              </div>

              <Link to="/Prewedding.luxurybooking" className="btn btn-primary pricing-btn">
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
            <h2 className="display-md">Ideas for Pre Wedding Shoots</h2>
            <p>Get inspired by our couple portfolios and dramatic landscape compositions.</p>
          </div>

          <div className="service-gallery-grid">
            {galleryImages.map((img, i) => (
              <div 
                key={i} 
                className="gallery-showcase-item"
                data-aos="fade-up"
                data-aos-delay={(i % 4) * 100}
              >
                <img src={img} alt={`Pre Wedding Inspiration ${i + 1}`} className="gallery-showcase-img" />
                <div className="gallery-showcase-overlay">
                  <span className="gallery-showcase-caption">Pre-Wedding Story 0{i + 1}</span>
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

export default Prewedding;
