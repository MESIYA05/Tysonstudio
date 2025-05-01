import React from 'react'
import { useState,useEffect } from 'react'; 
import '../css/Instashoot.css'
import Card from 'react-bootstrap/Card';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLink,faEnvelope,} from '@fortawesome/free-solid-svg-icons';
import {faInstagram,faFacebook,faWhatsapp,} from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos'
import 'aos/dist/aos.css'
import axios from "axios";

const Weddingluxury = () => {
  useEffect (() => {
    AOS.init({})
     },[])
// Get today's date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0];

const [formData, setFormData] = useState({
  name: '',
  email: '',
  mobile: '',
  date: '',
  message: '',
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const dataToSend = {
    ...formData,
    service: 'wedding [luxury shoot]', // Use "service" instead of "servive"
    amount: 2200000,
  };

  try {
    const response = await axios.post('http://127.0.0.1:8000/rest/studio/', dataToSend, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('Success:', response.data);
    alert('Booking successfully!');
  } catch (error) {
    if (error.response && error.response.data) {
      console.error('Validation errors:', error.response.data);
      alert(`Booking Failed pls try again!:\n${JSON.stringify(error.response.data, null, 2)}`);
    } else {
      console.error('Error:', error);
      alert('An unexpected error occurred.');
    }
  }
};
  return (
    <>
      <section className='booksecwed'>
        <div className="container-fluid">
        <h1 className='text-center headwed'data-aos="fade-down" data-aos-duration="1000"> WEDDING'<span>S</span></h1>
        <h6 className='text-center wedsu' data-aos="fade-up" data-aos-duration="1000">Make sure the moment of a lifetime is captured for eternity.</h6>
        <div className='row wedrow1'>

<div className="col-lg-12 col-md-12 col-12 heded">
  <h2 className='text-center hk' data-aos="fade-right" data-aos-duration="1000">Pricing Plans <span>.</span></h2>
  <h6 className='text-center hededed' data-aos="fade-left" data-aos-duration="1000">Plans at a bargain price, no need of a second option. 100% refunds on cancellation within 48 hours of booking.</h6>
</div>

<div className="col-lg-6 col-md-6 col-12">
           <Card style={{ width: '34rem',height:'26rem'}} className='cardwed' data-aos="fade-left" data-aos-duration="1000">
           <Card.Body style={{backgroundColor:"white",border:'none '}} className='cardbody'>
           <Card.Title className='cardtit'>LUXURY WEDDING'S</Card.Title>
           <Card.Text className="cardtext">
            Photography + Video + Drone . <br /><br/>
            ✧ 5 Functions - 5 Member Team <br />
            ✧ 1 Traditional + 2 Candid Photogprapher,  <br /> &nbsp;&nbsp;&nbsp; &nbsp;1 Traditional  + 1 Cinematic  Videographer. <br />
            ✧ 1 Minute Teaser, 4 Min Trailer. 1 Full- <br/>  &nbsp;&nbsp;&nbsp;&nbsp; Length Traditional Video, 1000 Images. <br />
            ✧ Senior Team.<br />
            Full Frame Cameras,Prime and Wide Lenses,Gimbal, and Lights. <br />
            
            </Card.Text>
           <Card.Subtitle>Offer Price: <br /> <br />₹  :
           &nbsp;<span className='price1'>250000</span>  &nbsp;&nbsp;&nbsp; ₹  : <span className='price2'>220000</span> 
           </Card.Subtitle><br />
           
           </Card.Body>
           </Card>
          </div>


<div className="col-lg-6 col-md-6 col-12 con2">
              <form   onSubmit={handleSubmit} className='formbook' data-aos="fade-left" data-aos-duration="1000">
              <label htmlFor="name">Name : </label><br />
              <input type="text" name='name' value={formData.name} onChange={handleChange} placeholder='    enter name' minLength={3} maxLength={20}required /> <br />
              <label htmlFor="email">Email : </label><br />
              <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder='   enter email' required /> <br />
              <label htmlFor="mobile">Mobile : </label><br />
              <input type="text"   name='mobile' value={formData.mobile} onChange={handleChange}  placeholder='   enter mobile number'minLength={12} maxLength={12}required/> <br />
              <label htmlFor="date">Shoot Date : </label><br />
              <input type="date"   name='date'    value={formData.date} onChange={handleChange} min={today} required/> <br />
              <label htmlFor="message">Your Message : </label><br />
              <textarea type="text" name='message' value={formData.message} onChange={handleChange}  placeholder='   enter ur message' minLength={15} required/> <br />
             
              <button type="submit">BOOKING NOW</button>
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

export default Weddingluxury
