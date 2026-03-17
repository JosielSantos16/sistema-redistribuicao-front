import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { 
  MainContainer, 
  ContentArea, 
  Banner, 
  PoliciesCard, 
  PolicyHeader,
  PolicyBody,
  Section
} from './styles';

export default function Politicas() {
  return (
    <MainContainer>
      <Sidebar />
      <ContentArea>
        <Banner>
          <h1>Políticas e Regulamentos</h1>
        </Banner>

        <PoliciesCard>
          <PolicyHeader>
            <h2>Termos de Uso e Privacidade - Sistema WOLF</h2>
            <span>Última atualização: 17 de Março de 2026</span>
          </PolicyHeader>
          
          <PolicyBody>
            <Section>
              <h3>1. Natureza do Serviço</h3>
              <p>
                O sistema <strong>WOLF</strong> é uma ferramenta de apoio à gestão de pessoas, focada exclusivamente na intermediação de interesses de redistribuição e remoção por permuta entre servidores docentes do <strong>Magistério Superior</strong> e <strong>EBTT</strong>. A plataforma não substitui os trâmites legais junto às pró-reitorias de gestão de pessoas (PROGEP).
              </p>
            </Section>

            <Section>
              <h3>2. Tratamento de Dados (LGPD)</h3>
              <p>
                Ao utilizar a plataforma, o usuário autoriza o tratamento de dados como Nome, CPF, Matrícula SIAPE, Currículo Lattes e vínculo institucional. Estes dados são processados com a finalidade única de identificar compatibilidades entre perfis de servidores federais.
              </p>
            </Section>

            <Section>
              <h3>3. Vínculo e Elegibilidade</h3>
              <p>
                O acesso é restrito a servidores ocupantes de cargos efetivos nas carreiras de Magistério. Perfis que não se enquadrem nestas categorias ou que forneçam informações inverídicas estão sujeitos à suspensão imediata da conta pelo administrador.
              </p>
            </Section>

            <Section>
              <h3>4. Responsabilidade</h3>
              <p>
                O WOLF atua como facilitador. A concretização da redistribuição depende da anuência das instituições envolvidas e do cumprimento das normas vigentes na Lei nº 8.112/90.
              </p>
            </Section>
          </PolicyBody>
        </PoliciesCard>
      </ContentArea>
    </MainContainer>
  );
}