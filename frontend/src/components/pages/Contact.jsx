import React from 'react'
import '../styles/contact.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
  return (
  <>
  <Navbar />
  <div id="contact-container">
     <h3>Contact Us </h3>
     <div class="contact-box">
    <div class="address">
           <div class="address-box">
            <h3>Get in touch</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quisquam?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit, blanditiis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, assumenda?
            </p>
            <p><a href=""><i class="fa-regular fa-building"></i> Barwasagar - Jhansi (U.P.)</a></p>
           <p><a href=""><i class="fa-solid fa-phone"></i> 8076215837 , 7654238900</a></p>
           <p> <a href=""><i class="fa-solid fa-envelope"></i> harvesttech@gmail.com</a></p>
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
                    <button class="btn">Send message</button>
            </form>
        </div>
        
    </div>

 </div>
 
 <Footer />
  </>
  )
}

export default Contact
