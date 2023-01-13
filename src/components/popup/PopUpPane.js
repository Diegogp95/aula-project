import React, {useState} from 'react'
import './PopUpPane.css'
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import '../Button.css';
//import chroma from 'chroma-js'

function PopUpPane({isVisible, handleClick}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//  const lightColor = chroma('#004B85').brighten(0.5).hex();


{/* 

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
*/}



  return (
    <div className={isVisible? 'visible' : 'hidden'}>
      <div className='closeButton'>
        <MDBBtn className="btn-close" size='lg' color="danger" 
            aria-label="Close" onClick={handleClick} />
      </div>
      <div className="poppanel">
        <div className="band"></div>
        <MDBInput label='Email' id='typeEmail' type='email' contrast 
            value={email} onChange={(e) => setEmail(e.target.value)} />        
        <MDBInput label='Password' id='typePassword' type='password' contrast 
            value={password} onChange={(e) => setPassword(e.target.value)} />
        <MDBBtn className="btn-submit" size='lg' color="light" 
            aria-label="Submit"  > Ingresar</MDBBtn>
{/*            
        <MDBBtn outline contrast>Ingresar</MDBBtn>
        <MDBBtn className="btn-submit" size='lg' color="info" 
            aria-label="Submit"  > Ingresar</MDBBtn>
        <button className="login-button" style={{border: `1px solid ${lightColor}`}}>
            INGRESAR</button>
*/}
      </div>
    </div>
  )
}

export default PopUpPane