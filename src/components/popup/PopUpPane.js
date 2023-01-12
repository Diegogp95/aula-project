import React from 'react'
import './PopUpPane.css'
import { MDBBtn } from 'mdb-react-ui-kit';

function PopUpPane({isVisible, handleClick}) {
  return (
    <div className={isVisible? 'visible' : 'hidden'}>
      <div className='closeButton'>
        <MDBBtn className="btn-close" size='lg' color="danger" 
            aria-label="Close" onClick={handleClick} />
      </div>
      <div className="poppanel">
        <div className="band"></div>
        <h2>username</h2>
        <h2>password</h2>
      </div>
    </div>
  )
}

export default PopUpPane
