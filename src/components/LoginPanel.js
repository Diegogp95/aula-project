import React from 'react';
import './LoginPanel.css';
import './Button.css';
import o365logo from './o365-icon.svg';

function LoginPanel() {
  return (
    <div className="panel">
      <button class="login-button">
        <img src={o365logo} alt=""/>{"  "}
        Office 365 Login</button>
      <button class="login-button">Manual Login</button>
    </div>
  )
}

export default LoginPanel
