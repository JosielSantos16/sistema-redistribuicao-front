import styled from 'styled-components';

export const CardContainer = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  border: 1px solid #edf2f7;
  position: relative;
  transition: transform 0.2s ease;

  &:hover {
    border-color: #cbd5e0;
  }
`;

export const CardHeader = styled.div`
  background-color: #E5E7EB; 
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 51px; 

  h3 {
    margin: 0;
    font-size: 22px;
    color: #1a202c;
    font-weight: 700;
  }
`;

export const AvatarWrapper = styled.div`
  img {
    margin-top: 50px;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    border: 3px solid #001858;
    background: white;
    object-fit: cover;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
`;

export const CardContent = styled.div`
  padding: 15px 20px 0 20px;

  .date {
    font-size: 11px;
    color: #a0aec0;
    margin-bottom: 12px;
    display: block;
  }

  p {
    margin: 4px 0;
    font-size: 13px;
    line-height: 1.4;
    color: #4a5568;
  }

  strong {
    color: #2d3748;
    font-weight: 700;
  }

  .value {
    color: #718096; 
  }

  .link-lattes {
    color: #3182ce;
    text-decoration: underline;
    font-size: 12px;
    cursor: pointer;
  }

  .contact-box {
    margin-top: 12px;
    padding-bottom: 12px;
  }

  .masked-email {
    color: #FF6600; 
    text-decoration: underline;
    font-weight: 600;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 15px 20px 20px 20px;
  margin-top: auto;
  background: linear-gradient(to bottom, transparent, #f8fafc);

  .location-box {
    .item {
      margin-top: 8px;
      span {
        display: block;
        color: #718096;
        font-size: 13px;
      }
    }
  }
`;

export const MatchButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: white;
  color: #FF6600;
  border: 2px solid #FF6600;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #FF6600;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 102, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  transition: transform 0.2s ease;

  ${MatchButton}:hover & {
    transform: rotate(-10deg);
  }
`;