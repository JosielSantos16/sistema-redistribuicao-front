import React from "react";
import { useCountUp } from "../../../hooks/useCountUp";
import { Grid, Card } from "./styles";

const MOCK_DATA = [
  { id: 1, label: "Docentes cadastrados", value: 1042 },
  { id: 2, label: "Instituições participantes", value: 87 },
  { id: 3, label: "Solicitações de redistribuição", value: 256 },
  { id: 4, label: "Processos em Análise", value: 512 },
];

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
  return (
    <Grid>
      {MOCK_DATA.map((item) => (
        <CounterCard key={item.id} label={item.label} value={item.value} />
      ))}
    </Grid>
  );
}