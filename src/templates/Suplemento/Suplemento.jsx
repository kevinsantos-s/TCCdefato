import React from 'react'
import './Suplemento.css'
import { Link } from 'react-router-dom';
import suplementoA from '../../assets/suplemento-1.png'
import suplementoB from '../../assets/suplemento-2.png'
import suplementoC from '../../assets/suplemento-3.png'
 
 
const Suplemento = () => {
  const cards = [
    {
      imagem: suplementoA,
      titulo: 'SuplementoA',
      descricao: 'Suplemento alimentar para auxiliar uma vida mais saudável.',
    },
    {
      imagem: suplementoB,
      titulo: 'SuplementoB',
      descricao: 'Suplemento alimentar para auxiliar uma vida mais saudável.',
    },
    {
      imagem: suplementoC,
      titulo: 'Suplemento C',
      descricao: 'Suplemento alimentar para auxiliar uma vida mais saudável.',
    },
  ];
 
  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.imagem} alt={card.titulo} className="w-full " />
          <div className="card-body">
            <h2 className="card-title">{card.titulo}</h2>
            <p className="card-description">{card.descricao}</p>
            <Link to={'/Produto'} className="comprar-btn">Peça já</Link>
          </div>
        </div>
      ))}
    </div>
  );
};
import './Suplemento.css'
 
export default Suplemento