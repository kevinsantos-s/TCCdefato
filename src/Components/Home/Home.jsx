import React from 'react'
import './Home.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Home = () => {
  return (
    <div className='home container'>
      <div className="home-text">
        <h1>Nós garantimos os melhores suplementos para a melhor performance</h1>
        <p>Nossos kit's suplementais foram montados perfeitamente para você</p>
        <button className='btn'>Saiba mais <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Home
