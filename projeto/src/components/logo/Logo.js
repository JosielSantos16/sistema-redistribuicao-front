import styled from "styled-components";
import LogoImg from "../../assets/logo.png";

export const LogoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0; 
`;

export const LogoSistema = styled.img`
  height: ${props => props.height || '50px'}; 
  width: auto;
  object-fit: contain;
`;

export default function Logo({ height }) {
  return (
    <LogoSection>
      <LogoSistema src={LogoImg} height={height} alt="Logo" />
    </LogoSection>
  );
}