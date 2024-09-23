import { Link } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Sidebar from '../../Components/Menu/Sidebar'


const UsuarioNovo = () => {

    return (
        <div className="flex">
            <Sidebar />
            <div className=" w-full">
                <Header
                    goto={'/usuario'}
                    title={'Novo Usuário'}
                />
                <section className="m-2 p-2 shadow-lg">
                    <form className="flex-row gap-3">
                        <div className="flex-col md-5">
                            <label htmlFor="inputNome" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="inputNome" />
                        </div>
                        <div className="flex-col md-5">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                       
                        <div className="flex-col md-2">
                            <label htmlFor="inputAcesso" className="form-label">Acesso</label>
                            <select id="inputAcesso" className="form-select">
                                <option selected>Nível de Acesso</option>
                                <option>...</option>
                            </select>
                        </div>
                        
                        <div className="col-12">
                            <button type="submit" className="bg-orange text-black m-2 py-2 px-4 rounded md:ml-8  hover:bg-black hover:text-orange duration-500">
                                Gravar
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default UsuarioNovo