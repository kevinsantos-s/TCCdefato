import { Routes, Route, Router } from "react-router-dom"
import App from "../templates/App/App"
import Home from "../templates/Inicio/Inicio"
import Register from "../templates/Register/Register"

const AppRoutes = () => {

    return (
        <div>
            <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    )

} 
export default AppRoutes