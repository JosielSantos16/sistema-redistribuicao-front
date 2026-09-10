import React, { useState, useEffect, useRef, useCallback } from "react";
import { Camera, UploadCloud, Trash2 } from "lucide-react";
import AsyncCreatableSelect from "react-select/async-creatable";
import Select from "react-select";
import Sidebar from "../../components/sidebar/Sidebar";
import UsuarioImg from "../../assets/usuario.png";
import api from "../../services/api";
import { resolverFotoUrl } from "../../utils/mediaUrl";
import { usePerfil } from "../../contexts/PerfilContext";
import listaUniversidadesJSON from "../../data/universidades-br.json";
import listaCursosJSON from "../../data/cursos.json";
import listaEstadosJSON from "../../data/estados.json";
import {
  MainContainer, ContentWrapper, Header, Title, Section, Label, FormGrid,
  UploadArea, UploadPlaceholder, UploadButton, InputsGroup,
  InputRow, Input, AcademicGrid,
  SaveButton, StatusMessage,
} from "./styles";

function tokenHeader() {
  const token = localStorage.getItem("@Wolf:token");
  return { Authorization: `Bearer ${token}` };
}

const CARGOS = [
  { value: "Magistério Superior", label: "Magistério Superior" },
  { value: "EBTT", label: "EBTT" },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    minHeight: "47px",
    borderRadius: "8px",
    border: "1px solid #e2e8f0",
    boxShadow: "none",
    "&:hover": { border: "1px solid #FF6600" },
  }),
};

export default function Perfil() {
  const fileInputRef = useRef(null);
  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [enviandoFoto, setEnviandoFoto] = useState(false);
  const [removendoFoto, setRemovendoFoto] = useState(false);
  const [mensagem, setMensagem] = useState(null);

  const { nome, fotoUrl, atualizarPerfil } = usePerfil();

  const [nomeEditavel, setNomeEditavel] = useState("");

  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [telefone, setTelefone] = useState("");

  const [instituicao, setInstituicao] = useState(null);
  const [departamento, setDepartamento] = useState("");
  const [curso, setCurso] = useState(null);
  const [cargo, setCargo] = useState(null);
  const [lattes, setLattes] = useState("");
  const [estadoDestino, setEstadoDestino] = useState(null);

  const opcoesEstados = listaEstadosJSON.map((e) => ({ value: e.sigla, label: e.nome }));

  useEffect(() => {
    async function carregarPerfil() {
      try {
        const { data } = await api.get("/profile", { headers: tokenHeader() });

        atualizarPerfil({ nome: data.name || "", fotoUrl: resolverFotoUrl(data.foto_url) });
        setNomeEditavel(data.name || "");
        setCpf(data.cpf || "");
        setEmail(data.email || "");
        setDataNascimento(data.data_nascimento ? data.data_nascimento.slice(0, 10) : "");
        setTelefone(data.telefone || "");

        if (data.instituicao) setInstituicao({ value: data.instituicao, label: data.instituicao });
        setDepartamento(data.departamento || "");
        if (data.curso) setCurso({ value: data.curso, label: data.curso });
        if (data.cargo) setCargo({ value: data.cargo, label: data.cargo });
        setLattes(data.lattes || "");
        if (data.estado_destino) {
          const opcao = opcoesEstados.find((o) => o.value === data.estado_destino);
          if (opcao) setEstadoDestino(opcao);
        }
      } catch (err) {
        console.error("Erro ao carregar perfil:", err);
        setMensagem({ tipo: "erro", texto: "Não foi possível carregar seus dados. Tente recarregar a página." });
      } finally {
        setCarregando(false);
      }
    }
    carregarPerfil();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFotoClick = () => fileInputRef.current?.click();

  const handleFotoChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const tiposAceitos = ["image/jpeg", "image/png", "image/webp"];
    if (!tiposAceitos.includes(file.type)) {
      setMensagem({ tipo: "erro", texto: "Envie uma imagem JPG, PNG ou WEBP." });
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setMensagem({ tipo: "erro", texto: "A imagem deve ter no máximo 2MB." });
      return;
    }

    const previewUrl = URL.createObjectURL(file);
    atualizarPerfil({ fotoUrl: previewUrl });
    setEnviandoFoto(true);

    try {
      const payload = new FormData();
      payload.append("foto", file);
      const { data } = await api.put("/profile/foto", payload, { headers: tokenHeader() });
      atualizarPerfil({ fotoUrl: resolverFotoUrl(data.foto_url) });
    } catch (err) {
      console.error("Erro ao enviar foto:", err);
      setMensagem({ tipo: "erro", texto: "Não foi possível atualizar a foto." });
    } finally {
      setEnviandoFoto(false);
    }
  };

  const handleRemoverFoto = async (e) => {
    e.stopPropagation();
    if (!fotoUrl) return;
    if (!window.confirm("Remover sua foto de perfil?")) return;

    setRemovendoFoto(true);
    try {
      await api.delete("/profile/foto", { headers: tokenHeader() });
      atualizarPerfil({ fotoUrl: null });
    } catch (err) {
      console.error("Erro ao remover foto:", err);
      setMensagem({ tipo: "erro", texto: "Não foi possível remover a foto." });
    } finally {
      setRemovendoFoto(false);
    }
  };

  const loadInstituicoes = useCallback((inputValue) => {
    return new Promise((resolve) => {
      const buscaInput = inputValue.toLowerCase().trim();
      const filtradas = !buscaInput
        ? listaUniversidadesJSON.slice(0, 10)
        : listaUniversidadesJSON.filter((u) => {
            const nomeUni = String(u.universidade || "").toLowerCase();
            const siglaUni = String(u.sigla || "").toLowerCase();
            return nomeUni.includes(buscaInput) || siglaUni.includes(buscaInput);
          });

      resolve(
        filtradas.slice(0, 50).map((u) => ({
          value: u.sigla || u.universidade,
          label: u.sigla ? `${u.sigla} - ${u.universidade}` : u.universidade,
        }))
      );
    });
  }, []);

  const loadCursos = useCallback((inputValue) => {
    return new Promise((resolve) => {
      const buscaInput = inputValue.toLowerCase().trim();
      const filtrados = !buscaInput
        ? listaCursosJSON.slice(0, 10)
        : listaCursosJSON.filter((c) => String(c.nome || "").toLowerCase().includes(buscaInput));

      resolve(filtrados.slice(0, 50).map((c) => ({ value: c.nome, label: c.nome })));
    });
  }, []);

  const handleSalvar = async () => {
    setMensagem(null);

    if (!nomeEditavel || nomeEditavel.trim().length < 3) {
      setMensagem({ tipo: "erro", texto: "O nome deve ter pelo menos 3 caracteres." });
      return;
    }
    if (!instituicao || !departamento || !curso || !cargo) {
      setMensagem({ tipo: "erro", texto: "Preencha instituição, departamento, curso e cargo antes de salvar." });
      return;
    }
    if (!estadoDestino) {
      setMensagem({ tipo: "erro", texto: "Selecione o estado de destino desejado." });
      return;
    }

    setSalvando(true);
    try {
      const payload = new FormData();
      payload.append("name", nomeEditavel.trim());
      payload.append("instituicao", instituicao.value);
      payload.append("departamento", departamento);
      payload.append("curso", curso.value);
      payload.append("cargo", cargo.value);
      payload.append("lattes", lattes || "");
      payload.append("telefone", telefone || "");
      payload.append("estado_destino", estadoDestino.value);

      await api.put("/profile", payload, { headers: tokenHeader() });

      atualizarPerfil({ nome: nomeEditavel.trim() });

      setMensagem({ tipo: "ok", texto: "Perfil atualizado com sucesso!" });
    } catch (err) {
      const erroServidor = err.response?.data?.error;
      setMensagem({
        tipo: "erro",
        texto: Array.isArray(erroServidor) ? erroServidor.join(" ") : erroServidor || "Erro ao salvar. Tente novamente.",
      });
    } finally {
      setSalvando(false);
    }
  };

  if (carregando) {
    return (
      <MainContainer>
        <Sidebar />
        <ContentWrapper>
          <p style={{ color: "#718096" }}>Carregando seu perfil...</p>
        </ContentWrapper>
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      <Sidebar />

      <ContentWrapper>
        <Header>
          <Title>Dados do Perfil e contato</Title>
        </Header>

        <Section>
          <Label>Foto de Perfil:</Label>
          <FormGrid>
            <div>
              <UploadArea onClick={handleFotoClick} temFoto={!!fotoUrl}>
                {fotoUrl ? (
                  <img src={fotoUrl} alt={nome} />
                ) : (
                  <UploadPlaceholder>
                    <Camera size={40} color="#94a3b8" />
                    <p>Clique para adicionar uma foto</p>
                  </UploadPlaceholder>
                )}
                <div className="overlay">
                  <UploadCloud size={20} />
                  <span>{enviandoFoto ? "Enviando..." : "Trocar foto"}</span>
                </div>
              </UploadArea>

              {fotoUrl && (
                <UploadButton
                  type="button"
                  onClick={handleRemoverFoto}
                  disabled={removendoFoto}
                  style={{ marginTop: 10, backgroundColor: "#fff", color: "#e53e3e", border: "1px solid #fca5a5" }}
                >
                  <Trash2 size={14} />
                  {removendoFoto ? "Removendo..." : "Remover foto"}
                </UploadButton>
              )}
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              hidden
              onChange={handleFotoChange}
            />

            <InputsGroup>
              <InputRow>
                <Input
                  value={nomeEditavel}
                  onChange={(e) => setNomeEditavel(e.target.value)}
                  placeholder="Nome completo"
                  style={{ flex: 2 }}
                />
                <Input value={cpf} disabled style={{ flex: 1 }} />
              </InputRow>
              <InputRow>
                <Input
                  value={dataNascimento ? new Date(dataNascimento).toLocaleDateString("pt-BR") : ""}
                  disabled
                />
                <Input value={email} disabled />
              </InputRow>
              <InputRow>
                <Input
                  placeholder="(99) 99999-9999"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  style={{ maxWidth: "50%" }}
                />
              </InputRow>
              <span style={{ fontSize: "12px", color: "#a0aec0" }}>
                CPF, data de nascimento e e-mail não são editáveis por aqui.
              </span>
            </InputsGroup>
          </FormGrid>
        </Section>

        <Section>
          <Title>Dados Acadêmicos</Title>
          <AcademicGrid>
            <AsyncCreatableSelect
              cacheOptions
              defaultOptions
              loadOptions={loadInstituicoes}
              value={instituicao}
              onChange={setInstituicao}
              placeholder="Instituição"
              styles={customStyles}
              formatCreateLabel={(val) => `Usar "${val}"`}
              isClearable
            />
            <Input
              placeholder="Departamento"
              value={departamento}
              onChange={(e) => setDepartamento(e.target.value)}
            />

            <AsyncCreatableSelect
              cacheOptions
              defaultOptions
              loadOptions={loadCursos}
              value={curso}
              onChange={setCurso}
              placeholder="Curso/Área"
              styles={customStyles}
              formatCreateLabel={(val) => `Usar "${val}"`}
              isClearable
            />
            <Select
              options={CARGOS}
              value={cargo}
              onChange={setCargo}
              placeholder="Cargo/Função"
              styles={customStyles}
              isClearable
            />

            <Input
              placeholder="http://lattes.cnpq.br/..."
              value={lattes}
              onChange={(e) => setLattes(e.target.value)}
              style={{ gridColumn: "1 / -1" }}
            />
          </AcademicGrid>

          <Label>Estado de destino desejado:</Label>
          <div style={{ maxWidth: "320px" }}>
            <Select
              options={opcoesEstados}
              value={estadoDestino}
              onChange={setEstadoDestino}
              placeholder="Selecione o estado"
              styles={customStyles}
              isClearable
            />
          </div>
        </Section>

        {mensagem && <StatusMessage tipo={mensagem.tipo}>{mensagem.texto}</StatusMessage>}

        <SaveButton onClick={handleSalvar} disabled={salvando}>
          {salvando ? "Salvando..." : "Salvar"}
        </SaveButton>
      </ContentWrapper>
    </MainContainer>
  );
}