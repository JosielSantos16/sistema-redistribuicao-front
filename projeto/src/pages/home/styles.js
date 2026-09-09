import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  background-color: #F5FAFF;
  font-family: var(--fonte-corpo);
  overflow-x: hidden;
`;

export const Main = styled.main`
  flex: 1;
  min-width: 0;
  padding: 56px 88px; 
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  @media (max-width: 1100px) {
    padding: 40px 48px;
  }

  @media (max-width: 700px) {
    padding: 90px 20px 40px;
  }

  @media (max-width: 420px) {
    padding: 84px 16px 32px;
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
    flex-basis: auto;
  }
`;