import React from 'react';
import './Footer.css';
import FooterText from './FooterText';
import acreditacion from './img/sello-acreditacion-2028.svg';
import g9 from './img/logo_g9-1.svg';
import usm from './img/usm_cl.svg';

function Footer() {
  return (
    <div className="Footer">
        <FooterText />
        <img src={acreditacion} alt="" className='marcas' />
        <a href="https://redg9.cl/" target="_blank" rel="noreferrer">
          <img src={g9} alt="" className='marcas'/>
        </a>
        <a href="https://usm.cl/" target="_blank" rel="noreferrer" >
          <img src={usm} alt="" className='uhome'/>
        </a>
    </div>
  )
}

export default Footer