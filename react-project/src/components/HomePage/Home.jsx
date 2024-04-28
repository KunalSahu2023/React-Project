import React from 'react';

import Navbar from '../NavbarPage/Navbar';
import Footer from '../FooterPage/Footer';
import Reviews from '../ReviewPage/Review';
import Questions from '../AccordiansPage/Questions';
import './home.css';

function Home() {
  return (
   <>
   <Navbar />
  <div id="home-container">
    <div class="content-box">
        <h1>Welcome In Harvest Tech</h1>
        <p>Growing Smarter, Harvesting Better.</p>
       </div>
       <div class="image-box-">

       </div>
    </div>
    <Reviews />
    <Questions />
    <Footer />
   </>
  )
}

export default Home;
