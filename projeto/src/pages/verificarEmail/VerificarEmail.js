import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Mail, ExternalLink } from "lucide-react";
import Logo from "../../components/logo/Logo";
import {
  RegisterWrapper,
  RegisterCard,
  Title,
  Subtitle,
  RegisterButton,
  MailButton,
  FooterText,
  IconContainer,
  InfoBox
} from "./styles";

export default function VerificarEmail() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";

  // Função para descobrir o link da caixa de entrada
  const getMailServerUrl = (email) => {
    const domain = email.split("@")[1]?.toLowerCase();
    if (domain?.includes("gmail")) return "https://mail.google.com";
    if (domain?.includes("outlook") || domain?.includes("hotmail") || domain?.includes("live")) return "https://outlook.live.com";
    if (domain?.includes("yahoo")) return "https://mail.yahoo.com";
    return null; // Caso não identifique, o botão não aparece ou abre o padrão
  };

  const mailUrl = getMailServerUrl(email);

  return (
    <RegisterWrapper>
      <RegisterCard>
        <Logo />
        
        <IconContainer>
          <div className="icon-circle">
            <Mail size={48} />
          </div>
        </IconContainer>

        <Title>Verifique seu e-mail</Title>
        <Subtitle>
          Enviamos um link de confirmação para:<br />
          <strong style={{ color: "#001858" }}>{email || "seu e-mail"}</strong>
        </Subtitle>

        <InfoBox>
          <p>
            <strong>Ação necessária:</strong> Acesse o link enviado para definir sua senha e liberar seu acesso ao sistema <strong>WOLF</strong>.
          </p>
        </InfoBox>

        {/* Botão Dinâmico para o E-mail */}
        {mailUrl && (
          <MailButton href={mailUrl} target="_blank" rel="noopener noreferrer">
            Ir para o meu E-mail <ExternalLink size={16} style={{ marginLeft: '8px' }} />
          </MailButton>
        )}

        <RegisterButton onClick={() => navigate("/login")} style={{ marginTop: mailUrl ? '10px' : '0' }}>
          Voltar para o Login
        </RegisterButton>

        <FooterText>
          Não recebeu? <br />
          <a onClick={(e) => e.preventDefault()}>Reenviar e-mail de ativação</a>
        </FooterText>
      </RegisterCard>
    </RegisterWrapper>
  );
}