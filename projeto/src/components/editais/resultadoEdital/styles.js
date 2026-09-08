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

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
  }
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
      font-family: var(--fonte-corpo, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif);
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

  &.data-real {
    background-color: #16a34a;
    font-style: normal;
    font-weight: 700;
  }
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
  justify-content: center;
  gap: 10px;
  transition: opacity 0.2s;
  flex-shrink: 0;

  &:hover {
    opacity: 0.9;
  }

  &.indisponivel {
    background-color: #edf2f7;
    color: #a0aec0;
    cursor: not-allowed;
  }

  &.indisponivel:hover {
    opacity: 1;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;