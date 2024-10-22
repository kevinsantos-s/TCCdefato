import { Link, useNavigate } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Sidebar from '../../Components/Menu/Sidebar'
import { useState } from "react"
import { useEffect } from "react"
import UsuarioService from "../../services/UsuarioService.js"
import { listarUsuario, deletarUsuario } from "../../common/services/Service"


const UsuariosLista = () => {
    const navigate = useNavigate();

    const goTo = (id) => {
        navigate(`/usuarioeditar/${id}`)

    }
    const [usuarios, setUsuarios] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); // Estado para armazenar o termo de busca


    useEffect(() => {
        async function getUsuario() {
            const data = await listarUsuario()
            setUsuarios(data)
        }
        getUsuario();
    }, [])

    const deleteusuarioFunction = (id) => {
        deletarUsuario(id).then(() => {
            window.alert("Usuário excluido!")
        }).catch((error) => {
            console.log("NAO FOI, VOCE TINHA RAZAO " + error)
        })
    }

    // Função para filtrar os usuários pelo nome
    const filteredUsuarios = usuarios.filter((usuario) =>
        usuario.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const goToAssinatura = async (emailUsu) => {
        try {
            const response = await fetch(`/assinatura/buscarAssinaturaUsuario/${emailUsu}`);
            if (!response.ok) {
                throw new Error('Erro ao buscar assinatura');
            }
            const assinatura = await response.json();
            console.log(assinatura); // Aqui você pode exibir a assinatura ou redirecionar para uma nova página
        } catch (error) {
            console.error('Erro:', error);
        }
    };
    

    return (
        <div className="flex bg-grey flex-row">

            <Sidebar />
            <div className="shadow-black drop-shadow-xl w-full">
                
                <div className="container flex flex-col w-full justify-items-center">
                    <Header
                        goto={'/usuario'}
                        title={'Lista de Usuarios'}


                    />
                    <div className="flex justify-center my-4">
                        <input
                            type="text"
                            placeholder="Buscar usuário por nome"
                            className="border p-2 rounded"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            </div>

                    {/* Campo de busca */}
                    
                    
                    <div className="h-[45%] w-full p-2 bg-white flex flex-col justify-items-center  align-center rounded-bl-xl rounded-br-xl">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-black uppercase w-full bg-white dark:bg-gray-700 dark:text-gray-400">
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
                                        <th scope="col" className="px-10 py-3">
                                            Assinatura
                                        </th>
                                        <th scope="col" className="px-10 py-3">
                                            Apagar
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="relative">
                            {filteredUsuarios.map((usuario) => (
                                        <tr className="" key={usuario.id}>
                                            <th scope="row" className="px-6 py-4 border-t-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{usuario.id}</th>
                                            <td className="px-6 py-4 border-t-2 ">{usuario.nome}</td>
                                            <td className="px-6 py-4 border-t-2 ">{usuario.email}</td>
                                            <td className="px-6 py-4 border-t-2 ">{usuario.nivelAcesso}</td>
                                            <td className="px-6 py-4 border-t-2 ">{usuario.dataCadastro}</td>
                                            <td className="px-6 py-4 border-t-2 ">{usuario.statusUsuario}</td>
                                            <td className="px-6 py-4 border-t-2 ">
                                                <button type="button" onClick={() => goTo(usuario.id)}
                                                    className="bg-orange text-white py-2 px-4 rounded hover:bg-black hover:text-orange duration-500">
                                                    Abrir
                                                </button>

                                                <button type="button" onClick={() => goTo(usuario.email)}
                                                    className="bg-orange text-white py-2 px-4 rounded hover:bg-black hover:text-orange duration-500">
                                                    Assinatura
                                                </button>

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