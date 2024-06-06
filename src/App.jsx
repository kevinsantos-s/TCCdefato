import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Suplemento from './Components/Suplemento/Suplemento'
import About from './Components/About/About'
import Contato from './Components/Contato/Contato'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Suplemento/>
      <About/>
      <Contato/>
      <Footer/>
    </div>
  )
}

export default App
