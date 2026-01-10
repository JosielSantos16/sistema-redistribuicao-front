import React from "react";
import { useNavigate } from "react-router-dom";
import { Botao } from "./styles";

export default function Home(){
   const navigate = useNavigate();

   return (
    <>
      <Botao onClick={() => navigate('/mapa')}>Teste</Botao>
    </>
   )
}
