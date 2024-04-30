import React ,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Dashboard.css';
import Footer from '../footer/Footer';
import Nav from '../navbar/Nav';
import { FaBell, FaClipboardCheck, FaSearch, FaUserCircle, FaCloud, FaUser, FaVenus, FaFacebookMessenger, FaOutdent, FaWheelchair } from 'react-icons/fa';


const Deshboard = () => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);

    const menuItem=[
        {
            path:"/dashboard/blog",
            name:"Dashboard",
            icon: <FaClipboardCheck /> 
            
        },
        {
            path:"/dashboard/weather",
            name:"Weather",
            icon: <FaCloud />
           
        },
        {
            path:"/dashboard/profile",
            name:"Profile",
            icon: <FaUser />
            
        },
        {
            path:"/dashboard/event",
            name:"Event",
            icon: <FaVenus />
         
        },
        {
            path:"/dashboard",
            name:"Notification",
            icon: <FaBell />
         
        },
        {
            path:"/",
            name:"Logout",
            icon: <FaOutdent />
         
        },
        {
            path:"/dashboard",
            name:"Setting",
            icon: <FaWheelchair />
         
        }
    ]

  return (
  <>
  <Nav />
      <div id="dashboard-container">
            <div class="logo">
                <h3>Harvest Tech</h3>
                <div class="dashboard-navbar">
                    <form action="">
                        <input type="search" name="" id="" />
                        <a href="#"><FaSearch /></a>
                        <a href="#"><FaBell /></a>
                        <a href="#" class=""><FaUserCircle /></a>
                    </form>
                </div>
            </div>
            </div>
<div className="">
{
    menuItem.map((item, index)=>(
        <NavLink to={item.path} key={index}>
                           <div className='dashbaord-sidebar'>{item.icon}</div>
                           <div className='dash-option'>{item.name}</div>
                       </NavLink>
                   ))
                }
</div>
    <Footer />
  </>
  )
}

export default Deshboard;
