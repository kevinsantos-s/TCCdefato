import { Link, useNavigate } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Sidebar from '../../Components/Menu/Sidebar'
import { useState } from "react"
import { useEffect } from "react"
import { listarKit } from "../../common/services/Service"

const KitsLista = () => {
    const navigate = useNavigate();
    const goTo = () => {
        navigate('/kitler')
    }
    const [kits, setKits] = useState([]);

    useEffect(() => {
        async function getKit() {
            const data = await listarKit()
            setKits(data)
        }
        getKit();
    }, [])

    return (
        <div className="flex flex-row">
        <div className="flex flex-row" >
            <Sidebar />
            <div className="w-full">
                <Header
                    goto={'/kit'}
                    title={'Lista de Kits'}

                />
                <section className="m-2 p-2 shadow-lg ">
                    <div >
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Código</th>
                                    <th scope="col">Preço</th>
                                    <th scope="col">Categoria</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Abrir</th>
                                </tr>
                            </thead>
                            <tbody>
                                {kits?.map((kit) => (
                                    <tr key={kit.id}>
                                        <td scope="row">{kit.id}</td>
                                        <td>{kit.nome}</td>
                                        <td>{kit.codigo}</td>
                                        <td>{kit.preco}</td>
                                        <td>{kit.statusKit}</td>
                                        <td>
                                            <button type="button"  onClick={() => goTo()}
                                                className="bg-orange text-white py-2 px-4 rounded md:ml-8  hover:bg-white hover:text-orange duration-500">
                                                Abrir
                                            </button>
                                        </td>
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