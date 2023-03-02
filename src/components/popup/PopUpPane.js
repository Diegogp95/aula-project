import React, {useState} from 'react'
import './PopUpPane.css'
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import '../Button.css';

function PopUpPane({isVisible, handleClick}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


/* 

-- agregar la función para enviar formulario en botón final --
<MDBBtn className="btn-submit" size='lg' color="danger" 
            aria-label="Submit" onClick={() => submitForm(email, password)} />


-- función para enviar formulario --
const submitForm = (email, password) => {
  // send a request to your server with email and password
  fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify({ email: email, password: password }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
*/



  return (
    <div className={isVisible? 'visible' : 'hidden'} onClick={handleClick}>
      <div className='closeButton'>
        <MDBBtn className="btn-close" size='lg' color="danger" 
            aria-label="Close" onClick={handleClick} />
      </div>
      <div className="poppanel" onClick={(e) => e.stopPropagation()}>
        <div className="band"></div>
        <div className="inputBlock">
            <p className='inputLabel'>Nombre de usuario</p>
            <MDBInput label='Username' id='typeEmail' type='email' contrast 
                value={email} onChange={(e) => setEmail(e.target.value)} />        
        </div>
        <div className="inputBlock">
            <p className='inputLabel'>Contraseña</p>
            <MDBInput label='Password' id='typePassword' type='password' contrast 
                value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <MDBBtn className="btn-submit" size='lg' color="light" 
            aria-label="Submit"  > Ingresar</MDBBtn>
      </div>
    </div>
  )
}

export default PopUpPane