import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  background-color: #f1f5f9;
  min-height: 100vh;
`;

export const ContentArea = styled.div` flex: 1; `;

export const Banner = styled.div`
  height: 220px;
  background: linear-gradient(rgba(10, 31, 71, 0.8), rgba(10, 31, 71, 0.8)), 
              url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1352&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 { color: white; font-size: 2.2rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; }
`;

export const SettingsGrid = styled.div`
  max-width: 1100px;
  margin: -40px auto 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 25px;
  padding: 0 20px;
`;

export const SettingCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  border-top: 5px solid #001858;

  .card-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 15px;
    color: #001858;
    h2 { font-size: 1.3rem; font-weight: 700; }
  }

  .description { color: #64748b; font-size: 0.9rem; margin-bottom: 20px; }

  .form-group {
    display: flex;
    flex-direction: column;
    label { font-size: 0.85rem; font-weight: 600; color: #475569; margin-bottom: 5px; }
    input, select {
      padding: 12px;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      margin-bottom: 15px;
      background: #f8fafc;
    }
  }

  .toggle-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid #f1f5f9;
    strong { font-size: 0.95rem; color: #1e293b; }
    p { font-size: 0.8rem; color: #64748b; }
  }

  .action-row {
    display: flex;
    gap: 15px;
    margin-top: 10px;
    button {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 10px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
    }
    .outline-btn { background: white; border: 1px solid #cbd5e1; color: #475569; }
    .danger-btn { background: #fff1f2; border: 1px solid #fecdd3; color: #e11d48; }
  }
`;

export const ToggleSwitch = styled.div`
  width: 50px;
  height: 26px;
  background: ${props => props.active ? '#ff6600' : '#cbd5e1'};
  border-radius: 13px;
  position: relative;
  cursor: pointer;
  transition: 0.3s;
  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    top: 3px;
    left: ${props => props.active ? '27px' : '3px'};
    transition: 0.3s;
  }
`;

export const StatusBadge = styled.span`
  background: #dcfce7;
  color: #166534;
  font-size: 0.7rem;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 4px;
  width: fit-content;
  margin-bottom: 15px;
`;

export const ActionButton = styled.button`
  width: 100%;
  padding: 14px;
  background: #001858;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  &.orange { background: #ff6600; }
`;