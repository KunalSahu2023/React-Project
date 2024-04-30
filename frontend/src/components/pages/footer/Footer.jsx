import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';
const Footer = () => {
  return (
   <>
   <div id="footer-container">
    <div class="footer-navbar">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/service">Our Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
        </ul>
    </div>
        <div class="footer-social-link">
           <Link to="#"><FaInstagram className='insta' /></Link>
            <Link to="#"><FaGithub className='github' /></Link>
            <Link to="#"><FaFacebook  className='fb'/></Link>
           <Link to="#"><FaYoutube className='yt' /></Link>
        </div>
        <div class="copyright">
            <p> © 2024 Harvest Tech </p>
        </div>
        <p class="name">Design & implemented by Kunal Sahu & Naman Jha .</p>
</div>
   </>
  )
}

export default Footer
