import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';
import Nav from './../navbar/Nav';
import Footer from './../footer/Footer';

const Service = () => {
  return (
    <>
    <Nav />
<div id="service-container" className='font'>
    <h2>Our Services</h2>
<div className="service-box">
    <div className="card">
        <i className="fa-sharp fa-solid fa-chalkboard-user"></i>
        <h3><Link to=''>E-Learning Platform</Link></h3>
    </div>
    <div className="card">
        <i className="fa-regular fa-solid fa-store"></i>
        <h3><Link to=''>Marketplace Price</Link></h3>
    </div>
   <div className="card">
        <i className="fa-solid fa-indian-rupee-sign"></i>
        <h3>
        <Link to='/govt scheme'>
            Government Scheme & Subsidiaries
    </Link>
    </h3>
    </div>
</div>

<div className="service-box">
    <div className="card">
        <i className="fa-solid fa-globe"></i>
        <h3><Link to=''>Localized Language Support</Link></h3>
    </div>
    <div className="card">
        <i className="fa-solid fa-sharp fa-cloud"></i>
        <h3><Link to=''>Real-Time Weather Forecas</Link>t</h3>
    </div>
    <div className="card">
        <i className="fa-solid fa-wheat-awn"></i>
        <h3><Link to=''>Crop Information and Management</Link></h3>
    </div>
</div>
</div>
<Footer />
    </>
  )
}

export default Service
