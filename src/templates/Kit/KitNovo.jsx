import { Link } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Sidebar from '../../Components/Menu/Sidebar'
import { useState } from "react"
import { criarKit } from "../../common/services/Service"


const KitNovo = () => {
    const [nome, setNome ] = useState('');
    const [preco, setPreco ] = useState('');
    const [descricao, setDescricao ] = useState('');
    const [produtos, setProdutos ] = useState('');
    const [foto, setFoto ] = useState('');

    const novoKit = { nome, preco, descricao, produtos, foto}
    
    const handleSubmit = async ()=>{
        console.log(novoKit);
        criarKit(novoKit).then(
            console.log("FOI")
        )
    }

    return (
        <div className="flex">
            <Sidebar />
            <div className=" w-full">
                <Header
                    goto={'/kit'}
                    title={'Novo Kit'}
                />
                <section className="m-2 p-2">
                    <form className="flex-row gap-3">

                        <div className="flex flex-col">
                            <label htmlFor="inputNome" className="form-label text-lg font-semibold mb-2">Nome</label>
                            <input type="text" className="form-control p-3 border rounded-lg" id="inputNome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="inputPreco" className="form-label text-lg font-semibold mb-2">Preço</label>
                            <input type="text" className="form-control p-3 border rounded-lg" id="inputPreco" value={preco} onChange={(e) => setPreco(e.target.value)} />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="inputDescricao" className="form-label text-lg font-semibold mb-2">Descrição</label>
                            <textarea rows={5} className="form-control p-3 border rounded-lg" id="inputDescricao" value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="inputProdutos" className="form-label text-lg font-semibold mb-2">Produtos</label>
                            <input type="text" className="form-control p-3 border rounded-lg" id="inputProdutos" value={produtos} onChange={(e) => setProdutos(e.target.value)}/>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="inputFoto" className="form-label text-lg font-semibold mb-2">Foto</label>
                            <input type="file" className="form-control p-3 border rounded-lg" id="inputFoto" accept="image/*" value={foto} onChange={(e) => setFoto(e.target.value)}/>
                        </div>

                        <div className="flex justify-start">
                            <button type="submit" onClick={handleSubmit} className="bg-orange text-white mt-6 py-3 px-6 rounded-lg shadow hover:bg-black hover:text-orange duration-300">
                                Gravar
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default KitNovo