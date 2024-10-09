import { Link } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Sidebar from '../../Components/Menu/Sidebar'




const KitEditar = () => {

    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full">
                <Header
                    goto={'/Kit'}
                    title={'Editar Kit'}
                />
                
                <section className="m-6 h-[55%] p-2 justify-center align-center shadow-lg">
                    <form className="content-center mt-12">
                    <div className="flex flex-col gap-3  m-2 ">
                    <div className="flex flex-col  md-2">
                    <div className="flex flex-col"> 
                        <label htmlFor="inputNome" className="form-labe  text-lg font-semibold pt-2 mb-2">Nome</label>
                        <input type="text" className="w-[46%]  p-3 border rounded-lg" id="inputNome" />
                        </div>
                        <div className="flex flex-col"> 
                        <label htmlFor="inputEmail4" className="form-label text-lg font-semibold pt-2 mb-2">Email</label>
                        <input type="email" className="w-[46%] p-3 border rounded-lg" id="inputEmail4" />
                        </div>
                    </div>
                    <div className="flex-col md-2">
                        
                    </div>
                        <div className=" flex gap-8 md-2">
                            <div className="flex flex-col"> 
                            <label htmlFor="inputID" className="form-label w-1/2 text-lg font-semibold mb-2">ID</label>
                            <input type="text" className="w-full flex flex-col p-3 border rounded-lg" id="inputID" readOnly />
                            </div>
                            <div className="flex flex-col"> 
                            <label htmlFor="inputData" className="form-label text-lg font-semibold mb-2">Data de Cadastro</label>
                            <input type="text" className="w-full flex flex-col p-3 border rounded-lg" id="inputData" readOnly />
                            </div>
                            <div className="flex flex-col"> 
                            <label htmlFor="inputStatus" className="form-label text-lg font-semibold mb-2">Status</label>
                            <input type="text" className="w-full flex flex-col p-3 border rounded-lg" id="inputStatus" readOnly />
                            </div>
                        </div>
                        

                       
                        
                        
                        
                        </div>
                        <div className="flex flex-row">
                            <button type="submit" className="bg-orange text-black m-2 py-2 px-4 rounded md:ml-  hover:bg-black hover:text-orange duration-500">
                                Gravar
                            </button>
                        </div>
                    </form>
                </section>
                </div>
            </div>
        
    )
}

export default KitEditar