import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { 
  MainContainer, 
  ContentArea, 
  Banner, 
  SupportCard, 
  ContactGrid,
  ContactForm,
  InfoBox 
} from './styles';

export default function AjudaSuporte() {
  const [msgData, setMsgData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMsgData(prev => ({ ...prev, [name]: value }));
  };

  const handleSend = (e) => {
    e.preventDefault();
    console.log("Mensagem de suporte:", msgData);
    alert("Sua mensagem foi enviada! Responderemos em breve.");
  };

  return (
    <MainContainer>
      <Sidebar />
      <ContentArea>
        <Banner>
          <h1>Como podemos te ajudar?</h1>
        </Banner>

        <SupportCard>
          <h2>Fale Conosco:</h2>
          
          <ContactGrid>
            <ContactForm onSubmit={handleSend}>
              <div className="input-group">
                <input 
                  name="nome"
                  placeholder="Nome Completo" 
                  onChange={handleChange}
                />
                <input 
                  name="email"
                  placeholder="E-mail" 
                  onChange={handleChange}
                />
                <input 
                  name="telefone"
                  placeholder="(99) 9999-9999" 
                  onChange={handleChange}
                />
              </div>

              <div className="message-area">
                <label>Mensagem:</label>
                <textarea 
                  name="mensagem"
                  rows="8"
                  onChange={handleChange}
                />
              </div>

              <button type="submit">Enviar</button>
            </ContactForm>

            <InfoBox>
              <h3>Informações de contato:</h3>
              <p><strong>Email:</strong> sistemaredistribuicao@gmail.com</p>
            </InfoBox>
          </ContactGrid>
        </SupportCard>
      </ContentArea>
    </MainContainer>
  );
}