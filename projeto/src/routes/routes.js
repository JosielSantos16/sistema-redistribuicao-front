import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Mapa from "../pages/mapa/Mapa";
import Login from "../pages/login/Login";
import Cadastro from "../pages/cadastro/Cadastro";
import CadastroFinal from "../pages/cadastroFinal/cadastroFinal";
import CompletarPerfil from "../pages/completarPerfil/CompletarPerfil";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/finalizar-cadastro" element={<CadastroFinal />} />
        <Route path="/completar-perfil" element={<CompletarPerfil />} />
        <Route path="/mapa" element={<Mapa />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;