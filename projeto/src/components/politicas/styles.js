import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  background-color: #f1f5f9;
  min-height: 100vh;
`;

export const ContentArea = styled.div`
  flex: 1;
`;

export const Banner = styled.div`
  height: 250px;
  background: linear-gradient(rgba(0, 24, 88, 0.7), rgba(0, 24, 88, 0.7)), 
              url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  
  h1 { 
    color: white; 
    font-size: 2.5rem; 
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;

export const PoliciesCard = styled.div`
  max-width: 900px;
  margin: -50px auto 50px; 
  background: white;
  padding: 60px;
  border-radius: 4px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  border-top: 8px solid #001858;
`;

export const PolicyHeader = styled.div`
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 20px;
  margin-bottom: 40px;

  h2 { 
    color: #0f172a; 
    font-size: 1.8rem;
    font-family: 'Georgia', serif; 
  }

  span {
    color: #94a3b8;
    font-size: 0.85rem;
    text-transform: uppercase;
  }
`;

export const PolicyBody = styled.div`
  counter-reset: section;
`;

export const Section = styled.section`
  margin-bottom: 35px;

  h3 {
    color: #1e293b;
    font-size: 1.25rem;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    
    &::before {
      content: "";
      width: 4px;
      height: 20px;
      background: #ff6600; 
      margin-right: 12px;
      border-radius: 2px;
    }
  }

  p {
    color: #334155;
    line-height: 1.8;
    font-size: 1.05rem;
    text-align: justify;
  }

  strong {
    color: #001858;
  }
`;