import React from 'react'
import maternity1 from '../ASSETS/maternity/maternity1.png';
import maternity2 from '../ASSETS/maternity/maternity2.png';
import maternity3 from '../ASSETS/maternity/maternity3.png';
import maternity4 from '../ASSETS/maternity/maternity4.png';
import maternity5 from '../ASSETS/maternity/maternity5.png';
import maternity6 from '../ASSETS/maternity/maternity6.png';
import maternity7 from '../ASSETS/maternity/maternity7.png';
import maternity8 from '../ASSETS/maternity/maternity8.png';
import maternity9 from '../ASSETS/maternity/maternity9.png';
import maternity10 from '../ASSETS/maternity/maternity10.png';
import maternity11 from '../ASSETS/maternity/maternity11.png';
import maternity12 from '../ASSETS/maternity/maternity12.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLink,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faInstagram,faFacebook,faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Wedding.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Card from 'react-bootstrap/Card';


const Maternity = () => {
   useEffect (() => {
          AOS.init({})
           },[])
  return (
    <>
      <section>
        <div className='container-fluid'>
          <h1 className='text-center headwed' data-aos="fade-down" data-aos-duration="1000"> MATERNITY</h1>
          <h6 className='text-center wedsu' data-aos="fade-up" data-aos-duration="1000">Preserve the happiness of motherhood with some lovely pictures.</h6>

          <div className='row wedrow1'>

          <div className="col-lg-12 col-md-12 col-12">
            <h2 className='text-center hk' data-aos="fade-right" data-aos-duration="1000">Pricing Plans <span>.</span></h2>
            <h6 className='text-center hededed' data-aos="fade-left" data-aos-duration="1000">Plans at a bargain price, no need of a second option. 100% refunds on cancellation within 48 hours of booking.</h6>
          </div>
          
          <div className="col-lg-6 col-md-6 col-12">
           <Card style={{ width: '34rem',height:'26rem'}} className='cardwed' data-aos="fade-right" data-aos-duration="1000">
           <Card.Body style={{backgroundColor:"white",border:'none '}} className='cardbody'>
           <Card.Title className='cardtit'>INSTA MOM SHOOT'S</Card.Title>
           <Card.Text className="cardtext">
            Photography only. <br /><br/>
            ✧ 1 locations.<br />
            ✧ Upto 2 Dress change in 2   <br /> &nbsp;&nbsp;&nbsp;hours of shoot.. <br />
            ✧ 15 Edited images. <br /><br />
            1 Photographer with Prime Lens and lights on Full Frame Camera. <br />
            </Card.Text> 
           <Card.Subtitle>Offer Price: <br /> <br />₹  :  
           &nbsp; <span className='price1'>27999</span>  &nbsp;&nbsp;&nbsp;₹  :  <span className='price2'>25999 </span> 
           </Card.Subtitle> <br />
           <Card.Subtitle className='text-center hyper'><Link to="/Maternity.instabooking">BOOKING NOW</Link></Card.Subtitle>
           </Card.Body>
           </Card>
          </div>
          

          <div className="col-lg-6 col-md-6 col-12">
           <Card style={{ width: '34rem',height:'26rem'}} className='cardwed' data-aos="fade-left" data-aos-duration="1000">
           <Card.Body style={{backgroundColor:"white",border:'none '}} className='cardbody'>
           <Card.Title className='cardtit'>SUPER MOM SHOOT'S</Card.Title>
           <Card.Text className="cardtext">
            Photography + Reels + Dress. <br /><br/>
            ✧ Upto 4 hours of shoot. <br />
            ✧ 35 Edited images + 2 reels  <br /> &nbsp;&nbsp;&nbsp;of 30 seconds. <br />
            ✧ 1 Maternity Dress included.. <br /> <br />
           
            1 Photographer with Prime Lens and lights on Full Frame Camera. <br />
            
            </Card.Text> 
           <Card.Subtitle>Offer Price: <br /> <br />₹  :
           &nbsp;<span className='price1'>39999</span>  &nbsp;&nbsp;&nbsp; ₹  : <span className='price2'>34999</span> 
           </Card.Subtitle><br />
           <Card.Subtitle className='text-center hyper'><Link to="/Maternity.luxurybooking">BOOKING NOW</Link></Card.Subtitle>
           </Card.Body>
           </Card>
          </div>


          </div>

          <div className='row wedrow2'>
           <h2 className='text-center white' data-aos="fade-down" data-aos-duration="1000">Ideas For Photoshoot</h2>
           <h6 className='text-center' data-aos="fade-up" data-aos-duration="1000">Some ideas to inspire you, see how we have shot these high quality pictures.</h6>
          <div className="col-lg-3 col-md-6 col-12"data-aos="fade-right" data-aos-duration="1000">
          <img src={maternity1} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12"data-aos="fade-left" data-aos-duration="1000">
          <img src={maternity2} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12"data-aos="fade-right" data-aos-duration="1000">
          <img src={maternity3} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12"data-aos="fade-left" data-aos-duration="1000">
          <img src={maternity4} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12"data-aos="fade-right" data-aos-duration="1000">
          <img src={maternity5} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12"data-aos="fade-left" data-aos-duration="1000">
          <img src={maternity6} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12"data-aos="fade-right" data-aos-duration="1000">
          <img src={maternity7} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12"data-aos="fade-left" data-aos-duration="1000">
          <img src={maternity8} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12"data-aos="fade-right" data-aos-duration="1000">
          <img src={maternity9} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12"data-aos="fade-left" data-aos-duration="1000">
          <img src={maternity10} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12"data-aos="fade-right" data-aos-duration="1000" >
          <img src={maternity11} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12"  data-aos="fade-left" data-aos-duration="1000">
          <img src={maternity12} alt="wed1" />
          </div>
          <h2 className='nt1' data-aos="fade-up" data-aos-duration="1000"> * Note * :</h2>
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

export default Maternity
