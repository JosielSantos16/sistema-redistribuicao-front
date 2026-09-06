import { Container, Main, HeroRow, TextWrapper } from "./styles";
import InfoSection from "../../components/mapaUsuario/InfoSection/InfoSection";
import MapaContainer from "../../components/mapaUsuario/mapaContainer/MapaContainter";
import StartsGrid from "../../components/mapaUsuario/startGrid/startGrids";
import CarrosselUsuario from "../../components/carrosselUsuario/CarrosselUsuario";

export default function Home() {
  return (
    <Container>
      <Main>
        <HeroRow>
          <TextWrapper>
            <InfoSection isHome section="intro" />
            <InfoSection isHome section="actions" />
          </TextWrapper>
          <MapaContainer isHome />
        </HeroRow>
        <StartsGrid />
        <CarrosselUsuario />
      </Main>
    </Container>
  );
}