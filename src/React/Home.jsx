import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'
import pexels from '../ASSETS/homeimg/pexels.jpg';
import Card from 'react-bootstrap/Card';
import wedding1 from '../ASSETS/wedding/Wedding1.png';
import prewedding1 from '../ASSETS/pre wedding/prewedding1.png';
import party1 from '../ASSETS/party/party1.png';
import maternity1 from '../ASSETS/maternity/maternity1.png';
import kids1 from '../ASSETS/kids/kids1.png';
import vacation1 from '../ASSETS/vacation/vacation1.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLink,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faInstagram,faFacebook,faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import '../css/Home.css';


const Home = () => {
  useEffect (() => {
    AOS.init({})
  },[])

  return (
    <>
      
    <section id='home' className='home'>
    <div className="container-fluid">
      <div className="row homerow">

      <div className="col-lg-6 col-md-12 col-12 homecol"  data-aos="fade-down" data-aos-duration="1000" >
      <h3 className="hohead">Bring Out The</h3>
      <h1>Celebrity In You </h1><br/>
      <h6 >Be a star yourself with our quality photoshoot at various <br/> occations,
           moments and places that you travel .Let your <br/>photos speak your story,
           in style.and Ldrago stodio <br /> only have Professional photographers,they made 
           the <br /> beautifull moments in your Life !.
      </h6><br/>
      <Link to="/Contact">Enquiry Us </Link> &nbsp;&nbsp;&nbsp; <Link to="/Gallery">Sample Shoots</Link>
      </div>
      <div className="col-lg-6 col-md-6 col-12 "  data-aos="fade-up" data-aos-duration="1000">
      <img src={pexels}  alt="homeimg" className="img-fluid homeimg"  />
      </div>

      </div>
  
  

      <div className="row homerow2">

      <h6 className="text" data-aos="fade-right">Life Full of Beautiful Moments, We  Just Need Capture Them.</h6>
      <h2 className="text1"data-aos="fade-left">Occations To Capture <span>.</span></h2>
      <div className="col-lg-6 col-md-6 col-12" data-aos="fade-right" data-aos-duration="1000"><br/>
      <Card style={{ width: '34rem'}} className='card'>
      <Card.Img  className="text-center img2" variant="top" src={wedding1} />
      <Card.Body className='cards'>
      <h5><Link to="/Wedding">WEDDINGS</Link></h5>
      </Card.Body>
      </Card>
      </div> 
 
      <div className="col-lg-6 col-md-6 col-12" data-aos="fade-left" data-aos-duration="1000"><br/>
      <Card style={{ width: '34rem'}} className='card'>
      <Card.Img  className="text-center img2" variant="top" src={prewedding1} />
      <Card.Body className='cards'>
      <h5><Link to="/Prewedding">PRE WEDDINGS</Link></h5>
      </Card.Body>
      </Card>
      </div> 

      <div className="col-lg-6 col-md-6 col-12 " data-aos="fade-right" data-aos-duration="1000"><br/>
      <Card style={{ width: '34rem'}} className='card'>
      <Card.Img  className="text-center img2" variant="top" src={party1} />
      <Card.Body className='cards'>
      <h5><Link to="/Party">PARTY'S</Link></h5>
      </Card.Body>
      </Card>
      </div> 

      <div className="col-lg-6 col-md-6 col-12"  data-aos="fade-left" data-aos-duration="1000"><br/>
      <Card style={{ width: '34rem'}} className='card'>
      <Card.Img  className="text-center img2" variant="top" src={maternity1} />
      <Card.Body className='cards'>
      <h5><Link to="/Maternity">MATERNITY</Link></h5>
      </Card.Body>
      </Card>
      </div> 

      <div className="col-lg-6 col-md-6 col-12"  data-aos="fade-right" data-aos-duration="1000" ><br/>
      <Card style={{ width: '34rem'}} className='card'>
      <Card.Img  className="text-center img2" variant="top" src={kids1} />
      <Card.Body className='cards'>
      <h5><Link to="/Kids">KIDS & BABY'S</Link></h5>
      </Card.Body>
      </Card>
      </div> 

      <div className="col-lg-6 col-md-6 col-12" data-aos="fade-left" data-aos-duration="1000"><br/>
      <Card style={{ width: '34rem'}} className='card'>
      <Card.Img  className="text-center img2" variant="top" src={vacation1} />
      <Card.Body className='cards'>
      <h5><Link to="/Vacation">VACATION</Link></h5>
      </Card.Body>
      </Card>
      </div> 

      </div>



      
      <div className="row thirdrow">

      <div className="col-lg-12 col-md-12 col-12 bb" data-aos="zoom-in">
      <h6 className="som">Some Starts To Our Capacity.</h6>
      <h1 className="coz">Coz Numbers Don't Lie <span>.</span></h1><br/>
      <div className="di">
      <div className="ji">  <h1 className="numer">80,000+</h1>
      <h6>Shoots Done</h6></div>
      <div className="ji">  <h1 className="numer">800+</h1>
      <h6>Photographers</h6></div>
      <div className="ji">  <h1 className="numer">140+</h1>
      <h6>Cities</h6></div>
      <div className="ji">  <h1 className="numer">2.5m+</h1>
      <h6>Images Processed</h6></div>
      </div>
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

export default Home
