import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  padding: 40px 60px;
  background-color: #fff;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

export const PageContainer = styled.div`
  flex: 1;
  padding: 40px 60px;
  background-color: #fff;
  overflow-y: auto;
`;

export const Header = styled.div`
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 22px;
  color: #1a1a1a;
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
`;

export const UploadArea = styled.div`
  width: 320px;
  height: 220px;
  border: 1px dashed #cbd5e0;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8fafc;
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
    margin: 10px 0;
    max-width: 180px;
  }

  span {
    font-size: 10px;
    color: #94a3b8;
    margin-top: 8px;
  }
`;

export const UploadButton = styled.button`
  background-color: #6366f1;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  cursor: pointer;
  &:hover { background-color: #4f46e5; }
`;

export const InputsGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InputRow = styled.div`
  display: flex;
  gap: 15px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  background-color: #fff;
  font-size: 14px;
  outline: none;
  &::placeholder { color: #94a3b8; }
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  background-color: #ededed; 
  color: #666;
  font-size: 14px;
  outline: none;
`;

export const AcademicGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 30px;
  margin-bottom: 15px;
`;

export const SmallLink = styled.a`
  font-size: 11px;
  color: #2563eb;
  text-decoration: none;
  margin-top: -5px;
  &:hover { text-decoration: underline; }
`;

export const AddButton = styled.button`
  background-color: #ff6600;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
`;

export const SaveButton = styled.button`
  background-color: #001858;
  color: white;
  border: none;
  padding: 12px 60px;
  border-radius: 4px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
  &:hover { opacity: 0.9; }
`;