import React from 'react'
import './Navbar.css'
<<<<<<< HEAD
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
=======
import kitfit from '../../assets/kitfit.png'

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
>>>>>>> 8ad27cb657d69631220d94390df33d6156f38131
  )
}

export default Navbar
