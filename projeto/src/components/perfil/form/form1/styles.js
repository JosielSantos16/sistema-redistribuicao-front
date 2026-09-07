import styled from 'styled-components';

export const FormSection = styled.div`
  width: 100%;
  h3 {
    font-family: var(--fonte-display, inherit);
    font-size: 24px;
    color: #001858;
    margin-bottom: 8px;
    font-weight: 600;
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
  &.interesse { grid-column: span 12; }
  &.estadoDestino { grid-column: span 6; }

  @media (max-width: 640px) {
    &.lattes, &.instituicao, &.departamento, &.curso, &.cargo, &.estadoDestino {
      grid-column: span 12;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  background-color: #fff;

  &:focus {
    border: 2px solid #FF6600; 
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
  background-color: #FF6600;
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

// Toggle "Tenho interesse em redistribuição/remoção" — controla se o
// campo de estado de destino aparece, e é o que preenche
// User.interesse_redistribuicao no backend.
export const ToggleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;

  .toggle-label {
    font-size: 14px;
    font-weight: 600;
    color: #333333;
  }
`;

export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  flex-shrink: 0;
  cursor: pointer;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    inset: 0;
    background-color: #cbd5e0;
    transition: 0.2s;
    border-radius: 24px;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      height: 18px;
      width: 18px;
      left: 3px;
      bottom: 3px;
      background-color: white;
      transition: 0.2s;
      border-radius: 50%;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }
  }

  input:checked + .slider {
    background-color: #FF6600;
  }

  input:checked + .slider::before {
    transform: translateX(20px);
  }
`;