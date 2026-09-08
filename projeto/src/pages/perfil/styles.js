import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: #f8fafc;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  min-width: 0;
  padding: 48px 60px;
  background-color: #fff;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    padding: 36px 40px;
  }

  @media (max-width: 900px) {
    padding: 90px 24px 24px;
  }

  @media (max-width: 480px) {
    padding: 84px 16px 16px;
  }
`;

export const Header = styled.div`
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-family: var(--fonte-display, inherit);
  font-size: 24px;
  color: #001858;
  margin-bottom: 25px;
  font-weight: 600;
  text-align: left; 
`;

export const Section = styled.section`
  margin-bottom: 40px;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
`;

export const FormGrid = styled.div`
  display: flex;
  gap: 40px;
  align-items: flex-start;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const UploadArea = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 12px;
  border: ${props => props.temFoto ? "none" : "2px dashed #cbd5e0"};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8fafc;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  flex-shrink: 0;
  margin: 0 auto;

  @media (min-width: 801px) {
    margin: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 24, 88, 0.7);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-size: 12px;
    font-weight: 600;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover .overlay {
    opacity: 1;
  }
`;

export const UploadPlaceholder = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  p {
    font-size: 12px;
    color: #64748b;
    margin: 10px 0 0;
    max-width: 140px;
  }
`;

export const UploadButton = styled.button`
  background-color: #FF6600;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  cursor: pointer;
  &:hover { filter: brightness(1.1); }
`;

export const InputsGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-width: 0;
`;

export const InputRow = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background-color: #fff;
  font-size: 14px;
  outline: none;
  font-family: var(--fonte-corpo, inherit);

  &:disabled {
    background-color: #f8fafc;
    color: #94a3b8;
    cursor: not-allowed;
  }

  &:focus:not(:disabled) {
    border-color: #FF6600;
  }

  &::placeholder { color: #94a3b8; }
`;

export const AcademicGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 24px;
  margin-bottom: 20px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

// Mesmo padrão de toggle usado no Completar Perfil — mantém consistência
// entre as duas telas que lidam com o mesmo dado (interesse em redistribuição).
export const ToggleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;

  .toggle-label {
    font-size: 14px;
    font-weight: 600;
    color: #333;
  }
`;

export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  flex-shrink: 0;
  cursor: pointer;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    inset: 0;
    background-color: #cbd5e0;
    transition: 0.2s;
    border-radius: 24px;

    &::before {
      content: "";
      position: absolute;
      height: 18px;
      width: 18px;
      left: 3px;
      bottom: 3px;
      background-color: white;
      transition: 0.2s;
      border-radius: 50%;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }
  }

  input:checked + .slider {
    background-color: #FF6600;
  }

  input:checked + .slider::before {
    transform: translateX(20px);
  }
`;

export const StatusMessage = styled.div`
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 16px;
  background-color: ${props => props.tipo === "ok" ? "#F0FFF4" : "#FFF5F5"};
  color: ${props => props.tipo === "ok" ? "#16a34a" : "#E53E3E"};
  border: 1px solid ${props => props.tipo === "ok" ? "#9AE6B4" : "#FC8181"};
`;

export const SaveButton = styled.button`
  background-color: #001858;
  color: white;
  border: none;
  padding: 14px 60px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 10px;
  align-self: flex-start;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    filter: brightness(1.15);
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 500px) {
    width: 100%;
    align-self: stretch;
  }
`;