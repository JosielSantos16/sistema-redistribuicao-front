import AsyncCreatableSelect from "react-select/async-creatable";
import { PlusCircle } from "lucide-react";
import { FormSection, FormGrid, GridItem, Input, AddButton } from "./styles";

import listaUniversidadesJSON from "../../../../data/universidades-br.json";
import listaCursosJSON from "../../../../data/cursos.json";
import listaEstadosJSON from "../../../../data/estados.json";

export default function Form1({ data, setData }) {
  
  console.log("Arquivo JSON carregado?", !!listaUniversidadesJSON);
  if (listaUniversidadesJSON) {
    console.log("Total de itens:", listaUniversidadesJSON.length);
  }

  const loadInstituicoes = (inputValue) => {
    return new Promise((resolve) => {
      if (!listaUniversidadesJSON || !Array.isArray(listaUniversidadesJSON)) {
        console.error("Erro: listaUniversidadesJSON não é um array válido.");
        return resolve([]);
      }

      if (!inputValue) {
        const iniciais = listaUniversidadesJSON.slice(0, 10).map((u) => ({
          value: u.universidade,
          label: u.sigla ? `${u.sigla} - ${u.universidade}` : u.universidade,
        }));
        return resolve(iniciais);
      }

      const buscaInput = inputValue.toLowerCase().trim();

      const filtradas = listaUniversidadesJSON.filter((u) => {
        const nomeUni = String(u.universidade || "").toLowerCase();
        const siglaUni = String(u.sigla || "").toLowerCase();

        return nomeUni.includes(buscaInput) || siglaUni.includes(buscaInput);
      });

      const final = filtradas.slice(0, 50).map((u) => ({
        value: u.universidade,
        label: u.sigla ? `${u.sigla} - ${u.universidade}` : u.universidade,
      }));

      resolve(final);
    });
  };

  const loadCursos = (inputValue) => {
    return new Promise((resolve) => {
      if (!listaCursosJSON || !Array.isArray(listaCursosJSON)) {
        console.error("Arquivo cursos.json não encontrado ou inválido.");
        return resolve([]);
      }

      if (!inputValue) {
        const iniciais = listaCursosJSON.slice(0, 10).map((c) => ({
          value: c.nome,
          label: c.nome,
        }));
        return resolve(iniciais);
      }

      const buscaInput = inputValue.toLowerCase().trim();

      const filtrados = listaCursosJSON.filter((c) =>
        String(c.nome || "")
          .toLowerCase()
          .includes(buscaInput),
      );

      resolve(
        filtrados.slice(0, 50).map((c) => ({
          value: c.nome,
          label: c.nome,
        })),
      );
    });
  };

  const loadPreferencias = async (inputValue) => {
  if (!inputValue || inputValue.length < 2) return [];

  try {
    const response = await fetch(`https://brasilapi.com.br/api/ibge/municipios/v1/${inputValue}`);
    const municipios = await response.json();
    
    const opcoesMunicipios = Array.isArray(municipios) ? municipios.map(m => ({
      value: `CIDADE-${m.codigo_ibge}`,
      label: `${m.nome} (${m.uf})`
    })) : [];

    const opcoesEstados = listaEstadosJSON
      .filter(e => e.nome.toLowerCase().includes(inputValue.toLowerCase()) || e.sigla.toLowerCase() === inputValue.toLowerCase())
      .map(e => ({
        value: `ESTADO-${e.sigla}`,
        label: `${e.nome} (${e.sigla})`
      }));

    return [...opcoesEstados, ...opcoesMunicipios];
  } catch (error) {
    return [];
  }
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      minHeight: "45px",
      borderRadius: "8px",
      border: "1px solid #e2e8f0",
      boxShadow: "none",
      "&:hover": { border: "1px solid #FF6600" },
    }),
  };

  return (
    <FormSection>
      <h3>Dados Acadêmicos</h3>
      <p>
        Essas informações serão usadas para validar sua identidade e facilitar o
        contato
      </p>
      <FormGrid>
        <GridItem className="lattes">
          <Input
            name="lattes"
            placeholder="http://lattes.cnpq.br/.."
            value={data.lattes || ""}
            onChange={handleChange}
          />
        </GridItem>

        <GridItem className="instituicao">
          <AsyncCreatableSelect
            cacheOptions
            defaultOptions
            loadOptions={loadInstituicoes}
            value={
              data.instituicao
                ? { label: data.instituicao, value: data.instituicao }
                : null
            }
            onChange={(opt) =>
              setData((prev) => ({ ...prev, instituicao: opt?.value || "" }))
            }
            placeholder="Instituição (Ex: UFOPA)"
            formatCreateLabel={(val) => `Usar "${val}"`}
            noOptionsMessage={() => "Nenhuma instituição encontrada"}
            isClearable
          />
        </GridItem>

        <GridItem className="departamento">
          <Input
            name="departamento"
            placeholder="Departamento"
            value={data.departamento || ""}
            onChange={handleChange}
          />
        </GridItem>

        <GridItem className="curso">
          <AsyncCreatableSelect
            cacheOptions
            defaultOptions
            loadOptions={loadCursos}
            value={data.curso ? { label: data.curso, value: data.curso } : null}
            onChange={(opt) =>
              setData((prev) => ({ ...prev, curso: opt?.value || "" }))
            }
            placeholder="Curso/Area"
            formatCreateLabel={(val) => `Usar "${val}"`}
            styles={customStyles}
            isClearable
          />
        </GridItem>

        <GridItem className="cargo">
          <select
            name="cargo"
            value={data.cargo || ""}
            onChange={handleChange}
            placeholder="Cargo/Função"
            style={{
              width: "100%",
              height: "45px",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
              padding: "0 10px",
              background: "#fff",
            }}
          >
            <option value="" disabled></option>
            <option value="Magistério Superior">Magistério Superior</option>
            <option value="EBTT">EBTT</option>
          </select>
        </GridItem>

        <GridItem className="preferencias">
          <label
            style={{
              fontSize: "0.8rem",
              color: "#666",
              marginBottom: "5px",
              display: "block",
            }}
          >
           
          </label>
          <AsyncCreatableSelect
            isMulti
            cacheOptions
            loadOptions={loadPreferencias}
            value={data.preferencias || []}
            onChange={(selected) =>
              setData((prev) => ({ ...prev, preferencias: selected }))
            }
            placeholder="Digite os Estados "
            noOptionsMessage={() => "Digite o nome da cidade..."}
            loadingMessage={() => "Buscando na BrasilAPI..."}
            
            formatCreateLabel={(val) => `Adicionar customizado: "${val}"`}
          />
        </GridItem>
      </FormGrid>


    </FormSection>
  );
}
