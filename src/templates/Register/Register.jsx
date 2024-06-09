import React from 'react'
import './Register.css'
import user_icon from '../../assets/person.png'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='registerform'>
            <div className='quad'>
            <div className='header'>
                <div className='text'>Cadastre-se</div>
                <div className='underline'></div>
            </div>

            <div className='inputs'>
            <div className='input'>
               <img src={user_icon} alt=""/>
               <input type="text" placeholder="Nome"/>
            </div>

            <div className='input'>
               <img src={email_icon} alt=""/>
               <input type="email" placeholder="Email"/>
            </div>

            <div className='input'>
               <img src={password_icon} alt=""/>
               <input type="password" placeholder="Senha"/>
              </div>
            </div>

            <div className="alreadyhave">Já tem uma conta?<span><Link to={"/login"}>Faça Login</Link></span></div>
            <div className="submit-container">
                <div className="submit">Cadastrar</div>
                
            </div>
            </div>
        </div>
    )
}

export default Register;
