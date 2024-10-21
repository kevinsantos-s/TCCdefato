import { Link, useNavigate } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Sidebar from '../../Components/Menu/Sidebar'
import { useState } from "react"
import { useEffect } from "react"
import { deletarKit, listarKit } from "../../common/services/Service"

const KitsLista = () => {
    const navigate = useNavigate();

    const goTo = (id) => {
        navigate(`/kiteditar/${id}`)

    }
    const [kits, setKits] = useState([]);

    useEffect(() => {
        async function getKit() {
            const data = await listarKit()
            setKits(data)
        }
        getKit();
    }, [])

    const deletekitFunction = (id) => {
        deletarKit(id).then(() => {
            window.alert("Kit excluido!")
        }).catch((error) => {
            console.log("NAO FOI, VOCE TINHA RAZAO " + error)
        })
    }

    const [searchTerm, setSearchTerm] = useState("");

    const filteredKits = kits.filter(kit =>
        kit.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <div className="flex bg-grey flex-row ">
            <Sidebar />
            <div className="shadow-black drop-shadow-xl w-full">

                <div className=" container flex flex-col w-full justify-items-center">
                    <Header
                        goto={'/kit'}
                        title={'Lista de Kits'}
                    />

                    <div className="flex justify-center my-4">
                        <input
                            type="text"
                            placeholder="Buscar Kit por nome"
                            className="border p-2 rounded"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <section className="h-[45%] w-full p-2 bg-white flex flex-col justify-items-center shadow-lg align-center shadow-2xl rounded-bl-xl rounded-br-xl">
                        <div>
                            <table className="w-[100%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-black bg-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr scope="col" className="px-6 py-3">
                                        <th scope="col" className="px-6 py-3">ID</th>
                                        <th scope="col" className="px-6 py-3">Nome</th>
                                        <th scope="col" className="px-6 py-3">Descrição</th>

                                        <th scope="col" className="px-6 py-3">Preço</th>
                                        <th scope="col" className="px-6 py-3">Status</th>

                                        <th scope="col" className="px-6 py-3">Abrir</th>
                                        <th scope="col" className="px-6 text-black py-3">Excluir</th>
                                    </tr>
                                </thead>
                                <tbody className="relative">
                                    {filteredKits?.map((kit) => (
                                        <tr scope="row" className="px-6 py-4 border-t-2 font-medium text-gray-900 whitespace-nowrap dark:text-white" key={kit.id}>
                                            <td className="px-6 py-4 border-t-2 " >{kit.id}</td>
                                            <td className="px-6 py-4 border-t-2 ">{kit.nome}</td>
                                            <td className="px-6 py-4 border-t-2 ">{kit.descricao}</td>
                                            <td className="px-6 py-4 border-t-2 ">{kit.preco}</td>
                                            <td className="px-6 py-4 border-t-2 ">{kit.statusKit}</td>

                                            <td className="px-6 py-4 border-t-2 ">
                                                <button type="button" onClick={() => goTo(kit.id)}
                                                    className="bg-orange text-white py-2 px-4 rounded hover:bg-black hover:text-orange duration-500" to={"/kiteditar"}>
                                                    Abrir

                                                </button>

                                            </td>
                                            <td className="px-6 py-4 border-t-2 "><button type='button' onClick={() => deletekitFunction(kit.id)} className="bg-red text-white py-2 px-4 m-2 rounded hover:bg-black hover:text-orange duration-500" >Apagar</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </div>

        </div>
    )
}

export default KitsLista