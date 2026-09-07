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

          {edital.capturadoEm && (
            <PeriodoTag>
              Encontrado por nosso sistema em: {new Date(edital.capturadoEm).toLocaleDateString('pt-BR')}
            </PeriodoTag>
          )}
        </div>
      </EditalMain>

      {edital.link ? (
        <BotaoAcesso href={edital.link} target="_blank">
          Acessar Edital <ExternalLink size={18} />
        </BotaoAcesso>
      ) : (
        <BotaoAcesso as="span" className="indisponivel">
          Link indisponível
        </BotaoAcesso>
      )}
    </EditalContainer>
  );
}