
import Header from "../../Components/Header/Header"
import Sidebar from '../../Components/Menu/Sidebar'


const UsuarioNovo = () => {

    return (
        <div className="flex w-full bg-grey">
            <Sidebar />
            <div className=" shadow-black drop-shadow-xl w-full">
                <div className=" container flex flex-col w-full justify-items-center">
                <Header
                    goto={'/usuario'}
                    title={'Novo Usuário'}
                />
                <section className=" h-[45%] w-full p-2 bg-white flex flex-col justify-items-center  align-center  rounded-bl-xl rounded-br-xl">
                    <form className="content-center  mt-3">
                        <div className="flex flex-col  gap-3  m-2">
                        <div className="flex flex-col  md-2">
                        <div className="flex flex-col">
                            <label htmlFor="inputNome" className="form-labe  text-lg font-semibold pt-2 mb-2">Nome:</label>
                            <input type="text" className="w-[30%]  p-3 border rounded-lg"  id="inputNome" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="inputEmail4" className="form-labe  text-lg font-semibold pt-2 mb-2">Email:</label>
                            <input type="email"  className="w-[30%]  p-3 border rounded-lg" id="inputEmail4" />
                        </div>
                        </div>
                        
                       <div>
                       <div className="flex flex-col">
                            <label htmlFor="inputAcesso" className="form-label w-full  text-lg font-semibold mb-2">Acesso</label>
                            <select id="inputAcesso" className="w-[30%] flex flex-col p-3 border rounded-lg">
                                <option selected>Nível de Acesso</option>
                                <option>...</option>
                            </select>
                        </div>
                       </div>
                        
                        </div>
                        
                        <div className="col-12">
                            <button type="submit" className="bg-orange text-black m-2 py-2 px-4 rounded   hover:bg-black hover:text-orange duration-500">
                                Gravar
                            </button>
                        </div>
                    </form>
                </section>
                </div>
            </div>
        </div>
    )
}

export default UsuarioNovo