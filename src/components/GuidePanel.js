import React, {useState} from 'react'
import './GuidePanel.css'
import FAQ from './FAQ';

function GuidePanel() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='guide-panel'>
      <div id='Qs'>
      <p className='section'>
        ¿Nuevo Aquí?<br />
      </p>
      <ul>
          <li>Si eres alumno USM debes iniciar sesión utilizando tu cuenta Office 365.</li>
          <li>Recuerda que tu cuenta institucional está asociada a tu cuenta Office 365.</li>
          <li>La opción de ingreso manual es solo para la administración y soporte de este sitio.</li>
          <li>Recuerda que tenemos gran cantidad de manuales y tutoriales a tu disponibilidad en la sección 'Recursos Aula'.</li>
      </ul>
      <p className='section'>Preguntas Frecuentes (F.A.Q.)</p>
      <p className='charBtn' onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? '▲' : '▼'}</p>
      {isExpanded && <div className='text'><FAQ /></div>}
    </div>
    </div>
  )
}

export default GuidePanel
