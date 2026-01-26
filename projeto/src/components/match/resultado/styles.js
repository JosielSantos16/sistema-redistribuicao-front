import styled from 'styled-components';

export const CardContainer = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  border: 1px solid #edf2f7;
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
    font-size: 24px;
    color: #000000;
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
  }
`;

export const CardContent = styled.div`
  padding: 15px 20px;

  .date {
    font-size: 11px;
    color: #a0aec0;
    margin-bottom: 12px;
    display: block;
  }

  p {
    margin: 4px 0;
    font-size: 13px;
    line-height: 1.2;
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
    color: #718096;
    text-decoration: underline;
    font-size: 12px;
  }

  .contact-box {
    margin-top: 15px;
    
    strong {
      display: block;
      margin-bottom: 2px;
    }
  }

  .masked-email {
    color: #ed8936; 
    text-decoration: underline;
    font-weight: 600;
  }

  .location-box {
    margin-top: 15px;
    
    .item {
      margin-bottom: 8px;
      
      span {
        display: block;
        color: #718096;
        font-size: 12px;
      }
    }
  }
`;