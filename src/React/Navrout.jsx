import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Party from './Party'
import Prewedding from './Prewedding'
import Wedding from './Wedding'
import Maternity from './Maternity'
import Kids from './KIds'
import Vacation from './Vacation'
import Gallery from './Gallery'
import About from './About'
import Review from './Review'
import Contact from './Contact' 
import Home from './Home'
import Weddinginsta from './Weddinginsta'
import Weddingluxury from './Weddingluxury'
import Prewedinsta from './Prewedinsta'
import Prewedluxury from './Prewedluxury'
import Materinsta from './Materinsta'
import Materluxury from './Materluxury'
import Kidsinsta from './Kidsinsta'
import Kidsluxury from './Kidsluxury'
import Vacationinsta from './Vacationinsta'
import Vacationluxury from './Vacationluxury'
import Partyinsta from './Partyinsta'
import Partluxury from './Partyluxury'

// Helper component to scroll to top on route navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navrout = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-wrapper">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Party" element={<Party/>}/>
            <Route path="/Prewedding" element={<Prewedding/>}/>
            <Route path="/Wedding" element={<Wedding/>}/>
            <Route path="/Maternity" element={<Maternity/>}/>
            <Route path="/Kids" element={<Kids/>}/>
            <Route path="/Vacation" element={<Vacation/>}/>
            <Route path="/Gallery" element={<Gallery/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Review" element={<Review/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Wedding.instabooking" element={<Weddinginsta/>}/>
            <Route path="/Wedding.luxurybooking" element={<Weddingluxury/>}/>
            <Route path="/Prewedding.instabooking" element={<Prewedinsta/>}/>
            <Route path="/Prewedding.luxurybooking" element={<Prewedluxury/>}/>
            <Route path="/Maternity.instabooking" element={<Materinsta/>}/>
            <Route path="/Maternity.luxurybooking" element={<Materluxury/>}/>
            <Route path="/Party.instabooking" element={<Partyinsta/>}/>
            <Route path="/Party.luxurybooking" element={<Partluxury/>}/>
            <Route path="/Kids.instabooking" element={<Kidsinsta/>}/>
            <Route path="/Kids.luxurybooking" element={<Kidsluxury/>}/>
            <Route path="/Vacation.instabooking" element={<Vacationinsta/>}/>
            <Route path="/Vacation.luxurybooking" element={<Vacationluxury/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default Navrout
