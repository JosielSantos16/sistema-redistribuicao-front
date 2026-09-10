import {
  CarouselSection,
  CarouselTitle,
  CarouselSubtitle,
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
import { Handshake } from "lucide-react";

const mockUsers = [
  {
    id: 1,
    nome: "Usuário A",
    cargo: "Magistério Superior",
    area: "Literatura",
    instituicao: "UFOPA",
    origem: "Santarém - PA",
    destino: "Florianópolis - SC",
    data: "12/08/2025",
    foto: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    nome: "Usuário B",
    cargo: "EBTT",
    area: "Química",
    instituicao: "IFPA",
    origem: "Belém - PA",
    destino: "Curitiba - PR",
    data: "03/09/2025",
    foto: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    nome: "Usuário C",
    cargo: "Magistério Superior",
    area: "Astronomia",
    instituicao: "UFRJ",
    origem: "Rio - RJ",
    destino: "Brasília - DF",
    data: "27/09/2025",
    foto: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    id: 4,
    nome: "Usuário D",
    cargo: "EBTT",
    area: "Engenharia Mecânica",
    instituicao: "IFSertãoPE",
    origem: "Petrolina - PE",
    destino: "Fortaleza - CE",
    data: "05/10/2025",
    foto: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    id: 5,
    nome: "Usuário E",
    cargo: "Magistério Superior",
    area: "Botânica",
    instituicao: "UnB",
    origem: "Brasília - DF",
    destino: "Goiânia - GO",
    data: "18/10/2025",
    foto: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 6,
    nome: "Usuário F",
    cargo: "EBTT",
    area: "História",
    instituicao: "IFSC",
    origem: "Joinville - SC",
    destino: "Natal - RN",
    data: "02/11/2025",
    foto: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 7,
    nome: "Usuário G",
    cargo: "Magistério Superior",
    area: "Música",
    instituicao: "UFMG",
    origem: "BH - MG",
    destino: "São Paulo - SP",
    data: "21/11/2025",
    foto: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    id: 8,
    nome: "Usuário H",
    cargo: "EBTT",
    area: "Geografia",
    instituicao: "IFB",
    origem: "Brasília - DF",
    destino: "João Pessoa - PB",
    data: "30/11/2025",
    foto: "https://randomuser.me/api/portraits/women/33.jpg",
  },
];

export default function CarrosselUsuario() {
  const carouselList = [...mockUsers, ...mockUsers, ...mockUsers];

  return (
    <CarouselSection>
      <CarouselTitle>Servidores buscando conexão</CarouselTitle>
      <CarouselSubtitle>
        Exemplo ilustrativo — veja como os perfis aparecem depois que você faz login
      </CarouselSubtitle>
      <CarouselWrapper>
        <CardsContainer>
          {carouselList.map((user, index) => (
            <UserCard key={index}>
              <CardHeader>
                <h3>{user.nome}</h3>
                <ProfileImg src={user.foto} alt={user.nome} />
              </CardHeader>

              <CardContent>
                <small>Publicação: {user.data}</small>

                <InfoGroup>
                  <label>Cargo/Especialidade:</label> <span>{user.cargo}</span>
                </InfoGroup>
                <InfoGroup>
                  <label>Área:</label> <span>{user.area}</span>
                </InfoGroup>
                <InfoGroup>
                  <label>Instituição:</label> <span>{user.instituicao}</span>
                </InfoGroup>
                <InfoGroup style={{ marginTop: "12px" }}>
                  <label>Contatos:</label>
                  <br />
                  <label>Email:</label> <MaskedText>e********@email.com</MaskedText>
                </InfoGroup>
              </CardContent>

              <RouteContainer>
                <RouteBadge>
                  <span className="item-label">Origem</span>
                  <span>{user.origem}</span>
                </RouteBadge>
                <div className="arrow">
                  <Handshake size={14} strokeWidth={2.5} />
                </div>
                <RouteBadge>
                  <span className="item-label">Destino</span>
                  <span>{user.destino}</span>
                </RouteBadge>
              </RouteContainer>
            </UserCard>
          ))}
        </CardsContainer>
      </CarouselWrapper>
    </CarouselSection>
  );
}