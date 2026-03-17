import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { Bell, MessageSquare, FileText, CheckCircle, Trash2 } from 'lucide-react';
import { 
  MainContainer, 
  ContentArea, 
  Banner, 
  NotificationsWrapper, 
  NotificationItem,
  CategoryFilter,
  EmptyState 
} from './styles';

export default function Notificacoes() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'match',
      title: 'Novo Match Encontrado!',
      desc: 'Um docente da UFPA tem interesse em redistribuição para Oriximiná.',
      date: 'Há 5 minutos',
      unread: true
    },
    {
      id: 2,
      type: 'edital',
      title: 'Novo Edital Publicado',
      desc: 'O IFPA publicou um novo edital de remoção para EBTT.',
      date: 'Há 2 horas',
      unread: true
    },
    {
      id: 3,
      type: 'sistema',
      title: 'Perfil Verificado',
      desc: 'Seus dados acadêmicos foram validados com sucesso.',
      date: 'Ontem',
      unread: false
    }
  ]);

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
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
            <h2>Suas atualizações</h2>
            <button onClick={markAllRead}>Marcar todas como lidas</button>
          </div>

          <CategoryFilter>
            <button className="active">Todas</button>
            <button>Matches</button>
            <button>Editais</button>
          </CategoryFilter>

          {notifications.length > 0 ? (
            notifications.map(n => (
              <NotificationItem key={n.id} unread={n.unread} type={n.type}>
                <div className="icon-area">
                  {n.type === 'match' && <MessageSquare size={20} />}
                  {n.type === 'edital' && <FileText size={20} />}
                  {n.type === 'sistema' && <CheckCircle size={20} />}
                </div>
                
                <div className="content-area">
                  <div className="title-row">
                    <h3>{n.title}</h3>
                    <span>{n.date}</span>
                  </div>
                  <p>{n.desc}</p>
                </div>

                <div className="actions">
                  <button className="delete-btn"><Trash2 size={18} /></button>
                </div>
              </NotificationItem>
            ))
          ) : (
            <EmptyState>
              <Bell size={48} />
              <p>Você não tem novas notificações no momento.</p>
            </EmptyState>
          )}
        </NotificationsWrapper>
      </ContentArea>
    </MainContainer>
  );
}