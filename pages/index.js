import { Container, Grid } from "@mui/material";
import DisplayCards from "../components/DisplayCards";
import useFetch from "../hooks/useFetch.js";

export default function Home() {
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=DA16,GB&appid=fed7a956d8b8ed2124f69e9691839d44`;

  const { data, error } = useFetch(url);

  if (error) {
    return <div>contact tEcHnIkAl sPoArT...</div>;
  }

  return (
    <Container>
      <Container>
        <Grid container>
          <Grid item>
            <DisplayCards
              name={data.name}
              weather={data.weather[0].main}
              windSpeed={data.wind.speed}
              feelsLike={data.main.feels_like}
              temp={data.main.temp}
            />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
