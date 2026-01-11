import React from "react";
import { useNavigate } from "react-router-dom";
import Brasil from "../brasil/Brasil";
import { MapContainer, Marker } from "./styles";

export default function MapaContainer() {
  const navigate = useNavigate();

  return (
    <>
      <MapContainer>
        <Brasil />

        <Marker x="45%" y="18%">
          20
        </Marker>

        <Marker x="87%" y="25%">
          10
        </Marker>

        <Marker x="97%" y="25%">
          10
        </Marker>

        <Marker x="97%" y="30%">
          10
        </Marker>

        <Marker x="90%" y="32%">
          10
        </Marker>

        <Marker x="97%" y="35%">
          10
        </Marker>

        <Marker x="94%" y="40%">
          10
        </Marker>

        <Marker x="76%" y="40%">
          10
        </Marker>

        <Marker x="75%" y="60%">
          25
        </Marker>

      </MapContainer>
    </>
  );
}
