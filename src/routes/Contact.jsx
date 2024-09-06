import React from 'react'
import Navbar from '../Component/Navbar/Navbar.jsx';
import Hero from '../Component/Hero/Hero.jsx';
import ContactImg from '../assets/2.jpg';
import Footer from '../Component/Footer/Footer.jsx';
import ContactForm from '../Component/ContactForm/ContactForm.jsx';

const Contact = () => {
  return (
    <>
    <Navbar/>
      <Hero cName = 'hero-about' 
            img   = {ContactImg}
            title = 'Contact'
            />
      <ContactForm />
     <Footer/>
    </>
  )
}

export default Contact ;