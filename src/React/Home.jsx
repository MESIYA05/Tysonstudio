import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pexels from '../ASSETS/homeimg/pexels.jpg';
import wedding1 from '../ASSETS/wedding/Wedding1.png';
import prewedding1 from '../ASSETS/pre wedding/prewedding1.png';
import party1 from '../ASSETS/party/party1.png';
import maternity1 from '../ASSETS/maternity/maternity1.png';
import kids1 from '../ASSETS/kids/kids1.png';
import vacation1 from '../ASSETS/vacation/vacation1.png';
import Footer from './Footer';
import '../css/Home.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  const services = [
    {
      num: '01',
      title: 'Weddings',
      desc: 'Eternal vows and profound romance captured in cinematic, heirloom-grade detail.',
      img: wedding1,
      link: '/Wedding'
    },
    {
      num: '02',
      title: 'Pre Weddings',
      desc: 'Artistic love stories set against breathtaking vistas and intimate moods.',
      img: prewedding1,
      link: '/Prewedding'
    },
    {
      num: '03',
      title: 'Parties & Celebrations',
      desc: 'Vibrant energy, unscripted laughter, and extraordinary milestone memories.',
      img: party1,
      link: '/Party'
    },
    {
      num: '04',
      title: 'Maternity',
      desc: 'Graceful celebrations of motherhood, new beginnings, and tender anticipation.',
      img: maternity1,
      link: '/Maternity'
    },
    {
      num: '05',
      title: 'Kids & Babies',
      desc: 'Innocence, joyous giggles, and sweet growing milestones preserved forever.',
      img: kids1,
      link: '/Kids'
    },
    {
      num: '06',
      title: 'Vacation & Travel',
      desc: 'Scenic wanderlust and destination visual diaries across breathtaking spots.',
      img: vacation1,
      link: '/Vacation'
    }
  ];

  return (
    <div className="home-page">
      {/* 1. LUXURY HERO SECTION */}
      <section className="hero-section">
        <div className="hero-bg-overlay"></div>
        <div className="hero-bg-img" style={{ backgroundImage: `url(${pexels})` }}></div>
        
        <div className="container hero-container">
          <div className="hero-content" data-aos="fade-up" data-aos-duration="1000">
            <span className="hero-tagline">
              <span className="hero-tagline-dot"></span>
              PREMIUM PHOTOGRAPHY STUDIO
            </span>
            
            <h1 className="hero-title">
              MOMENTS <br />
              <span className="hero-title-italic">WORTH</span> <br />
              REMEMBERING.
            </h1>
            
            <p className="hero-subtitle">
              We create timeless photographs that transform your most meaningful moments into visual stories with intention, elegance, and soul.
            </p>
            
            <div className="hero-actions">
              <Link to="/Contact" className="btn btn-primary hero-btn">
                Book a Shoot <span className="arrow">→</span>
              </Link>
              <Link to="/Gallery" className="btn btn-outline hero-btn">
                Explore Our Work
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll-indicator" data-aos="fade-up" data-aos-delay="600">
          <span className="scroll-text">SCROLL TO DISCOVER</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* 2. INTRODUCTION / EDITORIAL STATEMENT */}
      <section className="intro-section section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-text" data-aos="fade-right">
              <span className="label">THE ART OF PHOTOGRAPHY</span>
              <h2 className="intro-heading">
                We don't just capture photographs. <br />
                <span className="text-muted-italic">We capture how the moment felt.</span>
              </h2>
              <div className="divider"></div>
              <p className="body-lg">
                At <strong>TYSON STUDIO</strong>, photography is an intentional craft. Founded on a philosophy of authentic emotional storytelling, we merge contemporary aesthetics with timeless portraiture.
              </p>
              <p className="body-md intro-secondary-text">
                Whether documenting intimate wedding vows, creative editorial portraits, or grand milestones, our artists bring a refined eye for light, natural poise, and enduring sophistication.
              </p>
              <div className="intro-cta-wrap">
                <Link to="/About" className="btn-ghost-arrow">
                  Read Our Full Story <span className="arrow">→</span>
                </Link>
              </div>
            </div>

            <div className="intro-images" data-aos="fade-left">
              <div className="intro-img-main-wrap">
                <img src={wedding1} alt="Tyson Studio Editorial Portrait" className="intro-img-main" />
                <div className="intro-badge">
                  <span className="badge-num">10+</span>
                  <span className="badge-text">Years of Editorial Excellence</span>
                </div>
              </div>
              <div className="intro-img-secondary-wrap">
                <img src={prewedding1} alt="Tyson Studio Storytelling" className="intro-img-secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EDITORIAL SERVICES SHOWCASE */}
      <section className="services-section section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="label">CURATED DISCIPLINES</span>
            <h2 className="display-md">Occasions to Capture</h2>
            <p>From milestone celebrations to intimate personal portraits, explore our bespoke photography collections.</p>
          </div>

          <div className="services-editorial-grid">
            {services.map((item, index) => (
              <Link 
                to={item.link} 
                key={item.num} 
                className="service-card"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <div className="service-card-img-wrap">
                  <img src={item.img} alt={item.title} className="service-card-img" />
                  <div className="service-card-overlay"></div>
                </div>

                <div className="service-card-info">
                  <div className="service-card-top">
                    <span className="service-num">{item.num}</span>
                    <span className="service-arrow">↗</span>
                  </div>
                  <h3 className="service-title">{item.title}</h3>
                  <p className="service-desc">{item.desc}</p>
                  <span className="service-explore-link">
                    Explore Package <span>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED STORY SPOTLIGHT */}
      <section className="featured-section section">
        <div className="container">
          <div className="featured-card" data-aos="zoom-in">
            <div className="featured-img-col">
              <img src={maternity1} alt="Featured Story" className="featured-img" />
              <span className="featured-tag">FEATURED STORY</span>
            </div>
            <div className="featured-content-col">
              <span className="label">CINEMATIC RETROSPECTIVE</span>
              <h2 className="featured-title">Moments That Stay With You Forever</h2>
              <p className="body-md">
                Every picture we take is created with mindful patience and delicate attention to lighting, raw emotions, and timeless color grading. Step into our world of curated photo projects.
              </p>
              <div className="featured-bullets">
                <div className="featured-bullet">
                  <span className="bullet-dot"></span>
                  <span>Natural light & creative studio lighting setups</span>
                </div>
                <div className="featured-bullet">
                  <span className="bullet-dot"></span>
                  <span>Handcrafted high-resolution master retouches</span>
                </div>
                <div className="featured-bullet">
                  <span className="bullet-dot"></span>
                  <span>Direct direction & comfortable guidance for all shoots</span>
                </div>
              </div>
              <div className="featured-action">
                <Link to="/Gallery" className="btn btn-primary">
                  View Full Gallery <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. METRICS / NUMBERS DON'T LIE */}
      <section className="stats-section section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="label">THE PROOF OF PASSION</span>
            <h2 className="display-md">Because Numbers Don't Lie</h2>
            <p>Our footprint across destination shoots and landmark memories speaks for itself.</p>
          </div>

          <div className="stats-grid">
            <div className="stat-card" data-aos="fade-up" data-aos-delay="100">
              <span className="stat-number">80,000<span className="text-accent">+</span></span>
              <span className="stat-label">Shoots Completed</span>
              <p className="stat-desc">Thousands of stories captured worldwide.</p>
            </div>
            <div className="stat-card" data-aos="fade-up" data-aos-delay="200">
              <span className="stat-number">800<span className="text-accent">+</span></span>
              <span className="stat-label">Expert Artists</span>
              <p className="stat-desc">Top tier photographers and videographers.</p>
            </div>
            <div className="stat-card" data-aos="fade-up" data-aos-delay="300">
              <span className="stat-number">140<span className="text-accent">+</span></span>
              <span className="stat-label">Cities Covered</span>
              <p className="stat-desc">Across regional & international hubs.</p>
            </div>
            <div className="stat-card" data-aos="fade-up" data-aos-delay="400">
              <span className="stat-number">2.5M<span className="text-accent">+</span></span>
              <span className="stat-label">Images Processed</span>
              <p className="stat-desc">Polished to pristine gallery standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="cta-banner-section">
        <div className="cta-banner-overlay"></div>
        <div className="cta-banner-img" style={{ backgroundImage: `url(${pexels})` }}></div>
        
        <div className="container cta-banner-container" data-aos="fade-up">
          <span className="label" style={{ color: '#ffffff' }}>START YOUR EXPERIENCE</span>
          <h2 className="cta-banner-title">
            YOUR STORY DESERVES <br />
            TO BE REMEMBERED.
          </h2>
          <p className="cta-banner-sub">
            Let's collaborate to make your next photoshoot an unforgettable work of art.
          </p>
          <div className="cta-banner-buttons">
            <Link to="/Contact" className="btn btn-primary">
              Book a Shoot <span className="arrow">→</span>
            </Link>
            <Link to="/Review" className="btn btn-outline">
              Read Client Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* 7. SHARED FOOTER */}
      <Footer />
    </div>
  );
};

export default Home;
