import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/Gallery.css';
import Footer from './Footer';

// Asset imports
import kids9 from '../ASSETS/kids/kids9.png';
import kids10 from '../ASSETS/kids/kids10.png';
import kids11 from '../ASSETS/kids/kids11.png';
import kids12 from '../ASSETS/kids/kids12.png';

import wedding2 from '../ASSETS/wedding/Wedding2.png';
import wedding3 from '../ASSETS/wedding/Wedding3.png';
import wedding4 from '../ASSETS/wedding/Wedding4.png';
import wedding5 from '../ASSETS/wedding/Wedding5.png';

import maternity4 from '../ASSETS/maternity/maternity4.png';
import maternity5 from '../ASSETS/maternity/maternity5.png';
import maternity6 from '../ASSETS/maternity/maternity6.png';
import maternity7 from '../ASSETS/maternity/maternity7.png';

import vacation5 from '../ASSETS/vacation/vacation5.png';
import vacation6 from '../ASSETS/vacation/vacation6.png';
import vacation7 from '../ASSETS/vacation/vacation7.png';
import vacation8 from '../ASSETS/vacation/vacation8.png';

import party3 from '../ASSETS/party/party3.png';
import party4 from '../ASSETS/party/party4.png';
import party5 from '../ASSETS/party/party5.png';
import party6 from '../ASSETS/party/party6.png';

import Prewedding2 from '../ASSETS/pre wedding/prewedding2.png';
import Prewedding3 from '../ASSETS/pre wedding/prewedding3.png';
import Prewedding4 from '../ASSETS/pre wedding/prewedding4.png';
import Prewedding5 from '../ASSETS/pre wedding/prewedding5.png';

import gallery1 from '../ASSETS/gallery/gallery1.png';
import gallery2 from '../ASSETS/gallery/gallery2.png';
import gallery3 from '../ASSETS/gallery/gallery3.png';
import gallery4 from '../ASSETS/gallery/gallery4.png';
import gallery5 from '../ASSETS/gallery/gallery5.png';
import gallery6 from '../ASSETS/gallery/gallery6.png';
import gallery7 from '../ASSETS/gallery/gallery7.png';
import gallery8 from '../ASSETS/gallery/gallery8.png';
import gallery9 from '../ASSETS/gallery/gallery9.png';
import gallery10 from '../ASSETS/gallery/gallery10.png';
import gallery11 from '../ASSETS/gallery/gallery11.png';
import gallery12 from '../ASSETS/gallery/gallery12.png';
import gallery13 from '../ASSETS/gallery/gallery13.png';
import gallery14 from '../ASSETS/gallery/gallery14.png';
import gallery15 from '../ASSETS/gallery/gallery15.png';
import gallery16 from '../ASSETS/gallery/gallery16.png';

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'ALL', label: 'All Projects' },
    { id: 'WEDDINGS', label: 'Weddings' },
    { id: 'PREWEDDING', label: 'Pre Weddings' },
    { id: 'MATERNITY', label: 'Maternity' },
    { id: 'KIDS', label: 'Kids & Baby' },
    { id: 'PARTY', label: 'Parties' },
    { id: 'VACATION', label: 'Vacation' },
  ];

  const galleryItems = [
    { id: 1, src: gallery1, title: 'Editorial Noir', category: 'WEDDINGS', year: '2026', size: 'large' },
    { id: 2, src: gallery2, title: 'Sunkissed Harmony', category: 'PREWEDDING', year: '2026', size: 'tall' },
    { id: 3, src: gallery3, title: 'Maternal Grace', category: 'MATERNITY', year: '2025', size: 'standard' },
    { id: 4, src: gallery4, title: 'City Lights Vows', category: 'WEDDINGS', year: '2026', size: 'standard' },
    { id: 5, src: gallery5, title: 'Golden Hour Voyage', category: 'VACATION', year: '2025', size: 'tall' },
    { id: 6, src: wedding2, title: 'Heritage Grandeur', category: 'WEDDINGS', year: '2026', size: 'large' },
    { id: 7, src: wedding3, title: 'The Royal Walk', category: 'WEDDINGS', year: '2026', size: 'standard' },
    { id: 8, src: Prewedding5, title: 'Coastal Serenade', category: 'PREWEDDING', year: '2025', size: 'standard' },
    { id: 9, src: party4, title: 'Neon Midnight', category: 'PARTY', year: '2026', size: 'tall' },
    { id: 10, src: kids11, title: 'Whimsical Garden', category: 'KIDS', year: '2026', size: 'standard' },
    { id: 11, src: maternity5, title: 'Gentle Dawn', category: 'MATERNITY', year: '2025', size: 'large' },
    { id: 12, src: vacation6, title: 'Alpine Breeze', category: 'VACATION', year: '2025', size: 'standard' },
    { id: 13, src: wedding4, title: 'Sacred Threads', category: 'WEDDINGS', year: '2026', size: 'tall' },
    { id: 14, src: wedding5, title: 'Starlight Romance', category: 'WEDDINGS', year: '2026', size: 'standard' },
    { id: 15, src: party3, title: 'Golden Champagne', category: 'PARTY', year: '2025', size: 'standard' },
    { id: 16, src: party5, title: 'Confetti Dreams', category: 'PARTY', year: '2026', size: 'large' },
    { id: 17, src: vacation8, title: 'Santorini Blue', category: 'VACATION', year: '2025', size: 'standard' },
    { id: 18, src: maternity7, title: 'Ethereal Velvet', category: 'MATERNITY', year: '2026', size: 'tall' },
    { id: 19, src: party6, title: 'Late Night Rhythm', category: 'PARTY', year: '2026', size: 'standard' },
    { id: 20, src: vacation5, title: 'Tropical Horizon', category: 'VACATION', year: '2025', size: 'large' },
    { id: 21, src: vacation7, title: 'Desert Mirage', category: 'VACATION', year: '2025', size: 'standard' },
    { id: 22, src: kids9, title: 'Little Wonder', category: 'KIDS', year: '2026', size: 'tall' },
    { id: 23, src: kids10, title: 'Giggles & Joy', category: 'KIDS', year: '2026', size: 'standard' },
    { id: 24, src: Prewedding3, title: 'Whispering Pines', category: 'PREWEDDING', year: '2025', size: 'standard' },
    { id: 25, src: kids12, title: 'Fairytale Dreams', category: 'KIDS', year: '2026', size: 'large' },
    { id: 26, src: Prewedding2, title: 'The Lake Story', category: 'PREWEDDING', year: '2025', size: 'standard' },
    { id: 27, src: Prewedding4, title: 'Velvet Sunset', category: 'PREWEDDING', year: '2026', size: 'tall' },
    { id: 28, src: maternity6, title: 'Bloom of Life', category: 'MATERNITY', year: '2026', size: 'standard' },
    { id: 29, src: maternity4, title: 'Silken Whisper', category: 'MATERNITY', year: '2025', size: 'standard' },
    { id: 30, src: gallery6, title: 'Timeless Silhouette', category: 'WEDDINGS', year: '2026', size: 'large' },
    { id: 31, src: gallery7, title: 'Pure Glee', category: 'KIDS', year: '2026', size: 'standard' },
    { id: 32, src: gallery8, title: 'Baby Bliss', category: 'KIDS', year: '2025', size: 'tall' },
    { id: 33, src: gallery9, title: 'Cocktail Gala', category: 'PARTY', year: '2026', size: 'standard' },
    { id: 34, src: gallery10, title: 'Azure Escape', category: 'VACATION', year: '2025', size: 'standard' },
    { id: 35, src: gallery11, title: 'Eternal Ring', category: 'WEDDINGS', year: '2026', size: 'large' },
    { id: 36, src: gallery12, title: 'The Bridal Glance', category: 'WEDDINGS', year: '2026', size: 'standard' },
    { id: 37, src: gallery13, title: 'Lovers Bridge', category: 'PREWEDDING', year: '2025', size: 'tall' },
    { id: 38, src: gallery14, title: 'Studio Classic', category: 'MATERNITY', year: '2026', size: 'standard' },
    { id: 39, src: gallery15, title: 'Nightfall Soiree', category: 'PARTY', year: '2026', size: 'standard' },
    { id: 40, src: gallery16, title: 'Wanderlust Vista', category: 'VACATION', year: '2025', size: 'large' },
  ];

  const filteredItems = activeCategory === 'ALL'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="gallery-page">
      {/* Hero Banner */}
      <section className="service-hero-banner">
        <div className="container">
          <span className="label" data-aos="fade-down">CURATED PORTFOLIO</span>
          <h1 className="service-hero-title" data-aos="fade-up">
            THE GALLERY <span className="text-accent">.</span>
          </h1>
          <p className="service-hero-sub" data-aos="fade-up" data-aos-delay="100">
            A visual anthology of unforgettable moments, cinematic light, and emotive editorial storytelling.
          </p>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="gallery-main-section">
        <div className="container">
          {/* Filter Tabs */}
          <div className="gallery-filter-tabs" data-aos="fade-up">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`gallery-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Masonry / Editorial Image Grid */}
          <div className="gallery-masonry-grid">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                className={`gallery-card-item size-${item.size}`}
                onClick={() => setSelectedImage(item)}
                data-aos="fade-up"
                data-aos-delay={(idx % 6) * 70}
              >
                <div className="gallery-card-img-wrap">
                  <img src={item.src} alt={item.title} className="gallery-card-img" />
                  <div className="gallery-card-overlay">
                    <div className="gallery-card-meta">
                      <span className="gallery-card-cat">{item.category} • {item.year}</span>
                      <h3 className="gallery-card-title">{item.title}</h3>
                      <span className="gallery-card-action">
                        View Project <span className="arrow">→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Copyright notice card */}
          <div className="copyright-note-card" data-aos="fade-up">
            <span className="copyright-note-title">✦ STUDIO COPYRIGHT NOTICE:</span>
            <p className="copyright-note-text">
              All images and photographic artworks displayed are protected under intellectual property law and licensed exclusively to TYSON STUDIO. Unauthorized reproduction or commercial use is strictly prohibited.
            </p>
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      {selectedImage && (
        <div className="gallery-lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <div className="gallery-lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-lightbox-close" onClick={() => setSelectedImage(null)}>✕</button>
            <div className="gallery-lightbox-img-wrap">
              <img src={selectedImage.src} alt={selectedImage.title} className="gallery-lightbox-img" />
            </div>
            <div className="gallery-lightbox-info">
              <div>
                <span className="label">{selectedImage.category} • {selectedImage.year}</span>
                <h3 className="gallery-lightbox-title">{selectedImage.title}</h3>
              </div>
              <button className="btn btn-outline" onClick={() => setSelectedImage(null)}>Close Preview</button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Gallery;
