import React from 'react';
import '../styles/services.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Service = () => {
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
<Footer />
    </>
  )
}

export default Service
