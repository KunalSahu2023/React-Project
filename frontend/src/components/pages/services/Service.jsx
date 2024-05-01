import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';
import Nav from '../navbar/Nav';
import Footer from '../footer/Footer';
import { FaChalkboard, FaCloud, FaGlobe, FaRupeeSign, FaStore, FaWallet } from 'react-icons/fa';

const Service = () => {
  return (
    <>
    <Nav />
<div id="service-container" className='font'>
    <h2>Our Services</h2>
<div className="service-box">
    <div className="card">
       <Link to= ''>
        <FaChalkboard className='fa'/>
        <h3>E-Learning Platform</h3>
        </Link>
    </div>
    <div className="card">
       <Link to =''>
        <FaStore className='fa'/>
        <h3>Marketplace Price</h3>
        </Link>
    </div>
   <div className="card">
        <Link to ='/govt scheme'>
        <FaRupeeSign className='fa' />
        <h3>Government Scheme & Subsidiaries
        </h3>
        </Link>
    </div>
</div>

<div className="service-box">
    <div className="card">
       <Link to =''>
       <FaGlobe className='fa' />
        <h3>Localized Language Support</h3>
       </Link>
    </div>
    <div className="card">
        <Link to ='' >
        <FaCloud className='fa' />
        <h3>Real-Time Weather Forecast</h3>
        </Link>
    </div>
    <div className="card">
    <Link to ='' >
    <FaWallet className='fa'/>
        <h3>Crop Information and Management</h3>
        </Link>
    </div>
</div>
</div>
<Footer />
    </>
  )
}

export default Service
