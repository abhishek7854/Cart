import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import './Login.css'; 
 
const Login = () => { 
 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
 
    const signIn = (e) => { 
        e.preventdefault(); 
 
    } 
    return ( 
        <div className='login'> 
            <div className='login-second'> 
                <Link to="/" className='login-logo'> 
                    Phoenix 
                </Link> 
                <div className='login-container'> 
                    <h1>Sign in</h1> 
                    <form> 
                        <h5>E-mail</h5> 
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /> 
                        <h5>Password</h5> 
                        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} /> 
                        <button type="submit" onclickhandler={signIn} className="login-signIn">Sign In</button> 
                    </form> 
                    <p>By Continuing, you agree to Phoenix's Conditions of use and Privacy Notice</p> 
                </div> 
                <p>New to Phoenix ?</p> 
                <Link to="/register"> 
                    <button className='login-register'>Create Your Account</button> 
                </Link> 
            </div> 
        </div> 
    ) 
} 
 
export default Login;