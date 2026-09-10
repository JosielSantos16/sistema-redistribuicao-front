import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import api from "../../services/api";
import Logo from "../../components/logo/Logo";
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
  FooterText,
} from "./styles";

export default function Login() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("usuario");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await api.post('/sessions', {
        email: email, 
        password: senha, 
      });

      const { token, user } = response.data;

      if (activeTab === "admin" && !user.admin) {
        alert("Acesso negado. Este usuário não possui privilégios de administrador.");
        setLoading(false);
        return;
      }

      localStorage.setItem('@Wolf:token', token);
      localStorage.setItem('@Wolf:user', JSON.stringify(user));

      api.defaults.headers.Authorization = `Bearer ${token}`;

      alert(`Bem-vindo, ${user.name}!`);
      
      if (user.admin) {
        navigate("/admin-dashboard");
      } else {
        navigate("/mapa"); 
      }

    } catch (err) {
      const errorMsg = err.response?.data?.error || "Erro ao conectar com o servidor.";
      alert(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginWrapper>
      <LoginCard>
        <Logo />
        <Title>Login</Title>
        <Subtitle>Acesse o sistema de Redistribuição</Subtitle>

        <TabContainer>
          <Tab
            active={activeTab === "usuario"}
            onClick={() => setActiveTab("usuario")}
          >
            Usuário
          </Tab>
          <Tab
            active={activeTab === "admin"}
            onClick={() => setActiveTab("admin")}
          >
            Administrador
          </Tab>
        </TabContainer>

        <Form onSubmit={handleLogin}>
          <InputGroup>
            <IconWrapper>
              <Mail size={18} />
            </IconWrapper>
            <Input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputGroup>

          <InputGroup>
            <IconWrapper>
              <Lock size={18} />
            </IconWrapper>
            <Input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </InputGroup>

          <ForgotPassword href="#">Esqueceu sua senha?</ForgotPassword>

          <LoginButton type="submit" disabled={loading}>
            {loading
              ? "Carregando..."
              : `Entrar como ${activeTab === "usuario" ? "Usuário" : "Administrador"}`}
          </LoginButton>
        </Form>

        <FooterText>
          Não tem conta? <a href="/cadastro">Cadastrar-se</a>
        </FooterText>
      </LoginCard>
    </LoginWrapper>
  );
}