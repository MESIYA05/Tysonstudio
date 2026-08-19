import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Abt.css';
import Footer from './Footer';

import pexels from '../ASSETS/homeimg/pexels.jpg';
import wedding1 from '../ASSETS/wedding/Wedding1.png';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const achievements = [
    { num: '80,000+', label: 'Shoots Completed', desc: 'Preserving landmark memories and luxury stories across the nation.' },
    { num: '100+', label: 'Cities & 28+ Countries', desc: 'Present across global hubs with localized professional crews.' },
    { num: '150%', label: 'Year-on-Year Growth', desc: 'India’s fastest-growing creative photography enterprise.' },
    { num: '2,000+', label: 'Curated Artists', desc: 'Vetted pool of premier portrait, wedding & commercial talent.' },
    { num: 'Awarded', label: 'Best Photography Studio', desc: 'Recognized for creative excellence, customer trust & craft.' }
  ];

  return (
    <div className="about-page">
      {/* Hero Banner */}
      <section className="service-hero-banner">
        <div className="container">
          <span className="label" data-aos="fade-down">STUDIO PROFILE</span>
          <h1 className="service-hero-title" data-aos="fade-up">
            ABOUT TYSON STUDIO <span className="text-accent">.</span>
          </h1>
          <p className="service-hero-sub" data-aos="fade-up" data-aos-delay="100">
            How it started, how it is growing, and why we exist to revolutionize the photography industry.
          </p>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="about-story-section section">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-col" data-aos="fade-right">
              <span className="label">THE GENESIS</span>
              <h2 className="display-sm about-story-heading">
                Organizing Photography with Artistry & Speed.
              </h2>
              <div className="divider"></div>
              
              <p className="body-lg">
                <strong>TYSON STUDIO</strong> is a modern creative platform organizing the photography industry into a seamless, high-touch luxury experience.
              </p>
              
              <p className="body-md mt-md">
                Book a bespoke shoot with us in less than 45 seconds, and a hand-selected elite team from our pool of 2,000+ vetted artists will be at your service — whether documenting intimate marriages, high-fashion campaigns, or commercial shoots.
              </p>

              <p className="body-md mt-md">
                Want to amplify visual content rather than just capture it? We empower brands and individuals with modern mobile content creators, because we believe: <em>"What is seen, sells!"</em>
              </p>

              <p className="body-md mt-md">
                Over the past 5 years, we have revolutionized the photography ecosystem across India, completing over 80,000+ shoots. Our tech-driven platform streamlines booking, editing, and delivery — guaranteeing uncompromising efficiency and prestige quality.
              </p>

              <div className="mt-xl">
                <Link to="/Contact" className="btn btn-primary">
                  Work with Our Studio <span className="arrow">→</span>
                </Link>
              </div>
            </div>

            <div className="about-img-col" data-aos="fade-left">
              <div className="about-img-frame">
                <img src={pexels} alt="Tyson Studio Team" className="about-main-img" />
              </div>
              <div className="about-secondary-img-frame">
                <img src={wedding1} alt="Tyson Studio Shoot" className="about-sub-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="about-mission-section section">
        <div className="container">
          <div className="vision-mission-grid">
            {/* Vision */}
            <div className="vision-card" data-aos="fade-up">
              <span className="vision-icon">✧</span>
              <span className="label">OUR PURPOSE</span>
              <h3 className="vision-title">Our Vision</h3>
              <p className="body-md">
                To organize the photography industry by bringing clients and photographers onto a unified, transparent platform with standardized pricing and guaranteed deliverables — all while creating sustainable, rewarding creative careers for talented artists.
              </p>
            </div>

            {/* Mission */}
            <div className="vision-card" data-aos="fade-up" data-aos-delay="150">
              <span className="vision-icon">✦</span>
              <span className="label">OUR COMMITMENT</span>
              <h3 className="vision-title">Our Mission</h3>
              <p className="body-md">
                To serve as the global one-stop benchmark for photography services, empowering photographers with financial growth and social recognition, while guaranteeing everyday consumers a dependable, museum-grade visual product every single time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements Grid */}
      <section className="about-achievements-section section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="label">MILESTONES & HONORS</span>
            <h2 className="display-md">What We Have Built</h2>
            <p>A track record of excellence in creative execution and customer satisfaction.</p>
          </div>

          <div className="achievements-cards-grid">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="achievement-card"
                data-aos="fade-up"
                data-aos-delay={index * 90}
              >
                <span className="achievement-num">{item.num}</span>
                <h4 className="achievement-title">{item.label}</h4>
                <p className="achievement-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
