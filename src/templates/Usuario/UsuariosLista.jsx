import { Link, useNavigate } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Sidebar from '../../Components/Menu/Sidebar'
import { useState } from "react"
import { useEffect } from "react"
import UsuarioService from "../../services/UsuarioService"
import { listarUsuario } from "../../common/services/Service"
import { deletarusuario } from "../../common/services/Service"

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

    const deleteusuarioFunction = (id) =>{
        deletarusuario(id).then(()=>{
            console.log("foi");
        }).catch((error)=>{
            console.log("NAO FOI, VOCE TINHA RAZAO " + error)
        })
    }


    return (
        <div className="flex flex-row">
        <div className="flex flex-row" >
            <Sidebar />
            <div className="">
                <Header
                    goto={'/    '}
                    title={'Lista de Usuarios'}

                />
<div className="relative overflow-x-auto">
    <table className="w-[100%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-black bg-grey uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr scope="col" className="px-6 py-3">
                <th scope="col" className="px-6 py-3">
                    ID
                </th>
                <th scope="col" className="px-6 py-3">
                    Nome
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Acesso
                </th>
                <th scope="col" className="px-6 py-3">
                    Cadastro
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Abrir
                </th>
            </tr>
        </thead>
        <tbody className=" relative ">
                                {usuarios?.map((usuario) => (
                                    <tr className="" key={usuario.id}>
                                        <th scope="row" className="px-6 py-4 border-t-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{usuario.id}</th>
                                        <td className="px-6 py-4 border-t-2 ">{usuario.nome}</td>
                                        <td className="px-6 py-4 border-t-2 ">{usuario.email}</td>
                                        <td className="px-6 py-4 border-t-2 ">{usuario.nivelAcesso}</td>
                                        <td className="px-6 py-4 border-t-2 ">{usuario.dataCadastro}</td>
                                        <td className="px-6 py-4 border-t-2 ">{usuario.statusUsuario}</td>
                                        <td className="px-6 py-4 border-t-2 ">
                                            <Link to={"/usuarioeditar"}><button type="button"
                                                className="bg-orange text-white py-2 px-4 rounded hover:bg-black hover:text-orange duration-500">
                                               
                                                Abrir
                                            </button>
                                            </Link>
                                        </td>
                                        <td className="px-6 py-4 border-t-2 "><button type='button' onClick={() => deleteusuarioFunction(usuario.id)} className="bg-red text-white py-2 px-4 m-2 rounded hover:bg-black hover:text-orange duration-500" >Apagar</button></td>
                                    </tr>
                                ))}
                            </tbody>
    </table>
</div>
            </div>
        </div>
        </div>
    )
}

export default UsuariosLista