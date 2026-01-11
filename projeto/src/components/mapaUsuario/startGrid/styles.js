import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin-top: auto; 
  padding-top: 40px;
`;

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid rgba(0,0,0,0.05);
  box-shadow: 0 4px 15px rgba(0,0,0,0.04);

  .badge {
    position: absolute;
    top: -27px;
    background: white;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 700;
    color: #001858;
    border: 1px solid #eee;
    box-shadow: 0 4px 8px rgba(0,0,0,0.08);
  }

  span {
    font-size: 12px;
    color: #777;
    margin-top: 25px;
    font-weight: 500;
  }
`;