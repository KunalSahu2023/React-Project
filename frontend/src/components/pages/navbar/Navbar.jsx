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
        </nav>
        <div class="account">
    
           <Link to='/register' onClick={registerToggle} class="btn">
           <button> Register</button>
           </Link>
            {registerPopup && <Register/>}
            
           <Link to='/login' onClick={loginToggle} class="btn">
           <button>Login</button>
           </Link>
            {loginPopup && <Login/>}
            
        </div>
    </header>
    </>
  )
}

export default Navbar
