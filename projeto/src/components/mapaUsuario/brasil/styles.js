import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #f4f7f9;
`;

export const Main = styled.main`
  flex: 1;
  padding: 40px 60px;
  overflow-y: auto;
`;

export const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const InfoSection = styled.div`
  flex: 1;
  max-width: 600px;

  h1 {
    color: #001858;
    font-size: 42px;
    font-weight: 800;
    margin-bottom: 20px;
  }

  p {
    color: #333;
    font-size: 24px;
    margin-bottom: 40px;
  }
`;

export const LegendGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding-left: 10px;
  border-left: 4px solid ${props => props.borderColor};

  span {
    font-size: 12px;
    color: #666;
  }
`;

export const LegendBadge = styled.div`
  background-color: #FF6600;
  color: white;
  width: 22px;
  height: 22px;
  border-radius: 50%; 
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: bold;
  flex-shrink: 0;
`;

export const MapContainer = styled.div`
  flex: 1;
  position: relative;

  svg {
    width: 100%;
    height: auto;
    
    path {
      fill: #001858; 
      stroke: #ffffff; 
      stroke-width: 0.5;
    }
  }
`;

export const Marker = styled.div`
  position: absolute;
  background-color: #FF6600;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: bold;
  left: ${props => props.x};
  top: ${props => props.y};
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 80px;
`;

export const Card = styled.div`
  background: white;
  height: 110px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid #eee;

  .badge {
    position: absolute;
    top: -30px;
    background: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  }

  span {
    font-size: 11px;
    color: #999;
    margin-top: 25px;
  }
`;