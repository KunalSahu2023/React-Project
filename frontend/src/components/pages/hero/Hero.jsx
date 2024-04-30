import React from 'react';
import './Hero.css';
import Navbar from './../navbar/Navbar';
import Questions from './../accordian/Questions';
import Footer from './../footer/Footer';

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
