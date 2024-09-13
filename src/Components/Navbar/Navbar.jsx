import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import kitFit from '../../assets/KitFit.png';
import Button from './button';




const Navbar = () => {
    
    let [open,setOpen]=useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0 '>
            <div className='md:flex items-center justify-between bg-black py-3 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center text-white' >
                    
                    <img src={kitFit} className='h-[45px] md:ml-5 ' />
                </div>
                <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden pt-3 justify-center'>
                <ion-icon name={open ? 'close':'menu-outline'}></ion-icon>
                </div>
                <ul className={`text-white md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-15 opacity-100':'top-[-490px]'} md:opacity-100`}>
                    <li className='md:ml-8 text-xl md:my-0 my-7'><a href="#inicioscroll"className="hover:text-orange duration-500">Início</a></li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'><a href="#aboutscroll" className="hover:text-orange duration-500">Sobre nós</a></li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'><a href='#contatoscroll' className="hover:text-orange duration-500">Contato</a></li>
                    <Link to={"/login"}><Button>Entrar</Button></Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;