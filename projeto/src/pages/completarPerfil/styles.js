import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8fafc;
  padding: 20px;
`;

export const ProfileCard = styled.div`
  background: white;
  width: 100%;
  max-width: 1100px;
  display: flex; 
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

export const LeftSide = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: flex-start;
`;

export const RightSide = styled.div`
  flex: 1;
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  margin-bottom: 25px;
  h2 {
    color: #001858;
    font-size: 20px;
    font-weight: 700;
  }
`;

export const Footer = styled.div`
  margin-top: auto;
  padding-top: 40px;
  display: flex;
  justify-content: flex-end; 
  gap: 15px;

  .next-btn {
    background-color: #001858;
    color: white;
    padding: 12px 60px;
    border-radius: 6px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    font-size: 15px;
  }

  .back-btn {
    background-color: transparent;
    color: #718096;
    padding: 12px 30px;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    font-size: 15px;
    transition: all 0.2s;

    &:hover {
      background-color: #f8fafc;
      color: #001858;
    }
  }
`;