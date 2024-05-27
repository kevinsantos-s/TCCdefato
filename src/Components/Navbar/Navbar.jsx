import React from 'react'
import './Navbar.css'
import kitfit from '../../assets/KitFit.png'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={kitfit} alt="" className='logo'/>
      <ul>
        <li>Home</li>
        <li>Sobre nós</li>
        <li><button className='btn'>Entrar</button></li>
        <li><button className='btn'>Cadastre-se</button></li>
        <li><button className='btn'>Contate-nos</button></li>
      </ul> 
    </nav>
  )
}

export default Navbar
