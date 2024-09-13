import { Routes, Route } from "react-router-dom"
import App from "../templates/App/App"
import Inicio from "../templates/Inicio/Inicio"
import Login from "../templates/Login/Login"
import Home from "../templates/Home/Home"
import Usuario from "../templates/Usuario/Usuario"
import UsuarioEditar from "../templates/Usuario/UsuarioEditar"
import UsuarioNovo from "../templates/Usuario/UsuarioNovo"
import UsuariosLista from "../templates/Usuario/UsuariosLista"

const AppRoutes = () => {

    return (
        <div>
            <Routes>
            <Route path="/" element={<App />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/home" element={<Home />} />

            
           <Route path="/usuario" element={<Usuario />} />
           <Route path="/usuarioslista" element={<UsuariosLista />} />
           <Route path="/usuarionovo" element={<UsuarioNovo />} />
           <Route path="/usuarioeditar" element={<UsuarioEditar />} />
            </Routes>
        </div>
    )

} 
export default AppRoutes