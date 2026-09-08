import styled from 'styled-components';

export const FilterBar = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  margin-bottom: 30px;

  .header {
    background-color: #001858;
    color: white;
    padding: 10px 20px;
    font-weight: 600;
    border-radius: 8px 8px 0 0;
  }
`;

export const FilterGrid = styled.div`
  display: flex;
  padding: 20px;
  gap: 15px;
  align-items: center;
  flex-wrap: wrap;

  select {
    flex: 1;
    padding: 10px 15px;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    background: #fff;
    font-size: 14px;
  }

  button {
    background-color: #ff6b00;
    color: white;
    padding: 10px 25px;
    border-radius: 6px;
    border: none;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    &:hover { background-color: #e65a00; }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: stretch;
    padding: 16px;

    > div {
      width: 100%;
    }

    select, button, > div:last-child {
      width: 100%;
    }

    > div:last-child {
      display: flex;
      gap: 10px;

      button {
        flex: 1;
      }
    }
  }
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  padding: 5px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  background: white;
  min-height: 45px;
  width: 100%;

  input {
    border: none !important;
    flex: 1;
    outline: none;
    min-width: 150px;
    height: 30px;
    font-size: 14px;
  }
`;

export const Tag = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: ${props => props.bgColor || '#001858'}; 
  color: white;
  padding: 6px 14px;
  border-radius: 20px; 
  font-size: 12px;
  font-weight: 700;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-transform: uppercase;

  svg {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    padding: 2px;
    
    &:hover { 
      background: rgba(255, 255, 255, 0.4);
    }
  }
`;

export const SuggestionsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #e2e8f0;
  list-style: none;
  z-index: 100;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;