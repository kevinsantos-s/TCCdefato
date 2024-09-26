import { Link, useNavigate } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Sidebar from '../../Components/Menu/Sidebar'
import { useState } from "react"
import { useEffect } from "react"
import UsuarioService from "../../services/UsuarioService"
import { listarUsuario } from "../../common/services/Service"
 
const UsuariosLista = () => {
    const navigate = useNavigate();
    const goTo = () => {
        navigate('/usuarioler')
    }
    const [usuarios, setUsuarios] = useState([]);
 
    useEffect(() => {
        async function getUsuario() {
            const data = await listarUsuario()
            setUsuarios(data)
        }
        getUsuario();
    }, [])
 
    return (
        <div className="flex flex-row">
        <div className="flex flex-row" >
            <Sidebar />
            <div className=" md:w-full">
                <Header
                    goto={'/usuario'}
                    title={'Lista de Usuarios'}
 
                />
                <section className="m-2 p-2 shadow-lg">
                    <div className="relative">
                        <table className="text-left ">
                            <thead className="">
                                <tr>
                                    <th className="">ID</th>
                                    <th className="">Nome</th>
                                    <th className="">Email</th>
                                    <th className="">Acesso</th>
                                    <th className="">Cadastro</th>
                                    <th className="">Status</th>
                                    <th className="">Abrir</th>
                                </tr>
                            </thead>
                            <tbody className=" relative ">
                                {usuarios?.map((usuario) => (
                                    <tr className="" key={usuario.id}>
                                        <td className="">{usuario.id}</td>
                                        <td className="">{usuario.nome}</td>
                                        <td className="">{usuario.email}</td>
                                        <td className="">{usuario.nivelAcesso}</td>
                                        <td className="">{usuario.dataCadastro}</td>
                                        <td className="">{usuario.statusUsuario}</td>
                                        <td className="">
                                            <Link to={"/usuarioeditar"}><button type="button"
                                                className="bg-orange text-white py-2 px-4 rounded   hover:bg-black hover:text-orange duration-500">
                                               
                                                Abrir
                                            </button>
                                            </Link>
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
 
export default UsuariosLista