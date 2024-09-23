import { Link } from "react-router-dom"; 
import "../Header/Header.css";
import Logo from '../../assets/KitFit.png'

const Header = ({goto, title, logo}) => {

    return (
        <div className="
            flex justify-between align-center 
            p-3 border-b-2 rounded">
            <Link to={goto} className=""><button className="bg-orange text-black m-2 py-2 px-4 rounded md:ml-8  hover:bg-black hover:text-orange duration-500">Voltar</button></Link>
            <div>
                <span className="font-bold h-2">{title}</span>
            </div>
            <div>
                <img src={logo} alt="logo" />
            </div>
        </div>
    )
}

export default Header