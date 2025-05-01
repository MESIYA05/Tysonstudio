import React from 'react'
import '../css/About.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLink,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faInstagram,faFacebook,faWhatsapp} from '@fortawesome/free-brands-svg-icons';


const About = () => {
  useEffect (() => {
        AOS.init({})
         },[])
  return (
    <>
      <section className='abtsec'>
        <div className="container-fluid">
          <h1 className='text-center hedtext headwed'data-aos="fade-down" data-aos-duration="1000">ABOUT <span className='uniqhead'>US</span></h1>
          <p className='text-center subabt'data-aos="fade-right" data-aos-duration="1000">How it started, How is it Going !!</p>
          <div className="row">
            <div className="col-lg-12 col-md-col-12 abt" >
           <h6 data-aos="fade-right" data-aos-duration="1000">Tyson studio is a technology platform which is organising the photography industry!</h6> <br /> 
           <h6 data-aos="fade-right" data-aos-duration="1000">Book a shoot with us in less than 45 seconds and best team from pool of 2000 + artists will be at your service!.  </h6><br />
           <h6 data-aos="fade-right" data-aos-duration="1000">Whether it's personal occations lke marriages or commercial advertisement shoots!.</h6><br />
           <h6 data-aos="fade-right" data-aos-duration="1000">Want to Spread the visual content rather than just making it? Again,come to us for movile content creators! We beleive "What is seen-sells!".</h6><br />
           <h6 data-aos="fade-right" data-aos-duration="1000">Over the past 5 years,we have revolutionized the photography industry in india,completing 80,000+ shoots.</h6><br />
           <h6 data-aos="fade-right" data-aos-duration="1000">Our tech-driven platform streamlines the entire photograpghy process-from booking to editing and delivery-ensuring efficiently and quality.</h6><br />
           <h2 data-aos="fade-up-left" data-aos-duration="1000">Vision </h2>
           <h6 data-aos="fade-left" data-aos-duration="1000">To oganize the photography industry by bringing the clients and photographers on a common platform  <br />with fixed price and guanted deliverables. While creating
            sustainable work opportunities for photograpers.
           </h6>
           <h2 data-aos="fade-up-left" data-aos-duration="1000">Mission</h2> 
           <h6 data-aos="fade-left" data-aos-duration="1000">To serve as one-stop platform for photography services across he global, offering photographers both <br /> financial and social reconationition, while ensuring a statndized, 
             high-quality product for consumers.
           </h6>
           <h2 data-aos="fade-up" data-aos-duration="1000">Achivments</h2>
           <h6 data-aos="fade-left" data-aos-duration="1000">&nbsp;&nbsp;&nbsp;✧ 80,000+ shoots. </h6>
           <h6 data-aos="fade-left" data-aos-duration="1000">&nbsp;&nbsp;&nbsp;✧ 100+ cities and 28+ Countries. </h6>
           <h6 data-aos="fade-left" data-aos-duration="1000">&nbsp;&nbsp;&nbsp;✧ 150% Growth - Year-on-year </h6>
           <h6 data-aos="fade-left" data-aos-duration="1000">&nbsp;&nbsp;&nbsp;✧ All over india . </h6>
           <h6 data-aos="fade-left" data-aos-duration="1000">&nbsp;&nbsp;&nbsp;✧ Best photography studio award </h6>
           </div>
          </div>

            <div className="row">
                   
                         <div className="col-lg-12 col-md-12 col-12 wedfooter" data-aos="fade-up" data-aos-duration="1000">
                          <h1 className="text-center wedfosp wedfo"><span>TYSON</span> STUDIO</h1>
                          <h5 className="text-center foh5">Stay Connected With Our Photographers</h5><br/>
                          <p className="wedhed text-center">Ldrago has made Professional Photograpy service easy to <br/>  access.  Doesn't matter if you want 
                                        multiple shoots at a time or <br/> multiple locations at a time. We're Present across 135 international <br/> destinations with multiple teams at every location.
                          </p>
                          <h5 className="text-center wedsech5">Follow Us</h5>
                          <h4 className="text-center wedico"><a href="https://www.facebook.com/mesiya.mesiya.927?mibextid=ZbWKwL"><FontAwesomeIcon icon={faFacebook} style={{color:'#fa0505'}} /></a>&nbsp;&nbsp;&nbsp;
                                   <a href="https://www.instagram.com/dark_shadow_boy_05/profilecard/?igsh=dGpidjVvcHkyYzFh"><FontAwesomeIcon icon={faInstagram} style={{color:'#fa0505'}} /></a>&nbsp;&nbsp;&nbsp;
                                   <a href="mailto:mesiya2002samy@gmail.com" ><FontAwesomeIcon icon={faEnvelope} style={{color:'#fa0505'}} /></a>&nbsp;&nbsp;&nbsp;
                                   <a href="http://wa.me/+919361726533"><FontAwesomeIcon icon={faWhatsapp} style={{color:'#fa0505'}} /></a>&nbsp;&nbsp;&nbsp;
                                   <a href="https://mesiya-portfolio.netlify.app/"><FontAwesomeIcon icon={faLink} style={{color:'#fa0505'}} /></a></h4><br/>
                                   <h6  className="text-center fosp wedcopy">Copyright © 2025 <span>TYSON</span> STUDIO | All rights reserved !</h6>
                         </div>
                   
            </div>
        </div>
      </section>
    </>
  )
}

export default About
