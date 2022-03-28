import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import DisplayCards from "../components/DisplayCards";
import useFetch from "../hooks/useFetch.js";

export default function Home() {
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=DA16,GB&appid=fed7a956d8b8ed2124f69e9691839d44`;

  const { data, error } = useFetch(url);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    setWeatherData(data);
  }, []);

  console.log("Data here..", data);
  return (
    <Container>
      <Container>
        <Grid container>
          <Grid item>
            {weatherData.name && (
              <DisplayCards
                name={weatherData.name}
                weather={weatherData.weather[0].main}
                windSpeed={weatherData.wind.speed}
                feelsLike={weatherData.main.feels_like}
                temp={weatherData.main.temp}
              />
            )}
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
