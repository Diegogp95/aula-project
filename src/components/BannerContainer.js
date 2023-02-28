import React from 'react';
import './BannerContainer.css';
import Banner from './banner/Banner';
import webDired from './img/web-dired.png';
import recursosAula from './img/recursos-aula.png'

function BannerContainer() {

    const DIRED="SITIO WEB DIRED";
    const desc1="Sitio web de la Dirección de Estudios a Distancia, donde encontrarás recursos e información de contacto de la administración del sitio";
    const Recursos="RECURSOS AULA USM";
    const desc2="Aquí encontraras distintos manuales y tutoriales para el uso adecuado de la plataforma AULA VIRTUAL USM";

    return (
        <div className='container' id="bannerContainer">
            <Banner img={webDired} mainText={DIRED} desc={desc1} link='https://educacionadistancia.usm.cl/' />
            <Banner img={recursosAula} mainText={Recursos} desc={desc2} link='https://educacionadistancia.usm.cl/aula.html' />
        </div>
    )
}

export default BannerContainer
