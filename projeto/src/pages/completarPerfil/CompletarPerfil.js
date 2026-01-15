import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Stepper from '../../components/perfil/stepper/Stepper';
import Form1 from '../../components/perfil/form/form1/Form1';
import Form2 from '../../components/perfil/form/form2/Form2';
import Logo from "../../components/logo/Logo"

import {
  ProfileWrapper,
  ProfileCard,
  LeftSide,     
  RightSide,    
  Header,
  Footer,
} from './styles';

export default function CompletarPerfil() {
  const [step, setStep] = useState(1); 
  const navigate = useNavigate(); 

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      navigate('/mapa'); 
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <ProfileWrapper>
      <ProfileCard>
        <LeftSide>
          <Logo height={100}/>
        </LeftSide>

        <RightSide>
          <Header>
            <h2>Completar Perfil</h2>
          </Header>
          <Stepper activeStep={step}/>

          {step === 1 ? <Form1/> : <Form2/>}

          <Footer>
            {step > 1 && (
              <button className="back-btn" onClick={handleBack}>
                Voltar
              </button>
            )}
            
            <button className="next-btn" onClick={handleNext}>
              {step === 2 ? 'Finalizar' : 'Próximo'}
            </button>
          </Footer>
        </RightSide>
      </ProfileCard>
    </ProfileWrapper>
  );
}