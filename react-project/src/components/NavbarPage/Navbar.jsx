
import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
function Navbar() {

  return (
   <>
  <header id="header-container">
        <h2><Link to="/" class="logo">Harvest Tech</Link></h2>

        <nav class="header-navbar">
            <ul>
          <li>
          <Link to='/'>Home</Link>
          </li>
          <li>
          <Link to='/about'>About Us</Link>
          </li>
          <li>
          <Link to='/service'>Our Services </Link>
          </li>
          <li>
          <Link to='/contact'>Contact Us</Link>
          </li>
            </ul>
            <div class="menu">
                <span><i class="fa-solid fa-bars"></i></span>
            </div>
        </nav>
        <div class="account">
            <button class="btn">SignUp / LogIn</button>
        </div>
    </header>
   </>
  )
}

export default Navbar;
