import { useState, useEffect } from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import Filtro from "../../components/editais/Filtro/Filtro";
import ResultadoEdital from "../../components/editais/resultadoEdital/ResultadoEdital";
import { Loader2, Globe } from "lucide-react";
import {
  PageLayout,
  MainContent,
} from "./styles";

export default function Editais() {
  const [loading, setLoading] = useState(true);
  const [editais, setEditais] = useState([]);

  useEffect(() => {
    buscarEditais();
  }, []);

  const buscarEditais = (filtros = {}) => {
    setLoading(true);
    setTimeout(() => {
      const mockData = [
        {
          id: 1,
          inst: "UFOPA",
          titulo: "Edital 045/2024",
          desc: "Vagas para Magistério Superior nas áreas de TI e Engenharia. Lotação em Santarém/PA.",
          link: "#"
        },
        {
          id: 2,
          inst: "IFPA",
          titulo: "Chamada Pública de Remoção EBTT",
          desc: "Processo destinado a professores de ensino técnico e tecnológico. Campi Belém e Castanhal.",
          link: "#"
        }
      ];
      setEditais(mockData);
      setLoading(false);
    }, 1200);
  };

  return (
    <PageLayout>
      <Sidebar />
      <MainContent>
        <header style={{ marginBottom: '30px' }}>
          <h1>Editais Identificados</h1>
          <p style={{ color: '#718096', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Globe size={18} color="#FF6600" />
            Varredura automática em portais acadêmicos em busca de Redistribuição
          </p>
        </header>

        <Filtro onSearch={buscarEditais} />

        <section style={{ marginTop: '20px' }}>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '80px' }}>
              <Loader2 size={48} className="animate-spin" color="#FF6600" />
              <p style={{ marginTop: '20px', fontWeight: '500', color: '#001858' }}>Varrendo a rede...</p>
            </div>
          ) : (
    
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {editais.map(item => (
                <ResultadoEdital key={item.id} edital={item} />
              ))}
            </div>
          )}
        </section>
      </MainContent>
    </PageLayout>
  );
}