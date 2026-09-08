import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { SyncProvider } from "../contexts/SyncContext";
import { PerfilProvider } from "../contexts/PerfilContext";
import Home from "../pages/home/Home";
import Cadastro from "../pages/cadastro/Cadastro";
import VerificarEmail from "../pages/verificarEmail/VerificarEmail";
import CadastroFinal from "../pages/cadastroFinal/CadastroFinal";
import CompletarPerfil from "../pages/completarPerfil/CompletarPerfil";
import Login from "../pages/login/Login";
import Mapa from "../pages/mapa/Mapa";
import BuscaPerfis from "../pages/buscaPerfis/BuscaPerfis";
import Editais from "../pages/editais/Editais";
import Perfil from "../pages/perfil/Perfil";
import Parceiros from "../pages/parceiros/Parceiros";
import AjudaSuporte from "../pages/ajudaSuporte/AjudaSuporte";
import Politicas from "../components/politicas/Politicas";
import Configuracoes from "../pages/configuracoes/Configuracoes";
import Notificacoes from "../pages/notificacoes/Notificacoes";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('@Wolf:token');
  
  return token ? children : <Navigate to="/login" />;
};

function AppRoutes() {
  return (
    <Router>
      <SyncProvider>
      <PerfilProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/verificar-email" element={<VerificarEmail />} />
          <Route path="/finalizar-cadastro" element={<CadastroFinal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/seja-parceiro" element={<Parceiros />} />
          <Route path="/notificacoes" element={<Notificacoes />} /> 
          <Route path="/suporte" element={<AjudaSuporte />} />
          <Route path="/politicas" element={<Politicas />} />
          <Route path="/configuracoes" element={<Configuracoes />} />

          <Route path="/completar-perfil" element={
            <PrivateRoute> <CompletarPerfil /> </PrivateRoute>
          } />
          <Route path="/mapa" element={
            <PrivateRoute> <Mapa /> </PrivateRoute>
          } />
          <Route path="/busca" element={<BuscaPerfis />} />
          <Route path="/editais" element={<Editais />} />
          <Route path="/perfil" element={
            <PrivateRoute> <Perfil /> </PrivateRoute>
          } />
        </Routes>
      </PerfilProvider>
      </SyncProvider>
    </Router>
  );
}

export default AppRoutes;