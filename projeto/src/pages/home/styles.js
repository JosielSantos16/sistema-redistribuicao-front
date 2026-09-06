import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #F5FAFF;
  font-family: var(--fonte-corpo);
  overflow-x: hidden;
`;

export const Main = styled.main`
  flex: 1;
  padding: 56px 88px; 
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  @media (max-width: 1200px) {
    padding: 44px 56px;
  }

  @media (max-width: 900px) {
    padding: 36px 28px;
  }

  @media (max-width: 480px) {
    padding: 28px 18px;
  }
`;

export const HeroRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  gap: 56px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 620px;
  width: 100%;

  @media (max-width: 900px) {
    display: contents;
  }
`;