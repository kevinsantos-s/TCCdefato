import { Link, useParams } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Sidebar from '../../Components/Menu/Sidebar'
import { useEffect, useRef, useState } from "react"
import UsuarioService from "../../services/UsuarioService.js";


const UsuarioEditar = () => {
 
    const objectValues = {
        id: null,
        nome: "",
        email: "",
        senha: "",
        nivelAcesso: "",
        foto: null,
        dataCadastro: "",
        statusUsuario: ""
    };
    const [usuario, setUsuario] = useState(objectValues);
 
    const { id } = useParams();
    const _dbRecords = useRef(true);
    const [formData, setFormData] = useState({});
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState();
 
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUsuario(usuario => ({ ...usuario, [name]: value }));
    }

    useEffect(() => {
        UsuarioService.findById(id).then(
            (response) => {
                const usuario = response.data;
                setUsuario(usuario);
            }
        ).catch((error) => {
            console.log(error);
        })
    }, []);

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
        <div className="p-3 w-100">
            <Header
                goto={'/usuario'}
                title={'Editar Usuário'}
            />
            <section className="h-[50%] p-2 bg-grey justify-center align-center shadow-lg">
                {!successful && (
                    <>
                        <form className="row g-3" onSubmit={handleSubmit}>

                        <div className="flex-col md-2">
                            <label htmlFor="inputID" className="form-label">ID</label>
                            <input type="text" className="form-control p-3 border rounded-lg" id="inputID" readOnly
                              name="id"
                              value={usuario.id || ""} 
                              />
                        </div>

                        <div className="flex-col md-5">
                            <label htmlFor="inputNome" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="inputNome" 
                             name="nome"
                             value={usuario.nome || ""}
                             onChange={handleChange} />
                        </div>

                        <div className="flex-col md-5">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" 
                              name="email"
                              value={usuario.email || ""} />
                        </div>

                        <div className="flex-col md-4">
                            <label htmlFor="inputData" className="form-label">Data de Cadastro</label>
                            <input type="text" className="form-control" id="inputData" readOnly 
                                  name="dataCadastro"
                                  value={usuario.dataNascimento || ""}  
                                  onChange={handleChange} />  
                        </div>

                        <div className="flex-col md-4">
                            <label htmlFor="inputStatus" className="form-label">Status</label>
                            <input type="text" className="form-control" id="inputStatus" readOnly 
                                name="statusUsuario"
                                value={usuario.statusUsuario || ""} />
                        </div>

                        <div className="flex-col md-4">
                            <label htmlFor="inputAcesso" className="form-label">Acesso</label>
                            <select id="inputAcesso" className="form-select">
                                <option selected>Nível de Acesso</option>
                                <option>...</option>
                            </select>
                        </div>
                        
                        <div className="col-12">
                                    <button type="submit" className="btn btn-primary">
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
    )
}

export default UsuarioEditar