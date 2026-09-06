import React, { useEffect, useState } from "react";
import { useCountUp } from "../../../hooks/useCountUp";
import { Grid, Card } from "./styles";
import api from "../../../services/api";

function CounterCard({ label, value }) {
  const count = useCountUp(value, 1500); 

  return (
    <Card>
      <div className="badge">{count}</div>
      <span>{label}</span>
    </Card>
  );
}

export default function StartsGrid() {
  const [totais, setTotais] = useState({
    docentes_cadastrados: 0,
    instituicoes_participantes: 0,
    solicitacoes_redistribuicao: 0,
    editais_capturados: 0,
  });

  useEffect(() => {
    async function carregarTotais() {
      try {
        const { data } = await api.get("/mapa/interesse");
        if (data?.totais) setTotais(data.totais);
      } catch (err) {
        console.error("Erro ao carregar estatísticas:", err);
      }
    }
    carregarTotais();
  }, []);

  const cards = [
    { id: 1, label: "Docentes cadastrados", value: totais.docentes_cadastrados },
    { id: 2, label: "Instituições participantes", value: totais.instituicoes_participantes },
    { id: 3, label: "Solicitações de redistribuição", value: totais.solicitacoes_redistribuicao },
    { id: 4, label: "Editais capturados pelo robô", value: totais.editais_capturados },
  ];

  return (
    <Grid>
      {cards.map((item) => (
        <CounterCard key={item.id} label={item.label} value={item.value} />
      ))}
    </Grid>
  );
}