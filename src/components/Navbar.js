import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className="group">
          <ul>
            <li>
              <a href="https://usm.cl/">
                USM.cl
                </a>
            </li>
          </ul>
        </div>
        <div className="group">
          <ul>
            <li>
              <a href="#">
                Recursos Aula
              </a>
              <ul>
                <li>
                  <a href="https://educacionadistancia.usm.cl/recursos-aula-profesores/">
                    Recursos Aula Profesores
                  </a>
                </li>
                <li>
                  <a href="https://educacionadistancia.usm.cl/recursos-aula-estudiantes/">
                    Recursos Aula Estudiantes
                  </a>
                </li>
                <li>
                  <a href="https://educacionadistancia.usm.cl/recursos-zoom/">
                    Recursos Zoom
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                Sitios de interés
              </a>
              <ul className='rightDrop'>
                <li>
                  <a href="https://usm.cl/sitios-academicos/">
                    Sitios Académicos
                  </a>
                </li>
                <li>
                  <a href="https://usm.cl/sitios-administrativos/">
                    Sitios Administrativos
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
