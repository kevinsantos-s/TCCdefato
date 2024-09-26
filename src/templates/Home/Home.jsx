import { Link } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Sidebar from '../../Components/Menu/Sidebar'


const Home = () => {

    return (
        <div className="flex">
         <div className="w-full">
        
        <div className="flex">
           <Sidebar />
           <div className="p-3 w-screen">
                <Header 
                    goto={'/'}
                    title={'Home'}
                    />
                <h2>Conteúdo Home</h2>
           </div>
        </div>
        </div>
        </div>
    )
}

export default Home