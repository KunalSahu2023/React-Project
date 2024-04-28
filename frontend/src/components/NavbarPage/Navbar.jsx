
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
import Account from '../AccountPage/Account';
function Navbar() {
  const[showPopup, setShowPopup] = useState(false);

  const togglePopup = () =>{
    setShowPopup(!showPopup);
  }

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
            <button onClick={togglePopup} class="btn">SignUp / LogIn</button>
            {showPopup && (<Account />)}
        </div>
    </header>
   </>
  )
}

export default Navbar;
