import { Link } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Sidebar from '../../Components/Menu/Sidebar'

const UsuarioEditar = () => {

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header
                    goto={'/usuario'}
                    title={'Editar Usuário'}
                />
                <section className="m-2 p-2 shadow-lg">
                    <form className="row g-3">
                        <div className="col-md-2">
                            <label htmlFor="inputID" className="form-label">ID</label>
                            <input type="text" className="form-control" id="inputID" readOnly />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputNome" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="inputNome" />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="inputData" className="form-label">Data de Cadastro</label>
                            <input type="text" className="form-control" id="inputData" readOnly />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputStatus" className="form-label">Status</label>
                            <input type="text" className="form-control" id="inputStatus" readOnly />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputAcesso" className="form-label">Acesso</label>
                            <select id="inputAcesso" className="form-select">
                                <option selected>Nível de Acesso</option>
                                <option>...</option>
                            </select>
                        </div>
                        
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">
                                Gravar
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default UsuarioEditar