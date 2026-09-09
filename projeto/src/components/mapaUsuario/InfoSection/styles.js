import styled from 'styled-components';

export const Div = styled.div`
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-family: var(--fonte-display);
    color: #001858;
    font-size: 50px;
    font-weight: 600;
    margin-bottom: 22px;
    line-height: 1.08;
    letter-spacing: -0.5px;
  }

  p {
    color: var(--cor-texto);
    width: 100%;
    max-width: 540px; 
    font-size: 19px;
    margin-bottom: 36px;
    line-height: 1.55; 
  }

  @media (max-width: 900px) {
    h1 { font-size: 38px; }
    p { font-size: 16px; max-width: 100%; }
  }

  @media (max-width: 420px) {
    h1 { font-size: 30px; }
  }
`;

export const WelcomeBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #FFFFFF;
  color: #001858;
  padding: 8px 16px 8px 12px;
  border-radius: 30px;
  font-size: 13px;
  font-weight: 700;
  width: fit-content;
  margin-bottom: 20px; 
  box-shadow: 0 2px 10px rgba(0, 24, 88, 0.08);

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #FF6600;
    flex-shrink: 0;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  padding: 15px 38px;
  border-radius: 10px;
  font-family: var(--fonte-corpo);
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  color: white;
  background-color: ${props => props.variant === 'orange' ? '#FF6600' : '#001858'};
  box-shadow: ${props => props.variant === 'orange'
    ? '0 6px 18px rgba(255, 102, 0, 0.28)'
    : '0 6px 18px rgba(0, 24, 88, 0.22)'};
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(1.12);
    transform: translateY(-2px);
  }
`;

export const LegendGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 8px;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;

  span {
    font-size: 14px; 
    max-width: 240px;
    color: var(--cor-texto-suave); 
    line-height: 1.4;
    padding-top: 6px;
  }
`;

export const IconChip = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: ${props => props.tone === 'orange' ? '#FFEDDD' : '#E9EDF9'};
  color: ${props => props.tone === 'orange' ? '#FF6600' : '#001858'};

  strong {
    font-family: var(--fonte-display);
    font-size: 15px;
  }
`;