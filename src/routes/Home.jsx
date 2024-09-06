import React from 'react'
import Navbar from '../Component/Navbar/Navbar.jsx';
import Hero from '../Component/Hero/Hero.jsx';
import HomeImg from '../assets/12.jpg'; 
import Destination from '../Component/Destination/Destination.jsx';
import Trip from '../Component/Trip/Trip.jsx';
import Footer from '../Component/Footer/Footer.jsx';

function Home() {
  return (
    <>
    <Navbar/>
    <Hero cName = 'hero' 
            img   = {HomeImg}
            title = 'Your journey Your Story'
            text  = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            btnText = 'Travel Plan'
            url   = '/'
            btnClass = "show"/>
     <Destination />
     <Trip/>    
     <Footer />    
    </>
  )
}

export default Home
