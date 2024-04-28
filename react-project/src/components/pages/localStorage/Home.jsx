import React from 'react'

import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const userName = JSON.parse(localStorage.getItem('user'));
    const handleLogout = () =>{
        localStorage.removeItem('Loggedin');
        navigate('/login');
    }
  return (
   <>
   <div>
   <h3>Home Page</h3>
    <p>Welcome {userName.name};
    </p>
    <button
    onClick={handleLogout}
    type='submit'>Logout</button>
   </div>
   </>
  )
}

export default Home;