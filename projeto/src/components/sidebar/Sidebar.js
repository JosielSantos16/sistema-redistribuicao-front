import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, UserProfile, NavItem, LogoutArea, MenuButton, Overlay } from "./styles";
import Usuario from "../../assets/usuario.png";
import api from "../../services/api";
import {
  Map, Search, FileText, User, Bell, Users, 
  HelpCircle, Shield, Settings, LogOut, Camera, Menu, X
} from "lucide-react";

const API_BASE_URL = "http://localhost:3001"; // mesma base usada em services/api.js
const CACHE_KEY = "@Wolf:perfilCache";

// Lê o último nome/foto conhecidos do localStorage, pra já mostrar isso de
// cara ao montar (evita o "pisca-pisca" pra foto padrão a cada troca de
// página — antes disso, cada tela remonta o menu do zero e ele ficava um
// instante mostrando o estado vazio até a requisição /profile responder).
function lerCache() {
  try {
    const bruto = localStorage.getItem(CACHE_KEY);
    return bruto ? JSON.parse(bruto) : {};
  } catch {
    return {};
  }
}

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const fileInputRef = useRef(null);
  const cache = lerCache();

  const [nome, setNome] = useState(cache.nome || "Usuário");
  const [fotoUrl, setFotoUrl] = useState(cache.fotoUrl || null);
  const [enviandoFoto, setEnviandoFoto] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    async function carregarPerfil() {
      try {
        const token = localStorage.getItem("@Wolf:token");
        const { data } = await api.get("/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const nomeFinal = data.name || "Usuário";
        const fotoFinal = data.foto_url ? `${API_BASE_URL}${data.foto_url}` : null;

        setNome(nomeFinal);
        setFotoUrl(fotoFinal);

        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ nome: nomeFinal, fotoUrl: fotoFinal })
        );
      } catch (err) {
        console.error("Erro ao carregar dados do usuário:", err);
      }
    }
    carregarPerfil();
  }, []);

  // Fecha o menu mobile automaticamente ao trocar de página
  useEffect(() => {
    setMenuAberto(false);
  }, [location.pathname]);

  const handleFotoClick = () => {
    fileInputRef.current?.click();
  };

  const handleFotoChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const tiposAceitos = ["image/jpeg", "image/png", "image/webp"];
    if (!tiposAceitos.includes(file.type)) {
      alert("Envie uma imagem JPG, PNG ou WEBP.");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      alert("A imagem deve ter no máximo 2MB.");
      return;
    }

    // Preview local imediato, enquanto o upload real acontece por baixo
    const previewUrl = URL.createObjectURL(file);
    setFotoUrl(previewUrl);
    setEnviandoFoto(true);

    try {
      const token = localStorage.getItem("@Wolf:token");
      const payload = new FormData();
      payload.append("foto", file);

      const { data } = await api.put("/profile/foto", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const fotoFinal = `${API_BASE_URL}${data.foto_url}`;
      setFotoUrl(fotoFinal);
      localStorage.setItem(CACHE_KEY, JSON.stringify({ nome, fotoUrl: fotoFinal }));
    } catch (err) {
      console.error("Erro ao enviar foto:", err);
      alert("Não foi possível atualizar a foto. Tente novamente.");
    } finally {
      setEnviandoFoto(false);
    }
  };

  const menuItems = [
    { name: "Mapa de Usuário", icon: <Map />, path: "/mapa" },
    { name: "Encontrar perfis", icon: <Search />, path: "/busca" },
    { name: "Editais", icon: <FileText />, path: "/editais" },
    { name: "Perfil", icon: <User />, path: "/perfil" },
    { name: "Notificações", icon: <Bell />, path: "/notificacoes" },
    { name: "Seja parceiro", icon: <Users />, path: "/seja-parceiro" },
    { name: "Ajuda e suporte", icon: <HelpCircle />, path: "/suporte" },
    { name: "Políticas e Regulamentos", icon: <Shield />, path: "/politicas" },
    { name: "Configurações", icon: <Settings />, path: "/configuracoes" },
  ];

  return (
    <>
      {/* Botão hambúrguer — só aparece em telas pequenas (controlado via CSS) */}
      <MenuButton onClick={() => setMenuAberto((v) => !v)}>
        {menuAberto ? <X size={22} /> : <Menu size={22} />}
      </MenuButton>

      {/* Fundo escurecido atrás do menu aberto no mobile — clicar nele fecha */}
      {menuAberto && <Overlay onClick={() => setMenuAberto(false)} />}

      <Container aberto={menuAberto}>
        <UserProfile>
          <div className="avatar-wrapper" onClick={handleFotoClick}>
            <img src={fotoUrl || Usuario} alt={nome} />
            <div className="avatar-overlay">
              <Camera size={18} />
            </div>
            {enviandoFoto && <div className="avatar-loading">Enviando...</div>}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            hidden
            onChange={handleFotoChange}
          />

          <span>{nome}</span>
        </UserProfile>

        {menuItems.map((item) => (
          <NavItem 
            key={item.path}
            active={isActive(item.path)} 
            onClick={() => navigate(item.path)}
          >
            {item.icon} {item.name}
          </NavItem>
        ))}

        <LogoutArea onClick={() => navigate("/login")}>
          <LogOut size={18} /> Sair
        </LogoutArea>
      </Container>
    </>
  );
}