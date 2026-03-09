import React from "react";
import { Image, UploadCloud, Plus } from "lucide-react";
import {
  MainContainer, ContentWrapper, Header, Title, Section, Label, FormGrid,
  UploadArea, UploadPlaceholder, UploadButton, InputsGroup,
  InputRow, Input, Select, AcademicGrid, SmallLink,
  AddButton, SaveButton
} from "./styles";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Perfil() {
  return (
    <MainContainer>
      <Sidebar />
      
      <ContentWrapper>
        <Header>
          <Title>Dados do Perfil e contato</Title>
        </Header>

        <Section>
          <Label>Foto de Perfil:</Label>
          <FormGrid>
            <UploadArea>
              <UploadPlaceholder>
                <Image size={48} color="#94a3b8" />
                <p>Clique para fazer upload ou arraste a imagem</p>
                <UploadButton>
                  <UploadCloud size={18} /> Escolher Arquivo
                </UploadButton>
                <span>PNG ou SVG, máximo 2MB</span>
              </UploadPlaceholder>
            </UploadArea>

            <InputsGroup>
              <InputRow>
                <Input placeholder="Digite seu nome" style={{ flex: 2 }} />
                <Input placeholder="CPF" style={{ flex: 1 }} />
              </InputRow>
              <InputRow>
                <Input placeholder="Data de Nascimento" />
                <Input placeholder="Email" />
              </InputRow>
              <InputRow>
                <Input placeholder="(99) 9999-9999" style={{ maxWidth: "50%" }} />
              </InputRow>
            </InputsGroup>
          </FormGrid>
        </Section>

        <Section>
          <Title>Dados Academicos</Title>
          <AcademicGrid>
            <Select>
              <option>Instituição</option>
            </Select>
            <Input placeholder="http://lattes.cnpq.br/..." />
            
            <SmallLink href="#">Não encontrei minha instituição</SmallLink>
            <div />

            <Select>
              <option>Curso/Área</option>
            </Select>
            <Select>
              <option>Cargo/Função</option>
            </Select>

            <div />
            <SmallLink href="#">Não encontrei meu cargo</SmallLink>

            <Select>
              <option>Informe locais de preferências</option>
            </Select>
            <Select>
              <option>Departamento</option>
            </Select>
          </AcademicGrid>

          <AddButton>
            <Plus size={16} /> Adicione Local
          </AddButton>
        </Section>

        <SaveButton>Salvar</SaveButton>
      </ContentWrapper>
    </MainContainer>
  );
}