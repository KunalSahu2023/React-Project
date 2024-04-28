import React ,{useState} from 'react';
import { NavLink } from 'react-router-dom';

import Footer from '../Footer';
import Nav from '../Nav';

const Deshboard = () => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);

    const menuItem=[
        {
            path:"/dashboard/blog",
            name:"Dashboard",
            
        },
        {
            path:"/dashboard/weather",
            name:"Weather",
           
        },
        {
            path:"/dashboard/profile",
            name:"Profile",
            
        },
        {
            path:"/dashboard/event",
            name:"Event",
         
        },
        {
            path:"/dashboard",
            name:"Notification",
         
        },
        {
            path:"/",
            name:"Logout",
         
        },
        {
            path:"/dashboard",
            name:"Setting",
         
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
                        <a href="#"><li class="fas fa-search"></li></a>
                        <a href="#"><i class="fa-solid fa-bell"></i></a>
                        <a href="#" class=""><i class="fa-solid fa-circle-user"></i></a>
                    </form>
                </div>
            </div>
            </div>

{
    menuItem.map((item, index)=>(
        <NavLink to={item.path} key={index}>
                           <div>{item.icon}</div>
                           <div>{item.name}</div>
                       </NavLink>
                   ))
                }
    <Footer />
  </>
  )
}

export default Deshboard;
