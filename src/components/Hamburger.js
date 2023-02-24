import React from 'react';
import './Hamburger.css';

function Hamburger({ isDisplayed, toggleDisplay }) {

  return (
    <div className='ham-btn' onClick={toggleDisplay}>
      <div className="ham-icon">
        <div className={`ham-bar ${isDisplayed ? 'test' : ''}`} id='top-bar'></div>
        <div className={`ham-bar ${isDisplayed ? 'test' : ''}`} id='mid-bar'></div>
        <div className={`ham-bar ${isDisplayed ? 'test' : ''}`} id='bot-bar'></div>
      </div>
    </div>
  )
}

export default Hamburger
