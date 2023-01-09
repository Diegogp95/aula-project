import React from 'react';
import './ContainerRow.css';
import LoginPanel from './LoginPanel';
import Title from './Title';
import GuidePanel from './GuidePanel';

function ContainerRow() {
  return (
    <div className='container'>
      <div className="info">
        <Title />
        <GuidePanel />
      </div>
      <LoginPanel />
    </div>
  )
}

export default ContainerRow
