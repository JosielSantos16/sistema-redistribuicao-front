import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #f8fbff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const Main = styled.main`
  flex: 1;
  padding: 50px;
  overflow-y: auto;
`;

export const TopMenuIcon = styled.div`
  margin-bottom: 20px;
  color: #ccc;
`;

export const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
`;

export const InfoSection = styled.div`
  flex: 1;
  max-width: 550px;

  h1 {
    color: #002b5c;
    font-size: 38px;
    font-weight: 800;
    margin-bottom: 20px;
    line-height: 1.2;
  }

  p {
    color: #444;
    font-size: 24px;
    margin-bottom: 40px;
    line-height: 1.3;
  }
`;

export const LegendGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding-left: 10px;
  border-left: 4px solid ${props => props.borderColor || '#eee'};

  span {
    font-size: 12px;
    color: #666;
    line-height: 1.4;
  }
`;

export const OrangeCircle = styled.div`
  background: #ff6b00;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  flex-shrink: 0;
`;

export const MapContainer = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 500px;
    filter: drop-shadow(0px 10px 20px rgba(0,0,0,0.1));
  }
`;

export const Marker = styled.div`
  position: absolute;
  background: #ff6b00;
  color: white;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: bold;
  top: ${props => props.y};
  left: ${props => props.x};
`;

// --- FOOTER CARDS ---
export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 60px;
`;

export const Card = styled.div`
  background: white;
  border-radius: 4px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid #eee;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);

  .badge {
    position: absolute;
    top: -25px;
    background: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    border: 1px solid #eee;
    box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  }

  span {
    font-size: 11px;
    color: #999;
    margin-top: 20px;
    text-align: center;
    padding: 0 10px;
  }
`;