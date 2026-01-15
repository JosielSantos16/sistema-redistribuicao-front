import React from 'react';
import { Lock } from 'lucide-react';
import Logo from "../../components/logo/Logo"
import { useNavigate } from 'react-router-dom';

import {
  FinalizeWrapper,
  FinalizeCard,
  Title,
  Subtitle,
  Form,
  InputGroup,
  IconWrapper,
  Input,
  ConfirmButton
} from './styles';

export default function CadastroFinal() {
  const navigate = useNavigate();

  return (
    <FinalizeWrapper>
      <FinalizeCard>
        <Logo/>
        <Title>Finalizar Cadastro</Title>
        <Subtitle>Por favor defina sua senha para continuar</Subtitle>

        <Form>
          <InputGroup>
            <IconWrapper><Lock size={18} /></IconWrapper>
            <Input type="password" placeholder="Digite sua Senha" />
          </InputGroup>

          <InputGroup>
            <IconWrapper><Lock size={18} /></IconWrapper>
            <Input type="password" placeholder="Confirme sua senha" />
          </InputGroup>

          <ConfirmButton onClick={() => navigate('/completar-perfil')}>
            Confirmar
          </ConfirmButton>
        </Form>
      </FinalizeCard>
    </FinalizeWrapper>
  );
}