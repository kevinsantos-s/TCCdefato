import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import kitFit from '../../assets/KitFit.png';

const Navbar = () => {
  

    return (
        <nav className="container dark-nav">
            <img src={kitFit} alt="" className="logo" />
            <ul>
                <li><a href="#inicioscroll"className="btn">Início</a></li>
                <li><a href="#aboutscroll" className="btn">Sobre nós</a></li>
                <li><a href='#contatoscroll' className="btn">Contato</a></li>
                <li> <Link to={'/register'} className="btn btn-login">Entrar/Cadastrar-se</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;