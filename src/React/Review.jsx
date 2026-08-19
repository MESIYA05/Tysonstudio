import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/Review.css';
import Footer from './Footer';

import review1 from '../ASSETS/review/review1.png';
import review2 from '../ASSETS/review/review2.png';
import review3 from '../ASSETS/review/review3.png';
import review4 from '../ASSETS/review/review4.png';
import review5 from '../ASSETS/review/review5.png';
import review6 from '../ASSETS/review/review6.png';
import review7 from '../ASSETS/review/review7.png';
import review8 from '../ASSETS/review/review8.png';
import review9 from '../ASSETS/review/review9.png';
import review10 from '../ASSETS/review/review10.png';
import review11 from '../ASSETS/review/review11.png';
import review12 from '../ASSETS/review/review12.png';
import review13 from '../ASSETS/review/review13.png';
import review14 from '../ASSETS/review/review14.png';
import review15 from '../ASSETS/review/review15.png';
import review16 from '../ASSETS/review/review16.png';
import review17 from '../ASSETS/review/review17.png';
import review18 from '../ASSETS/review/review18.png';
import review19 from '../ASSETS/review/review19.png';
import review20 from '../ASSETS/review/review20.png';
import review21 from '../ASSETS/review/review21.png';

const Review = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const reviews = [
    {
      id: 1,
      name: 'VASANTHARAJ S',
      role: 'Wedding Client',
      img: review1,
      text: 'Tyson Photography Studio exceeded my expectations in every way! The professionalism and creativity displayed by the team were simply outstanding.'
    },
    {
      id: 2,
      name: 'ANTONY RAJ C',
      role: 'Pre Wedding Client',
      img: review2,
      text: 'The attention to detail and the quality of the final images were truly top-notch. I highly recommend Tyson Photography Studio for anyone seeking excellent photography services!'
    },
    {
      id: 3,
      name: 'KILLAN K',
      role: 'Fashion & Portrait',
      img: review3,
      text: "Tyson Photography Studio is absolutely phenomenal! The team's creativity and passion shine through in every shot, capturing moments beautifully."
    },
    {
      id: 4,
      name: 'VISWHA R',
      role: 'Event Client',
      img: review4,
      text: "I was thrilled with the final photos—they're simply stunning! For anyone in need of outstanding photography, Tyson is the best choice you can make!"
    },
    {
      id: 5,
      name: 'SIVAGURU K',
      role: 'Maternity Client',
      img: review5,
      text: 'Tyson Photography Studio exceeded all my expectations with their remarkable talent and attention to detail! Every shot captured the essence of the moment, making it an unforgettable experience.'
    },
    {
      id: 6,
      name: 'MUKESH S',
      role: 'Commercial Client',
      img: review6,
      text: 'Tyson Photography Studio exceeded all expectations—every shot was pure perfection! Superb quality, best service, and an excellent eye for detail—highly recommended!'
    },
    {
      id: 7,
      name: 'SANJAY V',
      role: 'Wedding Client',
      img: review7,
      text: 'Tyson Photography Studio delivers stunning photos with top-notch professionalism! Truly the best—superb work, excellent service, and unforgettable results!'
    },
    {
      id: 8,
      name: 'IMMANUVEL A',
      role: 'Pre Wedding Client',
      img: review8,
      text: 'Tyson Photography Studio delivers exceptional quality and captures every moment with stunning precision. Truly the best—super professional, creative, and highly recommended!'
    },
    {
      id: 9,
      name: 'NATASHA S',
      role: 'Editorial Client',
      img: review9,
      text: 'Tyson Photography Studio is truly a gem, capturing moments like a perfect film. Their work is flawless, sharp, and bright, turning memories into pure delight.'
    },
    {
      id: 10,
      name: 'JENIFER D',
      role: 'Baby Shoot Client',
      img: review10,
      text: 'From the first click to the final frame, their passion for perfection stays the same. Friendly, skilled, and full of art, Tyson’s team wins every heart.'
    },
    {
      id: 11,
      name: 'ISWARYA K',
      role: 'Wedding Client',
      img: review11,
      text: 'Stunning edits and angles so right, they make every moment shine bright. Superb service, calm and clear, best studio you’ll ever go near.'
    },
    {
      id: 12,
      name: 'KHALIFA M',
      role: 'Vacation Client',
      img: review12,
      text: 'Every photo tells a beautiful story, wrapped in love, detail, and glory. Professional, kind, and super creative, they make each session unforgettable and native.'
    },
    {
      id: 13,
      name: 'SAMANTHA A',
      role: 'Pre Wedding Client',
      img: review13,
      text: "A dream to work with from start to end, they treat each client like a dear friend. Tyson's team is the absolute best, put their skills to the ultimate test!"
    },
    {
      id: 14,
      name: 'KAYADU LOHAR M',
      role: 'Fashion Client',
      img: review14,
      text: 'Perfect lighting, perfect pose, they truly know how the magic flows. Elegant shots, full of grace, Tyson Photography owns the space.'
    },
    {
      id: 15,
      name: 'THEANMOZHI G',
      role: 'Maternity Client',
      img: review15,
      text: 'With every snap, they capture soul, turning moments into a timeless scroll. Superb quality in every frame, their work puts others to shame.'
    },
    {
      id: 16,
      name: 'KANIMOZHI V',
      role: 'Family Client',
      img: review16,
      text: 'Tyson’s crew is pro and kind, with creative genius that’s hard to find. Every shoot is full of fun, the results? Just second to none.'
    },
    {
      id: 17,
      name: 'ALEXABLIS S',
      role: 'Event Client',
      img: review17,
      text: 'From portraits to events so grand, they take the lead with a steady hand. A studio where art and passion meet, their final shots are pure and sweet.'
    },
    {
      id: 18,
      name: 'CALADHARAN O',
      role: 'Corporate Client',
      img: review18,
      text: 'On time, on point, with perfect flair, they bring your vision into the air. Top-class photos that stand apart, a team that works with all their heart.'
    },
    {
      id: 19,
      name: 'PREMJI K',
      role: 'Wedding Client',
      img: review19,
      text: 'Tyson Studio never fails to impress, each photo is art, nothing less. They bring emotion to every frame, their reputation earns them lasting fame.'
    },
    {
      id: 20,
      name: 'AJITH P',
      role: 'Pre Wedding Client',
      img: review20,
      text: 'Kind and calm with expert eyes, they catch the moments money can’t buy. Each picture feels so rich and true, they truly know what they do.'
    },
    {
      id: 21,
      name: 'AMBANI S',
      role: 'Celebration Client',
      img: review21,
      text: 'Professional vibes and friendly tone, you’ll never feel lost or alone. With skill and heart, they guide your way, and leave you smiling all the day.'
    }
  ];

  return (
    <div className="reviews-page">
      {/* Hero Banner */}
      <section className="service-hero-banner">
        <div className="container">
          <span className="label" data-aos="fade-down">TESTIMONIALS</span>
          <h1 className="service-hero-title" data-aos="fade-up">
            CLIENT EXPERIENCES <span className="text-accent">.</span>
          </h1>
          <p className="service-hero-sub" data-aos="fade-up" data-aos-delay="100">
            Read what our couples, families, and creative partners say about their journeys with TYSON STUDIO.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="reviews-main-section">
        <div className="container">
          <div className="reviews-editorial-grid">
            {reviews.map((item, idx) => (
              <div
                key={item.id}
                className="review-luxury-card"
                data-aos="fade-up"
                data-aos-delay={(idx % 3) * 100}
              >
                {/* Rating stars */}
                <div className="review-stars-wrap">
                  <span className="review-star">★</span>
                  <span className="review-star">★</span>
                  <span className="review-star">★</span>
                  <span className="review-star">★</span>
                  <span className="review-star">★</span>
                </div>

                {/* Quote */}
                <p className="review-quote-text">
                  "{item.text}"
                </p>

                {/* Author Info */}
                <div className="review-author-wrap">
                  <div className="review-avatar-frame">
                    <img src={item.img} alt={item.name} className="review-avatar-img" />
                  </div>
                  <div className="review-author-info">
                    <h3 className="review-author-name">{item.name}</h3>
                    <span className="review-author-role">{item.role}</span>
                  </div>
                </div>
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

export default Review;
