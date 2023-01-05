import React, {useState} from 'react';
import logo from './logo_negro_crop.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
        <img src={logo} alt="logo-usm" className='logo'/>
      </div>
    </nav>
  )
}

export default Navbar
