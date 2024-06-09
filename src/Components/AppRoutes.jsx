import { Routes, Route, Router } from "react-router-dom"
import App from "../templates/App/App"
import Home from "../templates/Inicio/Inicio"
import Register from "../templates/Register/Register"
import Login from "../templates/Login/Login"
import Forgotpass from "../templates/Login/Forgotpass"


const AppRoutes = () => {

    return (
        <div>
            <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/forgotpass" element={<Forgotpass/>} />
            </Routes>
        </div>
    )

} 
export default AppRoutes