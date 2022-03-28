import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import DisplayCards from "../components/DisplayCards";
import useFetch from "../hooks/useFetch.js";

export default function Home() {
  const [mapData, setMapdata] = useState([]);
  const [postcode, setPostcode] = useState([]);

  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?zip=DA16,GB&appid=fed7a956d8b8ed2124f69e9691839d44`;

  const apiUrl = `http://localhost:5500/users/1`;

  const { data, error } = useFetch(weatherUrl);

  const [weatherData, setWeatherData] = useState(null);
  let previousState = [];
  // USER FETCH
  useEffect(() => {
    const dbFetch = async () => {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data) {
        console.log(data);
        setPostcode(
          data.payload.map((el) => {
            return el.postcode;
          })
        );
        console.log("POSTCODE", postcode);
      }
    };
    dbFetch();
    setWeatherData(data);
  }, [data]);

  // WEATHER FETCH
  useEffect(() => {
    postcode.forEach((item) => {
      const weatherFetch = async () => {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?zip=${item},GB&appid=fed7a956d8b8ed2124f69e9691839d44`
        );
        const data = await response.json();
        console.log("inside the weather fetch", data);
        previousState = [...previousState, data];
        setMapdata(previousState);
        console.log("prevState in weatherfetch", previousState);
      };
      weatherFetch();
    });
  }, [postcode]);

  console.log(postcode);

  return (
    <Container>
      <Container sx={{ margin: "4rem 0" }}>
        <Grid container>
          {mapData.map((item, index) => {
            return (
              <Grid
                item
                key={index}
                md={6}
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "3rem 0",
                }}
              >
                <DisplayCards
                  name={item.name}
                  weather={item.weather[0].main}
                  windSpeed={item.wind.speed}
                  feelsLike={item.main.feels_like}
                  temp={item.main.temp}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Container>
  );
}
