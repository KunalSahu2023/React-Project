import React from 'react'
import '../styles/footer.css';
const Footer = () => {
  return (
   <>
   <div id="footer-container">
    <div class="footer-navbar">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/service">Our Services</a></li>
            <li><a to="/contact">Contact Us</a></li>
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

export default Footer
