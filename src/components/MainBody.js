import React from 'react';
import './MainBody.css';
import ContainerRow from './ContainerRow';
import Banner from './banner/Banner';
import home from './banner/web.png';

function MainBody({handleClick}) {
  const DIRED="Sitio web Dirección\nde Educación a distancia";
  const desc1="Esta es una descripción que debo corredir luego";

  return (
    <div className="main-container">
        <ContainerRow handleClick={handleClick} />
        <Banner img={home} mainText={DIRED} desc={desc1}/>
    </div>
  )
}

export default MainBody
