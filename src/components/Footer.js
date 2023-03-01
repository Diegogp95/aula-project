import React from 'react';
import './Footer.css';
import FooterText from './FooterText';
import usm from './img/usm_cl.svg';
import './Limit.css';

function Footer() {
  return (
    <div className="backgroundwrap">
      <div className="Footer container limit-width">
          <FooterText />
          <a href="https://usm.cl/" target="_blank" rel="noreferrer" >
            <img src={usm} alt="" className='uhome'/>
          </a>
      </div>
    </div>
  )
}
export default Footer