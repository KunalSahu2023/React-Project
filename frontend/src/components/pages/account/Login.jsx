import React, { useState } from 'react';
import './Account.css';
import { Link } from 'react-router-dom';
import { FaAt, FaKey, FaArrowLeft } from 'react-icons/fa';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("/login", { email, password })
            .then(result => {
                console.log(result.data)
                if (result.data.message === "Login successful")
                    navigate("/dashboard")
            })
            .catch(err => alert(err.response.data.message))
    };

    return (
        <>
            <div id="account-container">
            <Link to='/'>
         <button className='back'>
            <FaArrowLeft /> Back
            </button></Link>
                <div className="login-box">
                    
                    <h4>
                        <p className="msg">Welcome Back</p>
                    </h4>
                    <form 
                    onSubmit={handleSubmit}>
                        <div className="input-group">

                            <div className="input-field">
                                <FaAt className='fa' />
                                <input
                                    type="email"
                                    name='email'
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your Email"
                                    required />
                            </div>

                            <div className="input-field">
                                <FaKey className='fa' />
                                <input type="password"
                                    name='password'
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    required />
                            </div>
                            <p><span className="text">Don't have an account?</span> <Link to="/register">Register Here</Link></p>
                        </div>
                        <div className="btn-field">
                            <button type='submit' className="account-btn">
                              <Link to ='/dashboard'>Login</Link>
                                </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;
