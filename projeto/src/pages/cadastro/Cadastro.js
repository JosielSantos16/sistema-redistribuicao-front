import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, IdCard, Mail, Calendar as CalendarIcon } from "lucide-react";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ptBR } from "date-fns/locale";
import api from "../../services/api";
import Logo from "../../components/logo/Logo";
import {
  RegisterWrapper,
  RegisterCard,
  Title,
  Subtitle,
  Form,
  InputGroup,
  InputWrapper,
  IconWrapper,
  Input,
  CheckboxGroup,
  RegisterButton,
  FooterText,
  ErrorMessage,
  DatePickerWrapper,
} from "./styles";

const isValidCPF = (cpf) => {
  const cleanCpf = cpf.replace(/\D/g, "");
  if (cleanCpf.length !== 11 || /^(\d)\1+$/.test(cleanCpf)) return false;
  let sum = 0,
    rest;
  for (let i = 1; i <= 9; i++)
    sum += parseInt(cleanCpf.substring(i - 1, i)) * (11 - i);
  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) rest = 0;
  if (rest !== parseInt(cleanCpf.substring(9, 10))) return false;
  sum = 0;
  for (let i = 1; i <= 10; i++)
    sum += parseInt(cleanCpf.substring(i - 1, i)) * (12 - i);
  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) rest = 0;
  if (rest !== parseInt(cleanCpf.substring(10, 11))) return false;
  return true;
};

export default function Cadastro() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState(null);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleCpfChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    setCpf(value.slice(0, 14));

    if (errors.cpf) setErrors({ ...errors, cpf: null });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setErrors({});

    const schema = Yup.object().shape({
      name: Yup.string()
        .required("O nome é obrigatório")
        .trim()
        .matches(
          /^[A-Za-zÀ-ÿ]+(\s[A-Za-zÀ-ÿ]+)+$/,
          "Tem certeza que insiriu seu nome corretamente? (nome inválido!)",
        )
        .min(3, "O nome deve ter pelo menos 3 caracteres"),
      email: Yup.string()
        .email("Insira um e-mail válido")
        .required("O e-mail é obrigatório"),
      cpf: Yup.string()
        .required("O CPF é obrigatório")
        .test("is-valid-cpf", "CPF inválido", (value) =>
          isValidCPF(value || ""),
        ),
      data_nascimento: Yup.date()
        .required("A data é obrigatória")
        .typeError("Data inválida")
        .max(new Date(), "A data não pode ser no futuro")
        .test("is-adult", "Data inválida para um servidor", (value) => {
          const today = new Date();
          const birthDate = new Date(value);
          let age = today.getFullYear() - birthDate.getFullYear();
          const m = today.getMonth() - birthDate.getMonth();
          if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
            age--;

          return age >= 18 && age <= 100;
        }),
      acceptedTerms: Yup.boolean().oneOf(
        [true],
        "Aceite os termos para continuar",
      ),
    });

    try {
      setLoading(true);

      await schema.validate(
        { name, email, cpf, data_nascimento: dataNascimento, acceptedTerms },
        { abortEarly: false },
      );

      const cleanCpf = cpf.replace(/\D/g, "");

      await api.post("/users", {
        name,
        email,
        cpf: cleanCpf,
        data_nascimento: dataNascimento,
      });

      navigate("/finalizar-cadastro");
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const validationErrors = {};

        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      } else {
        const errorMsg = err.response?.data?.error || "Erro no servidor.";
        alert(errorMsg);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <RegisterWrapper>
      <RegisterCard>
        <Logo />
        <Title>Cadastro</Title>
        <Subtitle>
          Cadastre-se para acessar o sistema de redistribuição
        </Subtitle>

        <Form onSubmit={handleSubmit} noValidate>
          <InputGroup>
            <InputWrapper>
              <IconWrapper hasError={!!errors.name}>
                <User size={18} />
              </IconWrapper>
              <Input
                type="text"
                placeholder="Nome Completo"
                value={name}
                hasError={!!errors.name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors({ ...errors, name: null });
                }}
              />
            </InputWrapper>
            {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
          </InputGroup>

          <InputGroup>
            <InputWrapper>
              <IconWrapper hasError={!!errors.cpf}>
                <IdCard size={18} />
              </IconWrapper>
              <Input
                type="text"
                placeholder="000.000.000-00"
                value={cpf}
                hasError={!!errors.cpf}
                onChange={handleCpfChange}
              />
            </InputWrapper>
            {errors.cpf && <ErrorMessage>{errors.cpf}</ErrorMessage>}
          </InputGroup>

          <InputGroup>
            <InputWrapper>
              <IconWrapper hasError={!!errors.email}>
                <Mail size={18} />
              </IconWrapper>
              <Input
                type="email"
                placeholder="E-mail"
                value={email}
                hasError={!!errors.email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors({ ...errors, email: null });
                }}
              />
            </InputWrapper>
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </InputGroup>

          <InputGroup>
            <InputWrapper>
              <IconWrapper hasError={!!errors.data_nascimento}>
                <CalendarIcon size={18} />
              </IconWrapper>

              <DatePickerWrapper>
                <DatePicker
                  selected={dataNascimento}
                  onChange={(date) => setDataNascimento(date)}
                  locale={ptBR}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="dd/mm/aaaa"
                  maxDate={new Date()}
                  showYearDropdown
                  scrollableYearDropdown
                  yearDropdownItemNumber={100}
                  customInput={<Input hasError={!!errors.data_nascimento} />}
                />
              </DatePickerWrapper>
            </InputWrapper>
            {errors.data_nascimento && (
              <ErrorMessage>{errors.data_nascimento}</ErrorMessage>
            )}
          </InputGroup>

          <CheckboxGroup>
            <input
              type="checkbox"
              id="terms"
              checked={acceptedTerms}
              onChange={() => {
                setAcceptedTerms(!acceptedTerms);
                if (errors.acceptedTerms)
                  setErrors({ ...errors, acceptedTerms: null });
              }}
            />
            <label htmlFor="terms">
              Eu aceito os <a href="#">termos e condições de uso</a>
            </label>
          </CheckboxGroup>
          {errors.acceptedTerms && (
            <ErrorMessage>{errors.acceptedTerms}</ErrorMessage>
          )}

          <RegisterButton type="submit" disabled={loading}>
            {loading ? "Processando..." : "Cadastrar"}
          </RegisterButton>
        </Form>

        <FooterText>
          Já possui conta? <a href="/login">Entrar</a>
        </FooterText>
      </RegisterCard>
    </RegisterWrapper>
  );
}
