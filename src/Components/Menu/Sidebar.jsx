import { Link } from "react-router-dom";
import './Sidebar.css';

const Sidebar = () => {

    return (
        <div className="sidebar">
            <div className="d-flex justify-content-around align-items-center px-2 py-4 border-bottom rounded">
                <img src={""} alt="logo" className="m-1" />
                <span className="fw-bold fst-italic">KITFIT</span>
            </div>

            <nav className="nav flex-column">
                <Link className="nav-link" aria-current="page" to={'/home'}>Dashboard</Link>
                <Link className="nav-link" to={'/usuario'}>Usuário</Link>
                <Link className="nav-link" to={'/produto'}>Kit's</Link>
                <Link className="nav-link" to={'/mensalidade'}>Mensalidade</Link>
            </nav>
        </div>
    )
}

export default Sidebar