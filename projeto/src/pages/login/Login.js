import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Mail, Lock } from 'lucide-react';
import Logo from '../../components/logo/Logo';
import {
  LoginWrapper,
  LoginCard,
  Title,
  Subtitle,
  TabContainer,
  Tab,
  Form,
  InputGroup,
  IconWrapper,
  Input,
  ForgotPassword,
  LoginButton,
  FooterText
} from './styles';

export default function Login() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('usuario');

  return (
    <LoginWrapper>
      <LoginCard>
        <Logo/>
        <Title>Login</Title>
        <Subtitle>Acesse o sistema de Redistribuição</Subtitle>

        <TabContainer>
          <Tab 
            active={activeTab === 'usuario'} 
            onClick={() => setActiveTab('usuario')}
          >
            Usuário
          </Tab>
          <Tab 
            active={activeTab === 'admin'} 
            onClick={() => setActiveTab('admin')}
          >
            Administrador
          </Tab>
        </TabContainer>

        <Form>
          <InputGroup>
            <IconWrapper><Mail size={18} /></IconWrapper>
            <Input type="email" placeholder="E-mail" />
          </InputGroup>

          <InputGroup>
            <IconWrapper><Lock size={18} /></IconWrapper>
            <Input type="password" placeholder="Senha" />
          </InputGroup>

          <ForgotPassword href="#">Esqueceu sua senha?</ForgotPassword>

          <LoginButton onClick={() => navigate("/finalizar-cadastro")}>
            Entrar como {activeTab === 'usuario' ? 'Usuário' : 'Administrador'}
          </LoginButton>
        </Form>

        <FooterText>
          Não tem conta? <a href="/cadastro">Cadastrar-se</a>
        </FooterText>
      </LoginCard>
    </LoginWrapper>
  );
}