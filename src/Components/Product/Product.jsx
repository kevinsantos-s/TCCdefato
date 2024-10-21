import suplementoA from '../../assets/suplemento-1.png'
import { Link } from 'react-router-dom';
import Navbar2 from '../Navbar/navbar2';
 
const Produto = () =>{
    return(
      <div className='  bg-grey'>
        <div className=' '>
        <Navbar2/>
        <div className='bg-grey'>
        <section className="mt-20 p-2 bg-white rounded-bl-xl rounded-br-xl">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
     <img src={suplementoA} className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" alt="" />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
       
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Combo Simples</h1>
        <div className="flex mb-4">
        </div>
        <p className="leading-relaxed">
        O combo de suplemento energético inclui Vitamina C, Ômega 3 e um Multivitamínico. A Vitamina C fortalece o sistema imunológico e melhora a saúde da pele. O Ômega 3 é anti-inflamatório e beneficia o coração e o cérebro. O Multivitamínico oferece vitaminas e minerais essenciais, promovendo energia e recuperação. Indicado para pessoas ativas, deve ser tomado diariamente, preferencialmente com refeições, para melhor absorção.</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
           
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">$158.00</span>
          <Link to={"/"} className=""><button className="bg-orange text-black ml-96 py-2 px-4 rounded  hover:bg-black hover:text-orange duration-500">Voltar</button></Link>
        </div>
        <p className='leading-relaxed mt-4 border-t-2'>Este produto não é assinavel pelo web, somente pelo nosso aplicativo mobile.</p>
      </div>
    </div>
  </div>
</section>
</div>
</div>
</div>
    )
}
 
export default Produto;