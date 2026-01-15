import styled from 'styled-components';

export const FinalizeWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5faff;
`;

export const FinalizeCard = styled.div`
  background: white;
  width: 100%;
  max-width: 450px;
  padding: 50px 40px;
  border-radius: 30px;
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
  font-size: 14px;
  margin-bottom: 35px;
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

export const ConfirmButton = styled.button`
  background-color: #001858;
  color: white;
  padding: 16px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 15px;
  transition: background 0.2s;

  &:hover {
    background-color: #00103a;
  }
`;