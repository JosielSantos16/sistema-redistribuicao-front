import { useState } from "react";
import axios from "axios";
import AsyncSelect from "react-select/async"; 
import { PlusCircle } from "lucide-react";
import {
  FormSection,
  FormGrid,
  GridItem,
  Input,
  AddButton,
} from "./styles";

export default function Form1({ data, setData }) {
  
  const loadInstituicoes = async (inputValue) => {
    if (inputValue.length < 3) return []; 

    try {
      const response = await axios.get(
        `https://brasilapi.com.br/api/relatorios/v1/ies`
      );

      const filtered = response.data
        .filter((inst) =>
          inst.nome.toLowerCase().includes(inputValue.toLowerCase())
        )
        .map((inst) => ({
          value: inst.nome,
          label: inst.nome,
        }))
        .slice(0, 50); 

      return filtered;
    } catch (err) {
      console.error("Erro ao buscar instituições", err);
      return [];
    }
  };

  const handleSelectChange = (selectedOption, actionMeta) => {
    setData((prev) => ({ ...prev, [actionMeta.name]: selectedOption.value }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      height: "45px",
      borderRadius: "8px",
      border: "1px solid #ddd",
      boxShadow: "none",
      "&:hover": { border: "1px solid #bbb" },
    }),
  };

  return (
    <FormSection>
      <h3>Dados Acadêmicos</h3>
      <p>
        Essas informações serão usadas apenas para validar sua identidade e
        facilitar o contato
      </p>

      <FormGrid>
        <GridItem className="lattes">
          <Input
            name="lattes"
            type="text"
            placeholder="http://lattes.cnpq.br/..."
            value={data.lattes}
            onChange={handleChange}
          />
        </GridItem>

        <GridItem className="instituicao">
          {/* Agora é um Input manual, sem AsyncSelect */}
          <Input
            name="instituicao"
            type="text"
            placeholder="Nome da Instituição (Ex: UFOPA)"
            value={data.instituicao}
            onChange={handleChange}
          />
        </GridItem>

        <GridItem className="departamento">
          <Input
            name="departamento"
            type="text"
            placeholder="Departamento / Unidade"
            value={data.departamento}
            onChange={handleChange}
          />
        </GridItem>

        <GridItem className="curso">
          <Input
            name="curso"
            type="text"
            placeholder="Curso / Área"
            value={data.curso}
            onChange={handleChange}
          />
        </GridItem>

        <GridItem className="cargo">
          <select 
            name="cargo" 
            value={data.cargo} 
            onChange={handleChange}
            style={{ width: '100%', height: '45px', borderRadius: '8px', border: '1px solid #ddd', padding: '0 10px' }}
          >
            <option value="" disabled>Cargo/Função</option>
            <option value="Magistério Superior">Magistério Superior</option>
            <option value="EBTT">EBTT</option>
          </select>
        </GridItem>

        <GridItem className="preferencias">
          <Input
            name="preferencias_input"
            type="text"
            placeholder="Locais de Preferências"
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