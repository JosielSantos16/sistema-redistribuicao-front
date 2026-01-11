import Sidebar from "../../components/Sidebar/Sidebar";
import { 
  Container, 
  Main, TopMenuIcon, ContentRow, InfoSection, LegendGrid, 
  LegendItem, OrangeCircle, MapContainer, Marker, StatsGrid, Card 
} from "./styles";

import { 
   Menu, MousePointer2, Info 
} from "lucide-react";

export default function Mapa() {
  return (
    <Container>
      <Sidebar/>
      <Main>
        <TopMenuIcon><Menu size={20} /></TopMenuIcon>

        <ContentRow>
          <InfoSection>
            <h1>Mapa de Interesse de Redistribuição/Remoção</h1>
            <p>Visualize em tempo real quantos servidores desejam ir para cada estado e acesse a lista completa por região.</p>

            <LegendGrid>
              <LegendItem borderColor="#8a70ff">
                <OrangeCircle />
                <span>Cada estado pode exibir um marcador</span>
              </LegendItem>
              <LegendItem borderColor="#d8b4fe">
                <div style={{background: '#ff6b00', color: 'white', padding: '2px 6px', borderRadius: '10px', fontSize: '10px', fontWeight: 'bold'}}>20</div>
                <span>Número no marcador representa o total de usuários interessados naquele estado</span>
              </LegendItem>
              <LegendItem borderColor="#4fd1c5">
                <MousePointer2 size={16} color="#f6ad55" />
                <span>Clique em um estado para visualizar os perfis correspondentes</span>
              </LegendItem>
              <LegendItem borderColor="#dce775">
                <Info size={16} color="#f6ad55" />
                <span>As informações exibidas são baseadas nas preferências cadastradas pelos próprios usuários.</span>
              </LegendItem>
            </LegendGrid>
          </InfoSection>

          <MapContainer>
            {/* Imagem do mapa do Brasil (Azul Escuro) */}
            <img src="https://i.imgur.com/L8zB8yS.png" alt="Mapa Brasil" />
            
            {/* Marcadores aproximados conforme a imagem */}
            <Marker x="75%" y="25%">20</Marker>
            <Marker x="85%" y="32%">20</Marker>
            <Marker x="88%" y="45%">20</Marker>
            <Marker x="82%" y="55%">20</Marker>
            <Marker x="75%" y="65%">20</Marker>
          </MapContainer>
        </ContentRow>

        <StatsGrid>
          <Card>
            <div className="badge">1000</div>
            <span>Docentes cadastrados</span>
          </Card>
          <Card>
            <div className="badge">900</div>
            <span>Instituições participantes</span>
          </Card>
          <Card>
            <div className="badge">250</div>
            <span>Solicitações de redistribuição</span>
          </Card>
          <Card>
            <div className="badge">500</div>
            <span>Processos em Análise</span>
          </Card>
        </StatsGrid>
      </Main>
    </Container>
  );
}