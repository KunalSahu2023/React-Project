// import React from 'react';
// import useState  from 'react';
// import './dashboard.css';
// import Navbar from '../NavbarPage/Navbar';
// import Footer from '../FooterPage/Footer';
// import DashboardBlog from './DashboardBlog';
// import Profile from './Profile';
// import Weather from './Weather';

// function Dashboard() {
//     const [isPage , setIsPage] = useState(false);
//     const toggle = ()=> setIsPage(!isPage);
//     const [profile , setProfile] = useState(false);
//     const [weather , setWeather] = useState(false);

//   return (
//    <>
//    <Navbar />
//       <div id="dashboard-container">
//             <div class="logo">
//                 <h3>Harvest Tech</h3>
//                 <div class="dashboard-navbar">
//                     <form action="">
//                         <input type="search" name="" id="" />
//                         <a href="#"><li class="fas fa-search"></li></a>
//                         <a href="#"><i class="fa-solid fa-bell"></i></a>
//                         <a href="#" class=""><i class="fa-solid fa-circle-user"></i></a>
//                     </form>
//                 </div>
//             </div>

//             <div class="dashboard">
//                 <div class="sidebar">
//                     <div class="sidebar-box">
//                     <div class="sidebar-top">
//                         <div onClick={toggle}
//                         class="side-menu"><span class="dashboard-btn"> <i class="fa-sharp fa-solid fa-house"></i> Dashboard</span>
//                         </div>
//                         {isPage && <DashboardBlog />}
//                         <p>{isPage}</p>
//                         <div class="side-menu"><span class="weather"> <i class="fa-sharp fa-solid fa-house"></i> Weather</span></div>
//                         <div class="side-menu"><span class="profile"> <i class="fa-sharp fa-solid fa-house"></i> Profile</span></div>
//                         <div class="side-menu"><span> <i class="fa-sharp fa-solid fa-house"></i> Notification</span></div>
//                         <div class="side-menu"><span> <i class="fa-sharp fa-solid fa-house"></i> Event</span></div>
//                     </div>
//                     <div class="sidebar-bottom">
//                         <div class="side-menu"><span> <i class="fa-sharp fa-solid fa-house"></i> Logout</span></div>
//                         <div class="side-menu "><span> <i class="fa-sharp fa-solid fa-house"></i> Setting</span></div>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//     </div>
//     <Footer />
//     </>
//   )
// }
// export default Dashboard;


// //   function Menu(){
// //     return(
// //         <>
// //               <div class="profile-menu">
// //                     <div class="menu">
// //                         <a href="#">
// //                             <p>Edit Profile</p>
// //                         </a>
// //                         </div>
// //                         <hr />
// //                         <div class="menu">
// //                             <a href="#">
// //                         <p>Logout</p>
// //                             </a>
// //                         </div>
// //                         <hr />
// //                     <div class="menu">
// //                         <a href="#">
// //                     <p>Help & Support</p>
// //                 </a> 
// //                     </div>
// //     </div>
// //         </>
// //     )
// //   }
// //   export default Menu;



