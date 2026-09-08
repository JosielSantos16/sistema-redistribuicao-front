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
  ErrorMessage,
} from './styles';

export default function CompletarPerfil() {
  const [step, setStep] = useState(1);
  const [saving, setSaving] = useState(false);
  const [erro, setErro] = useState("");

  const [formData, setFormData] = useState({
    lattes: '',
    instituicao: '',
    departamento: '',
    curso: '',
    cargo: '',
    estado_destino: '',
    comprovante: null,
  });

  const navigate = useNavigate(); 

  const validarPasso1 = () => {
    if (!formData.instituicao || !formData.departamento || !formData.curso || !formData.cargo) {
      setErro("Preencha todos os campos obrigatórios antes de continuar.");
      return false;
    }
    if (!formData.estado_destino) {
      setErro("Selecione o estado de destino desejado.");
      return false;
    }
    setErro("");
    return true;
  };

  const handleNext = async () => {
    if (step === 1) {
      if (!validarPasso1()) return;
      setStep(2);
      return;
    }

    // Passo 2 (Finalizar): exige o comprovante antes de mandar pro backend —
    // antes disso o "sucesso" aparecia mesmo sem PDF nenhum ser enviado.
    if (!formData.comprovante) {
      setErro("Anexe o comprovante de vínculo (PDF) antes de finalizar.");
      return;
    }

    setErro("");
    setSaving(true);

    try {
      const token = localStorage.getItem('@Wolf:token');

      // multipart/form-data de verdade — antes o arquivo ia junto de um
      // JSON.stringify, que descarta um File por completo (virava {}).
      const payload = new FormData();
      payload.append('instituicao', formData.instituicao);
      payload.append('departamento', formData.departamento);
      payload.append('curso', formData.curso);
      payload.append('cargo', formData.cargo);
      payload.append('lattes', formData.lattes || '');
      payload.append('estado_destino', formData.estado_destino);
      payload.append('comprovante', formData.comprovante);

      await api.put('/profile', payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      navigate('/mapa');
    } catch (err) {
      const mensagemServidor = err.response?.data?.error;
      setErro(
        Array.isArray(mensagemServidor)
          ? mensagemServidor.join(' ')
          : mensagemServidor || "Erro ao salvar perfil. Verifique sua conexão com o servidor."
      );
    } finally {
      setSaving(false);
    }
  };

  const handleBack = () => {
    setErro("");
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

          {erro && <ErrorMessage>{erro}</ErrorMessage>}

          <Footer>
            {step > 1 && (
              <button className="back-btn" onClick={handleBack} disabled={saving}>
                Voltar
              </button>
            )}
            
            <button className="next-btn" onClick={handleNext} disabled={saving}>
              {saving ? "Salvando..." : step === 2 ? 'Finalizar' : 'Próximo'}
            </button>
          </Footer>
        </RightSide>
      </ProfileCard>
    </ProfileWrapper>
  );
}