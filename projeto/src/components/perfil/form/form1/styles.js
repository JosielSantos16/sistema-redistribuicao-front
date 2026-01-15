import styled from 'styled-components';

export const FormSection = styled.div`
  width: 100%;
  h3 {
    font-size: 24px;
    color: #1a202c;
    margin-bottom: 8px;
    font-weight: 700;
  }
  p {
    font-size: 14px;
    color: #718096;
    margin-bottom: 30px;
  }
`;

export const FormGrid = styled.div`
  display: grid;
  gap: 20px;
  width: 100%;
  grid-template-columns: repeat(12, 1fr);
`;

export const GridItem = styled.div`
  &.lattes { grid-column: span 4; }
  &.instituicao { grid-column: span 8; }
  &.departamento { grid-column: span 7; }
  &.curso { grid-column: span 5; }
  &.cargo { grid-column: span 6; }
  &.preferencias { grid-column: span 6; }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 14px;
  background-color: #fff;

  &:focus {
    border: 2px solid #3182ce; 
    outline: none;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;

  select {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    font-size: 14px;
    background-color: #f3f4f6; 
    appearance: none;
    color: #4a5568;
    cursor: pointer;
  }

  .arrow {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    color: #718096;
  }
`;

export const AddButton = styled.button`
  background-color: #ff6b00;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 700;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  margin-left: auto; 
  margin-top: 10px;
`;