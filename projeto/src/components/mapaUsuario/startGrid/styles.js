import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin-top: auto; 
  padding-top: 44px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    padding-top: 36px;
  }

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: white;
  border-radius: 12px;
  height: 122px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid rgba(0, 24, 88, 0.06);
  box-shadow: 0 8px 24px rgba(0, 24, 88, 0.06);

  .badge {
    position: absolute;
    top: -26px;
    background: white;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--fonte-display);
    font-size: 19px;
    font-weight: 600;
    color: #001858;
    border: 1px solid rgba(0, 24, 88, 0.08);
    box-shadow: 0 6px 14px rgba(0, 24, 88, 0.12);
  }

  span {
    font-size: 12.5px;
    color: var(--cor-texto-suave);
    margin-top: 26px;
    font-weight: 600;
    text-align: center;
    padding: 0 12px;
  }
`;