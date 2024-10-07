import React from 'react'
import Logo from '../../assets/KitFit.png'
import { CiPhone } from "react-icons/ci";
 
 
const Footer = () => {
  return (
   
    <footer className="bg-black  shadow dark:bg-gray-900  text-white">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a  className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={Logo} className="h-20" alt="Logo" />
            </a>
            <ul>
            <li><span className="block text-lg text-white sm:text-center dark:text-gray-400">Contactkitfitdevs@gmail.com</span></li>
                <li> </li>
             
            </ul>
           
        
            <ul className="flex flex-wrap items-center mb-6 text-xl font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#inicioscroll" className="hover:underline me-4 md:me-6">Início</a>
                </li>
                <li>
                    <a href="#aboutscroll" className="hover:underline me-4 md:me-6">Sobre nós</a>
                </li>
                <li>
                    <a href="#contatoscroll" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-lg text-white pb-2 sm:text-center dark:text-gray-400"> 11 96182-8095</span>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a className="hover:underline">KitiFit™</a>. Todos os Direitos Reservados.</span>
    </div>
</footer>
   
  )
}
 
 
export default Footer