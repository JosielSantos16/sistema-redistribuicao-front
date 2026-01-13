import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  Div, 
  LegendGrid, 
  LegendItem, 
  OrangeCircle, 
  WelcomeBadge, 
  ButtonRow, 
  Button,
  MarkerBadge 
} from "./styles";
import { Pointer, Info } from "lucide-react";

export default function InfoSection({ isHome }) {
  const navigate = useNavigate();

  return (
    <Div>
      {isHome && <WelcomeBadge>Seja Bem-Vindo!</WelcomeBadge>}
      
      <h1>
        {isHome 
          ? "Redistribuição/Remoção de Servidores Públicos" 
          : "Mapa de Interesse de Redistribuição/Remoção"}
      </h1>
      
      <p>
        Visualize em tempo real quantos servidores desejam ir para cada estado
        e acesse a lista completa por região.
      </p>

      <LegendGrid>
        <LegendItem borderColor="#879BF5">
          <OrangeCircle />
          <span>Cada estado pode exibir um marcador</span>
        </LegendItem>
        
        <LegendItem borderColor="#E2CFE6">
          <MarkerBadge>20</MarkerBadge>
          <span>Número no marcador representa o total de interessados</span>
        </LegendItem>

        <LegendItem borderColor="#5CB3AA">
          <Pointer size={22} color="#FF6600" />
          <span>Clique em um estado para visualizar os perfis</span>
        </LegendItem>

        <LegendItem borderColor="#E2DB93">
          <Info size={22} color="#FF6600" />
          <span>Informações baseadas nas preferências dos usuários.</span>
        </LegendItem>
      </LegendGrid>

      {isHome && (
        <ButtonRow>
          <Button variant="orange" onClick={() => navigate("/cadastro")}>
            Cadastrar
          </Button>
          <Button variant="blue" onClick={() => navigate("/login")}>
            Entrar
          </Button>
        </ButtonRow>
      )}
    </Div>
  );
}