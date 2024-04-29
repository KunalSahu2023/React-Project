import React from 'react'
import '../styles/navbar.css';

const Nav = () => {
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
           
        </nav>
    </header>
    </>
  )
}

export default Nav
