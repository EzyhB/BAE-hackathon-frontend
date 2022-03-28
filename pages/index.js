import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import DisplayCards from "../components/DisplayCards";
import useFetch from "../hooks/useFetch.js";

export default function Home() {
  const [mapData, setMapdata] = useState([]);

  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?zip=DA16,GB&appid=fed7a956d8b8ed2124f69e9691839d44`;
  const apiUrl = `http://localhost:5500/users/1`;

  const { data, error } = useFetch(weatherUrl);

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const dbFetch = async () => {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data) {
        console.log(data);
        let postcode = data.payload.map((el) => {
          return el.postcode;
        });
        console.log("POSTCODE", postcode);
      }
    };
    dbFetch();

    setWeatherData(data);
  }, [data]);

  return (
    <Container>
      <Container sx={{ margin: "4rem 0" }}>
        <Grid container>
          <Grid
            item
            md={6}
            xs={12}
            sx={{ display: "flex", justifyContent: "center", margin: "3rem 0" }}
          >
            {weatherData && (
              <DisplayCards
                name={weatherData.name}
                weather={weatherData.weather[0].main}
                windSpeed={weatherData.wind.speed}
                feelsLike={weatherData.main.feels_like}
                temp={weatherData.main.temp}
              />
            )}
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            sx={{ display: "flex", justifyContent: "center", margin: "3rem 0" }}
          >
            {weatherData && (
              <DisplayCards
                name={weatherData.name}
                weather={weatherData.weather[0].main}
                windSpeed={weatherData.wind.speed}
                feelsLike={weatherData.main.feels_like}
                temp={weatherData.main.temp}
              />
            )}
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            sx={{ display: "flex", justifyContent: "center", margin: "3rem 0" }}
          >
            {weatherData && (
              <DisplayCards
                name={weatherData.name}
                weather={weatherData.weather[0].main}
                windSpeed={weatherData.wind.speed}
                feelsLike={weatherData.main.feels_like}
                temp={weatherData.main.temp}
              />
            )}
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            sx={{ display: "flex", justifyContent: "center", margin: "3rem 0" }}
          >
            {weatherData && (
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
