import React from 'react'
import './account.css';
import { Link } from 'react-router-dom';

function Account() {

  return (
   <>
  <div id="account-container">
    <div class="form-box">
        <i class="fas fa-times" id="form-close"></i>
        <h1>
            <p class="signupbtn">Sign Up</p> 
            <p class="loginbtn disable">Log In</p>
        </h1>
        <div class="underline"></div>
        <form action="">
        <div class="input-group">
        <div class="input-field nameField">               
        <i class="fa-solid fa-user"></i>
        <input type="text" placeholder="Enter Your Name" required />
    </div>

    <div class="input-field">
        <i class="fa-solid fa-at"></i>
        <input type="email" placeholder="Enter your Email" required />
    </div>

    <div class="input-field">
        <i class="fa-solid fa-key"></i>
        <input type="password" placeholder="Enter your password" required />
    </div>
    <p><span class="text">Password suggestions</span> <a href="#">Click Here!</a></p>
</div>  
<div class="btn-field">
<Link class="account-btn" to ="/dashboard">Sign Up</Link>
</div>
     </form>
    </div>
</div>
   </>
  )
}

export default Account;
