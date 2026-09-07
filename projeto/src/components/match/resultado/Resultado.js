import React, { useState } from 'react';
import { Handshake, Check, Loader2, X as XIcon } from 'lucide-react';
import UsuarioImg from '../../../assets/usuario.png';
import { resolverFotoUrl } from '../../../utils/mediaUrl';
import api from '../../../services/api';
import PerfilModal from '../../perfilModal/PerfilModal';
import { 
  CardContainer, 
  CardHeader, 
  AvatarWrapper, 
  CardContent,
  CardFooter,
  MatchButton,
  IconWrapper
} from './styles';

function statusInicial(matchStatus) {
  if (matchStatus === 'pendente') return 'enviado';
  if (matchStatus === 'aceito') return 'match';
  if (matchStatus === 'recusado') return 'recusado';
  return 'idle';
}

export default function Resultado({ user }) {
  const [status, setStatus] = useState(statusInicial(user.matchStatus));
  const [modalAberto, setModalAberto] = useState(false);

  const handleMatch = async () => {
    if (status !== 'idle' && status !== 'erro') return;

    setStatus("enviando");
    try {
      const token = localStorage.getItem("@Wolf:token");
      await api.post(
        "/matches",
        { destinatario_id: user.id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setStatus("enviado");
    } catch (err) {
      // "Você já demonstrou interesse nesse perfil" também conta como
      // "já enviado" pra quem está vendo a tela — não é um erro real.
      if (err.response?.data?.error?.includes("já demonstrou interesse")) {
        setStatus("enviado");
      } else {
        console.error("Erro ao enviar match:", err);
        setStatus("erro");
      }
    }
  };

  const dataCadastro = user.criadoEm
    ? new Date(user.criadoEm).toLocaleDateString('pt-BR')
    : null;

  const rotuloBotao = {
    enviando: "Enviando...",
    enviado: "Solicitação enviada",
    match: "Vocês já são um match!",
    recusado: "Solicitação recusada",
    erro: "Tentar de novo",
    idle: "Dar Match",
  }[status];

  const iconeBotao =
    status === "enviando" ? (
      <Loader2 size={18} strokeWidth={2.5} className="spin" />
    ) : status === "enviado" || status === "match" ? (
      <Check size={18} strokeWidth={2.5} />
    ) : status === "recusado" ? (
      <XIcon size={18} strokeWidth={2.5} />
    ) : (
      <Handshake size={18} strokeWidth={2.5} />
    );

  return (
    <CardContainer>
      <CardHeader>
        <h3>{user.nome || "Usuário"}</h3>
        <AvatarWrapper onClick={() => setModalAberto(true)} style={{ cursor: "pointer" }}>
          <img 
            src={resolverFotoUrl(user.foto_url) || UsuarioImg} 
            alt={user.nome} 
          />
        </AvatarWrapper>
      </CardHeader>

      <CardContent>
        {dataCadastro && <span className="date">Cadastrado em: {dataCadastro}</span>}

        <div className="info-section">
          <p><strong>Cargo/Especialidade:</strong> <span className="value">{user.cargo || "Não informado"}</span></p>
          <p><strong>Área/Curso:</strong> <span className="value">{user.curso || "Não informado"}</span></p>
          <p><strong>Instituição:</strong> <span className="value">{user.instituicao || "Não informado"}</span></p>
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

        <MatchButton
          onClick={handleMatch}
          disabled={status !== "idle" && status !== "erro"}
          enviado={status === "enviado" || status === "match"}
        >
          <IconWrapper>{iconeBotao}</IconWrapper>
          {rotuloBotao}
        </MatchButton>
      </CardFooter>

      {modalAberto && <PerfilModal user={user} onClose={() => setModalAberto(false)} />}
    </CardContainer>
  );
}