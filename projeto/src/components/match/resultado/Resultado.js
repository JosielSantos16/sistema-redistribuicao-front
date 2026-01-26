import React from 'react';
import Usuario from '../../../assets/usuario.png';
import { 
  CardContainer, 
  CardHeader, 
  AvatarWrapper, 
  CardContent 
} from './styles';

export default function Resultado({ user }) {
  return (
    <CardContainer>
      <CardHeader>
        <h3>{user.nome}</h3>
        <AvatarWrapper>
          <img 
            src={Usuario} 
            alt={user.nome} 
          />
        </AvatarWrapper>
      </CardHeader>

      <CardContent>
        <span className="date">Publicação: 20/10/2025</span>

        <p><strong>Cargo/Especialidade:</strong> <span className="value">Cargo X</span></p>
        <p><strong>Área:</strong> <span className="value">Alguma área</span></p>
        <p><strong>Instituição:</strong> <span className="value">Universidade Federal do Oeste do Pará</span></p>
        <p>
          <strong>Lattes:</strong> <span className="link-lattes">http://lattes.cnpq.br/...</span>
        </p>

        <div className="contact-box">
          <strong>Contatos:</strong>
          <p>
            <strong>Email:</strong> <span className="masked-email">{user.email}</span>
          </p>
        </div>

        <div className="location-box">
          <div className="item">
            <strong>Origem:</strong>
            <span>{user.origem || "X"}</span>
          </div>
          <div className="item">
            <strong>Destino:</strong>
            <span>{user.destino || "Y"}</span>
          </div>
        </div>
      </CardContent>
    </CardContainer>
  );
}