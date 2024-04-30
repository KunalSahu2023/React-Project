import React, { useState } from 'react';
import '../styles/account.css';

const Account = () => {

    const[hide, setHide] = useState(false);

    const popupClose = () =>{
        setHide(false);
    }
  return (
   <>
    <div id="account-container">
    <div className="form-box">
        <span onClick={popupClose} className='cross'>❌</span>
       
        <h1>
            <p className="signupbtn">Register</p> 
        </h1>
        <div className="underline"></div>
        <form action="">
        <div className="input-group">
        <div className="input-field nameField">               
        <i className="fa-solid fa-user"></i>
        <input type="text" placeholder="Enter Your Name" required />
    </div>

    <div className="input-field">
        <i className="fa-solid fa-at"></i>
        <input type="email" placeholder="Enter your Email" required />
    </div>

    <div className="input-field">
        <i className="fa-solid fa-key"></i>
        <input type="password" placeholder="Enter your password" required />
    </div>
    <p><span className="text">Password suggestions</span> <a href="#">Click Here!</a></p>
</div>  
<div className="btn-field">
<a href ="/dashboard" className="account-btn">Sign Up</a>
</div>
     </form>
    </div>
</div>
   </>
  )
}

export default Account
