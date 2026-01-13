import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #F5FAFF;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const Main = styled.main`
  flex: 1;
  padding: 40px 80px; 
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  flex: 1; 
  gap: 40px; 
`;