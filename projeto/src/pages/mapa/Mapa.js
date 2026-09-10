import Sidebar from "../../components/sidebar/Sidebar";
import {
  Container,
  Main,
  ContentRow,
  TextWrapper,
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
          <TextWrapper>
            <InfoSection section="intro" style={{ order: 0 }} />
            <InfoSection section="legend" style={{ order: 2 }} />
          </TextWrapper>
          <MapaContainer />
        </ContentRow>
        <StartsGrid />
      </Main>
    </Container>
  );
}