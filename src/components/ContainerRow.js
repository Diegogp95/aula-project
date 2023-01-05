import React from 'react';
import './ContainerRow.css';
import LoginPanel from './LoginPanel';

function ContainerRow() {
  return (
    <div className='container'>
      <div className="rectangle"></div>
      <LoginPanel />
    </div>
  )
}

export default ContainerRow
