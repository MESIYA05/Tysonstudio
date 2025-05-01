import React from 'react'
import party1 from '../ASSETS/party/party1.png';
import  party2 from '../ASSETS/party/party2.png';
import  party3 from '../ASSETS/party/party3.png';
import  party4 from '../ASSETS/party/party4.png';
import  party5 from '../ASSETS/party/party5.png';
import  party6 from '../ASSETS/party/party6.png';
import  party7 from '../ASSETS/party/party7.png';
import  party8 from '../ASSETS/party/party8.png';
import  party9 from '../ASSETS/party/party9.png';
import  party10 from '../ASSETS/party/party10.png';
import  party11 from '../ASSETS/party/party11.png';
import  party12 from '../ASSETS/party/party12.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLink,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faInstagram,faFacebook,faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Wedding.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Card from 'react-bootstrap/Card';


const Party = () => {
   useEffect (() => {
            AOS.init({})
             },[])
  return (
    <>
      <section>
        <div className='container-fluid'>
          <h1 className='text-center headwed' data-aos="fade-down" data-aos-duration="1000"> PARTY'S</h1>
          <h6 className='text-center wedsu' data-aos="fade-up" data-aos-duration="1000">Special occasions demand special attention ! Let's click !.</h6>

          <div className='row wedrow1'>

          <div className="col-lg-12 col-md-12 col-12">
            <h2 className='text-center hk' data-aos="fade-right" data-aos-duration="1000">Pricing Plans <span>.</span></h2>
            <h6 className='text-center hededed' data-aos="fade-left" data-aos-duration="1000">Plans at a bargain price, no need of a second option. 100% refunds on cancellation within 48 hours of booking.</h6>
          </div>
          
          <div className="col-lg-6 col-md-6 col-12">
           <Card style={{ width: '34rem',height:'26rem'}} className='cardwed'data-aos="fade-right" data-aos-duration="1000">
           <Card.Body style={{backgroundColor:"white",border:'none '}} className='cardbody'>
           <Card.Title className='cardtit'>INSTA SHOOT'S</Card.Title>
           <Card.Text className="cardtext">
            Photography only. <br /><br/>
            ✧ 2 Hour Event photography.<br /> <br />
            ✧ Full frame with prime lense. <br /> <br />
            ✧ 100 Edited images. <br /><br />
           
            </Card.Text> 
           <Card.Subtitle>Offer Price: <br /> <br />₹  :  
           &nbsp; <span className='price1'>8999</span>  &nbsp;&nbsp;&nbsp;₹  :  <span className='price2'>6999 </span> 
           </Card.Subtitle> <br />
           <Card.Subtitle className='text-center hyper'><Link to="/Party.instabooking">BOOKING NOW</Link></Card.Subtitle>
           </Card.Body>
           </Card>
          </div>
          

          <div className="col-lg-6 col-md-6 col-12">
           <Card style={{ width: '34rem',height:'26rem'}} className='cardwed'data-aos="fade-left" data-aos-duration="1000">
           <Card.Body style={{backgroundColor:"white",border:'none '}} className='cardbody'>
           <Card.Title className='cardtit'>LUXURY SHOOT'S</Card.Title>
           <Card.Text className="cardtext">
            Photography + Videography. <br /><br/>
            ✧ 2 Reels of 1 minutes. <br /> <br />
            ✧ 200 Edited images  <br /> <br />
            ✧ 4 Hour Event photography<br />
            
            
            </Card.Text> <br />
           <Card.Subtitle>Offer Price: <br /> <br />₹  :
           &nbsp;<span className='price1'>15999</span>  &nbsp;&nbsp;&nbsp; ₹  : <span className='price2'>12999</span> 
           </Card.Subtitle><br />
           <Card.Subtitle className='text-center hyper'><Link to="/Party.luxurybooking">BOOKING NOW</Link></Card.Subtitle>
           </Card.Body>
           </Card>
          </div>


          </div>

          <div className='row wedrow2'>
           <h2 className='text-center white' data-aos="fade-up" data-aos-duration="1000">Ideas For Photoshoot</h2>
           <h6 className='text-center' data-aos="fade-right" data-aos-duration="1000">Some ideas to inspire you, see how we have shot these high quality pictures.</h6>
          <div className="col-lg-3 col-md-6 col-12" data-aos="fade-right" data-aos-duration="1000">
          <img src={party1} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12" data-aos="fade-left" data-aos-duration="1000">
          <img src={party2} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12"data-aos="fade-right" data-aos-duration="1000">
          <img src={party3} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12" data-aos="fade-left" data-aos-duration="1000">
          <img src={party4} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12"data-aos="fade-right" data-aos-duration="1000">
          <img src={party5} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12"data-aos="fade-left" data-aos-duration="1000">
          <img src={party6} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12"data-aos="fade-right" data-aos-duration="1000">
          <img src={party7} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12"data-aos="fade-left" data-aos-duration="1000">
          <img src={party8} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12"data-aos="fade-right" data-aos-duration="1000">
          <img src={party9} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12"data-aos="fade-left" data-aos-duration="1000">
          <img src={party10} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12"data-aos="fade-right" data-aos-duration="1000">
          <img src={party11} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12"data-aos="fade-left" data-aos-duration="1000">
          <img src={party12} alt="wed1" />
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

export default Party
