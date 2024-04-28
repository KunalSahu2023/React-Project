
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate = useNavigate();
    const[input, setInput] = useState({
        name : "",
        email : "",
        password : "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(input));
        navigate('/login');
    };
  return (
    <>
        <h2>Create an Account</h2>
        <form onSubmit = {handleSubmit}>
            <div>
                <input 
                    name='name'
                    value={input.name}
                    onChange={(e)=>setInput({...input,[e.target.name]: e.target.value,})}

                    type='text'
                    placeholder='Enter Your User Name'
                />
                <label>
                    Your Name
                </label>
            </div>
            <div>
                <input 
                name='email'
                    value={input.email}
                    onChange={(e)=>setInput({...input,[e.target.name]: e.target.value,})}
                    type='email'
                    placeholder='Enter Your Email'
                />
                <label>
                    Your Password
                </label>
            </div>
            <div>
                <input 
                 name='password'
                    value={input.password}
                    onChange={(e)=>setInput({...input,[e.target.name]: e.target.value,})}
                    type='password'
                    placeholder='Enter Your Password'
                />
                <label>
                    Your Password
                </label>
            </div>
            <div>
                <button
                type='submit'>
                    Register
                </button>
            </div>
            <p>have already an account</p>
            <a href='/login'>
              <u>Login here</u>
            </a>
        </form>

    </>
  )
}

export default Register