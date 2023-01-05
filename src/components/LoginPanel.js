import React from 'react';
import './LoginPanel.css';
import './Button.css';

function LoginPanel() {
  return (
    <div className="panel">
      <button class="login-button">Office 365 Login</button>
      <button class="login-button">Manual Login</button>
    </div>
  )
}

export default LoginPanel
