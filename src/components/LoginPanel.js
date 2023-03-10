import React from 'react';
import './LoginPanel.css';
import './Button.css';
import o365logo from './img/o365-icon.svg';

function LoginPanel({handleClick}) {
  return (
    <div className="panel">
      <h2 style={{ textAlign: 'center' , margin: '0',
        lineHeight: '1.8', color:'231d48'}}>ACCEDER A LA<br />PLATAFORMA</h2>
      <hr />
      <div className='inputContainer'>
        <h5>Ingreso Estudiantes/Profesores</h5>
        <button className="login-button">
        <img src={o365logo} alt=""/>{"  "}
        Office 365 Login</button>
      </div>
      <div className="inputContainer">
        <h5>Ingreso Soporte/Administración</h5>
        <button className="login-button" onClick={handleClick}>Manual Login</button>
      </div>
    </div>
  )
}

export default LoginPanel
