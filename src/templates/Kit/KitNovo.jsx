import { Link, Navigate } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Sidebar from '../../Components/Menu/Sidebar'
import { useEffect, useRef, useState } from "react"
import KitService from "../../services/KitService"
import ImageUploaderModal from "../../Components/ImageUploader/ImageUploaderModal"

const Kit_Novo = () => {

    const _dbRecords = useRef(true);
    const [file, setFile] = useState("");
    const [formData, setFormData] = useState({});
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState();

    const [chosenImage, setChosenImage] = useState();

    const setChosenFile = (dataFile) => {
        setFile(dataFile);
    }

    const setImage = (dataImage) => {
        setChosenImage(dataImage);
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(formData => ({ ...formData, [name]: value }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessful(false);

        ProdutoService.createComFoto(file, formData).then(
            (response) => {
                setMessage(response.data.message);
                setSuccessful(true);
            }, (error) => {
                const message = error.response.data.message;
                setMessage(message);
            }
        )
    }

    document.title = 'KIT FIT';

    return (
        <div className="flex w-full bg-grey">
            <Sidebar />
            <div className="shadow-black drop-shadow-xl w-full">
                <div className="container flex flex-col w-full justify-items-center">
                <Header
                    goto={'/kit'}
                    title={'Novo Kit'}
                />
                <section className="h-[45%]  w-full p-2 bg-white flex flex-col justify-items-center  align-center  rounded-bl-xl rounded-br-xl">
                    <form className="flex-row gap-3" onSubmit={handleSubmit}>
                        {!successful && (
                            <>
                            <div className="ml-2 flex flex-col gap-3  m-2">
                            <div className="flex gap-8 md-2">
                                <div className="flex flex-col">
                                    <label htmlFor="inputNome" className="form-labe  text-lg font-semibold pt-2 mb-2">Nome</label>
                                    <input type="text" className="w-[450px]  p-3 border rounded-lg" id="inputNome"
                                        name="nome"
                                        value={formData.nome || ""}
                                        onChange={handleChange} />
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="inputPreco" className="form-labe  text-lg font-semibold pt-2 mb-2">Preço</label>
                                    <input type="text" className="w-[325px]  p-3 border rounded-lg" id="inputPreco"
                                        name="preco"
                                        value={formData.preco || ""}
                                        onChange={handleChange} />
                                </div>
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="inputDesc" className="form-labe  text-lg font-semibold pt-2 mb-2">Descrição:</label>
                                    <textarea rows={5} className="w-[54%]  p-3 border rounded-l" id="inputDesc"
                                        name="descricao"
                                        value={formData.descricao || ""}
                                        onChange={handleChange} >
                                    </textarea>
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="inputProdutos" className="form-labe  text-lg font-semibold pt-2 mb-2">Produtos</label>
                                    <input type="text" className="w-[54%]  p-3 border rounded-lg" id="inputProdutos"
                                     name="produtos"
                                     value={formData.produtos || ""} 
                                     onChange={handleChange} />
                                </div>

                                <div className="flex flex-col md-12">
                                    <ImageUploaderModal
                                        setFile={setChosenFile}
                                        setImage={setImage}
                                        chosenImage={chosenImage} />
                                </div>

                                <div className="-12 my-2">
                                    <button type="Submit" className="bg-orange text-black m-2 py-2 px-4 rounded   hover:bg-black hover:text-orange duration-500">
                                        Gravar
                                    </button>
                                </div>
                                </div>
                            </>
                            
                        )}
                        {message && (
                            <div className="m-1">
                                <div className={
                                    "text-center h4 fst-italic py-4 rounded-2 border border-5 " + (successful ? "border-success" : "border-danger")
                                }>
                                    {message}
                                </div>
                            </div>
                            
                        )}
                        
                    </form>
                    
                </section>
            </div>
            </div>
        </div>
    )
}

export default Kit_Novo;