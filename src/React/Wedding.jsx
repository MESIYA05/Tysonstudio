import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLink,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faInstagram,faFacebook,faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Wedding.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Card from 'react-bootstrap/Card';
import wedding1 from '../ASSETS/wedding/Wedding1.png';
import wedding2 from '../ASSETS/wedding/Wedding2.png';
import wedding3 from '../ASSETS/wedding/Wedding3.png';
import wedding4 from '../ASSETS/wedding/Wedding4.png';
import wedding5 from '../ASSETS/wedding/Wedding5.png';
import wedding6 from '../ASSETS/wedding/Wedding6.png';
import wedding7 from '../ASSETS/wedding/Wedding7.png';
import wedding8 from '../ASSETS/wedding/Wedding8.png';
import wedding9 from '../ASSETS/wedding/Wedding9.png';
import wedding10 from '../ASSETS/wedding/Wedding10.png';
import wedding11 from '../ASSETS/wedding/Wedding11.png';
import wedding12 from '../ASSETS/wedding/Wedding12.png';

const Wedding = () => {
    useEffect (() => {
      AOS.init({})
       },[])
  return (
    <>
      <section className='weddingsection'>
        <div className='container-fluid'>
          <h1 className='text-center headwed' data-aos="fade-down" data-aos-duration="1000"> WEDDING'<span>S</span></h1>
          <h6 className='text-center wedsu'  data-aos="fade-up" data-aos-duration="1000">Make sure the moment of a lifetime is captured for eternity.</h6>

          <div className='row wedrow1'>

          <div className="col-lg-12 col-md-12 col-12 heded">
            <h2 className='text-center hk'  data-aos="fade-left" data-aos-duration="1000">Pricing Plans <span>.</span></h2>
            <h6 className='text-center hededed'  data-aos="fade-right" data-aos-duration="1000">Plans at a bargain price, no need of a second option. 100% refunds on cancellation within 48 hours of booking.</h6>
          </div>
          
          <div className="col-lg-6 col-md-6 col-12">
           <Card style={{ width: '34rem',height:'26rem'}} className='cardwed' data-aos="fade-right" data-aos-duration="1000">
           <Card.Body style={{backgroundColor:"white",border:'none '}} className='cardbody'>
           <Card.Title className='cardtit'>GRAND WEDDING'S</Card.Title>
           <Card.Text className="cardtext">
            Photography + Video + Drone . <br /><br/>
            ✧ 3 Functions - 4 Member Team <br />
            ✧ 1 Traditional + 1 Candid Photogprapher,  <br /> &nbsp;&nbsp;&nbsp;&nbsp;1 Traditional  + 1 Cinematic  Videographer. <br />
            ✧ 1 Minute Teaser, 4 Min Trailer. 1 Full- <br/>  &nbsp;&nbsp;&nbsp; Length Traditional Video, 1000 Images. <br /><br />
            Full Frame Cameras,Prime and Wide Lenses,Gimbal, and Lights. <br />
            </Card.Text>
           <Card.Subtitle>Offer Price: <br /> <br />₹  :  
           &nbsp; <span className='price1'>180000</span>  &nbsp;&nbsp;&nbsp;₹  :  <span className='price2'>150000 </span> 
           </Card.Subtitle> <br />
           <Card.Subtitle className='text-center hyper'><Link to="/Wedding.instabooking">BOOKING NOW</Link></Card.Subtitle>
           </Card.Body>
           </Card>
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
           <Card.Subtitle className='text-center hyper'><Link to="/Wedding.luxurybooking">BOOKING NOW</Link></Card.Subtitle>
           </Card.Body>
           </Card>
          </div>


          </div>

          <div className='row wedrow2'>
           <h2 className='text-center white' data-aos="zoom-in" data-aos-duration="1000">Ideas For Photoshoot</h2>
           <h6 className='text-center'  data-aos="zoom-out" data-aos-duration="1000">Some ideas to inspire you, see how we have shot these high quality pictures.</h6>
          <div className="col-lg-3 col-md-6 col-12" data-aos="fade-right" data-aos-duration="1000">
          <img src={wedding11} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12" data-aos="fade-left" data-aos-duration="1000">
          <img src={wedding12} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12"data-aos="fade-right" data-aos-duration="1000">
          <img src={wedding10} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12" data-aos="fade-left" data-aos-duration="1000">
          <img src={wedding4} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12"data-aos="fade-right" data-aos-duration="1000">
          <img src={wedding5} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12" data-aos="fade-left" data-aos-duration="1000">
          <img src={wedding6} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12"data-aos="fade-right" data-aos-duration="1000">
          <img src={wedding7} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12" data-aos="fade-left" data-aos-duration="1000">
          <img src={wedding8} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12"data-aos="fade-right" data-aos-duration="1000">
          <img src={wedding9} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12" data-aos="fade-left" data-aos-duration="1000">
          <img src={wedding1} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12" data-aos="fade-right" data-aos-duration="1000">
          <img src={wedding2} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12" data-aos="fade-left" data-aos-duration="1000">
          <img src={wedding3} alt="wed1" />
          </div>
          <h2 className='nt1'data-aos="fade-up" data-aos-duration="1000"> * Note * :</h2>
          <h6 data-aos="fade-right" data-aos-duration="1000">All images are protected by Copyright Act and licensed
            to respective owners of the images, coping and sharing without consent and permission is strictly prohibited.</h6>

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

export default Wedding
