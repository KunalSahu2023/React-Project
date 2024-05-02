import React ,{useState} from 'react';
import './Dashboard.css';
import './DashboardBlog.css'
import './Weather.css'
import Footer from '../footer/Footer';
import DashboardBlog from './DashboardBlog';
import Weather from './Weather';
import { FaClipboardCheck, FaBell, FaCalendar, FaUser, FaCloud, FaWindowClose } from 'react-icons/fa';
import DashNav from './DashNav';
const Deshboard = ({children}) => {
    const[openblog ,setOpenBlog] = useState(false);
    const[openWeather ,setOpenWeather] = useState(false);

    function blogToggle() {
        setOpenBlog (!openblog) 
    }
    function weatherToggle () {
        setOpenWeather (!openWeather)
    }
  return (
  <>
<DashNav />
<div id="dashboard-container">
<div className="dashboard-sidebar">
    
                <div
                onClick={blogToggle}
                className="dash-menu">
                    <FaClipboardCheck className='fa'/>
                    <p>Dashboard</p>
                    </div>
                    <div
                onClick={weatherToggle}
                className="dash-menu">
                    <FaCloud className='fa'/>
                    <p>Weather</p>
                    </div>
                    <div 
                
                className="dash-menu">
                    <FaUser className='fa'/>
                    <p>Profile</p>
                    </div>
                    <div 
                
                className="dash-menu">
                    <FaCalendar className='fa'/>
                    <p>Event</p>
                    </div>
                    <div 
                
                className="dash-menu">
                    <FaBell  className='fa'/>
                    <p>Notification</p>
                    </div>
                    <div 
                
                className="dash-menu">
                    <FaWindowClose className='fa'/>
                    <p>Setting</p>
                    </div>

</div>
<main>{children}</main>
<div className="dashboard-flex">
{openblog && <DashboardBlog />}
{openWeather && <Weather />}
    <Weather />
</div>
</div>
    <Footer />
  </>
  )
}

export default Deshboard;
