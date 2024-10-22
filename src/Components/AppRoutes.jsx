import { Routes, Route } from "react-router-dom"
import App from "../templates/App/App"
import Inicio from "../templates/Inicio/Inicio"
import Login from "../templates/Login/Login"
import Home from "../templates/Home/Home"
import Usuario from "../templates/Usuario/Usuario"
import UsuarioEditar from "../templates/Usuario/UsuarioEditar"
import UsuarioNovo from "../templates/Usuario/UsuarioNovo"
import UsuariosLista from "../templates/Usuario/UsuariosLista"
import Kit from "../templates/Kit/Kit"
import KitsLista from "../templates/Kit/KitLista"
import KitNovo from "../templates/Kit/KitNovo"
import KitEditar from "../templates/Kit/KitEditar"
import Produto from "./Product/Product"
import AssinaturaDetalhes from "../templates/Usuario/AssinaturaDetalhes"

const AppRoutes = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/produto" element={<Produto/>}/>

                <Route path="/usuario" element={<Usuario />} />
                <Route path="/usuarioslista" element={<UsuariosLista />} />
                <Route path="/usuarionovo" element={<UsuarioNovo />} />
                <Route path="/usuarioeditar/:id" element={<UsuarioEditar/>} />
 
                <Route path="/kit" element={<Kit />} />
                <Route path="/kitlista" element={<KitsLista />} />
                <Route path="/kitnovo" element={<KitNovo />} />
                <Route path="/kiteditar/:id" element={<KitEditar />} />

                <Route path="/assinatura/:usuEmail" element={<AssinaturaDetalhes />} />

            </Routes>
        </div>
    )

}
export default AppRoutes