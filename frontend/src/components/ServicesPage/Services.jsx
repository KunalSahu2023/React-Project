import React from 'react';
import './services.css';
import Navbar from '../NavbarPage/Navbar';
import Footer from '../FooterPage/Footer';

function Services() {

  return (
   <>
   <Navbar />
<div id="service-container">
    <h3>Our Services</h3>
<div className="service-box">
    <div className="card">
        <i className="fa-sharp fa-solid fa-chalkboard-user"></i>
        <h3>E-Learning Platform</h3>
    </div>
    <div className="card">
        <i className="fa-regular fa-solid fa-store"></i>
        <h3>Marketplace Price</h3>
    </div>
    <div className="card">
        <i className="fa-solid fa-indian-rupee-sign"></i>
        <h3>Government Scheme & Subsidiaries</h3>
    </div>
</div>

<div className="service-box">
    <div className="card">
        <i className="fa-solid fa-globe"></i>
        <h3>Localized Language Support</h3>
    </div>
    <div className="card">
        <i className="fa-solid fa-sharp fa-cloud"></i>
        <h3>Real-Time Weather Forecast</h3>
    </div>
    <div className="card">
        <i className="fa-solid fa-wheat-awn"></i>
        <h3>Crop Information and Management</h3>
    </div>
</div>
</div>



<div id="gallery-container">
    <div className="gallery-box">
        <div className="cards">
            <img src="/images/language-icon.jpeg" alt="" />
            <div className="intro">
                <h2>Localized Language Support.</h2>
                <p>Ensures that our platform is accessible to users across different regions and multilingual support in their preferred language.</p>
            </div>
        </div>
        <div className="cards">
            <img src="/images/weather-icon.jpeg" alt="" />
            <div className="intro">
                <h2>Real-Time Weather Forecast</h2>
                <p>Harvest Tech offers real-time weather forecast services to help farmers effectively plan and manage their agricultural 
                    activities.</p>
            </div>
        </div>
        <div className="cards">
            <img src="/images/crop tools.jpeg" alt="" />
            <div className="intro">
                <h2>Crop Information and Management</h2>
                <p>Our Crop Information and Management service provides farmers with comprehensive insights and tools to optimize 
                    crop cultivation, crop monitoring and management features.</p>
            </div>
        </div>
    </div>
    <div className="gallery-box">
        <div className="cards">
            <img src="/images/e-learning.jpeg" alt="" />
            <div className="intro">
                <h2>E-Learning Platform</h2>
                <p>Convenient anytime, anywhere access to high-quality learning materials, 
                    empowering users to stay updated with the latest industry trends and advancements</p>
            </div>
        </div>
        <div className="cards">
            <img src="/images/scheme-4.jpg" alt="" />
            <div className="intro">
                <h2>Government Scheme & Subsidiaries.</h2>
                <p>Farmers navigate agricultural policies, schemes,and subsidies and government programs.aggregates 
                    data on agricultural policies, programs, and financial incentives.</p>
            </div>
        </div>
        <div className="cards">
            <img src="/images/scheme-5.jpg" alt="" />
            <div class="intro">
                <h2>Marketplace Price</h2>
                <p>Real-time data on crop prices, market trends. Farmers can access up-to-date information on 
                    commodity prices in local and regional markets</p>
            </div>
        </div>
    </div>
</div>

<Footer />
   </>
  )
}

export default Services;
