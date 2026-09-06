import { useState, useEffect, useCallback } from "react";
import AsyncSelect from "react-select/async";
import Select from "react-select"; 
import listaUniversidadesJSON from "../../../data/universidades-br.json";
import listaEstadosJSON from "../../../data/estados.json";
import api from "../../../services/api";

import { FilterBar, FilterGrid, SearchButton, ClearButton } from "./styles";

// Removido "Técnico-Administrativo": o modelo de usuário só aceita
// "Magistério Superior" ou "EBTT" (User.cargo enum), então essa opção
// nunca encontrava ninguém — era um filtro fantasma.
const CARGOS = [
  { value: "Magistério Superior", label: "Magistério Superior" },
  { value: "EBTT", label: "EBTT" },
];

export default function BuscarPerfil({ setResultados, initialEstado }) {
  const [instituicao, setInstituicao] = useState(null);
  const [cargo, setCargo] = useState(null);
  const [destino, setDestino] = useState(null);

  const opcoesEstados = listaEstadosJSON.map(e => ({
    value: e.sigla,
    label: e.nome
  }));

  // Função de busca real, com override opcional (usado no auto-disparo
  // quando o usuário chega aqui clicando num estado no mapa, pois nesse
  // momento o estado ainda não terminou de entrar no state via setDestino).
  const buscar = useCallback(
    async ({ instituicaoValue, cargoValue, destinoValue } = {}) => {
      try {
        const params = {};
        const inst = instituicaoValue !== undefined ? instituicaoValue : instituicao?.value;
        const carg = cargoValue !== undefined ? cargoValue : cargo?.value;
        const dest = destinoValue !== undefined ? destinoValue : destino?.value;

        if (inst) params.instituicao = inst;
        if (carg) params.cargo = carg;
        if (dest) params.estado = dest;

        const { data } = await api.get("/perfis/buscar", { params });
        setResultados(data);
      } catch (err) {
        console.error("Erro ao buscar perfis:", err);
        setResultados([]);
      }
    },
    [instituicao, cargo, destino, setResultados]
  );

  // Quando o usuário chega aqui clicando num estado no mapa: pré-seleciona
  // o estado no filtro E já dispara a busca automaticamente (antes só
  // pré-preenchia o campo, mas exigia clicar em "Buscar" de novo).
  useEffect(() => {
    if (initialEstado) {
      const opcao = opcoesEstados.find(
        (e) => e.value.toUpperCase() === initialEstado.toUpperCase()
      );
      if (opcao) {
        setDestino(opcao);
        buscar({ destinoValue: opcao.value });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialEstado]);

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
          // IMPORTANTE: o valor do filtro precisa ser a SIGLA, porque é
          // assim que a instituição fica gravada no perfil do usuário
          // (User.instituicao = "UFOPA", não o nome completo).
          value: u.sigla || u.universidade,
          label: u.sigla ? `${u.sigla} - ${u.universidade}` : u.universidade,
        }))
      );
    });
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
        
        <SearchButton onClick={() => buscar()}>
          Buscar
        </SearchButton>
      </FilterGrid>
    </FilterBar>
  );
}