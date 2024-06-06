import React from 'react'
import './Navbar.css'
import kitfit from '../../assets/KitFit.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='container dark-nav'>
    <img src={kitfit} alt="" className='logo'/>
    <ul>
      <li><button className='btn'><Link to='home' smooth={true} offset={0} duration={500}>Home</Link></button></li>
      <li><button className='btn'><Link to='about-kitfit' smooth={true} offset={-100} duration={500}>Sobre nós</Link></button></li>
      <li><Link to='contato' smooth={true} offset={0} duration={500} className='btn'>Contato</Link></li>
      <li><button className='btn btn-login'>Entrar/Cadastre-se</button></li>
    </ul> 
    </nav>
  )
}

export default Navbar
