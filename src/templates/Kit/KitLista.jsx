import { Link, useNavigate } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Sidebar from '../../Components/Menu/Sidebar'
import { useState } from "react"
import { useEffect } from "react"
import { deletarKit, listarKit } from "../../common/services/Service"

import axios from 'axios';
import API from "../../common/services/api"




const KitsLista = () => {
    const navigate = useNavigate();
    const goTo = () => {
        navigate('/kiteditar')
    }
    const [kits, setKits] = useState([]);

    useEffect(() => {
        async function getKit() {
            const data = await listarKit()
            setKits(data)
        }
        getKit();
    }, []);
    
    const deletekitFunction = (id) =>{
        deletarKit(id).then(()=>{
            console.log("foi");
        }).catch((error)=>{
            console.log("NAO FOI, VOCE TINHA RAZAO " + error)
        })
    }
        

    return (
        <div className="flex flex-row">
        <div className="flex flex-row" >
            <Sidebar />
            <div className="w-full">
                <Header
                    goto={'/kit'}
                    title={'Lista de Kits'}

                />
                <section className="relative overflow-x-auto">
                    <div >
                        <table  className="w-[100%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-black bg-grey uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr scope="col" className="px-6 py-3">
                                    <th scope="col" className="px-6 py-3">ID</th>
                                    <th scope="col" className="px-6 py-3">Nome</th>
                                    <th scope="col" className="px-6 py-3">Descrição</th>
                                    <th scope="col" className="px-6 py-3">Código</th>
                                    <th scope="col" className="px-6 py-3">Preço</th>
                                    <th scope="col" className="px-6 py-3">Status</th>
                          
                                    <th scope="col" className="px-6 py-3">Abrir</th>
                                    <th scope="col" className="px-6 py-3">Excluir</th>
                                </tr>
                            </thead>
                            <tbody className="relative">
                                {kits?.map((kit) => (
                                    <tr scope="row" className="px-6 py-4 border-t-2 font-medium text-gray-900 whitespace-nowrap dark:text-white" key={kit.id}>
                                        <td className="px-6 py-4 border-t-2 " >{kit.id}</td>
                                        <td className="px-6 py-4 border-t-2 ">{kit.nome}</td>
                                        <td className="px-6 py-4 border-t-2 ">{kit.descricao}</td>
                                        <td className="px-6 py-4 border-t-2 ">{kit.codigo}</td>
                                        <td className="px-6 py-4 border-t-2 ">{kit.preco}</td>
                                        <td className="px-6 py-4 border-t-2 ">{kit.statusKit}</td>
                                     
                                        <td className="px-6 py-4 border-t-2 ">
                                        <Link to={"/kiteditar"}><button type="button"
                                                className="bg-orange text-white py-2 px-4 rounded hover:bg-black hover:text-orange duration-500">
                                               
                                                Abrir
                                            </button>
                                            </Link>

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