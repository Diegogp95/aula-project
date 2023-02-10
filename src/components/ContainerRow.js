import React from 'react';
import './ContainerRow.css';
import LoginPanel from './LoginPanel';
import Title from './Title';
import GuidePanel from './GuidePanel';
import marca from './img/logo-usm_blanco.svg';

function ContainerRow({handleClick}) {
  return (
    <div className='container' id='container-row'>
      <div className="info">
        <img src={marca} alt="" className='marca'/>
        <Title />
        <GuidePanel />
      </div>
      <LoginPanel handleClick={handleClick} />
    </div>
  )
}

export default ContainerRow
