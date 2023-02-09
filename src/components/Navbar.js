import React, { useState, useEffect } from 'react';
import './Navbar.css';


function Navbar() {

  const [isHovered, setHovered] = useState([false, false]);
  const [isHighlighted, setHighlighted] = useState([false, false]);

  let timer = [];
  useEffect(() => {
    if (isHovered[0]){
      setHighlighted(prevState => [true ,prevState[1]]);
    }
    else{
      timer[0] = setTimeout(() => {
        setHighlighted(prevState => [false, prevState[1]]);
      }, 200);
    }
    return () => clearTimeout(timer[0]);
  }, [isHovered[0]]);


  useEffect(() => {
    if (isHovered[1]){
      setHighlighted(prevState => [prevState[0], true]);
    }
    else{
      timer[1] = setTimeout(() => {
        setHighlighted(prevState => [prevState[0], false]);
      }, 200);
    }
    return () => clearTimeout(timer[1]);
  }, [isHovered[1]]);

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
        <div className="group" id='rightside'>
          <ul>
            <li onMouseOver={() => setHovered(prevState => [true, prevState[1]])} 
                onMouseOut={() => setHovered(prevState => [false, prevState[1]])}>
              <a href="#">
                Recursos Aula
              </a>
              <ul className={`${(isHighlighted[0]) ? "showDD" : "hideDD"}
                              ${(isHovered[0] || isHighlighted[0]) ? "test": ""}`}>
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
            <li onMouseOver={() => setHovered(prevState => [prevState[0], true])} 
                onMouseOut={() => setHovered(prevState => [prevState[0], false])}>
              <a href="#">
                Sitios de interés
              </a>
              <ul className={`rightDrop ${isHovered[1] ? "test": ""}
                              ${isHighlighted[1] ? 'showDD' : 'hideDD'}`}>
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
