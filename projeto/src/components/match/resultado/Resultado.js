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

  const dataCadastro = user.criadoEm
    ? new Date(user.criadoEm).toLocaleDateString('pt-BR')
    : null;

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
        {dataCadastro && <span className="date">Cadastrado em: {dataCadastro}</span>}

        <div className="info-section">
          <p><strong>Cargo/Especialidade:</strong> <span className="value">{user.cargo || "Não informado"}</span></p>
          <p><strong>Área/Curso:</strong> <span className="value">{user.curso || "Não informado"}</span></p>
          <p><strong>Instituição:</strong> <span className="value">{user.origem || "Não informado"}</span></p>
          <p>
            <strong>Lattes:</strong>{" "}
            {user.lattes ? (
              <a className="link-lattes" href={user.lattes} target="_blank" rel="noreferrer">
                {user.lattes}
              </a>
            ) : (
              <span className="value">Não informado</span>
            )}
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