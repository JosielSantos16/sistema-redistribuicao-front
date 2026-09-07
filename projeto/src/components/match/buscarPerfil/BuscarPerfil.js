import { useState, useEffect, useCallback, forwardRef, useImperativeHandle } from "react";
import AsyncSelect from "react-select/async";
import Select from "react-select"; 
import listaUniversidadesJSON from "../../../data/universidades-br.json";
import listaEstadosJSON from "../../../data/estados.json";
import api from "../../../services/api";

import { FilterBar, FilterGrid, SearchButton, ClearButton } from "./styles";

const CARGOS = [
  { value: "Magistério Superior", label: "Magistério Superior" },
  { value: "EBTT", label: "EBTT" },
];

const RESULTADOS_POR_PAGINA = 12;

const BuscarPerfil = forwardRef(function BuscarPerfil(
  { setResultados, initialEstado },
  ref
) {
  const [instituicao, setInstituicao] = useState(null);
  const [cargo, setCargo] = useState(null);
  const [destino, setDestino] = useState(null);
  const [estadoTravado, setEstadoTravado] = useState(!!initialEstado);

  const opcoesEstados = listaEstadosJSON.map(e => ({
    value: e.sigla,
    label: e.nome
  }));

  const buscar = useCallback(
    async ({ instituicaoValue, cargoValue, destinoValue, paginaAlvo } = {}) => {
      try {
        const token = localStorage.getItem("@Wolf:token");
        const inst = instituicaoValue !== undefined ? instituicaoValue : instituicao?.value;
        const carg = cargoValue !== undefined ? cargoValue : cargo?.value;
        const dest = destinoValue !== undefined ? destinoValue : destino?.value;

        const params = { pagina: paginaAlvo || 1, limite: RESULTADOS_POR_PAGINA };
        if (inst) params.instituicao = inst;
        if (carg) params.cargo = carg;
        if (dest) params.estado = dest;

        const { data } = await api.get("/perfis/buscar", {
          params,
          headers: { Authorization: `Bearer ${token}` },
        });
        setResultados(data);
      } catch (err) {
        console.error("Erro ao buscar perfis:", err);
        setResultados({ resultados: [], total: 0, pagina: 1, totalPaginas: 1 });
      }
    },
    [instituicao, cargo, destino, setResultados]
  );

  useImperativeHandle(ref, () => ({
    irParaPagina: (novaPagina) => buscar({ paginaAlvo: novaPagina }),
  }));

  useEffect(() => {
    if (initialEstado) {
      const opcao = opcoesEstados.find(
        (e) => e.value.toUpperCase() === initialEstado.toUpperCase()
      );
      if (opcao) {
        setDestino(opcao);
        setEstadoTravado(true);
        buscar({ destinoValue: opcao.value, paginaAlvo: 1 });
      }
    } else {
      buscar({ paginaAlvo: 1 });
    }
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
    setEstadoTravado(false);
    buscar({ instituicaoValue: "", cargoValue: "", destinoValue: "", paginaAlvo: 1 });
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
            isClearable={!estadoTravado}
            isDisabled={estadoTravado}
            noOptionsMessage={() => "Estado não encontrado"}
            menuPortalTarget={document.body}
          />
        </div>

        <ClearButton onClick={handleClear}>Limpar</ClearButton>
        
        <SearchButton onClick={() => buscar({ paginaAlvo: 1 })}>
          Buscar
        </SearchButton>
      </FilterGrid>
    </FilterBar>
  );
});

export default BuscarPerfil;