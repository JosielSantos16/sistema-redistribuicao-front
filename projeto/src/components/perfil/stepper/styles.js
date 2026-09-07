import styled from 'styled-components';

export const StepperContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 35px;

  .line {
    flex: 0 0 150px;
    height: 1px;
    background-color: #e2e8f0;
  }
`;

export const Step = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .circle {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: ${props => props.active ? '#FF6600' : 'white'};
    color: ${props => props.active ? 'white' : '#cbd5e0'};
    border: 1px solid ${props => props.active ? '#FF6600' : '#e2e8f0'};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 14px;
    transition: all 0.2s ease;
  }

  span {
    font-size: 13px;
    font-weight: 600;
    color: ${props => props.active ? '#001858' : '#cbd5e0'};
  }
`;