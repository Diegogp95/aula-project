import React from 'react';
import './MainBody.css';
import ContainerRow from './ContainerRow';

function MainBody({handleClick}) {
  
  return (
    <div className="main-container">
        <ContainerRow handleClick={handleClick} />
    </div>
  )
}

export default MainBody
