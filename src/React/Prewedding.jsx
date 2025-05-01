import React from 'react'
import Prewedding1 from '../ASSETS/pre wedding/prewedding1.png';
import Prewedding2 from '../ASSETS/pre wedding/prewedding2.png';
import Prewedding3 from '../ASSETS/pre wedding/prewedding3.png';
import Prewedding4 from '../ASSETS/pre wedding/prewedding4.png';
import Prewedding5 from '../ASSETS/pre wedding/prewedding5.png';
import Prewedding6 from '../ASSETS/pre wedding/prewedding6.png';
import Prewedding7 from '../ASSETS/pre wedding/prewedding7.png';
import Prewedding8 from '../ASSETS/pre wedding/prewedding8.png';
import Prewedding9 from '../ASSETS/pre wedding/prewedding9.png';
import Prewedding10 from '../ASSETS/pre wedding/prewedding10.png';
import Prewedding11 from '../ASSETS/pre wedding/prewedding12.png';
import Prewedding12 from '../ASSETS/pre wedding/prewedding12.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLink,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faInstagram,faFacebook,faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Wedding.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Card from 'react-bootstrap/Card';



const Prewedding = () => {
  useEffect (() => {
        AOS.init({})
         },[])
  return (
    <>
       <section>
        <div className='container-fluid'>
          <h1 className='text-center headwed' data-aos="fade-down" data-aos-duration="1000">PRE <span className='uniqhead'>WEDDING'S</span></h1>
          <h6 className='text-center wedsu' data-aos="fade-up" data-aos-duration="1000">Make sure the moment of a lifetime is captured for eternity.</h6>

          <div className='row wedrow1'>

          <div className="col-lg-12 col-md-12 col-12">
            <h2 className='text-center hk' data-aos="fade-right" data-aos-duration="1000">Pricing Plans <span>.</span></h2>
            <h6 className='text-center hededed' data-aos="fade-left" data-aos-duration="1000">Plans at a bargain price, no need of a second option. 100% refunds on cancellation within 48 hours of booking.</h6>
          </div>
          
          <div className="col-lg-6 col-md-6 col-12">
           <Card style={{ width: '34rem',height:'26rem'}} className='cardwed'data-aos="fade-right" data-aos-duration="1000">
           <Card.Body style={{backgroundColor:"white",border:'none '}}  className='cardbody'>
           <Card.Title className='cardtit'>INSTA SHOOT'S</Card.Title>
           <Card.Text className="cardtext">
            Photography only <br /><br/>
            ✧ 25 Edited images.<br />  <br />
            ✧ 4 Hours shoot,2 locations & 2 Dress <br /> &nbsp;&nbsp; Changes.   <br />  <br />
            ✧ Full Frame Camera & 1 Photographer  <br /> &nbsp;&nbsp;with Prime  Lens. <br />
            </Card.Text>  
           <Card.Subtitle>Offer Price: <br /> <br />₹  :  
           &nbsp; <span className='price1'>16999</span>  &nbsp;&nbsp;&nbsp;₹  :  <span className='price2'>15999 </span> 
           </Card.Subtitle> <br />
           <Card.Subtitle className='text-center hyper'><Link to="/Prewedding.instabooking">BOOKING NOW</Link></Card.Subtitle>
           </Card.Body>
           </Card>
          </div>
          

          <div className="col-lg-6 col-md-6 col-12">
           <Card style={{ width: '34rem',height:'26rem'}} className='cardwed' data-aos="fade-left" data-aos-duration="1000">
           <Card.Body style={{backgroundColor:"white",border:'none '}} className='cardbody'>
           <Card.Title className='cardtit'>LUXURY SHOOT'S</Card.Title>
           <Card.Text className="cardtext">
            Photography + Videography. <br /><br/>
            ✧ 35 Edited images.<br />
            ✧ 2-3 Minutes Cinematic  Video. <br />
            ✧ 8 Hours shoot with 3 Dress Changes at 3 <br /> &nbsp;&nbsp;&nbsp;&nbsp;locations. <br />
           
            1 Photographer, 1 Cinematographer, Full Frame Camera bodies with Prime and Wide Lenses along with Gimbal. <br />
            
            </Card.Text><br />
            
           <Card.Subtitle>Offer Price: <br /> <br />₹  :
           &nbsp;<span className='price1'>35999</span>  &nbsp;&nbsp;&nbsp; ₹  : <span className='price2'>33999</span> 
           </Card.Subtitle><br />
           <Card.Subtitle className='text-center hyper'><Link to="/Prewedding.luxurybooking">BOOKING NOW</Link></Card.Subtitle>
           </Card.Body>
           </Card>
          </div>


          </div>

          <div className='row wedrow2'>
           <h2 className='text-center white'data-aos="fade-up" data-aos-duration="1000">Ideas For Photoshoot</h2>
           <h6 className='text-center' data-aos="fade-down" data-aos-duration="1000">Some ideas to inspire you, see how we have shot these high quality pictures.</h6>
          <div className="col-lg-3 col-md-6 col-12" data-aos="fade-right" data-aos-duration="1000">
          <img src={Prewedding1} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12"data-aos="fade-left" data-aos-duration="1000">
          <img src={Prewedding2} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12"data-aos="fade-right" data-aos-duration="1000">
          <img src={Prewedding3} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12"data-aos="fade-left" data-aos-duration="1000">
          <img src={Prewedding4} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12"data-aos="fade-right" data-aos-duration="1000">
          <img src={Prewedding5} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12"data-aos="fade-left" data-aos-duration="1000">
          <img src={Prewedding6} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12"data-aos="fade-right" data-aos-duration="1000">
          <img src={Prewedding7} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12"data-aos="fade-left" data-aos-duration="1000">
          <img src={Prewedding8} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12"data-aos="fade-right" data-aos-duration="1000">
          <img src={Prewedding9} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12"data-aos="fade-left" data-aos-duration="1000">
          <img src={Prewedding10} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12"data-aos="fade-right" data-aos-duration="1000">
          <img src={Prewedding11} alt="wed1" />
          </div>
          <div className="col-lg-3 col-md-6 col-12" data-aos="fade-left" data-aos-duration="1000">
          <img src={Prewedding12} alt="wed1" />
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

export default Prewedding
