import React, { useState } from 'react';
import { Users, Handshake, Globe, Send, ShieldCheck } from 'lucide-react';
import Sidebar from '../../components/sidebar/Sidebar';
import { 
  MainLayout, Container, Banner, Content, InfoGrid, 
  InfoCard, ActionSection, PartnerForm, SectionHeader,
  Badge
} from './styles';

export default function Parceiros() {
  const [formData, setFormData] = useState({ nome: '', email: '', proposta: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <MainLayout>
      <Sidebar />
      <Container>
        <Banner>
          <div className="overlay">
            <Badge>Expansão Nacional</Badge>
            <h1>Seja um Parceiro WOLF</h1>
            <p>Conectando docentes do Magistério Superior e EBTT em todo o Brasil</p>
          </div>
        </Banner>

        <Content>
          <InfoGrid>
            <InfoCard>
              <div className="icon-box"><Users size={28} /></div>
              <h3>Rede de Indicação</h3>
              <p>Fortaleça a comunidade docente indicando colegas que buscam redistribuição para novas IFES.</p>
            </InfoCard>

            <InfoCard>
              <div className="icon-box"><Globe size={28} /></div>
              <h3>Mapeamento Nacional</h3>
              <p>Colabore no mapeamento de vagas ociosas e oportunidades de permuta em institutos federais.</p>
            </InfoCard>

            <InfoCard>
              <div className="icon-box"><Handshake size={28} /></div>
              <h3>Ponto de Contato</h3>
              <p>Torne-se uma referência na sua instituição para agilizar trâmites de remoção e suporte local.</p>
            </InfoCard>
          </InfoGrid>

          <ActionSection>
            <SectionHeader>
              <ShieldCheck size={32} color="#FF6600" />
              <h2>Proposta de Colaboração</h2>
              <p>Sua parceria ajuda a democratizar a mobilidade docente no serviço público federal.</p>
            </SectionHeader>

            <PartnerForm onSubmit={(e) => { e.preventDefault(); alert("Proposta enviada!"); }}>
              <div className="input-group">
                <label>Nome Completo</label>
                <input name="nome" type="text" placeholder="Ex: Josiel Santos" required onChange={handleChange} />
              </div>

              <div className="input-group">
                <label>E-mail Institucional (@ufopa.edu.br)</label>
                <input name="email" type="email" placeholder="nome@instituicao.edu.br" required onChange={handleChange} />
              </div>
              
              <div className="full-width">
                <label>Sua Proposta ou Ideia</label>
                <textarea 
                  name="proposta"
                  placeholder="Como você imagina colaborar com o crescimento do WOLF em sua região?" 
                  rows="5" 
                  required
                  onChange={handleChange}
                />
              </div>

              <button type="submit">
                <Send size={18} /> Enviar Proposta para Análise
              </button>
            </PartnerForm>
          </ActionSection>
        </Content>
      </Container>
    </MainLayout>
  );
}