import { ChevronDown } from "lucide-react";
import { FilterBar, FilterGrid, SearchButton, ClearButton } from "./styles";

export default function BuscarPerfil({setResultados}) {
  
  const handleSearch = () => {
    const mockData = [
      {
        id: "A",
        nome: "Usuário A",
        email: "a*******@email.com",
        origem: "X",
        destino: "Y",
      },
      {
        id: "B",
        nome: "Usuário B",
        email: "b*******@email.com",
        origem: "X",
        destino: "Y",
      },
      {
        id: "C",
        nome: "Usuário C",
        email: "c*******@email.com",
        origem: "X",
        destino: "Y",
      },
      {
        id: "D",
        nome: "Usuário D",
        email: "c*******@email.com",
        origem: "X",
        destino: "Y",
      },
      {
        id: "E",
        nome: "Usuário E",
        email: "c*******@email.com",
        origem: "X",
        destino: "Y",
      },
      {
        id: "F",
        nome: "Usuário F",
        email: "c*******@email.com",
        origem: "X",
        destino: "Y",
      },
      {
        id: "G",
        nome: "Usuário G",
        email: "c*******@email.com",
        origem: "X",
        destino: "Y",
      },
      {
        id: "H",
        nome: "Usuário H",
        email: "c*******@email.com",
        origem: "X",
        destino: "Y",
      },
    ];
    setResultados(mockData);
  };

  return (
    <FilterBar>
      <div className="header">Perfil Procurado</div>
      <FilterGrid>
        <div className="select-field">
          <select defaultValue="">
            <option disabled value="">
              Instituição
            </option>
          </select>
          <ChevronDown size={18} className="arrow" />
        </div>
        <div className="select-field">
          <select defaultValue="">
            <option disabled value="">
              Cargo/Função
            </option>
          </select>
          <ChevronDown size={18} className="arrow" />
        </div>
        <div className="select-field">
          <select defaultValue="">
            <option disabled value="">
              Estado de Destino
            </option>
          </select>
          <ChevronDown size={18} className="arrow" />
        </div>

        <ClearButton>Limpar</ClearButton>
        <SearchButton onClick={handleSearch}>Buscar</SearchButton>
      </FilterGrid>
    </FilterBar>
  );
}
