import React, { useState } from 'react';
import './Account.css';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaAt, FaKey, FaUser } from 'react-icons/fa';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Register = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("/register", { name, email, password })
            .then(result => {
                console.log(result.data)
                if (result.data.message === "User registered successfully")
                    navigate("/dashboard");
            })
            .catch(err => {
                if (err.message)
                    alert("Unable to register. Try again.");
            })
    };

    return (
        <>
            <div id="account-container">
                <Link to='/'>
                    <button className='back'>
                        <FaArrowLeft /> Back
                    </button></Link>
                <div className="reg-box">
                    <p className="msg">Welcome to Harvest Tech</p>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <div className="input-field nameField">
                                <FaUser className='fa' />
                                <input
                                    type="text"
                                    name='name'
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter Your Name"
                                    required />
                            </div>

                            <div className="input-field">
                                <FaAt className='fa' />
                                <label for="email"></label>
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
                        </div>
                        <div className="btn-field">
                            <button type='submit' className="account-btn">
                                Register
                            </button>
                            <p><span className="text">Already have an account?</span> <Link to="/login"> Login Here</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register;
