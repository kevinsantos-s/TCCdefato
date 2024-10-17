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
            window.alert("Kit criado!")
        )
    }

    return (
        <div className="flex w-full bg-grey">
            <Sidebar />
            <div className=" shadow-black drop-shadow-xl w-full">
                <div className=" container flex flex-col w-full justify-items-center">
                <Header
                    goto={'/kit'}
                    title={'Novo Kit'}
                />
                <section className="h-[45%]  w-full p-2 bg-white flex flex-col justify-items-center  align-center  rounded-bl-xl rounded-br-xl">
                    <form className="flex-row gap-3" onSubmit={handleSubmit}>
                        <div className="ml-2 flex flex-col gap-3  m-2">
                            <div className=" flex gap-8 md-2">
                            <div className="flex flex-col">
                            <label htmlFor="inputNome" className="form-labe  text-lg font-semibold pt-2 mb-2">Nome</label>
                            <input type="text" className="w-[450px]  p-3 border rounded-lg" id="inputNome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="inputPreco" className="form-labe  text-lg font-semibold pt-2 mb-2">Preço</label>
                            <input type="text" className="w-[325px]  p-3 border rounded-lg" id="inputPreco" value={preco} onChange={(e) => setPreco(e.target.value)} />
                        </div>
                            </div>

                        

                        <div className="flex flex-col">
                            <label htmlFor="inputDescricao" className="form-labe  text-lg font-semibold pt-2 mb-2">Descrição</label>
                            <textarea rows={5} className="w-[54%]  p-3 border rounded-lg" id="inputDescricao" value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="inputProdutos" className="form-labe  text-lg font-semibold pt-2 mb-2">Produtos</label>
                            <input type="text" className="w-[54%]  p-3 border rounded-lg" id="inputProdutos" value={produtos} onChange={(e) => setProdutos(e.target.value)}/>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="inputFoto" className="form-labe  text-lg font-semibold pt-2 mb-2">Foto</label>
                            <input type="file" className="w-[54%]  p-3 border rounded-lg" id="inputFoto" accept="image/*" value={foto} onChange={(e) => setFoto(e.target.value)}/>
                        </div>
                        </div>
                        <div className="flex justify-start">
                        <div className="col-12">
                            <button type="submit" className="bg-orange text-black m-2 py-2 px-4 rounded   hover:bg-black hover:text-orange duration-500">
                                Gravar
                            </button>
                        </div>
                        </div>
                    </form>
                </section>
            </div>
            </div>
        </div>
    )
}

export default KitNovo