import React from 'react';
import Navbar from '../Component/Navbar/Navbar.jsx';
import Hero from '../Component/Hero/Hero.jsx';
import ServiceImg from '../assets/night.jpg'; 
import Trip from '../Component/Trip/Trip.jsx';
import Footer from '../Component/Footer/Footer.jsx';

function Service() {
  return (
    <>
    <Navbar/>
      <Hero cName = 'hero-about' 
            img   = {ServiceImg}
            title = 'Service'
            />
       <Trip/>
      <Footer/>
    </>
  )
}


export default Service
