import { Link } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Sidebar from '../../Components/Menu/Sidebar'

const Usuario = () => {

    return (
        <div className="flex">
           <Sidebar />
           <div className=" w-full">
           <Header 
                    goto={'/home'}
                    title={'Usuário'}
                    />
               <section className="m-2 p-2 shadow-lg">
                    <div className="flex justify-around">
                        <Link to={'/usuarionovo'}>
                            <button className="bg-orange"> Novo Usuário</button>
                        </Link>
                        <Link to={'/usuarioslista'} >
                            <button className="bg-orange">Lista de Usuários</button>
                        </Link>
                    </div>
                </section>
           </div>
        </div>
    )
}

export default Usuario