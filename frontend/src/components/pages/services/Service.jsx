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
        <h3><Link to=''>E-Learning Platform</Link></h3>
        </Link>
    </div>
    <div className="card">
       <Link to =''>
        <FaStore className='fa'/>
        <h3><Link to=''>Marketplace Price</Link></h3>
        </Link>
    </div>
   <div className="card">
        <Link to ='/govt scheme'>
        <FaRupeeSign className='fa' />
        <h3><Link to='/govt scheme'>Government Scheme & Subsidiaries
        </Link></h3>
        </Link>
    </div>
</div>

<div className="service-box">
    <div className="card">
       <Link to =''>
       <FaGlobe className='fa' />
        <h3><Link to =''>Localized Language Support</Link></h3>
       </Link>
    </div>
    <div className="card">
        <Link to ='' >
        <FaCloud className='fa' />
        <h3><Link to=''>Real-Time Weather Forecas</Link>t</h3>
        </Link>
    </div>
    <div className="card">
    <Link to ='' >
    <FaWallet className='fa'/>
        <h3><Link to=''>Crop Information and Management</Link></h3>
        </Link>
    </div>
</div>
</div>
<Footer />
    </>
  )
}

export default Service
