import React, {useState} from 'react';
import './MobileDropdown.css';
import './Limit.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function MobileDropDown({isWide, isDisplayed}) {

    const [isDropped, setDropped] = useState([false, false]);

    const toggleDrop = (i) => {
        setDropped(prevState => {
            var newState = [...prevState];
            newState[i] = !newState[i];

            return newState;
        })

    }



    return (
        <>
        {!isWide && isDisplayed && (
        <div className="mob-DD">
            <div className="first-menu">
            <div className="container limit-width">
            <ul>
                <li>
                    <a href="https://educacionadistancia.usm.cl">
                        <ul>
                            <li>
                                Sitio web DIRED
                            </li>
                        </ul>
                    </a>
                </li>
            </ul>
            </div>
            </div>
            <div className="first-menu">
            <div className="container limit-width">
            <ul>
                <li>
                   <ul onClick={() => toggleDrop(0)}>
                        <li>
                            Recursos Aula
                        </li>
                        <li><FontAwesomeIcon icon={faAngleDown}
                            className={isDropped[0] ? 'rotate-arrow' : ''}>
                            </FontAwesomeIcon>
                        </li>
                    </ul>
                </li>
            </ul>
            </div>
            </div>
            {isDropped[0] &&(
            <div className="second-menu">
            <div className="container limit-width">
            <ul>
                <li>
                    <a href="https://educacionadistancia.usm.cl/recursos-aula-profesores/">
                        <ul>
                            <li>
                                Recursos Aula Profesores
                            </li>
                        </ul>
                    </a>
                </li>
                <li>
                    <a href="https://educacionadistancia.usm.cl/recursos-aula-estudiantes/">
                        <ul>
                            <li>
                                Recursos Aula Estudiantes
                            </li>
                        </ul>
                    </a>
                </li>
                <li>
                    <a href="https://educacionadistancia.usm.cl/recursos-zoom/">
                        <ul>
                            <li>
                                Recursos Zoom
                            </li>
                        </ul>
                    </a>
                </li>
            </ul>
            </div>
            </div>
            )}
            <div className="first-menu">
            <div className="container limit-width">
            <ul>
                <li>
                    <ul onClick={() => toggleDrop(1)}>
                        <li>
                            Sitios de interés
                        </li>
                        <li><FontAwesomeIcon icon={faAngleDown}
                            className={isDropped[1] ? 'rotate-arrow' : ''}>
                            </FontAwesomeIcon>
                        </li>
                    </ul>
                </li>
            </ul>
            </div>
            </div>
            {isDropped[1] &&(
            <div className="second-menu">
            <div className="container limit-width">
            <ul>
                <li>
                    <a href="https://usm.cl/sitios-academicos/">
                        <ul>
                            <li>
                                Sitios Académicos
                            </li>
                        </ul>
                    </a>
                </li>
                <li>
                    <a href="https://usm.cl/sitios-administrativos/">
                        <ul>
                            <li>
                                Sitios Administrativos
                            </li>
                        </ul>
                    </a>
                </li>
            </ul>
            </div>
            </div>
            )}
        </div>
        )}
        </>
    )
}

export default MobileDropDown
