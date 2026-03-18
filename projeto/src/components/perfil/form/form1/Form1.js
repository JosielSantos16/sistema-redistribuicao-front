import React from "react";
import AsyncCreatableSelect from "react-select/async-creatable";
import { PlusCircle } from "lucide-react";
import { FormSection, FormGrid, GridItem, Input, AddButton } from "./styles";

import listaUniversidadesJSON from "../../../../data/universidades-br.json";

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
      const cursos = [
        "Sistemas de Informação",
        "Direito",
        "Administração",
        "Medicina",
      ];
      if (!inputValue)
        return resolve(cursos.map((c) => ({ value: c, label: c })));
      const filtrados = cursos.filter((c) =>
        c.toLowerCase().includes(inputValue.toLowerCase()),
      );
      resolve(filtrados.map((c) => ({ value: c, label: c })));
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
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
            isClearable
          />
        </GridItem>

        <GridItem className="cargo">
          <select 
            name="cargo" 
            value={data.cargo || ""} 
            onChange={handleChange}
            style={{ 
                width: '100%', height: '45px', borderRadius: '8px', 
                border: '1px solid #e2e8f0', padding: '0 10px', background: '#fff'
            }}
          >
            <option value="" disabled>Cargo/Função</option>
            <option value="Magistério Superior">Magistério Superior</option>
            <option value="EBTT">EBTT</option>
          </select>
        </GridItem>

        <GridItem className="preferencias">
          <Input
            name="preferencias_input"
            placeholder="Locais de Preferência"
          />
        </GridItem>
      </FormGrid>

      <AddButton type="button">
        <PlusCircle size={18} />
        Adicione Local
      </AddButton>

    </FormSection>
  );
}
