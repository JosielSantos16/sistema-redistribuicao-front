import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-410px * 8)); } 
`;

export const CarouselSection = styled.section`
  margin-top: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`;

export const CarouselTitle = styled.h2`
  color: #001858;
  font-size: 28px;
  margin-bottom: 40px;
  font-weight: 700;
`;

export const CarouselWrapper = styled.div`
  width: 100vw;
  overflow: hidden;
  position: relative;
  padding: 20px 0;

  &::before, &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 200px;
    height: 100%;
    z-index: 2;
    pointer-events: none;
  }
  &::before { left: 0; background: linear-gradient(to right, #F5FAFF, transparent); }
  &::after { right: 0; background: linear-gradient(to left, #F5FAFF, transparent); }
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 30px;
  width: max-content;
  animation: ${scroll} 40s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

export const UserCard = styled.div`
  width: 380px;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  border: 1px solid #eef2f6;
  flex-shrink: 0; 
`;

export const CardHeader = styled.div`
  background: #E9ECEF;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  h3 { color: #333; font-size: 20px; margin: 0; }
`;

export const ProfileImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid white;
  position: absolute;
  right: 20px;
  bottom: -25px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  background: white;
`;

export const CardContent = styled.div`
  padding: 35px 20px 20px;
  small { color: #888; display: block; margin-bottom: 15px; }
`;

export const InfoGroup = styled.div`
  margin-bottom: 10px;
  label { font-weight: 700; color: #444; font-size: 14px; margin-right: 5px; }
  span { color: #666; font-size: 14px; }
`;

export const MaskedText = styled.div`
  background: #fff3e0;
  color: #ff6b00;
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
`;

export const RouteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #f0f0f0;
  .arrow { color: #ff6b00; font-size: 18px; }
`;

export const RouteBadge = styled.div`
  display: flex;
  flex-direction: column;
  small { font-size: 10px; font-weight: 800; color: #ff6b00; margin-bottom: 2px; }
  span { font-weight: 600; color: #001858; font-size: 13px; }
`;