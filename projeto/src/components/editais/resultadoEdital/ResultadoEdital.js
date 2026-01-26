import React from 'react';
import { GraduationCap, ExternalLink } from "lucide-react";
import {
  EditalContainer,
  EditalMain,
  PeriodoTag,
  BotaoAcesso
} from './styles';

export default function ResultadoEdital({ edital }) {
  return (
    <EditalContainer>
      <EditalMain>
        <div className="icon-wrapper">
          <GraduationCap size={22} />
        </div>
        
        <div className="content-wrapper">
          <h3>{edital.inst} - {edital.titulo}</h3>
          
          <p className="description">
            {edital.desc}
          </p>

          <PeriodoTag>
            Período de inscrições: 01/02/2026 à 05/03/2026
          </PeriodoTag>
        </div>
      </EditalMain>

      <BotaoAcesso href={edital.link || "#"} target="_blank">
        Acessar Edital <ExternalLink size={18} />
      </BotaoAcesso>
    </EditalContainer>
  );
}