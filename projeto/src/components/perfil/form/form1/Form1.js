import { PlusCircle, ChevronDown } from 'lucide-react';
import { FormSection, FormGrid, GridItem, Input, SelectWrapper, AddButton } from './styles';

export default function Form1({ data, setData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <FormSection>
      <h3>Dados Acadêmicos</h3>
      <p>Essas informações serão usadas apenas para validar sua identidade e facilitar o contato</p>

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
          <SelectWrapper>
            <select name="instituicao" value={data.instituicao} onChange={handleChange}>
              <option value="" disabled>Instituição</option>
              <option value="UFOPA">UFOPA</option>
              <option value="IFPA">IFPA</option>
            </select>
            <ChevronDown className="arrow" size={18} />
          </SelectWrapper>
        </GridItem>

        <GridItem className="departamento">
          <SelectWrapper>
            <select name="departamento" value={data.departamento} onChange={handleChange}>
              <option value="" disabled>Departamento</option>
              <option value="IETU">IETU</option>
              <option value="ICED">ICED</option>
              <option value="ICTA">ICTA</option>
            </select>
            <ChevronDown className="arrow" size={18} />
          </SelectWrapper>
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
          <SelectWrapper>
            <select name="cargo" value={data.cargo} onChange={handleChange}>
              <option value="" disabled>Cargo/Função</option>
              <option value="Magistério Superior">Magistério Superior</option>
              <option value="EBTT">EBTT</option>
            </select>
            <ChevronDown className="arrow" size={18} />
          </SelectWrapper>
        </GridItem>

        <GridItem className="preferencias">
          {/* Aqui idealmente você usará uma lógica de array depois, mas por enquanto: */}
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