import React from 'react'
import './About.css'
import aboutImage from '../../assets/sobre2.png'

const About = () => {
  return (
    <div className="about-kitfit" id="aboutscroll">
      <div className="sobre">
      <img src={aboutImage} alt="Sobre a KITFIT" className="about-image" />
      <div className="sobre2">
      <h4>SOBRE A KITFIT</h4>
      <h2>Nutrindo hoje os atletas de amanhã</h2>
      <p className="textolegal">A KITFIT desenvolve kits de suplementos para diferentes objetivos de saúde, como aumento de energia, suporte imunológico e gerenciamento de peso. A empresa garante eficácia e segurança, oferecendo suporte e orientação personalizados. A KITFIT se compromete com a qualidade dos seus suplementos e práticas sustentáveis, utilizando embalagens recicláveis e realizando testes rigorosos para garantir pureza e eficácia. A empresa promove saúde e sustentabilidade.
      </p>
      </div>
      </div>
</div>
  )
}

export default About
