import React from 'react';
import './MainBody.css';
import ContainerRow from './ContainerRow';
import Banner from './banner/Banner';
import webDired from './img/web-dired.png';
import recursosAula from './img/recursos-aula.png'
import acreditacion from './img/sello-acreditacion-2028.svg';
import marca from './img/logo-usm_blanco.svg';

function MainBody({handleClick}) {
  const DIRED="Sitio web DIRED";
  const desc1="Esta es una descripción que debo corregir luego, texto random probando como se comporta este texto en el container";
  const Recursos="Recursos Aula USM";
  const desc2="Esta es una descripción que debo corregir luego, texto random probando como se comporta este texto en el container";

  return (
    <div className="main-container">
        <img src={marca} alt="" className='marca'/>
        <ContainerRow handleClick={handleClick} />
        <div className="bannerContainer">
            <Banner img={webDired} mainText={DIRED} desc={desc1} link='https://educacionadistancia.usm.cl/' />
            <Banner img={recursosAula} mainText={Recursos} desc={desc2} link='https://educacionadistancia.usm.cl/aula.html' />
            <img src={acreditacion} alt="" className='acreditacion'/>
        </div>
    </div>
  )
}

export default MainBody
