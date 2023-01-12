import React from 'react'
import './PopUpPane.css'

function PopUpPane({isVisible, handleClick}) {
  return (
    <div className={isVisible? 'visible' : 'hidden'}>
      <h1>This is a pop up login pane</h1>
    </div>
  )
}

export default PopUpPane
