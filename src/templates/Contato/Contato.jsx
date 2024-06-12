import React from 'react'
import './Contato.css'
import msg_icon from '../../assets/msg_ICON.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contato = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Enviando...");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "8b0cd863-810c-4a9a-9c69-3534a14f3dbc");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Mensagem enviada com sucesso!");
        event.target.reset();
        event.target.reset();

      } else {
        console.log("Erro", data);
        setResult(data.message);
      }
    };

  return (
    <div className="contato-container" id="contatoscroll">
    <div className="contato-heading">
        <h2>Contate-nos</h2>
        <h3>Entrar em contato</h3>
    </div>
    <div className='contato'>
        <div className="contato-col">
            <h3>Mande uma mensagem<img src={msg_icon} alt="" /></h3>
            <p>Sinta-se à vontade para entrar em contato através do formulário de contato ou encontrar ou entrar em contato abaixo. Seus comentários, sugestões e perguntas são importantes para nós, pois nos esforçamos para fornecer um serviço excepcional.</p>
            <ul>
                <li><img src={mail_icon} alt="" />contactkitfitdevs@gmail.com</li>
                <li><img src={phone_icon} alt="" />11 96182-8095</li>
                <li><img src={location_icon} alt="" />Av. Vinte e Seis de Março, 701<br/> Centro, Barueri - SP, 06401-050</li>
            </ul>
        </div>
        <div className="contato-col">
            <form onSubmit={onSubmit}>
                <label>Seu nome</label>
                <input type="text" name='name' placeholder="Insira seu nome" required></input>
                <label>Telefone</label>
                <input type="tel" name='phone' placeholder="Insira seu telefone" required></input>
                <label>Escreva sua mensagem aqui</label>
                <textarea name="message" rows="6" placeholder="Escreva sua mensagem" required></textarea>
                <button type='submit' className='btn-enviar'>Enviar <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
    </div>
  )
}

export default Contato
