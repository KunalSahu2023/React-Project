import React, { useState } from 'react';
import './Account.css';
import { Link } from 'react-router-dom';
const Login = () => {
    const [hidePopup, setHidePopup] = useState(false);

    const toggleHide = () => {
        setHidePopup(!hidePopup);
    }

    return (
        <>
            <div id="account-container">
                <div className="form-box">
                    <span onClick={toggleHide} className='cross'>❌</span>
                    {hidePopup && !setHidePopup}
                    <h4>
                        <p className="signupbtn">Welcome Back</p>
                    </h4>
                    <form action="/login" method='POST'>
                        <div className="input-group">

                            <div className="input-field">
                                <i className="fa-solid fa-at"></i>
                                <label for="email"></label>
                                <input 
                                type="email" 
                                name='email'
                                placeholder="Enter your Email" required />
                            </div>

                            <div className="input-field">
                                <i className="fa-solid fa-key"></i>
                                <input type="password" 
                                name='password'
                                placeholder="Enter your password" required />
                            </div>
                            <p><span className="text">Don't have an account?</span> <Link to="/register"> Register Here</Link></p>
                        </div>
                        <div className="btn-field">
                            <button className="account-btn"><Link to="/dashboard">Login</Link></button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;
