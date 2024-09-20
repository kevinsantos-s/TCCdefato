import { Link } from "react-router-dom";
import './Sidebar.css';

const Sidebar = () => {

    return (
             <div className="flex justify-around align-center px-2 py-4 border-b-2 rounded">
              <span className="font-bold">KITFIT</span>
              <nav className="nav flex flex-col"></nav>
        <div className="sidebar">
            <div className="flex justify-around items-center px-2 py-4 border-b-2 rounded">
           
                
                <span className="fw-bold fst-italic">KITFIT</span>
            </div>

            <nav className="nav flex-column">
                <Link className="nav-link" aria-current="page" to={'/home'}>Dashboard</Link>
                <Link className="nav-link" to={'/usuarioslista'}>Usuário</Link>
                <Link className="nav-link" to={'/produto'}>Kit's</Link>
                <Link className="nav-link" to={'/mensalidade'}>Mensalidade</Link>
            </nav>
        </div>
        </div>
    )
}

export default Sidebar     