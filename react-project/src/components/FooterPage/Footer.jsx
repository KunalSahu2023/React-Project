import React from 'react'
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {

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
           <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-github"></i></a>
            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
           <a href="#"><i class="fa-brands fa-youtube"></i></a>
        </div>
        <div class="copyright">
            <p>&copy 2024 <a href="#">Harvest Tech.</a></p>
        </div>
        <p class="name">Design & implement by Kunal Sahu & Naman Jha .</p>
</div>
   </>
  )
}

export default Footer;
