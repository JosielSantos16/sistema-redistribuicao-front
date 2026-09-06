import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Brasil from "../brasil/Brasil";
import { MapContainer, MapContent } from "./styles";
import api from "../../../services/api";

export default function MapaContainer({ isHome = false }) {
  const navigate = useNavigate();
  const [contagens, setContagens] = useState({});

  useEffect(() => {
    async function carregarDados() {
      try {
        const { data } = await api.get("/mapa/interesse");
        setContagens(data.por_estado || {});
      } catch (err) {
        console.error("Erro ao carregar dados do mapa:", err);
      }
    }
    carregarDados();
  }, []);

  const handleClickEstado = (sigla) => {
    if (isHome) {
      navigate("/cadastro", { state: { estadoInteresse: sigla } });
    } else {
      navigate("/busca", { state: { filtroEstado: sigla } });
    }
  };

  return (
    <MapContainer>
      <MapContent>
        <Brasil onEstadoClick={handleClickEstado} contagens={contagens} />
      </MapContent>
    </MapContainer>
  );
}