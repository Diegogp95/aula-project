import React, {useState} from 'react';
import './Banner.css';

function Banner(props) {
  const [shrunk, setShrunk] = useState(false);
  return (
    <div className='banner' onMouseEnter={() => setShrunk(true)}
    onMouseLeave={() => setShrunk(false)}>
        <img src={props.img} alt="" className='icon'/>
        <div className={`mask ${shrunk ? 'shrunk' : ''}`}>
            <p className='mainText'>{props.mainText}</p>
        </div>
        <p className='desc'>{props.desc}</p>
    </div>
  )
}

export default Banner