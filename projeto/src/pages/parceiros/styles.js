import styled from 'styled-components';

export const MainLayout = styled.div`
  display: flex;
  background-color: #f1f5f9;
`;

export const Container = styled.div`
  flex: 1;
  min-height: 100vh;
`;

export const Banner = styled.div`
  height: 300px;
  background: linear-gradient(rgba(0, 24, 88, 0.85), rgba(0, 24, 88, 0.85)), 
              url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  .overlay {
    h1 { color: white; font-size: 2.8rem; font-weight: 800; letter-spacing: -1px; }
    p { color: #cbd5e1; font-size: 1.1rem; margin-top: 10px; }
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: -60px auto 50px;
  padding: 0 20px;
`;

export const Badge = styled.span`
  background: #ff6600;
  color: white;
  padding: 6px 15px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 15px;
  display: inline-block;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 25px;
  margin-bottom: 40px;
`;

export const InfoCard = styled.div`
  background: white;
  padding: 40px 30px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 24, 88, 0.05);
  transition: transform 0.3s;
  border-bottom: 4px solid transparent;

  &:hover {
    transform: translateY(-5px);
    border-bottom: 4px solid #ff6600;
  }

  .icon-box {
    width: 60px; height: 60px;
    background: #f1f5f9;
    color: #001858;
    border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 20px;
  }

  h3 { color: #0f172a; font-size: 1.3rem; margin-bottom: 12px; }
  p { color: #64748b; line-height: 1.7; font-size: 0.95rem; }
`;

export const ActionSection = styled.section`
  background: white;
  border-radius: 20px;
  padding: 50px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
  h2 { font-size: 2rem; color: #001858; margin: 10px 0; }
  p { color: #64748b; font-size: 1.1rem; }
`;

export const PartnerForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  .input-group {
    display: flex; flex-direction: column;
    label { font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px; }
    input { 
      padding: 15px; border-radius: 10px; border: 2px solid #f1f5f9; 
      background: #f8fafc; font-size: 1rem;
      &:focus { border-color: #ff6600; outline: none; background: white; }
    }
  }

  .full-width { 
    grid-column: 1 / -1; 
    display: flex; flex-direction: column;
    label { font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 8px; }
    textarea { 
      padding: 15px; border-radius: 10px; border: 2px solid #f1f5f9; 
      background: #f8fafc; font-size: 1rem; resize: none;
      &:focus { border-color: #ff6600; outline: none; background: white; }
    }
  }

  button {
    grid-column: 1 / -1;
    background: #001858;
    color: white;
    border: none;
    padding: 18px;
    border-radius: 10px;
    font-weight: 700;
    font-size: 1.1rem;
    cursor: pointer;
    display: flex; align-items: center; justify-content: center; gap: 10px;
    transition: all 0.3s;

    &:hover {
      background: #ff6600;
      box-shadow: 0 10px 20px rgba(255, 102, 0, 0.2);
    }
  }
`;
export const StatusMessage = styled.div`
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  margin-top: 16px;
  background-color: ${props => props.tipo === "ok" ? "#F0FFF4" : "#FFF5F5"};
  color: ${props => props.tipo === "ok" ? "#16a34a" : "#E53E3E"};
  border: 1px solid ${props => props.tipo === "ok" ? "#9AE6B4" : "#FC8181"};
`;