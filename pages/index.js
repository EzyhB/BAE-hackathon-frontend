import { Container, Grid } from "@mui/material";
import DisplayCards from "../components/DisplayCards";

export default function Home() {
  return (
    <Container>
      <Container>
        <Grid container>
          <Grid item>
            <DisplayCards />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
