import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
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
        {/* <div class="footer-social-link">
           <Link to="#"><i class="fa-brands fa-instagram"></i></a>
            <Link to="#"><i class="fa-brands fa-github"></i></a>
            <Link to="#"><i class="fa-brands fa-facebook-f"></i></a>
           <Link to="#"><i class="fa-brands fa-youtube"></i></a>
        </div> */}
        <div class="copyright">
            <p> © 2024 Harvest Tech </p>
        </div>
        <p class="name">Design & implemented by Kunal Sahu & Naman Jha .</p>
</div>
   </>
  )
}

export default Footer
