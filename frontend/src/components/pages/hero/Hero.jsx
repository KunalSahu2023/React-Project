import React from 'react';
import './Hero.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Questions from '../accordian/Questions';

function Hero() {

  return (
   <>
   <Navbar />
  <div id="home-container">
    <div class="content-box">
        <h1>Welcome To Harvest Tech</h1>
        <p>Growing Smarter, Harvesting Better.</p>
        
       </div>
       <div class="image-box-">
     <video
     src=''
     controls muted loop />
       </div>
    </div>
    <Questions />
    <Footer />
   </>
  )
}

export default Hero;
