import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { 
  User, Lock, Bell, MapPin, 
  Download, Trash2, ShieldCheck, Mail 
} from 'lucide-react';
import { 
  MainContainer, ContentArea, Banner, SettingsGrid, 
  SettingCard, ActionButton, ToggleSwitch, StatusBadge, StatusMessage
} from './styles';

function tokenHeader() {
  const token = localStorage.getItem('@Wolf:token');
  return { Authorization: `Bearer ${token}` };
}

export default function Configuracoes() {
  const navigate = useNavigate();

  const [carregando, setCarregando] = useState(true);
  const [email, setEmail] = useState('');

  const [visivelBusca, setVisivelBusca] = useState(true);
  const [notificarMatch, setNotificarMatch] = useState(true);
  const [notificarEdital, setNotificarEdital] = useState(true);

  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [salvandoSenha, setSalvandoSenha] = useState(false);
  const [msgSenha, setMsgSenha] = useState(null);

  const [exportando, setExportando] = useState(false);
  const [excluindo, setExcluindo] = useState(false);
  const [msgLgpd, setMsgLgpd] = useState(null);

  useEffect(() => {
    async function carregar() {
      try {
        const { data } = await api.get('/profile', { headers: tokenHeader() });
        setEmail(data.email || '');
        setVisivelBusca(data.visivel_busca !== false);
        setNotificarMatch(data.notificar_email_match !== false);
        setNotificarEdital(data.notificar_email_edital !== false);
      } catch (err) {
        console.error('Erro ao carregar configurações:', err);
      } finally {
        setCarregando(false);
      }
    }
    carregar();
  }, []);

  const salvarPreferencia = async (campo, valor) => {
    try {
      await api.put('/profile/configuracoes', { [campo]: valor }, { headers: tokenHeader() });
    } catch (err) {
      console.error('Erro ao salvar preferência:', err);
      alert('Não foi possível salvar essa preferência. Tente novamente.');
    }
  };

  const toggleVisivel = () => {
    const novo = !visivelBusca;
    setVisivelBusca(novo);
    salvarPreferencia('visivel_busca', novo);
  };

  const toggleNotificarMatch = () => {
    const novo = !notificarMatch;
    setNotificarMatch(novo);
    salvarPreferencia('notificar_email_match', novo);
  };

  const toggleNotificarEdital = () => {
    const novo = !notificarEdital;
    setNotificarEdital(novo);
    salvarPreferencia('notificar_email_edital', novo);
  };

  const handleAtualizarSenha = async (e) => {
    e.preventDefault();
    setMsgSenha(null);

    if (!senhaAtual || !novaSenha) {
      setMsgSenha({ tipo: 'erro', texto: 'Preencha a senha atual e a nova senha.' });
      return;
    }

    setSalvandoSenha(true);
    try {
      await api.put('/profile/senha', { senhaAtual, novaSenha }, { headers: tokenHeader() });
      setMsgSenha({ tipo: 'ok', texto: 'Senha atualizada com sucesso!' });
      setSenhaAtual('');
      setNovaSenha('');
    } catch (err) {
      setMsgSenha({ tipo: 'erro', texto: err.response?.data?.error || 'Erro ao atualizar senha.' });
    } finally {
      setSalvandoSenha(false);
    }
  };

  const handleExportar = async () => {
    setExportando(true);
    setMsgLgpd(null);
    try {
      const { data } = await api.get('/profile/exportar', { headers: tokenHeader() });
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'meus-dados-wolf.json';
      link.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Erro ao exportar dados:', err);
      setMsgLgpd({ tipo: 'erro', texto: 'Não foi possível exportar seus dados.' });
    } finally {
      setExportando(false);
    }
  };

  const handleExcluir = async () => {
    const senha = window.prompt(
      'Essa ação é irreversível: seus dados de identificação serão anonimizados e você não conseguirá mais entrar na conta.\n\nDigite sua senha atual para confirmar:'
    );
    if (!senha) return;

    setExcluindo(true);
    setMsgLgpd(null);
    try {
      await api.delete('/profile', { headers: tokenHeader(), data: { senha } });
      localStorage.removeItem('@Wolf:token');
      localStorage.removeItem('@Wolf:perfilCache');
      navigate('/');
    } catch (err) {
      setMsgLgpd({ tipo: 'erro', texto: err.response?.data?.error || 'Não foi possível excluir a conta.' });
    } finally {
      setExcluindo(false);
    }
  };

  if (carregando) {
    return (
      <MainContainer>
        <Sidebar />
        <ContentArea>
          <p style={{ padding: 40, color: '#64748b' }}>Carregando configurações...</p>
        </ContentArea>
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      <Sidebar />
      <ContentArea>
        <Banner>
          <h1>Configurações do Sistema</h1>
        </Banner>

        <SettingsGrid>

          <SettingCard as="form" onSubmit={handleAtualizarSenha}>
            <div className="card-header">
              <Lock size={20} />
              <h2>Segurança da Conta</h2>
            </div>
            <div className="form-group">
              <label>E-mail</label>
              <input type="text" value={email} disabled />
              <StatusBadge>E-mail Verificado</StatusBadge>

              <label>Senha atual</label>
              <input
                type="password"
                placeholder="Digite sua senha atual"
                value={senhaAtual}
                onChange={(e) => setSenhaAtual(e.target.value)}
              />

              <label>Nova Senha</label>
              <input
                type="password"
                placeholder="Mínimo 8 caracteres, com letras e números"
                value={novaSenha}
                onChange={(e) => setNovaSenha(e.target.value)}
              />
            </div>
            {msgSenha && <StatusMessage tipo={msgSenha.tipo}>{msgSenha.texto}</StatusMessage>}
            <ActionButton type="submit" disabled={salvandoSenha} style={{ marginTop: 12 }}>
              {salvandoSenha ? 'Salvando...' : 'Atualizar Credenciais'}
            </ActionButton>
          </SettingCard>

          <SettingCard>
            <div className="card-header">
              <MapPin size={20} />
              <h2>Privacidade na Busca</h2>
            </div>
            <p className="description">Defina se outros docentes conseguem te encontrar na Busca de Perfis.</p>
            
            <div className="toggle-item">
              <div>
                <strong>Modo Público</strong>
                <p>Seu perfil aparece nas buscas de outros usuários.</p>
              </div>
              <ToggleSwitch active={visivelBusca} onClick={toggleVisivel} />
            </div>
          </SettingCard>

          <SettingCard>
            <div className="card-header">
              <Bell size={20} />
              <h2>Alertas por E-mail</h2>
            </div>
            <div className="toggle-item">
              <div>
                <strong>Pedidos de Match</strong>
                <p>Avisar quando alguém demonstrar interesse ou aceitar seu pedido.</p>
              </div>
              <ToggleSwitch active={notificarMatch} onClick={toggleNotificarMatch} />
            </div>
            <div className="toggle-item">
              <div>
                <strong>Editais Novos</strong>
                <p>Avisar quando surgir um edital novo pro seu estado/instituição.</p>
              </div>
              <ToggleSwitch active={notificarEdital} onClick={toggleNotificarEdital} />
            </div>
          </SettingCard>

          <SettingCard>
            <div className="card-header">
              <ShieldCheck size={20} />
              <h2>Seus Dados e LGPD</h2>
            </div>
            <p className="description">O WOLF respeita sua privacidade. Baixe seus dados ou encerre sua conta.</p>
            <div className="action-row">
              <button type="button" className="outline-btn" onClick={handleExportar} disabled={exportando}>
                <Download size={16}/> {exportando ? 'Exportando...' : 'Exportar Dados'}
              </button>
              <button type="button" className="danger-btn" onClick={handleExcluir} disabled={excluindo}>
                <Trash2 size={16}/> {excluindo ? 'Excluindo...' : 'Excluir Conta'}
              </button>
            </div>
            {msgLgpd && <StatusMessage tipo={msgLgpd.tipo}>{msgLgpd.texto}</StatusMessage>}
          </SettingCard>
        </SettingsGrid>
      </ContentArea>
    </MainContainer>
  );
}