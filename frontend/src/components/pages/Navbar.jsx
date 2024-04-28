import React, { useState } from 'react';
import '../styles/navbar.css';
import Account from './Account';

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = ()=>{
    setShowPopup(!showPopup);
  }
  return (
    <>
     <header id="header-container">
        <h2><a href="/" class="logo">Harvest Tech</a></h2>

        <nav class="header-navbar">
            <ul>
          <li>
          <a href='/'>Home</a>
          </li>
          <li>
          <a href='/about'>About Us</a>
          </li>
          <li>
          <a href='/service'>Our Services</a>
          </li>
          <li>
          <a href='/contact'>Contact Us</a>
          </li>
            </ul>
            <div class="menu">
                <span><i class="fa-solid fa-bars"></i></span>
            </div>
        </nav>
        <div class="account">
            <button onClick={togglePopup} class="btn">SignUp / LogIn</button>
            {showPopup && <Account />}
            
        </div>
    </header>
    </>
  )
}

export default Navbar
