import React from 'react'
import './Login.css'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className="loginform">
    <div className='quad2'>
    <div className='header2'>
        <div className='text'>Faça Login</div>
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
    </div>

    <Link to={"/forgotpass"} className='forgotpass'>Esqueceu a senha?</Link>
  

    <div className="submit-container">
        <Link to={"/home"} className="submit">Entrar</Link>
      
    </div>
    </div>
</div>
  )
}

export default Login
