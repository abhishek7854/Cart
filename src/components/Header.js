import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Login from '../Login';
import {Link} from "react-router-dom";
import Logo from '../logo.jpg'; 




const Header = () => {
  return (
    <nav className='header'>
        <Link to="/" className='header-logo'>
            <img src={Logo} alt='' style={{height:"30px",width:"40px"}}/><h4>Cart.com</h4>
        </Link>
        <div className='header-option'>
           <LocationOnIcon />
        </div>
        <div className='header-option'>
            <span className='header-option1'>Hello</span>
            <span className='header-option2'>Select Your Address</span>
        </div>
        <div className='search'>
            <select>
              <option>All</option>
            </select>
            <input type="text" className='searchInput'/>
            <SearchIcon className='searchIcon'/>
        </div>
        <div className='header-nav'>
            <Link to="/login" className='header-link'>
              <div className='header-option'>
              <span className='header-option1'>Hello Guest</span>
              <span className='header-option2'>Sign In</span>
              </div>
            </Link>
            <Link to="/oredrs" className='header-link'>
              <div className='header-option'>
              <span className='header-option1'>Returns</span>
              <span className='header-option2'>& Orders</span>
              </div>
            </Link>
            <Link to="/checkout" className='header-link'>
              <div className='header-basket'>
                <ShoppingCartIcon />
                <span className='header-option2 basket-count'>0</span>
              </div>
            </Link>
        </div>
    </nav>
    
  )
}

export default Header;