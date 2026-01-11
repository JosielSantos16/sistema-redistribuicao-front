import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, UserProfile, NavItem, LogoutArea } from "./styles";
import Usuario from "../../assets/usuario.png";

import {
  Map,
  Search,
  FileText,
  User,
  Bell,
  Users,
  HelpCircle,
  Shield,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <UserProfile>
          <img src={Usuario} alt="User" />
          <span>Nome do Usuário</span>
        </UserProfile>

        <NavItem active>
          <Map /> Mapa de Usuário
        </NavItem>
        <NavItem>
          <Search /> Encontrar perfis
        </NavItem>
        <NavItem>
          <FileText /> Editais
        </NavItem>
        <NavItem>
          <User /> Perfil
        </NavItem>
        <NavItem>
          <Bell /> Notificações
        </NavItem>
        <NavItem>
          <Users /> Seja parceiro
        </NavItem>
        <NavItem>
          <HelpCircle /> Ajuda e suporte
        </NavItem>
        <NavItem>
          <Shield /> Políticas e Regulamentos
        </NavItem>
        <NavItem>
          <Settings /> Configurações
        </NavItem>

        <LogoutArea>
          <LogOut size={18} /> Sair
        </LogoutArea>
      </Container>
    </>
  );
}
