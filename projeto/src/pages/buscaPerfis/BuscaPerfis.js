import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import BuscarPerfil from "../../components/match/buscarPerfil/BuscarPerfil";
import Resultado from "../../components/match/resultado/Resultado"; 

import {
  PageLayout,
  MainContent,
  ResultsGrid,
  EmptyState,
  PaginationBar,
} from "./styles";

const ESTADO_INICIAL = { resultados: [], total: 0, pagina: 1, totalPaginas: 1 };

export default function BuscaPerfis() {
  const [dados, setDados] = useState(ESTADO_INICIAL);
  // Diferencia "ainda não pesquisou" de "pesquisou e não achou nada" —
  // sem isso não dá pra saber quando mostrar o aviso de "nenhum resultado".
  const [buscaFeita, setBuscaFeita] = useState(false);
  const buscarRef = useRef(null);
  const location = useLocation();
  const estadoVindoDoMapa = location.state?.filtroEstado;

  const atualizarResultados = (novosDados) => {
    setDados(novosDados);
    setBuscaFeita(true);
  };

  return (
    <PageLayout>
      <Sidebar />
      <MainContent>
        <h1>Busque perfis compatíveis</h1>
        <BuscarPerfil
          ref={buscarRef}
          setResultados={atualizarResultados}
          initialEstado={estadoVindoDoMapa}
        />

        {dados.resultados.length > 0 ? (
          <>
            <h2>Resultados{dados.total > 0 ? ` (${dados.total})` : ""}:</h2>
            <ResultsGrid>
              {dados.resultados.map((user) => (
                <Resultado key={user.id} user={user} />
              ))}
            </ResultsGrid>

            {dados.totalPaginas > 1 && (
              <PaginationBar>
                <button
                  disabled={dados.pagina <= 1}
                  onClick={() => buscarRef.current?.irParaPagina(dados.pagina - 1)}
                >
                  Anterior
                </button>
                <span>
                  Página {dados.pagina} de {dados.totalPaginas}
                </span>
                <button
                  disabled={dados.pagina >= dados.totalPaginas}
                  onClick={() => buscarRef.current?.irParaPagina(dados.pagina + 1)}
                >
                  Próxima
                </button>
              </PaginationBar>
            )}
          </>
        ) : (
          buscaFeita && (
            <EmptyState>
              Nenhum usuário encontrado com esse perfil. Tente ajustar os filtros.
            </EmptyState>
          )
        )}
      </MainContent>
    </PageLayout>
  );
}