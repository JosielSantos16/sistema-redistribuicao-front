import styled from 'styled-components';

export const EditalContainer = styled.div`
  background: white;
  border-radius: 4px;
  padding: 20px 25px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #001858; 
`;

export const EditalMain = styled.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;

  .icon-wrapper {
    margin-top: 4px;
    color: #001858;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;

    h3 {
      margin: 0;
      font-size: 16px;
      color: #001858;
      font-weight: 700;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .description {
      margin: 0;
      font-size: 13px;
      color: #718096;
    }
  }
`;

export const PeriodoTag = styled.span`
  background-color: #cbd5e0; 
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 11px;
  font-style: italic;
  width: fit-content;
  font-weight: 500;
`;

export const BotaoAcesso = styled.a`
  background-color: #001858;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;