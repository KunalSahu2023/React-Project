import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import Register from '../account/Register';
import Login from '../account/Login';

const Navbar = () => {

  const [registerPopup, setRegisterPopup] = useState(false);
  const registerToggle = ()=>{
    setRegisterPopup(!registerPopup);
  }

  const [loginPopup, setLoginPopup] = useState(false);
  const loginToggle = ()=>{
    setLoginPopup(!loginPopup);
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
          <Link to='/about'>About</Link>
          </li>
          <li>
          <Link to='/service'>Our Service</Link>
          </li>
          <li>
          <Link to='/contact'>Contact Us</Link>
          </li>
            </ul>
            <div class="menu">
                <span> <i class="fa-solid fa-bars"></i></span>
            </div>
        </nav>
        <div class="account">
           <button>
           <Link to='/register' onClick={registerToggle} class="btn">Register</Link>
           </button>
            {registerPopup && <Register/>}

            <button>
           <Link to='/login' onClick={loginToggle} class="btn">Login</Link>
           </button>
            {loginPopup && <Login/>}
            
        </div>
    </header>
    </>
  )
}

export default Navbar
