import React from 'react';
import './Banner.css';

function Banner(props) {
  return (
    <div className='banner'>
        <img src={props.img} alt="" className='icon'/>
        <div className="mask">
            <p className='mainText'>{props.mainText}</p>
        </div>
    </div>
  )
}

export default Banner
