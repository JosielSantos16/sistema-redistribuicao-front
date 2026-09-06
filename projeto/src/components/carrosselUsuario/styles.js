import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-364px * 8)); } 
`;

export const CarouselSection = styled.section`
  margin-top: 64px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;

  @media (max-width: 480px) {
    margin-top: 40px;
    padding-bottom: 30px;
  }
`;

export const CarouselTitle = styled.h2`
  font-family: var(--fonte-display);
  color: #001858;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 6px;
  text-align: center;
  padding: 0 20px;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const CarouselSubtitle = styled.p`
  color: var(--cor-texto-suave);
  font-size: 14px;
  margin-bottom: 32px;
  text-align: center;
  padding: 0 20px;
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 20px 0;

  &::before, &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 120px;
    height: 100%;
    z-index: 2;
    pointer-events: none;
  }
  &::before { left: 0; background: linear-gradient(to right, #F5FAFF, transparent); }
  &::after { right: 0; background: linear-gradient(to left, #F5FAFF, transparent); }

  @media (max-width: 480px) {
    &::before, &::after {
      width: 40px;
    }
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 24px;
  width: max-content;
  animation: ${scroll} 40s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

// A partir daqui, os estilos são os MESMOS do card usado em Busca de Perfis
// (src/components/match/resultado/styles.js), pra manter os dois idênticos.
export const UserCard = styled.div`
  width: 340px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #edf2f7;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
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

export const ProfileImg = styled.img`
  margin-top: 50px;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  border: 3px solid #001858;
  background: white;
  object-fit: cover;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const CardContent = styled.div`
  padding: 15px 20px 0 20px;

  small {
    font-size: 11px;
    color: #a0aec0;
    margin-bottom: 12px;
    display: block;
  }
`;

export const InfoGroup = styled.div`
  margin: 4px 0;
  font-size: 13px;
  line-height: 1.4;
  color: #4a5568;

  label {
    color: #2d3748;
    font-weight: 700;
    margin-right: 4px;
  }

  span {
    color: #718096;
  }
`;

export const MaskedText = styled.span`
  color: #FF6600;
  text-decoration: underline;
  font-weight: 600;
  font-size: 13px;
`;

export const RouteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 15px 20px 20px 20px;
  margin-top: auto;
  background: linear-gradient(to bottom, transparent, #f8fafc);

  .arrow {
    color: #FF6600;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #FFEDDD;
    flex-shrink: 0;
    align-self: center;
  }
`;

export const RouteBadge = styled.div`
  .item-label {
    display: block;
    font-weight: 700;
    color: #2d3748;
    font-size: 13px;
  }
  span {
    display: block;
    color: #718096;
    font-size: 13px;
    margin-top: 4px;
  }
`;