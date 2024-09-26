import { Link } from "react-router-dom"; 
import "../Header/Header.css";

const Header = ({goto, title }) => {

    return (
        <div className="
            flex justify-between align-center 
            p-3 border-b-2 rounded w-[1630px]">
            <Link to={goto} className=""><button className="bg-orange text-black m-2 py-2 px-4 rounded md:ml-8  hover:bg-black hover:text-orange duration-500">Voltar</button></Link>
            <div>
                <span className="font-bold text-base pt-6 h-2">{title}</span>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Header