import React from 'react';
import './MainBody.css';
import ContainerRow from './ContainerRow';
import Banner from './banner/Banner';
import home from './banner/web.png';
import webDired from './img/web-dired.png';
import recursosAula from './img/recursos-aula.png'

function MainBody({handleClick}) {
  const DIRED="Sitio web DIRED";
  const desc1="Esta es una descripción que debo corregir luego, texto random probando como se comporta este texto en el container";
  const Recursos="Recursos Aula USM";
  const desc2="Esta es una descripción que debo corregir luego, texto random probando como se comporta este texto en el container";

  return (
    <div className="main-container">
        <ContainerRow handleClick={handleClick} />
        <div className="bannerContainer">
            <Banner img={webDired} mainText={DIRED} desc={desc1} />
            <Banner img={recursosAula} mainText={Recursos} desc={desc2} />
        </div>
    </div>
  )
}

export default MainBody
