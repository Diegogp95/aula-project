import React from 'react';
import './Hamburger.css';

function Hamburger({ toggleDisplay }) {

  return (
    <div className='ham-btn' onClick={toggleDisplay}>
      <div className="ham-icon">
        <div className={`ham-bar`} id='top-bar'></div>
        <div className={`ham-bar`} id='mid-bar'></div>
        <div className={`ham-bar`} id='bot-bar'></div>
      </div>
    </div>
  )
}

export default Hamburger
