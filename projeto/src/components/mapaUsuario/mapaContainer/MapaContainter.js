import React from "react";
import { useNavigate } from "react-router-dom";
import Brasil from "../brasil/Brasil";
import { MapContainer, MapContent, Marker } from "./styles"; 

export default function MapaContainer() {
  const navigate = useNavigate();

  const irParaEditais = (sigla) => {
   
    navigate("/editais", { state: { filtroEstado: sigla } });
  };

  return (
    <MapContainer>
      <MapContent> 
        <Brasil onEstadoClick={irParaEditais} />

        <Marker x="45%" y="18%" onClick={() => irParaEditais("PA")}>20</Marker>
        <Marker x="87%" y="25%" onClick={() => irParaEditais("CE")}>10</Marker>
        <Marker x="97%" y="25%" onClick={() => irParaEditais("RN")}>10</Marker>
        <Marker x="97%" y="30%" onClick={() => irParaEditais("PB")}>10</Marker>
        <Marker x="90%" y="32%" onClick={() => irParaEditais("PE")}>10</Marker>
        <Marker x="97%" y="35%" onClick={() => irParaEditais("AL")}>10</Marker>
        <Marker x="94%" y="40%" onClick={() => irParaEditais("SE")}>10</Marker>
        <Marker x="76%" y="40%" onClick={() => irParaEditais("BA")}>10</Marker>
        <Marker x="75%" y="60%" onClick={() => irParaEditais("SP")}>25</Marker>
      </MapContent>
    </MapContainer>
  );
}