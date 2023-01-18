import React from 'react'
import './FooterText.css'

function FooterText() {
  return (
    <div className='contactText'>
      <p>
        &#169; Universidad Técnica Federico Santa María
        <br />
        <br />
        +56 32 2652734 -
        <a href="mailto: dired@usm.cl" target="_blank" className='external'> dired@usm.cl</a>
        <br />
        <br />
        Sitio web administrado por la&nbsp;
        <a href="https://educacionadistancia.usm.cl/" target="_blank" className='external'>Dirección de Educación a Distancia</a>
      </p>
    </div>
  )
}

export default FooterText
