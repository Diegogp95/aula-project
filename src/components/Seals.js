import React from 'react'
import sello2028 from './img/sello2028.svg';
import G9 from './img/G9_color.svg';
import './Seals.css';

function Seals() {
  return (
    <div className="seals">
        <div className='sealContainer'>
            <img src={sello2028} alt="" className='seal'/>
            <a href="https://redg9.cl/" target="_blank" rel="noreferrer">
                <img src={G9} alt="" className="seal" />
            </a>
        </div>
    </div>
  )
}

export default Seals
