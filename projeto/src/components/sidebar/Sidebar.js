import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, UserProfile, NavItem, LogoutArea } from "./styles";
import Usuario from "../../assets/usuario.png";
import {
  Map, Search, FileText, User, Bell, Users, 
  HelpCircle, Shield, Settings, LogOut
} from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

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
    <Container>
      <UserProfile>
        <img src={Usuario} alt="User" />
        <span>Nome do Usuário</span>
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
  );
}