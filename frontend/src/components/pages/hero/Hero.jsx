import React from 'react';
import './Hero.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Questions from '../accordian/Questions';
import vid from '../../../assets/video.mp4';
import { SnackbarProvider, enqueueSnackbar} from 'notistack';

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
     <video autoPlay loop muted
     src={vid}/>
       </div>
    </div>

    {/* stackbar */}
    <Questions />
    {/* <SnackbarProvider />
      <button onClick={() => enqueueSnackbar('That was easy!')}>Show snackbar</button> */}
    <Footer />
   </>
  )
}

export default Hero;
