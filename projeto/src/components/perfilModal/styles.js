import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 24, 88, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 500;
  padding: 20px;
`;

export const ModalCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  max-width: 420px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 24, 88, 0.3);

  .fechar {
    position: absolute;
    top: 16px;
    right: 16px;
    background: #f1f5f9;
    border: none;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #64748b;

    &:hover { background: #e2e8f0; color: #001858; }
  }

  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #001858;
    margin-bottom: 16px;
  }

  h2 {
    font-family: var(--fonte-display, inherit);
    color: #001858;
    font-size: 20px;
    margin-bottom: 20px;
  }

  .info {
    text-align: left;
    border-top: 1px solid #eef2f6;
    padding-top: 16px;

    p {
      font-size: 13px;
      color: #4a5568;
      margin: 8px 0;
      line-height: 1.5;
    }

    strong {
      color: #2d3748;
    }

    a {
      color: #3182ce;
      text-decoration: underline;
      word-break: break-all;
    }
  }
`;