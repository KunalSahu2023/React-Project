import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const[input, setInput] = useState({
    email : "",
    password : "",
});
const handleLogin = (e) => {
  e.preventDefault();
  const loggedUser = JSON.parse(localStorage.getItem('user'));
  if(input.email === loggedUser.email && input.password === loggedUser.password)
  {
    localStorage.setItem('loggedin', true);
    navigate('/');
  }
  else{
    alert('Invalid Email or Password');
  }
};
  return (
   <>
    <h1>Login </h1>
    <form onSubmit = {handleLogin}>
            <div>
                <input 
                name='email'
                    value={input.email}
                    onChange={(e)=>setInput({...input,[e.target.name]: e.target.value,})}
                    type='email'
                    placeholder='Enter Your Email'
                />
                <label>
                    Your Email
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
                    Login
                </button>
            </div>
            <p>New User</p>
            <a href='/register'>
                <u>Register here</u>
            </a>
        </form>

   </>
  )
}

export default Login