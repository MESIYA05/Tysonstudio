import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faClock, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../css/Contact.css';
import Footer from './Footer';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);

    emailjs
      .sendForm('service_z64vw0i', 'template_m4nrvf6', form.current, {
        publicKey: 'J1ToocWjgXkzXFCmU',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully!',
            text: 'Thank you for contacting TYSON STUDIO. We’ll get back to you soon.',
            confirmButtonText: 'OK',
          });
          form.current.reset();
          setIsSending(false);
        },
        (error) => {
          console.error('FAILED...', error.text);
          Swal.fire({
            icon: 'error',
            title: 'Something Went Wrong',
            text: "We couldn't send your message. Please try again.",
            confirmButtonText: 'Try Again',
          });
          setIsSending(false);
        }
      );
  };

  return (
    <div className="contact-page">
      {/* Hero Banner */}
      <section className="service-hero-banner">
        <div className="container">
          <span className="label" data-aos="fade-down">GET IN TOUCH</span>
          <h1 className="service-hero-title" data-aos="fade-up">
            CONTACT TYSON STUDIO <span className="text-accent">.</span>
          </h1>
          <p className="service-hero-sub" data-aos="fade-up" data-aos-delay="100">
            Have a project in mind or want to book an exclusive shoot? We would love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Left Column: Direct Studio Information */}
            <div className="contact-info-card" data-aos="fade-right">
              <div>
                <span className="label">STUDIO CONCIERGE</span>
                <h2 className="contact-info-title">Let’s Start a Conversation</h2>
                <p className="body-md">
                  Our creative producers and studio photographers are available for destination bookings, studio inquiries, and bespoke package consultations.
                </p>

                <div className="contact-details-list">
                  <div className="contact-detail-item">
                    <div className="contact-icon-box">
                      <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div>
                      <span className="contact-detail-label">Customer Care / Phone</span>
                      <a href="tel:9361726533" className="contact-detail-link">+91 9361726533</a>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="contact-icon-box">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div>
                      <span className="contact-detail-label">Direct Email</span>
                      <a href="mailto:mesiya.career@gmail.com" className="contact-detail-link">mesiya.career@gmail.com</a>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="contact-icon-box">
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </div>
                    <div>
                      <span className="contact-detail-label">WhatsApp Instant Concierge</span>
                      <a href="http://wa.me/+919361726533" target="_blank" rel="noopener noreferrer" className="contact-detail-link">Chat on WhatsApp</a>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="contact-icon-box">
                      <FontAwesomeIcon icon={faInstagram} />
                    </div>
                    <div>
                      <span className="contact-detail-label">Instagram Portfolio</span>
                      <a href="https://www.instagram.com/darkness_shadow_boy_05" target="_blank" rel="noopener noreferrer" className="contact-detail-link">@tyson_studio</a>
                    </div>
                  </div>
                </div>

                <div className="booking-benefits-box" style={{ marginBottom: '1.5rem' }}>
                  <span className="booking-benefits-title">
                    <FontAwesomeIcon icon={faShieldHalved} style={{ color: 'var(--accent)', marginRight: '6px' }} />
                    Direct Concierge Guarantee
                  </span>
                  <p className="booking-benefits-desc">
                    • Inquiries answered within 2 to 4 business hours.<br/>
                    • Free 1-on-1 creative consultation & shoot moodboard planning.
                  </p>
                </div>
              </div>

              <div className="contact-meta-box">
                <div className="contact-meta-row">
                  <FontAwesomeIcon icon={faClock} className="text-accent" />
                  <span>Studio Hours: Monday – Sunday (9:00 AM – 9:00 PM IST)</span>
                </div>
                <div className="contact-meta-row mt-sm">
                  <FontAwesomeIcon icon={faLocationDot} className="text-accent" />
                  <span>Operating across 140+ cities & 28+ international destinations</span>
                </div>
              </div>
            </div>

            {/* Right Column: Luxury Message Form */}
            <div className="contact-form-card" data-aos="fade-left">
              <div>
                <h2 className="contact-form-title">Send Us an Enquiry</h2>
                <p className="contact-form-subtitle">Fill out the form below and we will respond within 24 hours.</p>

                <form ref={form} onSubmit={sendEmail} className="ts-contact-form">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      minLength={3}
                      maxLength={50}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="name@example.com"
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="mobile" className="form-label">Mobile Number *</label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      placeholder="e.g. +91 9361726533"
                      minLength={10}
                      maxLength={15}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your event dates, shoot type, or any questions you have..."
                      minLength={10}
                      className="form-input"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className={`btn btn-primary contact-submit-btn ${isSending ? 'btn-loading' : ''}`}
                  >
                    {isSending ? 'Sending Message...' : 'Send Enquiry →'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
