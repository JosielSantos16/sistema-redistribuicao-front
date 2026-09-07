import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #F5FAFF;
  font-family: var(--fonte-corpo, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif);
  overflow-x: hidden;
`;

export const Main = styled.main`
  flex: 1;
  padding: 60px; 
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  @media (max-width: 1200px) {
    padding: 44px 40px;
  }

  @media (max-width: 900px) {
    /* padding-top maior aqui pra não ficar embaixo do botão hambúrguer
       fixo (MenuButton do Sidebar) quando a tela empilha. */
    padding: 90px 24px 24px;
  }

  @media (max-width: 480px) {
    padding: 84px 16px 16px;
  }
`;

export const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  flex: 1; 
  gap: 80px; 
  margin-top: 20px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: stretch;
    gap: 32px;
    margin-top: 0;
  }
`;