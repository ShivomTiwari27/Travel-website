import React from 'react';
import Navbar from '../Component/Navbar/Navbar.jsx';
import Hero from '../Component/Hero/Hero.jsx';
import AboutImg from '../assets/night.jpg'; 
import Footer from '../Component/Footer/Footer.jsx';
import AboutUs from '../Component/AboutUs/AboutUs.jsx';

function About() {
  return (
    <>
    <Navbar/>
      <Hero cName = 'hero-about' 
            img   = {AboutImg}
            title = 'About'
            />
        <AboutUs/>
      <Footer/>

    </>
  )
}

export default About
