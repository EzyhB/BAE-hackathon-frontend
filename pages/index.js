import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import DisplayCards from "../components/DisplayCards";
import useFetch from "../hooks/useFetch.js";

const image = [
  "https://www.thebmc.co.uk/Handlers/ArticleImageHandler.ashx?id=6612&index=0&w=605&h=434",
  "https://www.visitnorthumberland.com/VisitNorthumberland/media/VisitNorthumberland/Home/Explore/Things%20to%20do/Activities/Walking/Short%20Walks/Walltown%20Crags/Walltown-crags-shuttertock.jpg?ext=.jpg",
  "https://www.scottish-places.info/images/p5511.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/8/82/Caves_Creswell_Crags_-_geograph.org.uk_-_90873.jpg",
];

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
                  image={image[index]}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Container>
  );
}
