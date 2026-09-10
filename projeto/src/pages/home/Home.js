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
            <InfoSection isHome section="intro" style={{ order: 0 }} />
            <InfoSection isHome section="buttons" style={{ order: 2 }} />
            <InfoSection isHome section="legend" style={{ order: 3 }} />
          </TextWrapper>
          <MapaContainer isHome />
        </HeroRow>
        <StartsGrid />
        <CarrosselUsuario />
      </Main>
    </Container>
  );
}