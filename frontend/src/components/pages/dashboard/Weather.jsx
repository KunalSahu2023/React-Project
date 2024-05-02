import React from 'react'
import './Weather.css';
import './Dashboard.css';
const Weather = () => {
  return (
    <>
<div id="weather">
<div id="weather-container">
   <div class="container-1">
       <i class="fas fa-sun"></i> <span>25°C</span>
       <span>Sunny</span>
       <hr />
       <span>Jhansi</span>
       <i class="fas fa-sun"></i><span>Jhansi</span>
   </div>
   <div class="container-2">
       <div class="box-1">
           <div class="box-01">
              <span>Wind Speed</span>
               <span>18km/hr</span>
           </div>
           <div class="box-01">
               <i class="fas fa-sun"></i><span>Pressure</span>
               <span>1006 hPa</span>
           </div>
           <div class="box-01">
            <i class="fas fa-sun"></i><span>Sunrise</span>
           <span>5:37 AM</span>
                   </div>
           </div>
           <div class="box-1">
               <div class="box-01">
                   <i class="fas fa-sun"></i><span>Humidity</span>
                   <span>29%</span>
               </div>
               <div class="box-01">
                   <i class="fas fa-sun"></i><span>Visibilty</span>
                   <span>16Km</span>
               </div>
               <div class="box-01">
                   <i class="fas fa-sun"></i><span>Sunset</span>
                   <span>6:46 PM</span>
               </div>
                   </div>
       </div>
       <div class="container-3">
           <div class="box">
               <div class="boxx">
                   <span>Today</span><span>8:00 AM</span>
               </div>
               <div class="boxx">
                   <span>21°C</span>
               </div>
           </div>
           <div class="box">
               <div class="boxx">
                   <span>Tomorrow</span><span>8:00 AM</span>
               </div>
               <div class="boxx">
                   <span>23°C</span>
               </div>
           </div>
           <div class="box">
               <div class="boxx">
                   <span>Saturday</span><span>8:00 AM</span>
               </div>
               <div class="boxx">
                   <span>26°C</span>
               </div>
           </div>
           <div class="box">
               <div class="boxx">
                   <span>Sunday</span><span>8:00 AM</span>
               </div>
               <div class="boxx">
                   <span>26°C</span>
               </div>
           </div>
           <div class="box">
               <div class="boxx">
                   <span>Monday</span><span>8:00 AM</span>
               </div>
               <div class="boxx">
                   <span>26°C</span>
               </div>
           </div>
       </div>
   </div>
   <div id="weather-container-bottom">
       <h2>Next 7 days</h2>
       <div class="date-box">
           <div class="date-box-1">
               <h4>All Days</h4>
           </div>
           <div class="date-box-1">
               <h4>2 May Thur</h4>
           </div>
           <div class="date-box-1">
               <h4>3 May fri</h4>
           </div>
           <div class="date-box-1">
               <h4>4 May Sat</h4>
           </div>
           <div class="date-box-1">
               <h4>5 May Sat</h4>
           </div>
           <div class="date-box-1">
               <h4>6 May Sun</h4>
           </div>
           <div class="date-box-1">
               <h4>7 May Mon</h4>
           </div>
           <div class="date-box-1">
               <h4>8 May Tue</h4>
           </div>
       </div>
       
           <div id="container-bottom">
               <div class="date-boxx">
                   <div class="boxs">
                       <div class="boxx">
                           <span>2 May Fri</span>
                           <span>8:00</span>
                       </div>
                       <div class="boxx">
                           <i class="fas fa-sun"></i>
                           <span>25°C</span>
                           <span>Sunny</span>
                       </div>
                   </div>
                   <div class="boxs">
                       <div class="boxx">
                           <span>3 May Sat</span>
                           <span>8:00</span>
                       </div>
                       <div class="boxx">
                           <i class="fas fa-sun"></i>
                           <span>21°C</span>
                           <span>Clear</span>
                       </div>
                   </div>
                   <div class="boxs">
                       <div class="boxx">
                           <span>4 May sun</span>
                           <span>8:00</span>
                       </div>
                       <div class="boxx">
                           <i class="fas fa-sun"></i>
                           <span>23°C</span>
                           <span>Clear</span>
                       </div>
                   </div>
                   <div class="boxs">
                       <div class="boxx">
                           <span>5 May Mon</span>
                           <span>8:00</span>
                       </div>
                       <div class="boxx">
                           <i class="fas fa-sun"></i>
                           <span>26°C</span>
                           <span>Clear</span>
                       </div>
                   </div>
               </div>
               <div class="date-boxx">
                   <div class="boxs">
                       <div class="boxx">
                           <span>6 May Tue</span>
                           <span>8:00</span>
                       </div>
                       <div class="boxx">
                           <i class="fas fa-sun"></i>
                           <span>26°C</span>
                           <span>Clear</span>
                       </div>
                   </div>
                   <div class="boxs">
                       <div class="boxx">
                           <span>7 May Wed</span>
                           <span>8:00</span>
                       </div>
                       <div class="boxx">
                           <i class="fas fa-sun"></i>
                           <span>26°C</span>
                           <span>Clear</span>
                       </div>
                   </div>
                   <div class="boxs">
                       <div class="boxx">
                           <span>8 May Thu</span>
                           <span>8:00</span>
                       </div>
                       <div class="boxx">
                           <i class="fas fa-sun"></i>
                           <span>26°C</span>
                           <span>Clear</span>
                       </div>
                   </div>
                   <div class="boxs">
                       <div class="boxx">
                           <span>9 May Fri</span>
                           <span>8:00</span>
                       </div>
                       <div class="boxx">
                           <i class="fas fa-sun"></i>
                           <span>26°C</span>
                           <span>Clear</span>
                       </div>
                   </div>
               </div>
           </div>
  
   </div>
</div>
</>
  )
}

export default Weather
