import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import api from '../../services/api';
import { 
  MainContainer, 
  ContentArea, 
  Banner, 
  SupportCard, 
  ContactGrid,
  ContactForm,
  InfoBox,
  StatusMessage,
} from './styles';

export default function AjudaSuporte() {
  const [msgData, setMsgData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });
  const [enviando, setEnviando] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMsgData(prev => ({ ...prev, [name]: value }));
  };

  const handleSend = async (e) => {
    e.preventDefault();

    if (!msgData.nome || !msgData.email || !msgData.mensagem) {
      setStatus({ tipo: 'erro', texto: 'Preencha nome, e-mail e a mensagem antes de enviar.' });
      return;
    }

    setStatus(null);
    setEnviando(true);
    try {
      await api.post('/suporte', msgData);
      setStatus({ tipo: 'ok', texto: 'Sua mensagem foi enviada! Responderemos em breve.' });
      setMsgData({ nome: '', email: '', telefone: '', mensagem: '' });
    } catch (err) {
      console.error('Erro ao enviar mensagem de suporte:', err);
      setStatus({ tipo: 'erro', texto: 'Não foi possível enviar sua mensagem. Tente novamente.' });
    } finally {
      setEnviando(false);
    }
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
                  value={msgData.nome}
                  onChange={handleChange}
                />
                <input 
                  name="email"
                  placeholder="E-mail" 
                  value={msgData.email}
                  onChange={handleChange}
                />
                <input 
                  name="telefone"
                  placeholder="(99) 9999-9999" 
                  value={msgData.telefone}
                  onChange={handleChange}
                />
              </div>

              <div className="message-area">
                <label>Mensagem:</label>
                <textarea 
                  name="mensagem"
                  rows="8"
                  value={msgData.mensagem}
                  onChange={handleChange}
                />
              </div>

              {status && <StatusMessage tipo={status.tipo}>{status.texto}</StatusMessage>}

              <button type="submit" disabled={enviando}>
                {enviando ? 'Enviando...' : 'Enviar'}
              </button>
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