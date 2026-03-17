import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { 
  User, Lock, Bell, Eye, MapPin, 
  Download, Trash2, ShieldCheck, Mail 
} from 'lucide-react';
import { 
  MainContainer, ContentArea, Banner, SettingsGrid, 
  SettingCard, ActionButton, ToggleSwitch, StatusBadge 
} from './styles';

export default function Configuracoes() {
  const [matchNotify, setMatchNotify] = useState(true);
  const [mapVisible, setMapVisible] = useState(true);

  return (
    <MainContainer>
      <Sidebar />
      <ContentArea>
        <Banner>
          <h1>Configurações do Sistema</h1>
        </Banner>

        <SettingsGrid>
          {/* CARD: SEGURANÇA E ACESSO */}
          <SettingCard>
            <div className="card-header">
              <Lock size={20} />
              <h2>Segurança da Conta</h2>
            </div>
            <div className="form-group">
              <label>E-mail Institucional</label>
              <input type="text" value="josiel.prof@ufopa.edu.br" disabled />
              <StatusBadge>E-mail Verificado</StatusBadge>
              
              <label>Nova Senha</label>
              <input type="password" placeholder="Digite para alterar" />
            </div>
            <ActionButton>Atualizar Credenciais</ActionButton>
          </SettingCard>

          {/* CARD: VISIBILIDADE NO MAPA (O CORE DO WOLF) */}
          <SettingCard>
            <div className="card-header">
              <MapPin size={20} />
              <h2>Privacidade no Mapa</h2>
            </div>
            <p className="description">Defina como outros docentes visualizam seu interesse de remoção.</p>
            
            <div className="toggle-item">
              <div>
                <strong>Modo Público</strong>
                <p>Seu perfil aparece nas buscas de permuta.</p>
              </div>
              <ToggleSwitch active={mapVisible} onClick={() => setMapVisible(!mapVisible)} />
            </div>

            <div className="form-group" style={{marginTop: '15px'}}>
              <label>Raio de busca automática (km)</label>
              <select>
                <option>50 km</option>
                <option>100 km</option>
                <option>Todo o Brasil</option>
              </select>
            </div>
            <ActionButton className="orange">Salvar Localização</ActionButton>
          </SettingCard>

          {/* CARD: NOTIFICAÇÕES DE MATCH */}
          <SettingCard>
            <div className="card-header">
              <Bell size={20} />
              <h2>Alertas de Match</h2>
            </div>
            <div className="toggle-item">
              <div>
                <strong>Avisar por E-mail</strong>
                <p>Notificar quando houver docente compatível.</p>
              </div>
              <ToggleSwitch active={matchNotify} onClick={() => setMatchNotify(!matchNotify)} />
            </div>
            <div className="toggle-item">
              <div>
                <strong>Alertas no Navegador</strong>
                <p>Exibir pop-ups de novas mensagens.</p>
              </div>
              <ToggleSwitch active={false} />
            </div>
          </SettingCard>

          {/* CARD: PRIVACIDADE E DADOS (LGPD) */}
          <SettingCard>
            <div className="card-header">
              <ShieldCheck size={20} />
              <h2>Seus Dados e LGPD</h2>
            </div>
            <p className="description">O WOLF respeita sua privacidade. Baixe seus dados ou encerre sua conta.</p>
            <div className="action-row">
              <button className="outline-btn"><Download size={16}/> Exportar Dados</button>
              <button className="danger-btn"><Trash2 size={16}/> Excluir Conta</button>
            </div>
          </SettingCard>
        </SettingsGrid>
      </ContentArea>
    </MainContainer>
  );
}