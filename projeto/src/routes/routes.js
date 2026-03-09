import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Mapa from "../pages/mapa/Mapa";
import Login from "../pages/login/Login";
import Cadastro from "../pages/cadastro/Cadastro";
import CadastroFinal from "../pages/cadastroFinal/cadastroFinal";
import CompletarPerfil from "../pages/completarPerfil/CompletarPerfil";
import BuscaPerfis from "../pages/buscaPerfis/BuscaPerfis";
import Editais from "../pages/editais/Editais";
import Perfil from "../pages/perfil/Perfil";

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
        <Route path="/busca" element={<BuscaPerfis />} />
        <Route path="/editais" element={<Editais />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;