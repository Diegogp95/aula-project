import React from 'react';
import './LoginPanel.css';
import './Button.css';
import o365logo from './o365-icon.svg';

function LoginPanel({handleClick}) {
  return (
    <div className="panel">
      <h1 style={{ textAlign: 'center' , margin: '1rem'}}>ACCEDER A LA<br />PLATAFORMA</h1>
      <button className="login-button">
        <img src={o365logo} alt=""/>{"  "}
        Office 365 Login</button>
      <button className="login-button" onClick={handleClick}>Manual Login</button>
    </div>
  )
}

export default LoginPanel
