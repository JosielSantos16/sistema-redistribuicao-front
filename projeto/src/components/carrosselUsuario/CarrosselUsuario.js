import {
  CarouselSection,
  CarouselTitle,
  CarouselWrapper,
  CardsContainer,
  UserCard,
  CardHeader,
  ProfileImg,
  CardContent,
  InfoGroup,
  MaskedText,
  RouteContainer,
  RouteBadge,
} from "./styles";

import prof1 from "../../assets/prof1.png";
import prof2 from "../../assets/prof2.png";
import prof3 from "../../assets/prof3.png";
import prof4 from "../../assets/prof4.png";
import prof5 from "../../assets/prof5.png";
import prof6 from "../../assets/prof6.png";
import prof7 from "../../assets/prof7.png";
import prof8 from "../../assets/prof8.png";

const mockUsers = [
  {
    id: 1,
    nome: "Usuário A",
    cargo: "Magistério Superior",
    area: "Literatura",
    instituicao: "UFOPA",
    origem: "Santarém - PA",
    destino: "Florianópolis - SC",
    foto: prof1,
  },
  {
    id: 2,
    nome: "Usuário B",
    cargo: "EBTT",
    area: "Química",
    instituicao: "IFPA",
    origem: "Belém - PA",
    destino: "Curitiba - PR",
    foto: prof2,
  },

  {
    id: 3,
    nome: "Usuário C",
    cargo: "Magistério Superior",
    area: "Astronomia",
    instituicao: "UFRJ",
    origem: "Rio - RJ",
    destino: "Brasília - DF",
    foto: prof3,
  },
  {
    id: 4,
    nome: "Usuário D",
    cargo: "EBTT",
    area: "Engenharia Mecânica",
    instituicao: "IFSertãoPE",
    origem: "Petrolina - PE",
    destino: "Fortaleza - CE",
    foto: prof4,
  },
  {
    id: 5,
    nome: "Usuário E",
    cargo: "Magistério Superior",
    area: "Botânica",
    instituicao: "UnB",
    origem: "Brasília - DF",
    destino: "Goiânia - GO",
    foto: prof5,
  },
  {
    id: 6,
    nome: "Usuário F",
    cargo: "EBTT",
    area: "História",
    instituicao: "IFSC",
    origem: "Joinville - SC",
    destino: "Natal - RN",
    foto: prof6,
  },
  {
    id: 7,
    nome: "Usuário G",
    cargo: "Magistério Superior",
    area: "Música",
    instituicao: "UFMG",
    origem: "BH - MG",
    destino: "São Paulo - SP",
    foto: prof7,
  },
  {
    id: 8,
    nome: "Usuário H",
    cargo: "EBTT",
    area: "Geografia",
    instituicao: "IFB",
    origem: "Brasília - DF",
    destino: "João Pessoa - PB",
    foto: prof8,
  },
];

export default function CarrosselUsuario() {
  const carouselList = [...mockUsers, ...mockUsers, ...mockUsers];

  return (
    <CarouselSection>
      <CarouselTitle>Servidores buscando conexão</CarouselTitle>
      <CarouselWrapper>
        <CardsContainer>
          {carouselList.map((user, index) => (
            <UserCard key={index}>
              <CardHeader>
                <h3>{user.nome}</h3>

                <ProfileImg src={user.foto} alt={user.nome} />
              </CardHeader>
              <CardContent>
                <small>Publicação: 20/10/2025</small>
                <InfoGroup>
                  <label>Cargo:</label>
                  <span>{user.cargo}</span>
                </InfoGroup>
                <InfoGroup>
                  <label>Instituição:</label>
                  <span>{user.instituicao}</span>
                </InfoGroup>
                <InfoGroup>
                  <label>Contatos:</label>
                  <MaskedText>email: ************</MaskedText>
                </InfoGroup>

                <RouteContainer>
                  <RouteBadge>
                    <small>ORIGEM</small>
                    <span>{user.origem}</span>
                  </RouteBadge>
                  <div className="arrow">➔</div>
                  <RouteBadge>
                    <small>DESTINO</small>
                    <span>{user.destino}</span>
                  </RouteBadge>
                </RouteContainer>
              </CardContent>
            </UserCard>
          ))}
        </CardsContainer>
      </CarouselWrapper>
    </CarouselSection>
  );
}
