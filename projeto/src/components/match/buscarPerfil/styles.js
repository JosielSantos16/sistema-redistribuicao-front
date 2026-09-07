import styled from 'styled-components';

export const FilterBar = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);

  .header {
    background-color: #001858;
    color: white;
    padding: 10px 20px;
    font-weight: 600;
  }
`;

export const FilterGrid = styled.div`
  display: flex;
  padding: 25px;
  gap: 15px;
  align-items: center;
  flex-wrap: wrap;

  .select-field {
    flex: 1;
    position: relative;
    select {
      width: 100%;
      padding: 10px 15px;
      border: 1px solid #e2e8f0;
      border-radius: 4px;
      appearance: none;
      background: #fff;
    }
    .arrow { position: absolute; right: 10px; top: 50%; transform: translateY(-50%); color: #a0aec0; }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: stretch;
    padding: 18px;

    > div {
      width: 100%;
    }
  }
`;

export const SearchButton = styled.button`
  background-color: #ff6b00;
  color: white;
  padding: 10px 30px;
  border-radius: 6px;
  border: none;
  font-weight: 700;
  cursor: pointer;

  @media (max-width: 900px) {
    width: 100%;
    padding: 12px 20px;
  }
`;

export const ClearButton = styled.button`
  background: white;
  border: 1px solid #e2e8f0;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;

  @media (max-width: 900px) {
    width: 100%;
    padding: 12px 20px;
  }
`;