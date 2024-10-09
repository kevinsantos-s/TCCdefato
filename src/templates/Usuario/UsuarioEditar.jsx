import { Link, useParams } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Sidebar from '../../Components/Menu/Sidebar'
import { useRef, useState } from "react";
import UsuarioService from "../../services/UsuarioService";

const UsuarioEditar = () => {
    const { id } = useParams();
    const _dbRecords = useRef(true);

    const initialObjectState = {
        id: null,
        nome: "",
        email: "",
        senha: "",
        nivelAcesso: "",
        foto: null,
        dataCadastro: "",
        statusUsuario: ""
    };
    const [usuario, setUsuario] = useState(initialObjectState);
    const [message, setMessage] = useState();
    const [successful, setSuccessful] = useState(false);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUsuario(usuario => ({ ...usuario, [name]: value }));
    }

    useEffect(() => {
        if (_dbRecords.current) {
            UsuarioService.findById(id)
                .then(response => {
                    const usuario = response.data;
                    setUsuario(usuario);
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

        UsuarioService.alterar(id, usuario).then(
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
                    goto={'/usuario'}
                    title={'Editar Usuário'}
                />
                <section className="m-2 p-2 shadow-lg">
                    <form className="flex-row gap-3" onSubmit={handleSubmit}>
                        <div className="flex-col md-2">
                            <label htmlFor="inputID" className="form-label">ID</label>
                            <input type="text" className="form-control p-3 border rounded-lg" id="inputID" readOnly
                            defaultValue={usuario.id} />
                        </div>
                        <div className="flex-col md-5">
                            <label htmlFor="inputNome" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="inputNome" 
                            defaultValue={nome.id} />
                        </div>
                        <div className="flex-col md-5">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" 
                            defaultValue={email.id} />
                        </div>

                        <div className="flex-col md-4">
                            <label htmlFor="inputData" className="form-label">Data de Cadastro</label>
                            <input type="text" className="form-control" id="inputData" readOnly 
                            defaultValue={dataCadastro.id} />
                        </div>
                        <div className="flex-col md-4">
                            <label htmlFor="inputStatus" className="form-label">Status</label>
                            <input type="text" className="form-control" id="inputStatus" readOnly 
                             defaultValue={statusUsuario.id}/>
                        </div>
                        <div className="flex-col md-4">
                            <label htmlFor="inputAcesso" className="form-label">Acesso</label>
                            <select id="inputAcesso" className="form-select">
                                <option selected>Nível de Acesso</option>
                                <option>...</option>
                            </select>
                        </div>

                        <div className="col-12">
                            <button type="submit" className="bg-orange text-black m-2 py-2 px-4 rounded md:ml-8  hover:bg-black hover:text-orange duration-500">
                                Gravar
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default UsuarioEditar