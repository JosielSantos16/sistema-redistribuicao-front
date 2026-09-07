import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, UserProfile, NavItem, LogoutArea, MenuButton, Overlay, Badge } from "./styles";
import Usuario from "../../assets/usuario.png";
import api from "../../services/api";
import { resolverFotoUrl } from "../../utils/mediaUrl";
import { useSync } from "../../contexts/SyncContext";
import {
  Map, Search, FileText, User, Bell, Users, 
  HelpCircle, Shield, Settings, LogOut, Camera, Menu, X, RefreshCw
} from "lucide-react";

const CACHE_KEY = "@Wolf:perfilCache";

function lerCache() {
  try {
    const bruto = localStorage.getItem(CACHE_KEY);
    return bruto ? JSON.parse(bruto) : {};
  } catch {
    return {};
  }
}

function tokenHeader() {
  const token = localStorage.getItem("@Wolf:token");
  return { Authorization: `Bearer ${token}` };
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
  const [totalNotificacoes, setTotalNotificacoes] = useState(0);
  const { sincronizando, naoVisualizado, ultimoResultado } = useSync();

  useEffect(() => {
    async function carregarPerfil() {
      try {
        const { data } = await api.get("/profile", { headers: tokenHeader() });

        const nomeFinal = data.name || "Usuário";
        const fotoFinal = resolverFotoUrl(data.foto_url);

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

    // O número do sino é a soma de duas coisas: pedidos de match esperando
    // resposta, e mensagens que chegaram em conversas já confirmadas e
    // você ainda não abriu.
    async function carregarNotificacoes() {
      try {
        const [respRecebidos, respConfirmados] = await Promise.all([
          api.get("/matches/recebidos", { headers: tokenHeader() }),
          api.get("/matches/confirmados", { headers: tokenHeader() }),
        ]);

        const totalPendentes = respRecebidos.data.length;
        const totalNaoLidas = respConfirmados.data.reduce(
          (soma, m) => soma + (m.naoLidas || 0),
          0
        );

        setTotalNotificacoes(totalPendentes + totalNaoLidas);
      } catch (err) {
        console.error("Erro ao carregar notificações:", err);
      }
    }

    carregarPerfil();
    carregarNotificacoes();
  }, [location.pathname]); 

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

    const previewUrl = URL.createObjectURL(file);
    setFotoUrl(previewUrl);
    setEnviandoFoto(true);

    try {
      const payload = new FormData();
      payload.append("foto", file);

      const { data } = await api.put("/profile/foto", payload, {
        headers: tokenHeader(),
      });

      const fotoFinal = resolverFotoUrl(data.foto_url);
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
    { 
      name: "Editais", 
      icon: <FileText />, 
      path: "/editais",
      sincronizando,
      badge: naoVisualizado ? (ultimoResultado?.sucesso ? ultimoResultado.total_itens : "!") : null,
    },
    { name: "Perfil", icon: <User />, path: "/perfil" },
    { name: "Notificações", icon: <Bell />, path: "/notificacoes", badge: totalNotificacoes },
    { name: "Seja parceiro", icon: <Users />, path: "/seja-parceiro" },
    { name: "Ajuda e suporte", icon: <HelpCircle />, path: "/suporte" },
    { name: "Políticas e Regulamentos", icon: <Shield />, path: "/politicas" },
    { name: "Configurações", icon: <Settings />, path: "/configuracoes" },
  ];

  return (
    <>
      <MenuButton onClick={() => setMenuAberto((v) => !v)}>
        {menuAberto ? <X size={22} /> : <Menu size={22} />}
      </MenuButton>

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
            <span className="icone-com-badge">
              {item.icon}
              {item.sincronizando && (
                <RefreshCw size={11} className="spin-sync" />
              )}
              {!!item.badge && <Badge>{item.badge === "!" ? "!" : (item.badge > 9 ? "9+" : item.badge)}</Badge>}
            </span>
            {item.name}
          </NavItem>
        ))}

        <LogoutArea onClick={() => navigate("/login")}>
          <LogOut size={18} /> Sair
        </LogoutArea>
      </Container>
    </>
  );
}