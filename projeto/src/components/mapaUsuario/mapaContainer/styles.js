import styled from "styled-components";

export const MapContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  svg {
    width: 100%;
    max-width: 750px;
    height: auto;
    filter: drop-shadow(0px 20px 40px rgba(0, 24, 88, 0.12));

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

export const Marker = styled.div`
  position: absolute;
  background: #FF6600;
  color: white;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: bold;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
  transform: translate(-50%, -50%);
  pointer-events: none;
  top: ${(props) => props.y};
  left: ${(props) => props.x};
`;
