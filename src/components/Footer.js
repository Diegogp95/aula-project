import React from 'react';
import './Footer.css';
import FooterText from './FooterText';
import usm from './img/usm_cl.svg';

function Footer() {
  return (
    <div className="Footer">
        <FooterText />
        <a href="https://usm.cl/" target="_blank" rel="noreferrer" >
          <img src={usm} alt="" className='uhome'/>
        </a>
    </div>
  )
}

export default Footer