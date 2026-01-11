import Sidebar from "../../components/sidebar/Sidebar";
import {
  Container,
  Main,
  ContentRow,
} from "./styles";
import InfoSection from "../../components/mapaUsuario/InfoSection/InfoSection";
import MapaContainer from "../../components/mapaUsuario/mapaContainer/MapaContainter";
import StartsGrid from "../../components/mapaUsuario/startGrid/startGrids";

export default function Mapa() {
  return (
    <Container>
      <Sidebar />
      <Main>
        <ContentRow>
          <InfoSection/>
          <MapaContainer/>
        </ContentRow>
        <StartsGrid/>
      </Main>
    </Container>
  );
}
