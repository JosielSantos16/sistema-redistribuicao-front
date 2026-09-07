import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8fafc;
  padding: 20px;

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const ProfileCard = styled.div`
  background: white;
  width: 100%;
  max-width: 1100px;
  display: flex; 
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 24, 88, 0.08);
  overflow: hidden;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  padding-top: 40px;   
  margin-left : 20px;
  align-items: flex-start;

  @media (max-width: 700px) {
    padding-top: 24px;
    margin-left: 0;
    justify-content: center;
    width: 100%;
  }
`;

export const RightSide = styled.div`
  flex: 1;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    padding: 24px 20px;
  }
`;

export const Header = styled.div`
  margin-bottom: 25px;
  h2 {
    font-family: var(--fonte-display, inherit);
    color: #001858;
    font-size: 22px;
    font-weight: 600;
  }
`;

export const ErrorMessage = styled.div`
  margin-top: 20px;
  padding: 12px 16px;
  background-color: #FFF5F5;
  border: 1px solid #FC8181;
  border-radius: 8px;
  color: #E53E3E;
  font-size: 14px;
  font-weight: 500;
`;

export const Footer = styled.div`
  margin-top: auto;
  padding-top: 40px;
  display: flex;
  justify-content: flex-end; 
  gap: 15px;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
    padding-top: 24px;
  }

  .next-btn {
    background-color: #FF6600;
    color: white;
    padding: 12px 60px;
    border-radius: 10px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    font-size: 15px;
    transition: all 0.2s;

    &:hover:not(:disabled) {
      filter: brightness(1.08);
      transform: translateY(-1px);
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    @media (max-width: 480px) {
      width: 100%;
      padding: 14px 20px;
    }
  }

  .back-btn {
    background-color: transparent;
    color: #718096;
    padding: 12px 30px;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    font-size: 15px;
    transition: all 0.2s;

    &:hover:not(:disabled) {
      background-color: #f8fafc;
      color: #001858;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    @media (max-width: 480px) {
      width: 100%;
      padding: 14px 20px;
    }
  }
`;