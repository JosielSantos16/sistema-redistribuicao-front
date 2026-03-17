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