import styled from 'styled-components';

export const PageLayout = styled.div`
  display: flex;
  background-color: #f4f7fa;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 40px 60px;
  min-width: 0;
  h1 { color: #001858; margin-bottom: 30px; font-size: 24px; }

  @media (max-width: 1200px) {
    padding: 32px 40px;
  }

  @media (max-width: 900px) {
    /* padding-top maior pra não ficar embaixo do botão hambúrguer fixo */
    padding: 90px 24px 24px;
    h1 { font-size: 20px; margin-bottom: 20px; }
  }

  @media (max-width: 480px) {
    padding: 84px 16px 16px;
  }
`;

export const HeaderRow = styled.header`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const SyncButton = styled.button`
  background-color: #FF6600;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.7 : 1};
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  white-space: nowrap;

  @media (max-width: 700px) {
    width: 100%;
    padding: 12px 20px;
  }
`;

export const PaginationBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 32px;

  span {
    font-size: 14px;
    color: #718096;
    font-weight: 500;
  }

  button {
    background: white;
    border: 1px solid #e2e8f0;
    padding: 8px 20px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    color: #001858;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover:not(:disabled) {
      background: #FF6600;
      color: white;
      border-color: #FF6600;
    }

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }
`;

export const EditalCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  border-left: 6px solid #ff6b00;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .info {
    h3 { color: #001858; font-size: 18px; margin: 0; }
    .title { font-weight: 700; color: #2d3748; margin: 5px 0; }
    .desc { font-size: 14px; color: #718096; }
    .date { font-size: 12px; color: #a0aec0; margin-top: 8px; display: block; }
  }

  .btn-acesso {
    background: #f0f4f8;
    color: #3182ce;
    padding: 10px 15px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    font-size: 13px;
    display: flex;
    align-items: center;
    gap: 8px;
    &:hover { background: #e2e8f0; }
  }
`;