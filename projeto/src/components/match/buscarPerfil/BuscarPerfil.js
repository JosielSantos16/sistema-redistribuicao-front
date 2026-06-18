import { useState } from "react";
import AsyncSelect from "react-select/async";
import Select from "react-select"; 
import listaUniversidadesJSON from "../../../data/universidades-br.json";
import listaEstadosJSON from "../../../data/estados.json";

import { FilterBar, FilterGrid, SearchButton, ClearButton } from "./styles";

const CARGOS = [
  { value: "Magistério Superior", label: "Magistério Superior" },
  { value: "EBTT", label: "EBTT" },
  { value: "Técnico-Administrativo", label: "Técnico-Administrativo" }
];

export default function BuscarPerfil({ setResultados }) {
  const [instituicao, setInstituicao] = useState(null);
  const [cargo, setCargo] = useState(null);
  const [destino, setDestino] = useState(null);

  const opcoesEstados = listaEstadosJSON.map(e => ({
    value: e.sigla,
    label: e.nome
  }));

  const loadInstituicoes = (inputValue) => {
    return new Promise((resolve) => {
      const buscaInput = inputValue.toLowerCase().trim();
      const filtradas = listaUniversidadesJSON.filter((u) => {
        const nomeUni = String(u.universidade || "").toLowerCase();
        const siglaUni = String(u.sigla || "").toLowerCase();
        return nomeUni.includes(buscaInput) || siglaUni.includes(buscaInput);
      });

      resolve(
        filtradas.slice(0, 50).map((u) => ({
          value: u.universidade,
          label: u.sigla ? `${u.sigla} - ${u.universidade}` : u.universidade,
        }))
      );
    });
  };

  const handleSearch = () => {
    const mockData = [
      {
        id: "1",
        nome: "Usuário A",
        email: "a*******@email.com",
        origem: instituicao?.label || "UFOPA", 
        destino: destino?.label || "Pará",
      },
      {
        id: "2",
        nome: "Usuário B",
        email: "b*******@email.com",
        origem: instituicao?.label || "UFPA",
        destino: destino?.label || "São Paulo",
      },
      {
        id: "3",
        nome: "Usuário C",
        email: "c*******@email.com",
        origem: "IFPA",
        destino: "Rio de Janeiro",
      }
    ];

    setResultados(mockData);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      minHeight: "45px",
      border: "1px solid #e2e8f0",
      borderRadius: "8px",
      boxShadow: "none",
      "&:hover": { border: "1px solid #FF6600" },
    }),
    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
  };

  const handleClear = () => {
    setInstituicao(null);
    setCargo(null);
    setDestino(null);
    setResultados([]);
  };

  return (
    <FilterBar>
      <div className="header">Perfil Procurado</div>
      <FilterGrid>
        
        <div style={{ flex: 1 }}>
          <AsyncSelect
            cacheOptions
            defaultOptions
            loadOptions={loadInstituicoes}
            value={instituicao}
            onChange={setInstituicao}
            placeholder="Instituição"
            styles={customStyles}
            isClearable
            menuPortalTarget={document.body}
          />
        </div>

        <div style={{ flex: 1 }}>
          <Select
            options={CARGOS}
            value={cargo}
            onChange={setCargo}
            placeholder="Cargo/Função"
            styles={customStyles}
            isClearable
            menuPortalTarget={document.body}
          />
        </div>

        <div style={{ flex: 1 }}>
          <Select
            options={opcoesEstados}
            value={destino}
            onChange={setDestino}
            placeholder="Estado de Destino"
            styles={customStyles}
            isClearable
            noOptionsMessage={() => "Estado não encontrado"}
            menuPortalTarget={document.body}
          />
        </div>

        <ClearButton onClick={handleClear}>Limpar</ClearButton>
        
        <SearchButton onClick={handleSearch}>
          Buscar
        </SearchButton>
      </FilterGrid>
    </FilterBar>
  );
}