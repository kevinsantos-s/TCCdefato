import { Link } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Sidebar from '../../Components/Menu/Sidebar'


const KitNovo = () => {

    return (
        <div className="flex">
            <Sidebar />
            <div className=" w-full">
                <Header
                    goto={'/kit'}
                    title={'Novo Kit'}
                />
                <section className="m-2 p-2 shadow-lg">
                    <form className="flex-row gap-3">
                        <div className="flex-col md-5">
                            <label htmlFor="inputNome" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="inputNome" />
                        </div>
                        <div className="flex-col md-5">
                        <label htmlFor="inputPreco" className="form-label">Preço</label>
                            <input type="text" className="form-control" id="inputPreco" />
                        </div>
                       
                        <div className="flex-col md-2">
                        <label htmlFor="inputDescricao" className="form-label">Descrição</label>
                            <textarea rows={5} className="form-control" id="inputDescricao" >
                                </textarea>
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

export default KitNovo