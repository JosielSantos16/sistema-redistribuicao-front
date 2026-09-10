import styled from "styled-components";

export const MapContainer = styled.div`
  flex: 1;
  min-width: 0; 
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden; 

  &::before {
    content: '';
    position: absolute;
    inset: -10%;
    background: radial-gradient(circle at 55% 45%, rgba(0, 24, 88, 0.06), transparent 65%);
    pointer-events: none;
    z-index: 0;
  }

  @media (max-width: 900px) {
    flex: none;
    width: 100%;
    order: 1;
  }
`;

export const MapContent = styled.div`
  position: relative; 
  width: 100%;
  max-width: 750px; 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  @media (max-width: 900px) {
    max-width: 420px;
    margin-top: 8px;
  }

  @media (max-width: 480px) {
    max-width: 320px;
  }

  svg {
    width: 100%;
    height: auto;
    filter: drop-shadow(0px 24px 48px rgba(0, 24, 88, 0.16));

    path {
      fill: #001858;
      stroke: #f5faff;
      stroke-width: 0.7;
      stroke-linejoin: round;
      transition: all 0.3s ease;

      &:hover {
        fill: #003399;
        cursor: pointer;
      }
    }
  }
`;