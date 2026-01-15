import { PlusCircle, ChevronDown } from 'lucide-react';
import { FormSection, FormGrid, GridItem, Input, SelectWrapper, AddButton } from './styles';

export default function Form1() {
  return (
    <FormSection>
      <h3>Dados Acadêmicos</h3>
      <p>Essas informações serão usadas apenas para validar sua identidade e facilitar o contato</p>

      <FormGrid>
        <GridItem className="lattes">
          <Input type="text" placeholder="http://lattes.cnpq.br/..." />
        </GridItem>
        <GridItem className="instituicao">
          <SelectWrapper>
            <select defaultValue=""><option value="" disabled>Instituição</option></select>
            <ChevronDown className="arrow" size={18} />
          </SelectWrapper>
        </GridItem>

        <GridItem className="departamento">
          <SelectWrapper>
            <select defaultValue=""><option value="" disabled>Departamento</option></select>
            <ChevronDown className="arrow" size={18} />
          </SelectWrapper>
        </GridItem>
        <GridItem className="curso">
          <SelectWrapper>
            <select defaultValue=""><option value="" disabled>Curso/Area</option></select>
            <ChevronDown className="arrow" size={18} />
          </SelectWrapper>
        </GridItem>

        <GridItem className="cargo">
          <SelectWrapper>
            <select defaultValue=""><option value="" disabled>Cargo/Função</option></select>
            <ChevronDown className="arrow" size={18} />
          </SelectWrapper>
        </GridItem>
        <GridItem className="preferencias">
          <Input type="text" placeholder="Locais de Preferências" />
        </GridItem>
      </FormGrid>

      <AddButton>
        <PlusCircle size={18} />
        Adicione Local
      </AddButton>
    </FormSection>
  );
}