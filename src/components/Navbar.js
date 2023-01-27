import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
        <a href="https://usm.cl/">
          <p className='navbar-item'>USM.cl</p>
        </a>
        <div className="rightside-dropdown">
          <p className="navbar-item">Recursos Aula</p>
          <p className="navbar-item">Sitios de interés</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
