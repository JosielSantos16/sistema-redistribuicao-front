import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  Div, 
  LegendGrid, 
  LegendItem, 
  IconChip,
  WelcomeBadge, 
  ButtonRow, 
  Button,
} from "./styles";
import { MapPin, MousePointerClick, Info } from "lucide-react";

export default function InfoSection({ isHome, section = "full", style }) {
  const navigate = useNavigate();

  const mostrarIntro = section === "full" || section === "intro";
  const mostrarAcoes = section === "full" || section === "actions";

  return (
    <Div style={style} $section={section}>
      {mostrarIntro && (
        <>
          {isHome && <WelcomeBadge>Seja bem-vindo</WelcomeBadge>}

          <h1>
            {isHome
              ? "Redistribuição e remoção de servidores públicos"
              : "Mapa de interesse de redistribuição/remoção"}
          </h1>

          <p>
            Visualize em tempo real quantos servidores desejam ir para cada estado
            e acesse a lista completa por região.
          </p>
        </>
      )}

      {mostrarAcoes && (
        <>
          <LegendGrid>
            <LegendItem>
              <IconChip>
                <MapPin size={18} strokeWidth={2.2} />
              </IconChip>
              <span>Cada estado pode exibir um marcador</span>
            </LegendItem>

            <LegendItem>
              <IconChip tone="orange">
                <strong>20</strong>
              </IconChip>
              <span>O número no marcador representa o total de interessados</span>
            </LegendItem>

            <LegendItem>
              <IconChip>
                <MousePointerClick size={18} strokeWidth={2.2} />
              </IconChip>
              <span>Clique em um estado para visualizar os perfis</span>
            </LegendItem>

            <LegendItem>
              <IconChip tone="orange">
                <Info size={18} strokeWidth={2.2} />
              </IconChip>
              <span>Informações baseadas nas preferências dos usuários</span>
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
        </>
      )}
    </Div>
  );
}