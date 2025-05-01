import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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


const Navrout = () => {
  return (
    <>
      <div className="mes">
       
        <BrowserRouter>
        <Navbar/>
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
        </BrowserRouter>
      </div>
    </>
  )
}

export default Navrout
