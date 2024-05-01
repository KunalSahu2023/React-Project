import React, { useState } from 'react';
import './Account.css';
import { Link } from 'react-router-dom';
import { FaAt, FaKey, FaUser } from 'react-icons/fa';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const [hidePopup, setHidePopup] = useState(false);

    const toggleHide = () => {
        setHidePopup(!hidePopup);
    }

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("/register", { name, email, password })
            .then(result => {
                console.log(result)
                // if (result.data === "Login successful")
                    navigate("/dashboard")
            })
            .catch(err => console.log(err))
    };

    return (
        <>
            <div id="account-container">
                <div className="form-box">
                    
                   
                    <h4>
                        <p className="signupbtn">Welcome to Harvest Tech</p>
                    </h4>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <div className="input-field nameField">
                                <FaUser className='fa'/>
                                <input
                                    type="text"
                                    name='name'
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter Your Name" required />
                            </div>

                            <div className="input-field">
                                <FaAt className='fa' />
                                <label for="email"></label>
                                <input
                                    type="email"
                                    name='email'
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your Email" required />
                            </div>

                            <div className="input-field">
                            <FaKey className='fa' />
                                <input type="password" 
                                name='password'
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password" required />
                            </div>
                            <p><span className="text">Already have an account?</span> <Link to="/login"> Login</Link></p>
                        </div>
                        <div className="btn-field">
                            <button type='submit' className="account-btn">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register;
