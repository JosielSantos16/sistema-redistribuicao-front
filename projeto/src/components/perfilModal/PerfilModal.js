import UsuarioImg from '../../assets/usuario.png';
import { resolverFotoUrl } from '../../utils/mediaUrl';
import { X } from 'lucide-react';
import { Overlay, ModalCard } from './styles';

export default function PerfilModal({ user, onClose }) {
  if (!user) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalCard onClick={(e) => e.stopPropagation()}>
        <button className="fechar" onClick={onClose}>
          <X size={20} />
        </button>

        <img src={resolverFotoUrl(user.foto_url) || UsuarioImg} alt={user.nome} />
        <h2>{user.nome}</h2>

        <div className="info">
          <p><strong>Cargo/Especialidade:</strong> {user.cargo || "Não informado"}</p>
          <p><strong>Área/Curso:</strong> {user.curso || "Não informado"}</p>
          <p><strong>Instituição:</strong> {user.instituicao || "Não informado"}</p>
          {user.origem && <p><strong>Origem:</strong> {user.origem}</p>}
          {user.destino && <p><strong>Destino desejado:</strong> {user.destino}</p>}
          <p>
            <strong>Lattes:</strong>{" "}
            {user.lattes ? (
              <a href={user.lattes} target="_blank" rel="noreferrer">{user.lattes}</a>
            ) : (
              "Não informado"
            )}
          </p>
          {user.email && <p><strong>E-mail:</strong> {user.email}</p>}
        </div>
      </ModalCard>
    </Overlay>
  );
}