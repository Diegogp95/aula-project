import React from 'react'
import './GuidePanel.css'

function GuidePanel() {
  return (
    <div className='guide-panel'>
      <p className='info-text'>
        ¿Nuevo Aquí?<br />
      </p>
      <ul className='info-text'>
          <li>Si eres alumno USM debes iniciar sesión utilizando tu cuenta Office 365.</li>
          <li>Recuerda que tu cuenta institucional está asociada a tu cuenta Office 365.</li>
          <li>La opción de ingreso manual es solo para la administración y soporte de este sitio.</li>
      </ul>
    </div>
  )
}

export default GuidePanel
