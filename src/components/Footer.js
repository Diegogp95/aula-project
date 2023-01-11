import React from 'react';
import './Footer.css';
import FooterText from './FooterText';
import acreditacion from './sello-acreditacion-2028.svg';
import g9 from './logo_g9-1.svg';
import usm from './usm_cl.svg';

function Footer() {
  return (
    <div className="Footer">
        <FooterText />
        <img src={acreditacion} alt="" className='marcas'/>
        <img src={g9} alt="" className='marcas'/>
        <img src={usm} alt="" className='uhome'/>
    </div>
  )
}

export default Footer