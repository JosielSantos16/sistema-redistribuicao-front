import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  background-color: #f4f7f9;
  overflow-x: hidden;
`;

export const Main = styled.main`
  flex: 1;
  padding: 40px 60px;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;

  @media (max-width: 900px) {
    padding: 24px 20px;
  }
`;

export const HeroRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  flex: 1; 
  gap: 56px;
  min-width: 0;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: stretch;
    gap: 32px;
  }
`;

export const TextWrapper = styled.div`
  flex: 0 1 620px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 900px) {
    display: contents;
  }
`;