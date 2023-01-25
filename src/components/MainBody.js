import React from 'react';
import './MainBody.css';
import ContainerRow from './ContainerRow';
import Banner from './banner/Banner';
import webDired from './img/web-dired.png';
import recursosAula from './img/recursos-aula.png'

function MainBody({handleClick}) {
  const DIRED="SITIO WEB DIRED";
  const desc1="Esta es una descripción que debo corregir luego, texto random probando como se comporta este texto en el container";
  const Recursos="RECURSOS AULA USM";
  const desc2="Esta es una descripción que debo corregir luego, texto random probando como se comporta este texto en el container";

  return (
    <div className="main-container">
        <ContainerRow handleClick={handleClick} />
        <div className="bannerContainer">
            <Banner img={webDired} mainText={DIRED} desc={desc1} link='https://educacionadistancia.usm.cl/' />
            <Banner img={recursosAula} mainText={Recursos} desc={desc2} link='https://educacionadistancia.usm.cl/aula.html' />
        </div>
    </div>
  )
}

export default MainBody
