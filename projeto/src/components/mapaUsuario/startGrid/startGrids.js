import { useNavigate } from "react-router-dom";
import { Grid, Card } from "./styles";

export default function StartsGrid() {
  const navigate = useNavigate();

  return (
    <>
      <Grid>
        <Card>
          <div className="badge">1000</div>
          <span>Docentes cadastrados</span>
        </Card>
        <Card>
          <div className="badge">900</div>
          <span>Instituições participantes</span>
        </Card>
        <Card>
          <div className="badge">250</div>
          <span>Solicitações de redistribuição</span>
        </Card>
        <Card>
          <div className="badge">500</div>
          <span>Processos em Análise</span>
        </Card>
      </Grid>
    </>
  );
}
