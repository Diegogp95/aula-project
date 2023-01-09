import React from 'react';
import logo from './logo_negro_crop.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
        <a href="https://aula.usm.cl">
          <img src={logo} alt="logo-usm" className='logo'/>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
