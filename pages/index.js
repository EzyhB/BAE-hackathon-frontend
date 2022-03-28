import { Container, Grid } from "@mui/material";
import DisplayCards from "../components/DisplayCards";
import useFetch from "../hooks/useFetch.js";

const { API_ID } = process.env;

export default function Home() {
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=DA16,GB&appid=${API_ID}`;

  const { data, error } = useFetch(url);
  console.log(API_ID);

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
