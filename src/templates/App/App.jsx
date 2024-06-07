import { useState } from 'react'
import About from '../About/About';
import Contato from '../Contato/Contato';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import Inicio from '../Inicio/Inicio';
import Suplemento from '../Suplemento/Suplemento'


function App() {
    const [count, setCount] = useState(0)
    
    return(
  <div>
    <Navbar/>
    <Inicio/>
    <Suplemento/>
    <About/>
    <Contato/>
    <Footer/>
    
  </div>
  
    )
}

export default App;
