import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import BuscarPerfil from "../../components/match/buscarPerfil/BuscarPerfil";
import Resultado from "../../components/match/resultado/Resultado"; 

import {
  PageLayout,
  MainContent,
  ResultsGrid,
} from "./styles";

export default function BuscaPerfis() {
  const [resultados, setResultados] = useState([]);

  return (
    <PageLayout>
      <Sidebar />
      <MainContent>
        <h1>Busque perfis compatíveis</h1>
        <BuscarPerfil setResultados={setResultados} />

        {resultados.length > 0 && (
          <>
            <h2>Resultados:</h2>
            <ResultsGrid>
              {resultados.map((user) => (
                <Resultado key={user.id} user={user} />
              ))}
            </ResultsGrid>
          </>
        )}
      </MainContent>
    </PageLayout>
  );
}