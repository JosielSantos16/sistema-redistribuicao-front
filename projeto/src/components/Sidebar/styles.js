import styled from 'styled-components';

export const Container = styled.aside`
  width: 275px;
  background-color: #001858;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 70px 0 0 0; 
  height: 100vh; 
  box-sizing: border-box;
`;

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid #fff;
    margin-bottom: 12px;
  }

  span {
    font-size: 14px;
    font-weight: 600;
  }
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 15px; 
  font-size: 13px;
  cursor: pointer;
  transition: 0.2s;
  margin: 4px 12px;    
  border-radius: 6px;   
  
  background-color: ${props => props.active ? '#FF6600' : 'transparent'};
  color: white;

  svg {
    margin-right: 12px;
    width: 18px;
  }

  &:hover {
    background-color: ${props => props.active ? '#FF6600' : 'rgba(255,255,255,0.05)'};
  }
`;

export const LogoutArea = styled.div`
  margin-top: auto; 
  padding: 25px 30px;
  border-top: 1px solid rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  font-size: 13px;
  cursor: pointer;
  color: white; 

  svg { 
    margin-right: 15px; 
  }

  &:hover {
    background-color: rgba(255,255,255,0.05);
  }
`;