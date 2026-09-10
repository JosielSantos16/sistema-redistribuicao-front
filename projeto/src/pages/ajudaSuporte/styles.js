import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  background-color: #f8fafc;
  min-height: 100vh;
`;

export const ContentArea = styled.div`
  flex: 1;
  min-width: 0;

  @media (max-width: 900px) {
    padding-top: 70px;
  }
`;

export const Banner = styled.div`
  height: 200px;
  background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), 
              url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  
  h1 { color: white; font-size: 2.2rem; text-align: center; }

  @media (max-width: 600px) {
    height: 150px;
    h1 { font-size: 1.4rem; }
  }
`;

export const SupportCard = styled.div`
  max-width: 1100px;
  margin: 40px auto;
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);

  h2 { margin-bottom: 30px; color: #1e293b; font-size: 1.5rem; }

  @media (max-width: 700px) {
    margin: 24px 16px;
    padding: 24px 20px;
    border-radius: 14px;

    h2 { font-size: 1.25rem; margin-bottom: 20px; }
  }
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;

  @media (max-width: 900px) { grid-template-columns: 1fr; }
`;

export const ContactForm = styled.form`
  .input-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-bottom: 20px;

    input {
      padding: 12px;
      border: 1px solid #e2e8f0;
      border-radius: 5px;
      font-size: 0.9rem;
      width: 100%;
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }

  .message-area {
    label { display: block; margin-bottom: 10px; color: #1e293b; font-weight: 500; }
    textarea {
      width: 100%;
      padding: 15px;
      border: 1px solid #e2e8f0;
      border-radius: 5px;
      resize: none;
    }
  }

  button {
    margin-top: 20px;
    background: #102347; 
    color: white;
    padding: 12px 40px;
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    width: 100%;
  }

  @media (min-width: 481px) {
    button { width: auto; }
  }
`;

export const InfoBox = styled.div`
  background: #f8fafc;
  padding: 30px;
  border-radius: 20px;
  height: fit-content;

  h3 { font-size: 1rem; margin-bottom: 20px; }
  p { font-size: 0.95rem; color: #64748b; }
  strong { color: #1e293b; }

  @media (max-width: 480px) {
    padding: 20px;
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