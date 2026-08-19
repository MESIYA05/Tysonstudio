import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/Wedding.css';
import Footer from './Footer';

import kids1 from '../ASSETS/kids/kids1.png';
import kids2 from '../ASSETS/kids/kids2.png';
import kids3 from '../ASSETS/kids/kids3.png';
import kids5 from '../ASSETS/kids/kids5.png';
import kids7 from '../ASSETS/kids/kids7.png';
import kids8 from '../ASSETS/kids/kids8.png';
import kids9 from '../ASSETS/kids/kids9.png';
import kids10 from '../ASSETS/kids/kids10.png';
import kids11 from '../ASSETS/kids/kids11.png';
import kids12 from '../ASSETS/kids/kids12.png';
import gallery7 from '../ASSETS/gallery/gallery7.png';
import gallery8 from '../ASSETS/gallery/gallery8.png';

const KIds = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const galleryImages = [
    kids7, kids12, kids11, gallery7,
    kids5, gallery8, kids3, kids8,
    kids9, kids10, kids2, kids1
  ];

  return (
    <div className="service-page">
      {/* Hero Banner */}
      <section className="service-hero-banner">
        <div className="container">
          <span className="label" data-aos="fade-down">SERVICE COLLECTION</span>
          <h1 className="service-hero-title" data-aos="fade-up">
            KIDS & BABIES <span className="text-accent">.</span>
          </h1>
          <p className="service-hero-sub" data-aos="fade-up" data-aos-delay="100">
            Kids grow up fast. Freeze their purest smiles, joyful laughter, and delightful childhood milestones forever.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="service-pricing-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="label">INVESTMENT & PACKAGES</span>
            <h2 className="display-md">Kids & Baby Pricing Plans</h2>
            <p>Gentle, patient, and playful photoshoots with custom themed props.</p>
          </div>

          <div className="pricing-cards-grid">
            {/* Insta Baby Shoot */}
            <div className="pricing-card" data-aos="fade-right">
              <h3 className="tier-title">Insta Baby Shoot</h3>
              <span className="tier-tagline">Essential Baby Photography</span>

              <div className="tier-features-list">
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>15 Curated & Master Edited Baby Portraits</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>2 Creative Themed Setups & Costume Changes</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>2 Hours Patient & Relaxed Shoot Duration</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>1 Child-Specialist Photographer with Safe Studio Lights</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>Parent & Sibling Mini-Session Included</span>
                </div>
              </div>

              <div className="tier-pricing-wrap">
                <span className="pricing-label">Exclusive Offer Price</span>
                <div className="pricing-numbers">
                  <span className="price-strike">₹ 27,999</span>
                  <span className="price-current">₹ 21,999</span>
                </div>
              </div>

              <Link to="/Kids.instabooking" className="btn btn-outline pricing-btn">
                Book Insta Baby Shoot <span className="arrow">→</span>
              </Link>
            </div>

            {/* Super Baby Shoot */}
            <div className="pricing-card featured-tier" data-aos="fade-left">
              <span className="tier-badge">POPULAR CHOICE</span>
              <h3 className="tier-title">Super Baby Shoot</h3>
              <span className="tier-tagline">Photography + Reels + Wardrobe</span>

              <div className="tier-features-list">
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>30 Master Retouched Gallery Images</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>3 Fun 4K Social Media Reels (30s each)</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>4 Custom Studio Setups & Themed Costumes</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>3 Hours Extended Creative Play Shoot</span>
                </div>
                <div className="tier-feature-item">
                  <span className="tier-feature-bullet">✦</span>
                  <span>Full Frame Cinema Cameras & Family Portraits</span>
                </div>
              </div>

              <div className="tier-pricing-wrap">
                <span className="pricing-label">Exclusive Offer Price</span>
                <div className="pricing-numbers">
                  <span className="price-strike">₹ 39,999</span>
                  <span className="price-current">₹ 34,999</span>
                </div>
              </div>

              <Link to="/Kids.luxurybooking" className="btn btn-primary pricing-btn">
                Book Super Baby Shoot <span className="arrow">→</span>
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
            <h2 className="display-md">Ideas for Kids & Baby Shoots</h2>
            <p>Whimsical themes, genuine expressions, and boundless childhood energy.</p>
          </div>

          <div className="service-gallery-grid">
            {galleryImages.map((img, i) => (
              <div 
                key={i} 
                className="gallery-showcase-item"
                data-aos="fade-up"
                data-aos-delay={(i % 4) * 100}
              >
                <img src={img} alt={`Kids & Baby Shoot ${i + 1}`} className="gallery-showcase-img" />
                <div className="gallery-showcase-overlay">
                  <span className="gallery-showcase-caption">Childhood Memory 0{i + 1}</span>
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

export default KIds;
