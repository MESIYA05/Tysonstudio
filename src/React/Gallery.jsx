import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLink,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faInstagram,faFacebook,faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import '../css/Gallery.css';
import kids9 from '../ASSETS/kids/kids9.png';
import kids10 from '../ASSETS/kids/kids10.png';
import kids11 from '../ASSETS/kids/kids11.png';
import kids12 from '../ASSETS/kids/kids12.png';

import wedding2 from '../ASSETS/wedding/Wedding2.png';
import wedding3 from '../ASSETS/wedding/Wedding3.png';
import wedding4 from '../ASSETS/wedding/Wedding4.png';
import wedding5 from '../ASSETS/wedding/Wedding5.png';

import maternity4 from '../ASSETS/maternity/maternity4.png';
import maternity5 from '../ASSETS/maternity/maternity5.png';
import maternity6 from '../ASSETS/maternity/maternity6.png';
import maternity7 from '../ASSETS/maternity/maternity7.png';

import vacation5 from '../ASSETS/vacation/vacation5.png';
import vacation6 from '../ASSETS/vacation/vacation6.png';
import vacation7 from '../ASSETS/vacation/vacation7.png';
import vacation8 from '../ASSETS/vacation/vacation8.png';

import  party3 from '../ASSETS/party/party3.png';
import  party4 from '../ASSETS/party/party4.png';
import  party5 from '../ASSETS/party/party5.png';
import  party6 from '../ASSETS/party/party6.png';

import Prewedding2 from '../ASSETS/pre wedding/prewedding2.png';
import Prewedding3 from '../ASSETS/pre wedding/prewedding3.png';
import Prewedding4 from '../ASSETS/pre wedding/prewedding4.png';
import Prewedding5 from '../ASSETS/pre wedding/prewedding5.png';

import gallery1 from '../ASSETS/gallery/gallery1.png';
import gallery2 from '../ASSETS/gallery/gallery2.png';
import gallery3 from '../ASSETS/gallery/gallery3.png';
import gallery4 from '../ASSETS/gallery/gallery4.png';
import gallery5 from '../ASSETS/gallery/gallery5.png';
import gallery6 from '../ASSETS/gallery/gallery6.png';
import gallery7 from '../ASSETS/gallery/gallery7.png';
import gallery8 from '../ASSETS/gallery/gallery8.png';
import gallery9 from '../ASSETS/gallery/gallery9.png';
import gallery10 from '../ASSETS/gallery/gallery10.png';
import gallery11 from '../ASSETS/gallery/gallery11.png';
import gallery12 from '../ASSETS/gallery/gallery12.png';
import gallery13 from '../ASSETS/gallery/gallery13.png';
import gallery14 from '../ASSETS/gallery/gallery14.png';
import gallery15 from '../ASSETS/gallery/gallery15.png';
import gallery16 from '../ASSETS/gallery/gallery16.png';

const Gallery = () => {
    useEffect (() => {
          AOS.init({})
           },[])
  return (
    <>
      <section className='galsec'>
        <div className='container-fluid'>
          <h1 className='text-center headwed gall'data-aos="fade-down" data-aos-duration="1000"> GALLERY</h1>
        
           
                  <div className='row galrow'>
                     <h2 className='text-center galsubb' data-aos="fade-right" data-aos-duration="1000">Ideas For Photoshoot</h2>
                     <h6 className='text-center' data-aos="fade-left" data-aos-duration="1000">Some ideas to inspire you, see how we have shot these high quality pictures.</h6>
                    
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-down" data-aos-duration="1000">
                    <img src={gallery1} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-left" data-aos-duration="1000">
                    <img src={gallery2} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-right" data-aos-duration="1000">
                    <img src={gallery3} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi" data-aos="fade-left" data-aos-duration="1000">
                    <img src={gallery4} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-right" data-aos-duration="1000">
                    <img src={gallery5} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-left" data-aos-duration="1000">
                    <img src={wedding2} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-right" data-aos-duration="1000">
                    <img src={wedding3} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-left" data-aos-duration="1000">
                    <img src={Prewedding5} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-right" data-aos-duration="1000">
                    <img src={party4} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-left" data-aos-duration="1000">
                    <img src={kids11} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-right" data-aos-duration="1000">
                    <img src={maternity5} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-left" data-aos-duration="1000">
                    <img src={vacation6} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-right" data-aos-duration="1000">
                    <img src={wedding4} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-left" data-aos-duration="1000">
                    <img src={wedding5} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-right" data-aos-duration="1000">
                    <img src={party3} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-left" data-aos-duration="1000">
                    <img src={party5} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-right" data-aos-duration="1000">
                    <img src={vacation8} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-left" data-aos-duration="1000">
                    <img src={maternity7} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-right" data-aos-duration="1000">
                    <img src={party6} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-left" data-aos-duration="1000">
                    <img src={vacation5} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-right" data-aos-duration="1000">
                    <img src={vacation7} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-left" data-aos-duration="1000">
                    <img src={kids9} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-right" data-aos-duration="1000">
                    <img src={kids10} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-left" data-aos-duration="1000">
                    <img src={Prewedding3} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-right" data-aos-duration="1000">
                    <img src={kids12} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-left" data-aos-duration="1000">
                    <img src={Prewedding2} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-right" data-aos-duration="1000">
                    <img src={Prewedding4} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-left" data-aos-duration="1000">
                    <img src={maternity6} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-right" data-aos-duration="1000">
                    <img src={maternity4} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-left" data-aos-duration="1000">
                    <img src={gallery6} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-right" data-aos-duration="1000">
                    <img src={gallery7} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-left" data-aos-duration="1000">
                    <img src={gallery8} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-right" data-aos-duration="1000">
                    <img src={gallery9} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-left" data-aos-duration="1000">
                    <img src={gallery10} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-right" data-aos-duration="1000">
                    <img src={gallery11} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-left" data-aos-duration="1000">
                    <img src={gallery12} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-right" data-aos-duration="1000">
                    <img src={gallery13} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-left" data-aos-duration="1000">
                    <img src={gallery14} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-right" data-aos-duration="1000">
                    <img src={gallery15} alt="wed1" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 galdi"data-aos="fade-left" data-aos-duration="1000">
                    <img src={gallery16} alt="wed1" />
                    </div>
                    
                    <h2 className='nt1'data-aos="fade-down" data-aos-duration="1000"> * Note  :</h2>
                    <h6 className='ntot' data-aos="fade-left" data-aos-duration="1000">All images are protected by Copyright Act and licensed
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

export default Gallery
