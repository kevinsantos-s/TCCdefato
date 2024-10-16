import { Link } from "react-router-dom"; 
import "../Header/Header.css";

const Header = ({goto, title }) => {

    return (
        <div className="
            flex justify-between align-center
            pt-3 pl-3 pr-3 rounded-tl-xl rounded-tr-xl bg-white mt-5 bg-grey ">
            <Link to={goto} className=""><button className="bg-orange text-black m-2 py-2 px-4 rounded  hover:bg-black hover:text-orange duration-500">Voltar</button></Link>
            <div className="mt-3">
                <span className="font-bold text-base pt-6 h-2">{title}</span>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Header