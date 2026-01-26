import styled from 'styled-components';

export const Div = styled.div`
  flex: 0 1 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -100px;

  h1 {
    color: #001858;
    font-size: 45px;
    font-weight: 800;
    margin-bottom: 24px;
    line-height: 1.1;
    letter-spacing: 0.5px;
  }

  p {
    color: #444;
    width: 100%;
    max-width: 600px; 
    font-size: 20px;
    margin-bottom: 40px;
    line-height: 1.5; 
  }
`;

export const WelcomeBadge = styled.span`
  background-color: #536791;
  color: white;
  padding: 6px 14px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  width: fit-content;
  margin-bottom: 15px; 
  display: inline-block;
`;

export const MarkerBadge = styled.div`
  background: #FF6600;
  color: white;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: bold;
  flex-shrink: 0;
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 35px;
`;

export const Button = styled.button`
  padding: 14px 45px;
  border-radius: 6px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  color: white;
  background-color: ${props => props.variant === 'orange' ? '#FF6B00' : '#001858'};
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-2px);
  }
`;

export const LegendGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding-left: 15px;
  border-left: 4px solid ${props => props.borderColor || '#eee'};

  span {
    font-size: 15px; 
    max-width: 280px;
    color: #555; 
    line-height: 1.4;
  }
`;

export const OrangeCircle = styled.div`
  background: #ff6b00;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 2px;
`;