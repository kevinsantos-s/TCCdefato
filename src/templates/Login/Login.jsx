import React, { useState } from 'react'
import './Login.css'
import Maromba from '../../assets/home2.jpg'
import Logo from '../../assets/KitFit.png'
import { Link, useNavigate } from 'react-router-dom'
import UsuarioService from '../../services/UsuarioService'

const Login = () => {
  const navigate = useNavigate();

  const goto = () => {
    navigate("/home");
  }

  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(formData => ({ ...formData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    UsuarioService.signin(formData.email, formData.password).then(
      () => {
        const userJson = localStorage.getItem("user");
        const user = JSON.parse(userJson || '{}');
        if (user.statusUsuario == 'ATIVO') {
          navigate("/home");
        } else if (user.statusUsuario == 'TROCAR_SENHA') {
          navigate(`/newpass/` + user.id);
        }
      },
      (error) => {
        const respMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(respMessage);
      }

    );
  };

  return (
    <div className='w-full h-screen flex items-start bg-[#000000] justify-center sm:'>
      <div className='w-1/2 h-full bg-[#000000] flex flex-col p-10 justify-around items-center '>
        <img src={Logo} className='w-screen h-[200px] md:w-1/2 md:h-1/4 min-w-[300px] min-h-[200px]' />

        <form className='w-full flex flex-col mb-[100px] min-h-[300px] max-h-[400px] min-w-[300px] max-w-[400px]' onSubmit={handleSubmit} >
          <div className='w-full flex flex-col mb-5'>
            <h3 className='text-3xl font-semibold mb-2 text-[#ffffff]'>Login</h3>
            <p className='text-[#ffffff] text-base '>Bem-vindo, insira suas credenciais!</p>
          </div>

          <div className='w-full flex flex-col'>
            <input className='w-full text-[#ffffff] my-2 py-2 border-b border-[#ffffff] outline-none focus:outline-none bg-[#000000]'
              type="email" placeholder='Email'
              name="email"
              value={formData.email || ""}
              onChange={handleChange} />

            <input className='w-full text-[#ffffff] my-2 py-2 border-b border-[#ffffff] outline-none focus:outline-none bg-[#000000]'
              type="password" placeholder='Senha'
              name="password"
              value={formData.password || ""}
              onChange={handleChange} />
          </div>
          <div className="text-[#ff0099] text-center py-2">
            {message && (
              <div className="fw-bold fs-5 text-danger">
                <span>{message}</span>
              </div>
            )}
          </div>

          <div className='w-full flex items-center justify-between'>
            <div className='w-full flex items-center'>
              <input type="checkbox" className='w-4 h-4 mr-2' />
              <p className='text-sm text-[#ffffff]'>Lembre-se de mim</p>
            </div>

          </div>
          <div className='w-full flex flex-col my-4'>
            <button className='w-full bg-[#F36D04] rounded-md my-2 p-4 text-center flex items-center justify-center cursor-pointer ' >
              Entrar
            </button>

          </div>
        </form>

      </div>
    </div>
  )
}

export default Login