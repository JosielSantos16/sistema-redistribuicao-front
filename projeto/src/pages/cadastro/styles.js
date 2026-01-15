import styled from 'styled-components';

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
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
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
  height: 50px;
  padding: 12px 12px 12px 45px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #001858;
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 10px 0;
  font-size: 14px;
  color: #666;
  text-align: left;

  input {
    cursor: pointer;
  }

  a {
    color: #001858;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const RegisterButton = styled.button`
  background-color: #001858;
  color: white;
  padding: 14px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 5px;
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

    &:hover {
      text-decoration: underline;
    }
  }
`;