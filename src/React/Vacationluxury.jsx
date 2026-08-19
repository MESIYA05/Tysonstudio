import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/Instashoot.css';
import Footer from './Footer';

const Vacationluxury = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    date: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    const dataToSend = {
      ...formData,
      service: 'vacation [luxury shoot]',
      amount: 14999,
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/rest/studio/', dataToSend, {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('Success:', response.data);

      await Swal.fire({
        icon: 'success',
        title: 'Booking Submitted Successfully!',
        text: 'Thank you for choosing TYSON STUDIO. We will get back to you shortly to organize your destination photo and cinematic reels session.',
        confirmButtonText: 'OK',
      });

      setFormData({
        name: '',
        email: '',
        mobile: '',
        date: '',
        message: '',
      });
    } catch (error) {
      console.error('Booking submission error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Something Went Wrong',
        text: "We couldn't process your booking. Please check your connection and try again.",
        confirmButtonText: 'Try Again',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="booking-page">
      <section className="service-hero-banner">
        <div className="container">
          <span className="label" data-aos="fade-down">RESERVATION</span>
          <h1 className="service-hero-title" data-aos="fade-up">
            VACATION LUXURY SHOOT BOOKING <span className="text-accent">.</span>
          </h1>
          <p className="service-hero-sub" data-aos="fade-up" data-aos-delay="100">
            Immortalize your holiday with 35 master edited travel photos and 2 cinematic 4K travel reels.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="booking-layout-grid">
          {/* Package Summary Card */}
          <div className="booking-package-card" data-aos="fade-right">
            <div>
              <div className="booking-package-header">
                <span className="booking-package-sub">Premium Travel Tier</span>
                <h2 className="booking-package-title">Luxury Shoot</h2>
                <p className="body-sm">Travel photography + 2 cinematic reels at iconic locations.</p>
              </div>

              <div className="booking-package-features">
                <div className="booking-feature-row">
                  <span className="booking-feature-icon">✦</span>
                  <span>35 Master Retouched Travel Images</span>
                </div>
                <div className="booking-feature-row">
                  <span className="booking-feature-icon">✦</span>
                  <span>2 Cinematic Travel Reels (30s 4K)</span>
                </div>
                <div className="booking-feature-row">
                  <span className="booking-feature-icon">✦</span>
                  <span>2 Hours Extended Travel Shoot Window</span>
                </div>
                <div className="booking-feature-row">
                  <span className="booking-feature-icon">✦</span>
                  <span>Multiple Angles & Scenic Compositions</span>
                </div>
                <div className="booking-feature-row">
                  <span className="booking-feature-icon">✦</span>
                  <span>Solo, Couple, or Family Group Coverage</span>
                </div>
              </div>

              {/* Studio Assured Benefits */}
              <div className="booking-benefits-box">
                <span className="booking-benefits-title">✦ Destination Luxury Perks</span>
                <p className="booking-benefits-desc">
                  • 100% Refund guarantee on cancellations within 48 hours.<br/>
                  • Dedicated local destination visual artist & curated landmark route.<br/>
                  • High-speed cloud delivery within 48 hours for immediate holiday sharing.
                </p>
              </div>
            </div>

            <div className="booking-pricing-box">
              <div>
                <span className="pricing-label">Package Total</span>
                <div style={{ textDecoration: 'line-through', color: 'var(--text-muted)', fontSize: '0.85rem' }}>₹ 19,999</div>
              </div>
              <span className="booking-price-val">₹ 14,999</span>
            </div>
          </div>

          {/* Booking Form Card */}
          <div className="booking-form-card" data-aos="fade-left">
            <div>
              <h2 className="booking-form-heading">Client Details</h2>
              <p className="booking-form-intro">Provide travel details to schedule your destination shoot.</p>

              <form onSubmit={handleSubmit}>
                <div className="booking-form-group">
                  <label className="booking-form-label" htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    minLength={3}
                    maxLength={50}
                    className="booking-form-input"
                    required
                  />
                </div>

                <div className="booking-form-group">
                  <label className="booking-form-label" htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="booking-form-input"
                    required
                  />
                </div>

                <div className="booking-form-group">
                  <label className="booking-form-label" htmlFor="mobile">Mobile Number *</label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="e.g. +91 9361726533"
                    minLength={10}
                    maxLength={15}
                    className="booking-form-input"
                    required
                  />
                </div>

                <div className="booking-form-group">
                  <label className="booking-form-label" htmlFor="date">Scheduled Shoot Date *</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={today}
                    className="booking-form-input"
                    required
                  />
                </div>

                <div className="booking-form-group">
                  <label className="booking-form-label" htmlFor="message">Destination City, Hotel & Travel Itinerary *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please specify destination city, hotel/resort, preferred outdoor locations, reel audio ideas..."
                    minLength={10}
                    className="booking-form-input"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn btn-primary booking-submit-btn ${isSubmitting ? 'btn-loading' : ''}`}
                >
                  {isSubmitting ? 'Processing Booking...' : 'Confirm Reservation →'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Vacationluxury;
