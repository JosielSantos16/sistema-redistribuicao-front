import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import api from '../../services/api';
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
  
  const [formData, setFormData] = useState({
    lattes: '',
    instituicao: '',
    departamento: '',
    curso: '',
    cargo: '',
    preferencias: []
  });

  const navigate = useNavigate(); 

  const handleNext = async () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      try {
       
        const token = localStorage.getItem('@Wolf:token');
        
        await api.put('/profile', formData, {
          headers: { Authorization: `Bearer ${token}` }
        });

        navigate('/mapa');
      } catch (err) {
        alert("Erro ao salvar perfil. Verifique os dados.");
      }
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <ProfileWrapper>
      <ProfileCard>
        <LeftSide>
          <Logo height={50}/>
        </LeftSide>

        <RightSide>
          <Header>
            <h2>Completar Perfil</h2>
          </Header>
          <Stepper activeStep={step}/>

          {step === 1 
          ? <Form1 data={formData} setData={setFormData} />
          : <Form2 data={formData} setData={setFormData}/>}

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