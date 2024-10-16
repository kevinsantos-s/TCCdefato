import { Link } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Sidebar from '../../Components/Menu/Sidebar'

const Kit = () => {

    return (
        <div className="flex bg-grey">
           <Sidebar />
           <div className=" shadow-black drop-shadow-xl w-full">
           <div className=" container flex flex-col w-full justify-items-center">
           <Header 
                    goto={'/home'}
                    title={'Kits'}
                    />
               <section className="h-[45%] w-full p-2 bg-white flex flex-col justify-items-center  align-center  rounded-bl-xl rounded-br-xl">
                    <div className="flex justify-around">
                        <Link to={'/kitnovo'}>
                            <button className="bg-orange text-black m-2 py-2 px-4 rounded md:ml-8  hover:bg-black hover:text-orange duration-500"> Novo Kits</button>
                        </Link>
                        <Link to={'/kitlista'} >
                            <button className="bg-orange text-black m-2 py-2 px-4 rounded md:ml-8  hover:bg-black hover:text-orange duration-500">Lista de Kits</button>
                        </Link>
                    </div>
                </section>
           </div>
           </div>
        </div>
    )
}

export default Kit