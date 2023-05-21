import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import './Limit.css';
import Hamburger from './Hamburger';

function Navbar({isWide, toggleDisplay}) {

  const [isHovered, setHovered] = useState([false, false]);
  const [isHighlighted, setHighlighted] = useState([false, false]);

  const [timer, setTimer] = useState(null);
  const timerRef = useRef(null);
  
  /*
  useEffect(() => {
    if (isHovered[0]){
      setHighlighted([true , false]);
    }
    else{
      timer[0] = setTimeout(() => {
        setHighlighted(prevState => [false, prevState[1]]);
      }, 500);
    }
    return () => clearTimeout(timer[0]);
  }, [isHovered[0]]);


  useEffect(() => {
    if (isHovered[1]){
      setHighlighted([false , true]);
    }
    else{
      timer[1] = setTimeout(() => {
        setHighlighted(prevState => [prevState[0], false]);
      }, 500);
    }
    return () => clearTimeout(timer[1]);
  }, [isHovered[1]]);

*/
  useEffect(() => {
    if (isHovered[1]){
      setHighlighted([false , true]);
    }
    else if (isHovered[0]){
      setHighlighted([true , false]);
    }
    else{
      setTimer(setTimeout(() => {
        setHighlighted([false, false]);
      }, 500));
    }
    return () => clearTimeout(timerRef.current);
  }, [isHovered]);

  useEffect(() => {
    timerRef.current = timer;
  }, [timer]);

  return (
    <nav>
      <div className="navbar">
        <div className="container limit-width">
        <div className="group">
          <ul>
            <li>
              <a href="https://usm.cl/" target="_blank" rel="noreferrer">
                USM.cl
                </a>
            </li>
          </ul>
        </div>
        {isWide ?(
        <div className="group" id='rightside'>
          <ul>
            <li>
              <a href="https://educacionadistancia.usm.cl" target="_blank" rel="noreferrer">
                Sitio web DIRED
              </a>
            </li>
            <li onMouseOver={() => setHovered(prevState => [true, prevState[1]])} 
                onMouseOut={() => setHovered(prevState => [false, prevState[1]])}>
              <a href="/#">
                Recursos Aula
              </a>
              <ul className={`${(isHighlighted[0]) ? "showDD" : "hideDD"}
                              ${(isHovered[0] || isHighlighted[0]) ? "animate_fadein": ""}`}>
                <li>
                  <a href="https://educacionadistancia.usm.cl/recursos-aula-profesores/" target="_blank" rel="noreferrer">
                    Recursos Aula Profesores
                  </a>
                </li>
                <li>
                  <a href="https://educacionadistancia.usm.cl/recursos-aula-estudiantes/" target="_blank" rel="noreferrer">
                    Recursos Aula Estudiantes
                  </a>
                </li>
                <li>
                  <a href="https://educacionadistancia.usm.cl/recursos-zoom/" target="_blank" rel="noreferrer">
                    Recursos Zoom
                  </a>
                </li>
              </ul>
            </li>
            <li onMouseOver={() => setHovered(prevState => [prevState[0], true])} 
                onMouseOut={() => setHovered(prevState => [prevState[0], false])}>
              <a href="/#">
                Sitios de interés
              </a>
              <ul className={`rightDrop ${isHighlighted[1] ? 'showDD' : 'hideDD'}
                              ${(isHovered[1] || isHighlighted[1]) ? "animate_fadein": ""}`}>
                <li>
                  <a href="https://usm.cl/sitios-academicos/" target="_blank" rel="noreferrer">
                    Sitios Académicos
                  </a>
                </li>
                <li>
                  <a href="https://usm.cl/sitios-administrativos/" target="_blank" rel="noreferrer">
                    Sitios Administrativos
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>) : (
        <div className="group" id='ham'>
          <Hamburger toggleDisplay={toggleDisplay} />
        </div> )}
      </div>
      </div>
    </nav>
  )
}

export default Navbar
