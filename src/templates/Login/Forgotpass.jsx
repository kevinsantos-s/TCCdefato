import React from 'react'
import './Forgotpass.css'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import { Link } from 'react-router-dom'

const Forgotpass = () => {
  return (
    <div className="forgotpassform">
    <div className='quad2'>
    <div className='header2'>
        <div className='text'>Esqueceu a Senha</div>
        <div className='underline'></div>
    </div>

    <div className='inputs2'>
    <div className='input2'>
       <img src={email_icon} alt=""/>
       <input type="email" placeholder="Email"/>
    </div>

    <div className='input2'>
       <img src={password_icon} alt=""/>
       <input type="password" placeholder="Senha"/>
      </div>

      <div className='input2'>
       <img src={password_icon} alt=""/>
       <input type="password" placeholder="Confirmar Senha"/>
      </div>
    </div>
  
    <div className="submit-container">
        <Link to={"/login"} className="submit">Alterar senha</Link>
        
    </div>
    </div>
</div>
  )
}

export default Forgotpass
