import React, { useState } from "react";
import { Lock, Loader2, AlertCircle } from "lucide-react";
import Logo from "../../components/logo/Logo";
import { useNavigate, useSearchParams } from "react-router-dom";
import api from "../../services/api";

import {
  FinalizeWrapper,
  FinalizeCard,
  Title,
  Subtitle,
  Form,
  InputGroup,
  IconWrapper,
  Input,
  ConfirmButton,
  ErrorMessage,
} from "./styles";

export default function CadastroFinal() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const token = searchParams.get("token");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("A senha deve conter no mínimo 8 caracteres.");
      return;
    }

    const regexComplexidade = /^(?=.*[A-Za-z])(?=.*\d).+$/;
    if (!regexComplexidade.test(password)) {
      setError("A senha deve conter pelo menos uma letra e um número.");
      return;
    }

    const sequenciasFracas = ["12345678", "87654321", "password", "senha123"];
    if (sequenciasFracas.includes(password.toLowerCase())) {
      setError("Esta senha é muito óbvia. Tente algo mais seguro.");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas digitadas não são iguais.");
      return;
    }

    setLoading(true);

    try {
      const response = await api.put("/activate", {
        token,
        password,
      });

      const { token: jwtToken } = response.data;
      localStorage.setItem("@Wolf:token", jwtToken);

      navigate(`/completar-perfil?token=${token}`);
    } catch (err) {
      setError(
        err.response?.data?.error || "Erro ao ativar conta. Tente novamente.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <FinalizeWrapper>
      <FinalizeCard>
        <Logo />
        <Title>Finalizar Cadastro</Title>
        <Subtitle>Crie uma senha para ativar sua conta no WOLF</Subtitle>

        {error && (
          <ErrorMessage>
            <AlertCircle size={16} />
            <span>{error}</span>
          </ErrorMessage>
        )}

        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <IconWrapper>
              <Lock size={18} />
            </IconWrapper>
            <Input
              type="password"
              placeholder="Nova Senha (mín. 8 caracteres)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputGroup>

          <InputGroup>
            <IconWrapper>
              <Lock size={18} />
            </IconWrapper>
            <Input
              type="password"
              placeholder="Confirme sua Nova Senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </InputGroup>

          <ConfirmButton type="submit" disabled={loading}>
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              "Ativar minha Conta"
            )}
          </ConfirmButton>
        </Form>
      </FinalizeCard>
    </FinalizeWrapper>
  );
}
