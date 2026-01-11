import styled from 'styled-components';

export const Div = styled.div`
  flex: 0 1 650px; 

  h1 {
    color: #001858;
    font-size: 45px;
    font-weight: 800;
    margin-bottom: 24px;
    line-height: 1.1;
    margin-top: -200px;
    letter-spacing: 0.5px; 
  }

  p {
    color: #444;
    width: 100%;
    max-width: 600px; 
    font-size: 20px;
    margin-bottom: 48px;
    line-height: 1.6; 
    letter-spacing: 0.2px; 
  }
`;

export const LegendGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding-left: 15px;
  border-left: 4px solid ${props => props.borderColor || '#eee'};

  span {
    font-size: 16px; 
    max-width: 300px;
    color: #555; 
    line-height: 1.4;
    font-weight: 500; 
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