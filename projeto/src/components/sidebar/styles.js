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
  position: sticky;
  top: 0;
  z-index: 100;
  font-family: var(--fonte-corpo, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif);

  @media (max-width: 900px) {
    position: fixed;
    left: 0;
    padding-top: 90px;
    overflow-y: auto;
    transform: translateX(${props => props.aberto ? '0' : '-100%'});
    transition: transform 0.25s ease;
    box-shadow: ${props => props.aberto ? '4px 0 24px rgba(0, 0, 0, 0.25)' : 'none'};
  }
`;

export const MenuButton = styled.button`
  display: none;
  position: fixed;
  top: 16px;
  left: 16px;
  z-index: 110;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: #001858;
  color: white;
  border: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 24, 88, 0.25);

  @media (max-width: 900px) {
    display: flex;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 99;

  @media (min-width: 901px) {
    display: none;
  }
`;

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  flex-shrink: 0;

  .avatar-wrapper {
    position: relative;
    width: 100px;
    height: 100px;
    margin-bottom: 12px;
    cursor: pointer;
    border-radius: 50%;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid #fff;
    object-fit: cover;
    display: block;
  }

  .avatar-overlay {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: rgba(0, 24, 88, 0.65);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.2s ease;
    color: white;
  }

  .avatar-wrapper:hover .avatar-overlay {
    opacity: 1;
  }

  .avatar-loading {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: rgba(0, 24, 88, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 600;
    text-align: center;
  }

  span {
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    padding: 0 20px;
  }
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px; 
  font-size: 13px;
  cursor: pointer;
  transition: 0.2s;
  margin: 4px 15px;    
  border-radius: 8px;   
  flex-shrink: 0;
  background-color: ${props => props.active ? '#FF6600' : 'transparent'};
  color: ${props => props.active ? '#fff' : '#cbd5e0'};

  .icone-com-badge {
    position: relative;
    display: inline-flex;
    margin-right: 12px;
    flex-shrink: 0;
  }

  .spin-sync {
    position: absolute;
    bottom: -4px;
    right: -6px;
    width: 11px !important;
    height: 11px !important;
    color: #FF6600;
    background: #001858;
    border-radius: 50%;
    animation: girar-sync 1s linear infinite;
  }

  @keyframes girar-sync {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }

  &:hover {
    background-color: ${props => props.active ? '#FF6600' : 'rgba(255,255,255,0.1)'};
    color: #fff;
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: -6px;
  right: -8px;
  background: #FF6600;
  color: white;
  font-size: 10px;
  font-weight: 700;
  min-width: 16px;
  height: 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3px;
  border: 2px solid #001858;
`;

export const LogoutArea = styled.div`
  margin-top: auto; 
  padding: 25px 30px;
  border-top: 1px solid rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  color: white; 
  flex-shrink: 0;

  svg { 
    margin-right: 15px; 
    width: 18px;
  }

  &:hover {
    background-color: rgba(255,255,255,0.05);
  }
`;