import React, { useState } from 'react';
import './Navbar.css';


function Navbar() {

  const [isHovered, setHovered] = useState([false, false]);

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
            <li onMouseEnter={() => setHovered(prevState => [true, prevState[1]])} 
                onMouseLeave={() => setHovered(prevState => [false, prevState[1]])}>
              <a href="#">
                Recursos Aula
              </a>
              <ul className={isHovered[0] ? "showDD" : "hideDD"}>
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
            <li onMouseEnter={() => setHovered(prevState => [prevState[0], true])} 
                onMouseLeave={() => setHovered(prevState => [prevState[0], false])}>
              <a href="#">
                Sitios de interés
              </a>
              <ul className={`rightDrop ${isHovered[1] ? 'showDD' : 'hideDD'}`}>
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
