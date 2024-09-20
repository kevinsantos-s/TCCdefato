import { Link } from "react-router-dom";
import './Sidebar.css';

const Sidebar = () => {

    return (
             <div className="flex flex-col justify-around align-center px-2 py-4 border-b-2 rounded">
              <span className="font-bold ">KITFIT</span>
            
        <div className="sidebar">
            <div className="flex justify-around items-center px-2 py-4 border-b-2 rounded">
           
                
                <span className="fw-bold fst-italic">KITFIT</span>
            </div>

            <nav className="align-center justify-center flex flex-col">
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