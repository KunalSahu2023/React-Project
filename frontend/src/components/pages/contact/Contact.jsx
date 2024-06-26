import React from 'react';
import './Contact.css';
import Nav from '../navbar/Nav';
import Footer from '../footer/Footer';
import { FaBuilding, FaEnvelope, FaEnvelopeOpen, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
  <>
  <Nav />
  <div id="contact-container">
     <h2>Contact Us </h2>
     <div class="contact-box">
    <div class="address">
           <div class="address-box">
            <h3>Get in touch</h3>
            <p>Contact us For More information
            </p>
            <p><a href=""><FaBuilding className='building' />Barwasagar - Jhansi (U.P.)</a></p>
           <p><Link to="tel:+07307129517"> <FaPhone className='phone'/> 8076215837</Link></p>
           <p> <a href="mailto:harvesttech24@gmail.com"><FaEnvelopeOpen className='envelope' /> harvesttech24@gmail.com</a></p>
           </div>
        </div>
        <div class="contact-form">
        <form action="">
                <p><label for="first-name">First Name</label><br />
                <input type="text" placeholder="Enter First Name" /></p>

                <p><label for="last-name">Last Name</label><br />
                    <input type="text" placeholder="Enter Last name" /></p>

                <p><label for="mobile-number">Mobile number</label><br /> 
                    <input type="number"placeholder="+ 91." /></p>

                <p><label for="email">Email address</label><br />
                    <input type="email" required placeholder="Enter Email address" /></p>

                <p><label for="message">Message</label><br />
                    <textarea name="" id="" cols="20" rows="5"> Write something ....</textarea></p>
                    <a href="mailto:kunalsahu3131@gmail.com"><button class="btn">Send message</button></a>
            </form>
        </div>
        
    </div>

 </div>
 <Footer />
  </>
  )
}

export default Contact
