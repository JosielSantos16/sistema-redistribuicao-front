import React, { useState, useEffect, useCallback } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import UsuarioImg from '../../assets/usuario.png';
import api from '../../services/api';
import { resolverFotoUrl } from '../../utils/mediaUrl';
import PerfilModal from '../../components/perfilModal/PerfilModal';
import { Bell, Check, X, MessageCircle, Send, Trash2 } from 'lucide-react';
import { 
  MainContainer, 
  ContentArea, 
  Banner, 
  NotificationsWrapper, 
  CategoryFilter,
  EmptyState,
  RequestCard,
  ChatPanel,
  MessageBubble,
  MessageInputRow,
} from './styles';

const INTERVALO_POLLING_MS = 4000;

function tokenHeader() {
  const token = localStorage.getItem('@Wolf:token');
  return { Authorization: `Bearer ${token}` };
}

export default function Notificacoes() {
  const [aba, setAba] = useState('recebidos'); 
  const [recebidos, setRecebidos] = useState([]);
  const [confirmados, setConfirmados] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [conversaAberta, setConversaAberta] = useState(null); 
  const [mensagens, setMensagens] = useState([]);
  const [novaMensagem, setNovaMensagem] = useState('');
  const [perfilSelecionado, setPerfilSelecionado] = useState(null);

  const carregarTudo = useCallback(async () => {
    setCarregando(true);
    try {
      const [respRecebidos, respConfirmados] = await Promise.all([
        api.get('/matches/recebidos', { headers: tokenHeader() }),
        api.get('/matches/confirmados', { headers: tokenHeader() }),
      ]);
      setRecebidos(respRecebidos.data);
      setConfirmados(respConfirmados.data);
    } catch (err) {
      console.error('Erro ao carregar notificações:', err);
    } finally {
      setCarregando(false);
    }
  }, []);

  useEffect(() => {
    carregarTudo();
  }, [carregarTudo]);

  useEffect(() => {
    if (!conversaAberta) return;

    const intervalo = setInterval(async () => {
      try {
        const { data } = await api.get(`/matches/${conversaAberta}/mensagens`, {
          headers: tokenHeader(),
        });
        setMensagens(data);
      } catch (err) {
        console.error('Erro ao atualizar mensagens:', err);
      }
    }, INTERVALO_POLLING_MS);

    return () => clearInterval(intervalo);
  }, [conversaAberta]);

  const responder = async (id, acao) => {
    try {
      await api.put(`/matches/${id}/${acao}`, {}, { headers: tokenHeader() });
      setRecebidos((prev) => prev.filter((r) => r.id !== id));
      if (acao === 'aceitar') {
        carregarTudo();
      }
    } catch (err) {
      console.error(`Erro ao ${acao} solicitação:`, err);
      alert('Não foi possível processar essa ação. Tente novamente.');
    }
  };

  const abrirConversa = async (matchId) => {
    if (conversaAberta === matchId) {
      setConversaAberta(null);
      return;
    }
    setConversaAberta(matchId);
    try {
      const { data } = await api.get(`/matches/${matchId}/mensagens`, {
        headers: tokenHeader(),
      });
      setMensagens(data);
      setConfirmados((prev) =>
        prev.map((m) => (m.matchId === matchId ? { ...m, naoLidas: 0 } : m))
      );
    } catch (err) {
      console.error('Erro ao carregar mensagens:', err);
      setMensagens([]);
    }
  };

  const enviarMensagem = async () => {
    if (!novaMensagem.trim() || !conversaAberta) return;
    try {
      const { data } = await api.post(
        `/matches/${conversaAberta}/mensagens`,
        { texto: novaMensagem.trim() },
        { headers: tokenHeader() }
      );
      setMensagens((prev) => [...prev, data]);
      setNovaMensagem('');
    } catch (err) {
      console.error('Erro ao enviar mensagem:', err);
    }
  };

  const apagarConversa = async (matchId) => {
    if (!window.confirm('Apagar todas as mensagens dessa conversa? Essa ação não pode ser desfeita.')) {
      return;
    }
    try {
      await api.delete(`/matches/${matchId}/mensagens`, { headers: tokenHeader() });
      setMensagens([]);
    } catch (err) {
      console.error('Erro ao apagar conversa:', err);
      alert('Não foi possível apagar a conversa. Tente novamente.');
    }
  };

  return (
    <MainContainer>
      <Sidebar />
      <ContentArea>
        <Banner>
          <h1>Centro de Notificações</h1>
        </Banner>

        <NotificationsWrapper>
          <div className="header-actions">
            <h2>Suas conexões</h2>
          </div>

          <CategoryFilter>
            <button
              className={aba === 'recebidos' ? 'active' : ''}
              onClick={() => setAba('recebidos')}
            >
              Recebidos {recebidos.length > 0 && `(${recebidos.length})`}
            </button>
            <button
              className={aba === 'confirmados' ? 'active' : ''}
              onClick={() => setAba('confirmados')}
            >
              Meus matches {confirmados.length > 0 && `(${confirmados.length})`}
            </button>
          </CategoryFilter>

          {carregando ? (
            <EmptyState>
              <p>Carregando...</p>
            </EmptyState>
          ) : aba === 'recebidos' ? (
            recebidos.length > 0 ? (
              recebidos.map((r) => (
                <RequestCard key={r.id}>
                  <img
                    src={resolverFotoUrl(r.foto_url) || UsuarioImg}
                    alt={r.nome}
                    onClick={() => setPerfilSelecionado(r)}
                    style={{ cursor: 'pointer' }}
                  />
                  <div className="info">
                    <h3>{r.nome}</h3>
                    <p>
                      {r.cargo} {r.curso && `· ${r.curso}`} {r.instituicao && `· ${r.instituicao}`}
                    </p>
                    {r.destino && <span className="destino">Quer ir para: {r.destino}</span>}
                  </div>
                  <div className="acoes">
                    <button className="aceitar" onClick={() => responder(r.id, 'aceitar')}>
                      <Check size={16} /> Aceitar
                    </button>
                    <button className="recusar" onClick={() => responder(r.id, 'recusar')}>
                      <X size={16} /> Recusar
                    </button>
                  </div>
                </RequestCard>
              ))
            ) : (
              <EmptyState>
                <Bell size={48} />
                <p>Nenhuma solicitação pendente no momento.</p>
              </EmptyState>
            )
          ) : confirmados.length > 0 ? (
            confirmados.map((m) => (
              <React.Fragment key={m.matchId}>
                <RequestCard destaque={m.naoLidas > 0}>
                  <img
                    src={resolverFotoUrl(m.foto_url) || UsuarioImg}
                    alt={m.nome}
                    onClick={() => setPerfilSelecionado(m)}
                    style={{ cursor: 'pointer' }}
                  />
                  <div className="info">
                    <h3>
                      {m.nome}
                      {m.naoLidas > 0 && (
                        <span className="bolinha-nao-lida">{m.naoLidas}</span>
                      )}
                    </h3>
                    <p>
                      {m.cargo} {m.curso && `· ${m.curso}`} {m.instituicao && `· ${m.instituicao}`}
                    </p>
                    <span className="destino email-contato">{m.email}</span>
                    {m.naoLidas > 0 && (
                      <span className="aviso-nova-mensagem">
                        {m.naoLidas === 1 ? 'Nova mensagem' : `${m.naoLidas} novas mensagens`}
                      </span>
                    )}
                  </div>
                  <div className="acoes">
                    <button className="conversar" onClick={() => abrirConversa(m.matchId)}>
                      <MessageCircle size={16} />
                      {conversaAberta === m.matchId ? 'Fechar' : 'Conversar'}
                    </button>
                  </div>
                </RequestCard>

                {conversaAberta === m.matchId && (
                  <ChatPanel>
                    <div className="cabecalho-chat">
                      <span>Conversa</span>
                      <button
                        className="apagar-conversa"
                        onClick={() => apagarConversa(m.matchId)}
                        title="Apagar conversa"
                      >
                        <Trash2 size={14} /> Apagar conversa
                      </button>
                    </div>
                    <div className="mensagens">
                      {mensagens.length === 0 ? (
                        <p className="vazio">Nenhuma mensagem ainda. Diga oi!</p>
                      ) : (
                        mensagens.map((msg) => (
                          <MessageBubble key={msg.id} deVoce={msg.deVoce}>
                            {msg.texto}
                          </MessageBubble>
                        ))
                      )}
                    </div>
                    <MessageInputRow>
                      <input
                        type="text"
                        placeholder="Escreva uma mensagem..."
                        value={novaMensagem}
                        onChange={(e) => setNovaMensagem(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && enviarMensagem()}
                      />
                      <button onClick={enviarMensagem}>
                        <Send size={18} />
                      </button>
                    </MessageInputRow>
                  </ChatPanel>
                )}
              </React.Fragment>
            ))
          ) : (
            <EmptyState>
              <Bell size={48} />
              <p>Você ainda não tem nenhum match confirmado.</p>
            </EmptyState>
          )}
        </NotificationsWrapper>
      </ContentArea>

      {perfilSelecionado && (
        <PerfilModal user={perfilSelecionado} onClose={() => setPerfilSelecionado(null)} />
      )}
    </MainContainer>
  );
}