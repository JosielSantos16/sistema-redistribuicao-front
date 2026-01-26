import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { User, IdCard, Mail, Calendar } from 'lucide-react';
import Logo from '../../components/logo/Logo';
import {
  RegisterWrapper,
  RegisterCard,
  Title,
  Subtitle,
  Form,
  InputGroup,
  IconWrapper,
  Input,
  CheckboxGroup,
  RegisterButton,
  FooterText
} from './styles';

export default function Cadastro() {
  const navigate = useNavigate();
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  return (
    <RegisterWrapper>
      <RegisterCard>
        <Logo/>

        <Title>Cadastro</Title>
        <Subtitle>Cadastre-se para acessar o sistema de redistribuição</Subtitle>

        <Form>
          <InputGroup>
            <IconWrapper><User size={18} /></IconWrapper>
            <Input type="text" placeholder="Nome Completo" />
          </InputGroup>

          <InputGroup>
            <IconWrapper><IdCard size={18} /></IconWrapper>
            <Input type="text" placeholder="CPF" />
          </InputGroup>

          <InputGroup>
            <IconWrapper><Mail size={18} /></IconWrapper>
            <Input type="email" placeholder="E-mail" />
          </InputGroup>

          <InputGroup>
            <IconWrapper><Calendar size={18} /></IconWrapper>
            <Input type="text" placeholder="dd/mm/aaaa" />
          </InputGroup>

          <CheckboxGroup>
            <input 
              type="checkbox" 
              id="terms" 
              checked={acceptedTerms}
              onChange={() => setAcceptedTerms(!acceptedTerms)}
            />
            <label htmlFor="terms">
              Eu aceito os <a href="#">termos e condições de uso</a>
            </label>
          </CheckboxGroup>

          <RegisterButton type="submit" onClick={() => navigate("/finalizar-cadastro")}>
            Cadastrar
          </RegisterButton>
        </Form>

        <FooterText>
          Já possui conta? <a href="/login">Entrar</a>
        </FooterText>
      </RegisterCard>
    </RegisterWrapper>
  );
}