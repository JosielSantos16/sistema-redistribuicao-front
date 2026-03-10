import styled from "styled-components";

// Reutilizando os estilos anteriores...
export const RegisterWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5faff;
`;

export const RegisterCard = styled.div`
  background: white;
  width: 100%;
  max-width: 480px;
  padding: 40px;
  border-radius: 25px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
  text-align: center;
`;

export const Title = styled.h1`
  color: #001858;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 5px;
`;

export const Subtitle = styled.p`
  color: #666;
  font-size: 14px;
  margin-bottom: 25px;
  line-height: 1.5;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0 20px;

  .icon-circle {
    background-color: #f0f7ff;
    padding: 20px;
    border-radius: 50%;
    color: #001858;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const InfoBox = styled.div`
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 25px;
  text-align: left;
  font-size: 14px;
  color: #555;
  border-left: 4px solid #001858;
`;

// Botão para abrir o servidor de e-mail (Estilo Secundário)
export const MailButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: #001858;
  width: 100%;
  padding: 14px;
  border: 2px solid #001858;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #f0f7ff;
  }
`;

export const RegisterButton = styled.button`
  background-color: #001858;
  color: white;
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #00103a;
  }
`;

export const FooterText = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: #666;

  a {
    color: #001858;
    text-decoration: none;
    font-weight: 700;
    cursor: pointer;
    &:hover { text-decoration: underline; }
  }
`;