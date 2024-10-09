import { Link, useParams } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Sidebar from '../../Components/Menu/Sidebar'
import { useEffect, useRef, useState } from "react";
import KitService from "../../services/KitService";



const KitEditar = () => {
    const { id } = useParams();
    const _dbRecords = useRef(true);

    const initialObjectState = {
        id: null,
        nome: "",
        descricao: "",
        produtos: "",
        foto: null,
        preco: 0,
        statusKit: ""
    };
    const [kit, setKit] = useState(initialObjectState);
    const [message, setMessage] = useState();
    const [successful, setSuccessful] = useState(false);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setKit(kit => ({ ...kit, [name]: value }));
    }

    useEffect(() => {
        if (_dbRecords.current) {
            KitService.findById(id)
                .then(response => {
                    const kit = response.data;
                    setKit(kit);
                })
                .catch(e => {
                    console.log(e);
                });
        } return () => {
            _dbRecords.current = false;
        }
    }, [id]);

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
        <div className="flex">
            <Sidebar />
            <div className="w-full">
                <Header
                    goto={'/Kit'}
                    title={'Editar Kit'}
                />

                <section className="m-6 h-[55%] p-2 justify-center align-center shadow-lg">
                    <form className="content-center mt-12" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-3  m-2 ">
                            <div className="flex flex-col  md-2">
                                <div className="flex flex-col">
                                    <label htmlFor="inputNome" className="form-labe  text-lg font-semibold pt-2 mb-2">Nome:</label>
                                    <input type="text" className="w-[46%]  p-3 border rounded-lg" id="inputNome" 
                                     defaultValue={kit.nome}/>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="inputEmail4" className="form-label text-lg font-semibold pt-2 mb-2">Email</label>
                                    <input type="email" className="w-[46%] p-3 border rounded-lg" id="inputEmail4" />
                                </div>
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