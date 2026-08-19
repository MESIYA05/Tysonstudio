import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/Wedding.css';
import Footer from './Footer';

import party1 from '../ASSETS/party/party1.png';
import party2 from '../ASSETS/party/party2.png';
import party3 from '../ASSETS/party/party3.png';
import party4 from '../ASSETS/party/party4.png';
import party5 from '../ASSETS/party/party5.png';
import party6 from '../ASSETS/party/party6.png';
import party7 from '../ASSETS/party/party7.png';
import party8 from '../ASSETS/party/party8.png';
import party9 from '../ASSETS/party/party9.png';
import party10 from '../ASSETS/party/party10.png';
import party11 from '../ASSETS/party/party11.png';
import party12 from '../ASSETS/party/party12.png';

const Party = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const galleryImages = [
    party1, party2, party3, party4,
    party5, party6, party7, party8,
    party9, party10, party11, party12
  ];

  return (
    <div className="service-page">
      {/* Hero Banner */}
      <section className="service-hero-banner">
        <div className="container">
          <span className="label" data-aos="fade-down">SERVICE COLLECTION</span>
          <h1 className="service-hero-title" data-aos="fade-up">
            PARTIES & EVENTS <span className="text-accent">.</span>
          </h1>
          <p className="service-hero-sub" data-aos="fade-up" data-aos-delay="100">
            Special celebrations demand vivid attention. Candid laughter, high energy, and unforgettable party moments.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="service-pricing-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="label">INVESTMENT & PACKAGES</span>
            <h2 className="display-md">Party & Celebration Plans</h2>
            <p>High-energy event documentation from birthday bashes to cocktail galas.</p>
          </div>

          <div className="pricing-cards-grid">
            {/* Insta Shoot */}
            <div className="pricing-card" data-aos="fade-right">
              <h3 className="tier-title">Insta Shoot</h3>
              <span className="tier-tagline">Essential Event Photography</span>

              <div className="tier-features-list">
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>100 Master Edited Party Images</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>2 Hours Dynamic Event Coverage</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>Full Frame Bodies with Prime & Wide Angle Lenses</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>1 Dedicated Event Photographer with Speedlights</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>Fast Digital Delivery within 72 Hours</span>
                </div>
              </div>

              <div className="tier-pricing-wrap">
                <span className="pricing-label">Exclusive Offer Price</span>
                <div className="pricing-numbers">
                  <span className="price-strike">₹ 8,999</span>
                  <span className="price-current">₹ 6,999</span>
                </div>
              </div>

              <Link to="/Party.instabooking" className="btn btn-outline pricing-btn">
                Book Insta Party Shoot <span className="arrow">→</span>
              </Link>
            </div>

            {/* Luxury Shoot */}
            <div className="pricing-card featured-tier" data-aos="fade-left">
              <span className="tier-badge">POPULAR CHOICE</span>
              <h3 className="tier-title">Luxury Shoot</h3>
              <span className="tier-tagline">Photography + Cinematic Video + Reels</span>

              <div className="tier-features-list">
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>200 Master Edited High-Res Images</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>2 High-Energy 4K Reels (1 Min each)</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>4 Hours Extended Party Coverage</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>1 Photographer + 1 Event Videographer with Gimbal</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>Atmospheric Low-Light Audio & Cinematic Color Grade</span>
                </div>
              </div>

              <div className="tier-pricing-wrap">
                <span className="pricing-label">Exclusive Offer Price</span>
                <div className="pricing-numbers">
                  <span className="price-strike">₹ 15,999</span>
                  <span className="price-current">₹ 12,999</span>
                </div>
              </div>

              <Link to="/Party.luxurybooking" className="btn btn-primary pricing-btn">
                Book Luxury Party Shoot <span className="arrow">→</span>
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
            <h2 className="display-md">Ideas for Party Photoshoots</h2>
            <p>From lively birthday toasts to electric dance floors and elegant dinner galas.</p>
          </div>

          <div className="service-gallery-grid">
            {galleryImages.map((img, i) => (
              <div 
                key={i} 
                className="gallery-showcase-item"
                data-aos="fade-up"
                data-aos-delay={(i % 4) * 100}
              >
                <img src={img} alt={`Party & Celebration Shoot ${i + 1}`} className="gallery-showcase-img" />
                <div className="gallery-showcase-overlay">
                  <span className="gallery-showcase-caption">Party Frame 0{i + 1}</span>
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

export default Party;
