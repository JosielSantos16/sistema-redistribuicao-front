import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from "../../components/sidebar/Sidebar";
import Filtro from "../../components/editais/Filtro/Filtro";
import ResultadoEdital from "../../components/editais/resultadoEdital/ResultadoEdital";
import { Loader2, Globe, RefreshCw } from "lucide-react";
import api from '../../services/api'; 
import {
  PageLayout,
  MainContent,
} from "./styles";

export default function Editais() {
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false); 
  const [editais, setEditais] = useState([]);

  const location = useLocation();
  const estadoVindoDoMapa = location.state?.filtroEstado;

  useEffect(() => {
    if (estadoVindoDoMapa) {
      buscarEditais({ uf: estadoVindoDoMapa });
    } else {
      buscarEditais();
    }
  }, [estadoVindoDoMapa]);

  const buscarEditais = async (filtros = {}) => {
    setLoading(true);
    try {
      const params = {};
      if (filtros.uf) params.uf = filtros.uf;
      if (filtros.tags && filtros.tags.length > 0) {
        params.instituicao = filtros.tags.join(',');
      }

      const response = await api.get('/notices', { params });

      const dadosAdaptados = response.data.map(item => ({
        id: item._id,
        inst: item.instituicao,
        titulo: item.titulo,
        desc: `${item.categoria} publicado pela ${item.orgao}/${item.instituicao}.`,
        link: item.url_documento
      }));

      setEditais(dadosAdaptados);
    } catch (err) {
      console.error("Erro ao buscar editais do banco:", err);
      alert("Não foi possível carregar os editais do banco de dados.");
    } finally {
      setLoading(false);
    }
  };

  const handleSincronizar = async () => {
    setSyncing(true);
    try {
      const { data } = await api.post('/scraper/PROGEP');
      if (data?.sucesso) {
        alert(`Sincronização concluída! ${data.total_itens} editais encontrados/atualizados.`);
      } else {
        alert(`Falha na sincronização: ${data?.erro || 'erro desconhecido'}`);
      }
      buscarEditais(); 
    } catch (err) {
      console.error("Erro ao rodar scraper pelo front:", err);
      alert("Falha ao rodar a varredura automática. Verifique o console do backend.");
    } finally {
      setSyncing(false);
    }
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
          </div>

          {/* Botão para disparar o scraper diretamente pela UI */}
          <button
            onClick={handleSincronizar}
            disabled={syncing || loading}
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
              cursor: (syncing || loading) ? 'not-allowed' : 'pointer',
              opacity: (syncing || loading) ? 0.7 : 1,
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            <RefreshCw size={16} className={syncing ? "animate-spin" : ""} />
            {syncing ? "Sincronizando..." : "Sincronizar Portal PROGEP"}
          </button>
        </header>

        <Filtro
          onSearch={buscarEditais}
          initialUf={estadoVindoDoMapa}
        />

        <section style={{ marginTop: '20px' }}>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '80px' }}>
              <Loader2 size={48} className="animate-spin" color="#FF6600" />
              <p style={{ marginTop: '20px', fontWeight: '500', color: '#001858' }}>Varrendo a rede...</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {editais.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '40px', color: '#718096', background: 'white', borderRadius: '4px' }}>
                  Nenhum edital encontrado no banco de dados. Clique em "Sincronizar Portal PROGEP"!
                </div>
              ) : (
                editais.map(item => (
                  <ResultadoEdital key={item.id} edital={item} />
                ))
              )}
            </div>
          )}
        </section>
      </MainContent>
    </PageLayout>
  );
}