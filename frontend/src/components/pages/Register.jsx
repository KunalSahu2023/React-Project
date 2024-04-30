import React, { useState } from 'react';
import './Account.css';
import { Link } from 'react-router-dom';
const Register = () => {
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
                        <p className="signupbtn">Welcome to Harvest Tech</p>
                    </h4>
                    <form action="/register" method='POST'>
                        <div className="input-group">
                            <div className="input-field nameField">
                                <i className="fa-solid fa-user"></i>
                                <input
                                    type="text"
                                    name='name'
                                    placeholder="Enter Your Name" required />
                            </div>

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
                            <p><span className="text">Already have an account?</span> <Link to="/login"> Login</Link></p>
                        </div>
                        <div className="btn-field">
                            <button className="account-btn"><Link to="/dashboard">Register</Link></button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register;
