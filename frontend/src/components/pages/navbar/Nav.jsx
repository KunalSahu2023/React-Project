import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Nav = () => {

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
          <Link to='/about'>About</Link>
          </li>
          <li>
          <Link to='/service'>Our Service</Link>
          </li>
          <li>
          <Link to='/contact'>Contact Us</Link>
          </li>
            </ul>
        </nav>
        <div class="account">
    
           <Link to='/register' class="btn">
           <button> Register</button>
           </Link>
           
            </div>
    </header>
    </>
  )
}

export default Nav
