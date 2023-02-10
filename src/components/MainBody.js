import React from 'react';
import './MainBody.css';
import ContainerRow from './ContainerRow';
import './Limit.css'

function MainBody({handleClick}) {
  
  return (
    <div className="gadient-background">
      <div className="main-container limit-width">
        <ContainerRow handleClick={handleClick} />
        </div>
    </div>
  )
}

export default MainBody
