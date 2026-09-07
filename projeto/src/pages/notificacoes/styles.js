import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  background-color: #f1f5f9;
  min-height: 100vh;
`;

export const ContentArea = styled.div` flex: 1; `;

export const Banner = styled.div`
  height: 180px;
  background: linear-gradient(rgba(0, 24, 88, 0.85), rgba(0, 24, 88, 0.85)), 
              url('https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  display: flex; align-items: center; justify-content: center;
  h1 { color: white; font-size: 2rem; font-weight: bold; text-transform: uppercase; }
`;

export const NotificationsWrapper = styled.div`
  max-width: 900px;
  margin: -30px auto 40px;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);

  .header-actions {
    display: flex; justify-content: space-between; align-items: center;
    margin-bottom: 25px;
    h2 { color: #001858; font-size: 1.4rem; }
    button { background: none; border: none; color: #ff6600; font-weight: 600; cursor: pointer; }
  }
`;

export const CategoryFilter = styled.div`
  display: flex; gap: 10px; margin-bottom: 20px;
  button {
    padding: 8px 18px; border-radius: 20px; border: 1px solid #e2e8f0;
    background: white; color: #64748b; cursor: pointer;
    &.active { background: #001858; color: white; border-color: #001858; }
  }
`;

export const NotificationItem = styled.div`
  display: flex; align-items: center; gap: 20px;
  padding: 20px; border-radius: 8px; margin-bottom: 12px;
  background: ${props => props.unread ? '#f8fafc' : 'white'};
  border-left: 5px solid ${props => {
    if (props.type === 'match') return '#ff6600';
    if (props.type === 'edital') return '#001858';
    return '#10b981';
  }};
  transition: transform 0.2s;

  &:hover { transform: translateX(5px); }

  .icon-area {
    background: #f1f5f9; padding: 10px; border-radius: 50%; color: #001858;
  }

  .content-area {
    flex: 1;
    .title-row {
      display: flex; justify-content: space-between;
      h3 { font-size: 1rem; color: #1e293b; font-weight: 700; }
      span { font-size: 0.75rem; color: #94a3b8; }
    }
    p { font-size: 0.9rem; color: #64748b; margin-top: 4px; }
  }

  .delete-btn {
    background: none; border: none; color: #cbd5e1; cursor: pointer;
    &:hover { color: #ef4444; }
  }
`;

export const EmptyState = styled.div`
  text-align: center; padding: 60px 0; color: #94a3b8;
  p { margin-top: 15px; font-size: 1.1rem; }
`;

export const RequestCard = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 18px 20px;
  border-radius: 10px;
  border: 1px solid ${props => props.destaque ? '#FF6600' : '#eef2f6'};
  background: ${props => props.destaque ? '#fff8f2' : '#f8fafc'};
  margin-bottom: 12px;

  img {
    width: 54px;
    height: 54px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #001858;
    flex-shrink: 0;
  }

  .info {
    flex: 1;
    min-width: 0;

    h3 {
      font-size: 15px;
      color: #1e293b;
      font-weight: 700;
      margin: 0 0 2px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    p { font-size: 13px; color: #64748b; margin: 0; }
    .destino {
      display: inline-block;
      margin-top: 6px;
      font-size: 12px;
      font-weight: 600;
      color: #FF6600;
    }
    .email-contato {
      color: #16a34a;
      font-weight: 700;
    }
    .bolinha-nao-lida {
      background: #FF6600;
      color: white;
      font-size: 11px;
      font-weight: 700;
      min-width: 18px;
      height: 18px;
      border-radius: 9px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0 5px;
    }
    .aviso-nova-mensagem {
      display: block;
      margin-top: 4px;
      font-size: 12px;
      font-weight: 700;
      color: #FF6600;
    }
  }

  .acoes {
    display: flex;
    gap: 8px;
    flex-shrink: 0;

    button {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 8px 14px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      border: none;
      transition: all 0.15s ease;
    }

    .aceitar {
      background: #001858;
      color: white;
      &:hover { filter: brightness(1.15); }
    }
    .recusar {
      background: white;
      color: #64748b;
      border: 1px solid #e2e8f0;
      &:hover { color: #ef4444; border-color: #ef4444; }
    }
    .conversar {
      background: #FF6600;
      color: white;
      &:hover { filter: brightness(1.1); }
    }
  }

  @media (max-width: 600px) {
    flex-wrap: wrap;
    .acoes { width: 100%; justify-content: flex-end; }
  }
`;

export const ChatPanel = styled.div`
  margin: -6px 0 16px;
  padding: 16px;
  background: white;
  border: 1px solid #eef2f6;
  border-top: none;
  border-radius: 0 0 10px 10px;

  .cabecalho-chat {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #f1f5f9;

    span {
      font-size: 12px;
      font-weight: 700;
      color: #94a3b8;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .apagar-conversa {
      display: flex;
      align-items: center;
      gap: 4px;
      background: none;
      border: none;
      color: #cbd5e1;
      font-size: 12px;
      cursor: pointer;

      &:hover { color: #ef4444; }
    }
  }

  .mensagens {
    max-height: 260px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 12px;
    padding: 4px;

    .vazio {
      text-align: center;
      color: #a0aec0;
      font-size: 13px;
      padding: 20px 0;
    }
  }
`;

export const MessageBubble = styled.div`
  align-self: ${props => props.deVoce ? 'flex-end' : 'flex-start'};
  background: ${props => props.deVoce ? '#FF6600' : '#f1f5f9'};
  color: ${props => props.deVoce ? 'white' : '#1e293b'};
  padding: 8px 14px;
  border-radius: 14px;
  font-size: 13px;
  max-width: 75%;
  word-break: break-word;
`;

export const MessageInputRow = styled.div`
  display: flex;
  gap: 8px;

  input {
    flex: 1;
    padding: 10px 14px;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    font-size: 13px;

    &:focus { outline: none; border-color: #FF6600; }
  }

  button {
    background: #001858;
    color: white;
    border: none;
    width: 40px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover { filter: brightness(1.15); }
  }
`;