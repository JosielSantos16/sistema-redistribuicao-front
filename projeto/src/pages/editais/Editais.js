import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from "../../components/sidebar/Sidebar";
import Filtro from "../../components/editais/Filtro/Filtro";
import ResultadoEdital from "../../components/editais/resultadoEdital/ResultadoEdital";
import { Loader2, Globe, RefreshCw } from "lucide-react";
import api from '../../services/api';
import { useSync } from '../../contexts/SyncContext';
import {
  PageLayout,
  MainContent,
  PaginationBar,
} from "./styles";

const ESTADO_INICIAL = { editais: [], total: 0, pagina: 1, totalPaginas: 1 };

export default function Editais() {
  const [loading, setLoading] = useState(true);
  const [dados, setDados] = useState(ESTADO_INICIAL);
  const [filtrosAtuais, setFiltrosAtuais] = useState({});

  const { sincronizando, ultimoResultado, naoVisualizado, iniciarSincronizacao, marcarComoVisto } = useSync();
  const sincronizandoAnterior = useRef(sincronizando);

  const location = useLocation();
  const estadoVindoDoMapa = location.state?.filtroEstado;

  useEffect(() => {
    marcarComoVisto();
  }, []);

  useEffect(() => {
    if (estadoVindoDoMapa) {
      buscarEditais({ uf: estadoVindoDoMapa, pagina: 1 });
    } else {
      buscarEditais({ pagina: 1 });
    }
  }, [estadoVindoDoMapa]);

  useEffect(() => {
    if (sincronizandoAnterior.current && !sincronizando) {
      buscarEditais({ manterFiltroAtual: true, pagina: 1 });
    }
    sincronizandoAnterior.current = sincronizando;
  }, [sincronizando]);

  // Busca os dados reais salvos no MongoDB, com filtro E paginação
  // realmente enviados pro backend.
  const buscarEditais = async (filtros = {}) => {
    setLoading(true);
    try {
      const paginaAlvo = filtros.pagina || 1;
      const baseFiltros = filtros.manterFiltroAtual ? filtrosAtuais : filtros;

      const params = { pagina: paginaAlvo, limite: 12 };
      if (baseFiltros.uf) params.uf = baseFiltros.uf;
      if (baseFiltros.tags && baseFiltros.tags.length > 0) {
        params.instituicao = baseFiltros.tags.join(',');
      }

      if (!filtros.manterFiltroAtual) {
        setFiltrosAtuais(baseFiltros);
      }

      const response = await api.get('/notices', { params });

      const dadosAdaptados = response.data.editais.map(item => ({
        id: item._id,
        inst: item.instituicao,
        titulo: item.titulo,
        desc: `${item.categoria} publicado pela ${item.orgao}/${item.instituicao}.`,
        link: item.url_documento,
        capturadoEm: item.capturado_em,
      }));

      setDados({
        editais: dadosAdaptados,
        total: response.data.total,
        pagina: response.data.pagina,
        totalPaginas: response.data.totalPaginas,
      });
    } catch (err) {
      console.error("Erro ao buscar editais do banco:", err);
      alert("Não foi possível carregar os editais do banco de dados.");
    } finally {
      setLoading(false);
    }
  };

  const irParaPagina = (novaPagina) => {
    buscarEditais({ manterFiltroAtual: true, pagina: novaPagina });
  };

  return (
    <PageLayout>
      <Sidebar />
      <MainContent>
        <header style={{ marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1>Editais Identificados</h1>
            <p style={{ color: '#718096', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Globe size={18} color="#FF6600" />
              Varredura automática em portais acadêmicos em busca de Redistribuição
            </p>
            {ultimoResultado && !sincronizando && (
              <p style={{ color: '#a0aec0', fontSize: '12px', marginTop: '4px' }}>
                {ultimoResultado.sucesso
                  ? `Última sincronização: ${ultimoResultado.total_itens} editais encontrados/atualizados.`
                  : `Última sincronização falhou: ${ultimoResultado.erro}`}
              </p>
            )}
          </div>

          <button
            onClick={iniciarSincronizacao}
            disabled={sincronizando}
            style={{
              backgroundColor: '#FF6600',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '6px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: sincronizando ? 'not-allowed' : 'pointer',
              opacity: sincronizando ? 0.7 : 1,
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            <RefreshCw size={16} className={sincronizando ? "animate-spin" : ""} />
            {sincronizando ? "Sincronizando..." : "Sincronizar Portal PROGEP"}
          </button>
        </header>

        {sincronizando && (
          <div style={{
            background: '#fff8f2',
            border: '1px solid #FF6600',
            borderRadius: '8px',
            padding: '12px 16px',
            marginBottom: '20px',
            color: '#001858',
            fontSize: '13px',
          }}>
            A varredura continua rodando em segundo plano mesmo se você sair
            dessa tela — quando terminar, o menu lateral avisa.
          </div>
        )}

        <Filtro
          onSearch={(filtros) => buscarEditais({ ...filtros, pagina: 1 })}
          initialUf={estadoVindoDoMapa}
        />

        <section style={{ marginTop: '20px' }}>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '80px' }}>
              <Loader2 size={48} className="animate-spin" color="#FF6600" />
              <p style={{ marginTop: '20px', fontWeight: '500', color: '#001858' }}>Carregando editais...</p>
            </div>
          ) : (
            <>
              {dados.total > 0 && (
                <p style={{ color: '#718096', fontSize: '13px', marginBottom: '12px' }}>
                  {dados.total} edital{dados.total !== 1 ? 'is' : ''} encontrado{dados.total !== 1 ? 's' : ''} — mais recentes primeiro
                </p>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {dados.editais.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '40px', color: '#718096', background: 'white', borderRadius: '4px' }}>
                    Nenhum edital encontrado no banco de dados. Clique em "Sincronizar Portal PROGEP"!
                  </div>
                ) : (
                  dados.editais.map(item => (
                    <ResultadoEdital key={item.id} edital={item} />
                  ))
                )}
              </div>

              {dados.totalPaginas > 1 && (
                <PaginationBar>
                  <button
                    disabled={dados.pagina <= 1}
                    onClick={() => irParaPagina(dados.pagina - 1)}
                  >
                    Anterior
                  </button>
                  <span>Página {dados.pagina} de {dados.totalPaginas}</span>
                  <button
                    disabled={dados.pagina >= dados.totalPaginas}
                    onClick={() => irParaPagina(dados.pagina + 1)}
                  >
                    Próxima
                  </button>
                </PaginationBar>
              )}
            </>
          )}
        </section>
      </MainContent>
    </PageLayout>
  );
}