import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/Wedding.css';
import Footer from './Footer';

import vacation1 from '../ASSETS/vacation/vacation1.png';
import vacation2 from '../ASSETS/vacation/vacation2.png';
import vacation3 from '../ASSETS/vacation/vacation3.png';
import vacation4 from '../ASSETS/vacation/vacation4.png';
import vacation5 from '../ASSETS/vacation/vacation5.png';
import vacation6 from '../ASSETS/vacation/vacation6.png';
import vacation7 from '../ASSETS/vacation/vacation7.png';
import vacation8 from '../ASSETS/vacation/vacation8.png';
import vacation9 from '../ASSETS/vacation/vacation9.png';
import vacation10 from '../ASSETS/vacation/vacation10.png';
import vacation11 from '../ASSETS/vacation/vacation11.png';
import vacation12 from '../ASSETS/vacation/vacation12.png';

const Vacation = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const galleryImages = [
    vacation1, vacation2, vacation3, vacation4,
    vacation5, vacation6, vacation7, vacation8,
    vacation9, vacation10, vacation11, vacation12
  ];

  return (
    <div className="service-page">
      {/* Hero Banner */}
      <section className="service-hero-banner">
        <div className="container">
          <span className="label" data-aos="fade-down">SERVICE COLLECTION</span>
          <h1 className="service-hero-title" data-aos="fade-up">
            VACATION & TRAVEL <span className="text-accent">.</span>
          </h1>
          <p className="service-hero-sub" data-aos="fade-up" data-aos-delay="100">
            Spent a fortune traveling the globe? Freeze your destination adventures with editorial wanderlust.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="service-pricing-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="label">INVESTMENT & PACKAGES</span>
            <h2 className="display-md">Vacation Shoot Plans</h2>
            <p>On-location holiday shoots available across 135+ international destinations.</p>
          </div>

          <div className="pricing-cards-grid">
            {/* Insta Shoot */}
            <div className="pricing-card" data-aos="fade-right">
              <h3 className="tier-title">Insta Shoot</h3>
              <span className="tier-tagline">Destination Portrait Session</span>

              <div className="tier-features-list">
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>25 Master Retouched Digital Images</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>1 Hour Scenic Location Photography</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>1 Destination Spot / Landmark</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>1 Local Destination Expert Photographer</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>Fast Delivery during your trip within 48 Hours</span>
                </div>
              </div>

              <div className="tier-pricing-wrap">
                <span className="pricing-label">Exclusive Offer Price</span>
                <div className="pricing-numbers">
                  <span className="price-strike">₹ 9,999</span>
                  <span className="price-current">₹ 5,999</span>
                </div>
              </div>

              <Link to="/Vacation.instabooking" className="btn btn-outline pricing-btn">
                Book Insta Vacation Shoot <span className="arrow">→</span>
              </Link>
            </div>

            {/* Luxury Shoot */}
            <div className="pricing-card featured-tier" data-aos="fade-left">
              <span className="tier-badge">POPULAR CHOICE</span>
              <h3 className="tier-title">Luxury Shoot</h3>
              <span className="tier-tagline">Photography + Cinematic Travel Reels</span>

              <div className="tier-features-list">
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>35 Master Retouched Travel Images</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>2 Cinematic Travel Reels (30s 4K)</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>2 Hours Extended Travel Shoot</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>Multiple Angle Coverage at Iconic Spots</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>Solo, Couple, or Family Group Photos</span>
                </div>
              </div>

              <div className="tier-pricing-wrap">
                <span className="pricing-label">Exclusive Offer Price</span>
                <div className="pricing-numbers">
                  <span className="price-strike">₹ 19,999</span>
                  <span className="price-current">₹ 14,999</span>
                </div>
              </div>

              <Link to="/Vacation.luxurybooking" className="btn btn-primary pricing-btn">
                Book Luxury Vacation Shoot <span className="arrow">→</span>
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
            <h2 className="display-md">Ideas for Vacation Shoots</h2>
            <p>Golden hours, dramatic skylines, tropical shores, and historic architectures.</p>
          </div>

          <div className="service-gallery-grid">
            {galleryImages.map((img, i) => (
              <div 
                key={i} 
                className="gallery-showcase-item"
                data-aos="fade-up"
                data-aos-delay={(i % 4) * 100}
              >
                <img src={img} alt={`Vacation & Travel Shoot ${i + 1}`} className="gallery-showcase-img" />
                <div className="gallery-showcase-overlay">
                  <span className="gallery-showcase-caption">Travel Diary 0{i + 1}</span>
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

export default Vacation;
