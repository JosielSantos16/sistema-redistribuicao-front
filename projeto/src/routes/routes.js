import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('@Wolf:token');
  
  return token ? children : <Navigate to="/login" />;
};

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/verificar-email" element={<VerificarEmail />} />
        <Route path="/finalizar-cadastro" element={<CadastroFinal />} />
        <Route path="/login" element={<Login />} />

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
    </Router>
  );
}

export default AppRoutes;