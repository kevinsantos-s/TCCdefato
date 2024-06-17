import { Routes, Route, Router } from "react-router-dom"
import App from "../templates/App/App"
import Inicio from "../templates/Inicio/Inicio"
import Register from "../templates/Register/Register"
import Login from "../templates/Login/Login"
import Forgotpass from "../templates/Login/Forgotpass"
import Home from "../templates/Home/Home"

const AppRoutes = () => {

    return (
        <div>
            <Routes>
            <Route path="/" element={<App />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/forgotpass" element={<Forgotpass/>} />
            <Route path="/home" element={<Home/>} />
            </Routes>
        </div>
    )

} 
export default AppRoutes