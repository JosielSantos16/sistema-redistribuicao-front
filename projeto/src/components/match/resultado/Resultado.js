import React from 'react';
import { Handshake } from 'lucide-react'; // Certifique-se de instalar: npm install lucide-react
import UsuarioImg from '../../../assets/usuario.png';
import { 
  CardContainer, 
  CardHeader, 
  AvatarWrapper, 
  CardContent,
  CardFooter,
  MatchButton,
  IconWrapper
} from './styles';

export default function Resultado({ user }) {
  // Função para lidar com o clique
  const handleMatch = () => {
    console.log(`Interesse enviado para: ${user.nome}`);
  };

  return (
    <CardContainer>
      <CardHeader>
        <h3>{user.nome || "Usuário"}</h3>
        <AvatarWrapper>
          <img 
            src={UsuarioImg} 
            alt={user.nome} 
          />
        </AvatarWrapper>
      </CardHeader>

      <CardContent>
        <span className="date">Publicação: 20/10/2025</span>

        <div className="info-section">
          <p><strong>Cargo/Especialidade:</strong> <span className="value">Cargo X</span></p>
          <p><strong>Área:</strong> <span className="value">Alguma área</span></p>
          <p><strong>Instituição:</strong> <span className="value">Universidade Federal do Oeste do Pará</span></p>
          <p>
            <strong>Lattes:</strong> <span className="link-lattes">http://lattes.cnpq.br/...</span>
          </p>
        </div>

        <div className="contact-box">
          <strong>Contatos:</strong>
          <p>
            <strong>Email:</strong> <span className="masked-email">{user.email}</span>
          </p>
        </div>
      </CardContent>

      <CardFooter>
        <div className="location-box">
          <div className="item">
            <strong>Origem:</strong>
            <span>{user.origem || "Não informado"}</span>
          </div>
          <div className="item">
            <strong>Destino:</strong>
            <span>{user.destino || "Não informado"}</span>
          </div>
        </div>

        <MatchButton onClick={handleMatch}>
          <IconWrapper>
            <Handshake size={18} strokeWidth={2.5} />
          </IconWrapper>
          Dar Match
        </MatchButton>
      </CardFooter>
    </CardContainer>
  );
}