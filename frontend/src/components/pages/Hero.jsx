import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Answers from './accordian/Answers';

const Hero = () => {
  return (
   <>
   <Navbar />
   <div id="home-container">
    <div class="content-box">
      <video src='' />
        <h1>Welcome In Harvest Tech</h1>
        <p>Growing Smarter, Harvesting Better.</p>
       </div>
       <div class="image-box-">
       </div>
    </div>
    <Answers />
    <Footer />
   </>
  )
}

export default Hero;
