import { Container, Main, ContentRow } from "./styles";
import InfoSection from "../../components/mapaUsuario/InfoSection/InfoSection";
import MapaContainer from "../../components/mapaUsuario/mapaContainer/MapaContainter";
import StartsGrid from "../../components/mapaUsuario/startGrid/startGrids";
import CarrosselUsuario from "../../components/carrosselUsuario/CarrosselUsuario";

export default function Home() {
  return (
    <Container>
      <Main>
        <ContentRow>
          <InfoSection isHome={true} />
          <MapaContainer />
        </ContentRow>
        <StartsGrid />
        <CarrosselUsuario />
      </Main>
    </Container>
  );
}
