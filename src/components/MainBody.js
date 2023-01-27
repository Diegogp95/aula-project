import React from 'react';
import './MainBody.css';
import ContainerRow from './ContainerRow';
import marca from './img/logo-usm_blanco.svg';

function MainBody({handleClick}) {
  
  return (
    <div className="main-container">
        <img src={marca} alt="" className='marca'/>
        <ContainerRow handleClick={handleClick} />
    </div>
  )
}

export default MainBody
