import React from "react";
import { useNavigate } from "react-router-dom";
import { Div, LegendGrid, LegendItem, OrangeCircle } from "./styles";
import { Pointer, Info } from "lucide-react";

export default function InfoSection() {
  const navigate = useNavigate();

  return (
    <>
      <Div>
        <h1>Mapa de Interesse de Redistribuição/Remoção</h1>
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
            <div
              style={{
                background: "#FF6600",
                color: "white",
                padding: "2px 6px",
                borderRadius: "10px",
                fontSize: "10px",
                fontWeight: "bold",
              }}
            >
              20
            </div>
            <span>
              Número no marcador representa o total de usuários interessados
              naquele estado
            </span>
          </LegendItem>
          <LegendItem borderColor="#5CB3AA">
            <Pointer size={30} color="#FF6600" />
            <span>
              Clique em um estado para visualizar os perfis correspondentes
            </span>
          </LegendItem>
          <LegendItem borderColor="#E2DB93">
            <Info size={40} color="#FF6600" />
            <span>
              As informações exibidas são baseadas nas preferências cadastradas
              pelos próprios usuários.
            </span>
          </LegendItem>
        </LegendGrid>
      </Div>
    </>
  );
}
