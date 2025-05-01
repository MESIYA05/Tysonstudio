import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect,useRef } from 'react';
import emailjs from '@emailjs/browser';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLink,faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons';
import {faInstagram,faFacebook,faWhatsapp,} from '@fortawesome/free-brands-svg-icons';
import '../css/Contact.css';


const Contact = () => {
    useEffect (() => {
          AOS.init({})
           },[])

           const form = useRef();

           const sendEmail = (e) => {
             e.preventDefault();
         
             emailjs
               .sendForm('service_z64vw0i', 'template_m4nrvf6', form.current, {
                 publicKey: 'J1ToocWjgXkzXFCmU',
               })
               .then(
                 () => {
                   console.log('SUCCESS!');
                 },
                 (error) => {
                   console.log('FAILED...', error.text);
                 },
               );
               e.target.reset()
           };       
  return (
    <>
      <section className='consec'>
      <div className="container-fluid">
          <h1 className='text-center hedtext headwed' data-aos="fade-down" data-aos-duration="1000">CONTACT  <span className='uniqhead'>US</span></h1>
          <p className='text-center wedsu weds' data-aos="fade-up" data-aos-duration="1000">Quickly let us know how can we help you.</p>
          <div className="row rows1">
            <div className="col-lg-6 col-md-6 col-12 con1" data-aos="fade-right" data-aos-duration="1000">
             <h3>CUSTOMER CARE :</h3>
              <a href="tel:9361726533"><FontAwesomeIcon icon={faPhone} style={{color:'#f2ff00 ',fontSize:'25px'}} /> : &nbsp; +91 9361726533</a> <br /> <br />
              <a href="https://www.instagram.com/dark_shadow_boy_05/profilecard/?igsh=dGpidjVvcHkyYzFh"><FontAwesomeIcon icon={faInstagram} style={{color:'#f2ff00 ',fontSize:'25px'}} /> :  &nbsp; Instagram</a> <br /> <br />
              <a href="mailto:mesiya2002samy@gmail.com" ><FontAwesomeIcon icon={faEnvelope} style={{color:'#f2ff00 ',fontSize:'25px'}} /> : &nbsp; mesiya2002samy@gmail.com</a> <br /> <br />
              <a href="http://wa.me/+919361726533"><FontAwesomeIcon icon={faWhatsapp} style={{color:'#f2ff00',fontSize:'25px'}} /> : &nbsp; Send Message</a> 
            </div>
            <div className="col-lg-6 col-md-6 col-12 con2" data-aos="fade-left" data-aos-duration="1000">
              <form  ref={form} onSubmit={sendEmail} className='form1'>
              <label htmlFor="name">Name : </label><br />
              <input type="text" name='name' placeholder='    enter name' minLength={3} maxLength={20}required /> <br />
              <label htmlFor="email">Email : </label><br />
              <input type="email" name='email' placeholder='   enter email' required /> <br />
              <label htmlFor="mobile">Mobile : </label><br />
              <input type="text"   name='mobile' placeholder='   enter mobile number'minLength={12} maxLength={12}required/> <br />
              <label htmlFor="message">Your Message : </label><br />
              <textarea type="text" name='message'  placeholder='   enter ur message' minLength={15} required/> <br />
             
              <input type="submit" value="Send Message"/>
              </form>
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

export default Contact
