import React from 'react'
import '../navbar/Navbar.css';
import { Link } from 'react-router-dom';
const DashNav = () => {

  const dashActive = {
    background : 'black',
    color : 'white',
    borderRadius : "6px",
    padding : '5px',
    fontSize : '18px',
  }

  return (
    <>
    <header id="header-container">
        <h2><Link to="" class="logo">Harvest Tech</Link></h2>

        <nav class="header-navbar">
            <ul>
          <li>
         <Link style={dashActive} to=''>Dashboard</Link>
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
           <Link to='/' class="btn">
           <button> 
            Logout
            </button>
           </Link>
           
            </div>
    </header>
    </>
  )
}

export default DashNav
