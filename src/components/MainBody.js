import React from 'react';
import './MainBody.css';
import ContainerRow from './ContainerRow';
import Title from './Title';

function MainBody() {
  return (
    <div className="main-container">
        <Title />
        <ContainerRow />
    </div>
  )
}

export default MainBody
