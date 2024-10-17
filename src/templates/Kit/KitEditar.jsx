import { Link, useParams } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Sidebar from '../../Components/Menu/Sidebar'
import { useEffect, useRef, useState } from "react";
import KitService from "../../services/KitService";

const KitEditar = () => {
 
    const objectValues = {
        id: null,
        nome: "",
        descricao: "",
        produtos: "",
        foto: null,
        preco: 0,
        statusKit: ""
    };
    const [kit, setKit] = useState(objectValues);
 
    const { id } = useParams();
    const _dbRecords = useRef(true);
    const [formData, setFormData] = useState({});
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState();
 
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setKit(kit => ({ ...kit, [name]: value }));
    }

    useEffect(() => {
        KitService.findById(id).then(
            (response) => {
                const kit = response.data;
                setKit(kit);
            }
        ).catch((error) => {
            console.log(error);
        })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");
        setSuccessful(false);

        KitService.alterar(id, kit).then(
            (response) => {
                setMessage(response.data.message);
                setSuccessful(true);
            }, (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(resMessage);
                setSuccessful(false);
            }
        )
    }

    return (
        <div className="flex w-full bg-grey">
        <Sidebar />
        <div className="shadow-black drop-shadow-xl w-full">
            
            <div className=" container flex flex-col w-full justify-items-center">
            <Header
                goto={'/Kit'}
                title={'Editar Kit'}
            />
            <section className=" h-[45%] w-full p-2 bg-white flex flex-col justify-items-center align-center  rounded-bl-xl rounded-br-xl">
                {!successful && (
                    <>
                        <form className="content-center mt-3" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-3  m-2">
                        <div className="flex flex-col  md-2">
                        <div className="flex flex-col">
                            <label htmlFor="inputNome" className="form-labe  text-lg font-semibold pt-2 mb-2">Nome:</label>
                            <input type="text" className="w-[58%]  p-3 border rounded-lg" id="inputNome" 
                             name="nome"
                             value={kit.nome || ""}
                             onChange={handleChange} 
                             />

                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="inputDescricao" className="form-labe  text-lg font-semibold pt-2 mb-2">Descrição:</label>
                            <input type="text" className="w-[58%]  p-3 border rounded-lg" id="inputDescricao" 
                              name="descricao"
                              value={kit.descricao || ""} 
                              onChange={handleChange} 
                              />
                        </div>
                        </div>


                        <div className="flex gap-8 md-2">
                        <div className="flex flex-col">
                            <label htmlFor="inputProdutos" className="form-label w-1/2 text-lg font-semibold mb-2">Produtos:</label>
                            <input type="text" className="w-full flex flex-col p-3 border rounded-lg" id="inputProdutos"
                              name="produtos"
                              value={kit.produtos || ""} 
                              onChange={handleChange}
                              />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="inputStatus" className="form-label w-full h-1/2 text-lg font-semibold mb-2">Status Do Kit</label>
                            <input type="text" className="w-full flex flex-col p-3 border rounded-lg" id="inputStatus" 
                                name="statusKit"
                                value={kit.statusKit || ""} 
                                onChange={handleChange} 
                                />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="inputPreco" className="form-label w-full h-1/2 text-lg font-semibold mb-2">Preço</label>
                            <input type="text" className="w-full flex flex-col p-3 border rounded-lg" id="inputPreco" 
                                name="preco"
                                value={kit.preco || ""} 
                                onChange={handleChange} 
                                />
                        </div>
                        </div>
                        </div>
                        
                        <div className="col-12">
                                    <button type="submit" className="bg-orange text-black m-2 py-2 px-4 rounded md:ml-  hover:bg-black hover:text-orange duration-500   ">
                                        Gravar
                                    </button>
                                </div>
                            </form>
                        </>
                )}
                    {message && (
                        <div className="m-3">
                            <div className={
                                "text-center h4 fst-italic py-9 rounded-2 " + (successful ? "bg-success" : "bg-danger")
                            }>
                                {message}
                            </div>
                        </div>
                    )}
                </section>
                </div>
            </div>
        </div>
    )
}

export default KitEditar