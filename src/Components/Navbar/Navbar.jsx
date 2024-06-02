import React from 'react'
import './Navbar.css'
import kitfit from '../../assets/KitFit.png'

const Navbar = () => {
  return (
    <nav className='container'>
    <img src={kitfit} alt="" className='logo'/>
    <ul>
      <li><button className='btn'>Home</button></li>
      <li><button className='btn'>Quem Somos</button></li>
      <li><button className='btn'>Contato</button></li>
      <li><button className='btn btn-login'>Entrar/Cadastre-se</button></li>
    </ul> 
    </nav>
  )
}

export default Navbar
