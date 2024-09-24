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
            <div className="w-full">
                <Header
                    goto={'/usuario'}
                    title={'Lista de Usuarios'}

                />
                <section className="m-2 p-2 shadow-lg">
                    <div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Acesso</th>
                                    <th scope="col">Cadastro</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Abrir</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarios?.map((usuario) => (
                                    <tr key={usuario.id}>
                                        <td scope="row">{usuario.id}</td>
                                        <td>{usuario.nome}</td>
                                        <td>{usuario.email}</td>
                                        <td>{usuario.nivelAcesso}</td>
                                        <td>{usuario.dataCadastro}</td>
                                        <td>{usuario.statusUsuario}</td>
                                        <td>
                                            <button type="button"
                                                className="bg-orange text-white py-2 px-4 rounded md:ml-8  hover:bg-white hover:text-orange duration-500">
                                                {/* <i className="bi bi-envelope-open me-2"></i> */}
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

export default UsuariosLista