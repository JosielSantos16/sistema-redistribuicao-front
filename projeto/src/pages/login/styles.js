import styled from 'styled-components';

export const LoginWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5faff; 
`;

export const LogoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 110px; 
  margin-bottom: 10px; 
`;

export const LogoSistema = styled.img`
  width: auto;
  max-width: 220px;
  height: auto;
  max-height: 100%;
  object-fit: contain;
`;

export const LoginCard = styled.div`
  background: white;
  width: 100%;
  max-width: 450px;
  padding: 25px 40px 40px 40px; 
  border-radius: 25px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
  text-align: center;
`;

export const Title = styled.h1`
  color: #001858;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  color: #666;
  font-size: 16px;
  margin-bottom: 20px; 
`;

export const TabContainer = styled.div`
  display: flex;
  border: 1px solid #eee;
  border-radius: 8px;
  margin-bottom: 25px;
  overflow: hidden;
`;

export const Tab = styled.button`
  flex: 1;
  padding: 12px;
  font-size: 14px;
  border: none;
  background: ${props => props.active ? '#eef2f6' : 'white'};
  color: ${props => props.active ? '#001858' : '#888'};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:first-child {
    border-right: 1px solid #eee;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InputGroup = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 15px;
  color: #333;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 14px 14px 45px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #001858;
  }
`;

export const ForgotPassword = styled.a`
  text-align: left;
  font-size: 13px;
  color: #001858;
  text-decoration: none;
  font-weight: 600;
  margin-top: -5px;

  &:hover {
    text-decoration: underline;
  }
`;

export const LoginButton = styled.button`
  background-color: #001858;
  color: white;
  padding: 15px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.2s;

  &:hover {
    background-color: #00103a;
  }
`;

export const FooterText = styled.p`
  margin-top: 25px;
  font-size: 14px;
  color: #666;

  a {
    color: #001858;
    text-decoration: none;
    font-weight: 700;

    &:hover {
      text-decoration: underline;
    }
  }
`;