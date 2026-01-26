import styled from 'styled-components';

export const PageLayout = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f4f7fa;
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 40px 60px;
  h1 { color: #001858; margin-bottom: 30px; font-size: 24px; }
  h2 { margin-top: 40px; margin-bottom: 20px; font-size: 20px; color: #1a202c; }
`;



export const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 25px;
`;
