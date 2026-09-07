import styled from 'styled-components';

export const PageLayout = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f4f7fa;
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 40px 60px;
  min-width: 0; 

  h1 { color: #001858; margin-bottom: 30px; font-size: 24px; }
  h2 { margin-top: 40px; margin-bottom: 20px; font-size: 20px; color: #1a202c; }

  @media (max-width: 900px) {
    padding: 90px 24px 24px;

    h1 { font-size: 20px; margin-bottom: 20px; }
  }

  @media (max-width: 480px) {
    padding: 84px 16px 16px;
  }
`;

export const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 25px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const EmptyState = styled.div`
  margin-top: 40px;
  padding: 30px;
  text-align: center;
  background: white;
  border-radius: 12px;
  border: 1px dashed #cbd5e0;
  color: #718096;
  font-size: 15px;
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