import { StepperContainer, Step } from "./styles";

export default function Stepper({ activeStep }) {
  return (
    <StepperContainer>
      <Step active={activeStep >= 1}>
        <div className="circle">1</div>
        <span>Dados Acadêmicos</span>
      </Step>
      
      <div className="line" />

      <Step active={activeStep >= 2}>
        <div className="circle">2</div>
        <span>Documentos</span>
      </Step>
    </StepperContainer>
  );
}
