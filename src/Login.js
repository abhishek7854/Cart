import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import './Login.css'; 
import Logo from './logo.jpg'; 
 
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
                <img src={Logo} alt='' style={{height:"30px",width:"40px"}}/><h4>Cart.com</h4>
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
                    <p>By Continuing, you agree to Cart.com Conditions of use and Privacy Notice</p> 
                </div> 
                <p>New to Cart.com ?</p> 
                <Link to="/register"> 
                    <button className='login-register'>Create Your Account</button> 
                </Link> 
            </div> 
        </div> 
    ) 
} 
 
export default Login;