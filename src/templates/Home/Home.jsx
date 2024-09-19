import { Link } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Sidebar from '../../Components/Menu/Sidebar'


const Home = () => {

    return (
        //<div className="d-flex">
        //  <div className="p-3 w-100">
        
        <div className="d-flex">
           <Sidebar />
           <div className="p-3 w-100">
                <Header 
                    goto={'/home'}
                    title={'Home'}
                    />
                <h2>Conteúdo Home</h2>
           </div>
        </div>
    )
}

export default Home