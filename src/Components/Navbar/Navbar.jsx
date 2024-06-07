import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import kitFit from '../../assets/KitFit.png';

const Navbar = () => {

    return (
        <nav className="container dark-nav">
            <img src={kitFit} alt="" className="logo" />
            <ul>
                <li><button className="btn">Início</button></li>
                <li><button className="btn">Sobre nós</button></li>
                <li><button className="btn">Contato</button></li>
                <li> <Link to={'/register'} className="btn btn-login">Entrar/Cadastrar-se</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
