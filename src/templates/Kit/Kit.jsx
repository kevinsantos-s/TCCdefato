import { Link } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Sidebar from '../../Components/Menu/Sidebar'

const Kit = () => {

    return (
        <div className="flex">
           <Sidebar />
           <div className=" w-full">
           <Header 
                    goto={'/home'}
                    title={'Kits'}
                    />
               <section className="m-2 p-2 shadow-lg">
                    <div className="flex justify-around">
                        <Link to={'/kitnovo'}>
                            <button className="bg-orange text-black m-2 py-2 px-4 rounded md:ml-8  hover:bg-black hover:text-orange duration-500"> Novo Kits</button>
                        </Link>
                        <Link to={'/kitslista'} >
                            <button className="bg-orange text-black m-2 py-2 px-4 rounded md:ml-8  hover:bg-black hover:text-orange duration-500">Lista de Kits</button>
                        </Link>
                    </div>
                </section>
           </div>
        </div>
    )
}

export default Kit