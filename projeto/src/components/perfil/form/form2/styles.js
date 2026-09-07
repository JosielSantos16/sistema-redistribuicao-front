import styled from 'styled-components';

export const FormSection = styled.div`
  h3 {
    font-family: var(--fonte-display, inherit);
    font-size: 24px;
    color: #001858;
    margin-bottom: 8px;
    font-weight: 600;
  }
  p {
    font-size: 14px;
    color: #718096;
    margin-bottom: 30px;
  }
`;

export const UploadArea = styled.div`
  .upload-box {
    border: 2px dashed #e2e8f0;
    border-radius: 12px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-color: #f8fafc;
    transition: border-color 0.2s ease;

    &:hover {
      border-color: #FF6600;
    }

    &.has-file {
      border-color: #48BB78;
      border-style: solid;
      background-color: #F0FFF4;
    }

    &.has-error {
      border-color: #FC8181;
      background-color: #FFF5F5;
    }
  }

  .icon-circle {
    width: 64px;
    height: 64px;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    box-shadow: 0 2px 8px rgba(0, 24, 88, 0.08);
  }

  .main-text {
    font-size: 14px;
    font-weight: 600;
    color: #4a5568;
    margin-bottom: 4px;
  }

  .sub-text {
    font-size: 12px;
    color: #a0aec0;
  }

  .overlay-label {
    position: absolute;
    inset: 0;
    cursor: pointer;
  }
`;