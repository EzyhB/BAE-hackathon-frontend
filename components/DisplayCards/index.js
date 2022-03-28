import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

/*name={data.name}
              weather={data.weather[0].main}
              windSpeed={data.wind.speed}
              feelsLike={data.main.feels_like}
              temp={data.main.temp}*/

export default function DisplayCards({
  name,
  weather,
  windSpeed,
  feelsLike,
  temp,
  image,
}) {
  return (
    <Card sx={{ width: 345 }}>
      <CardHeader title={name} subheader={weather} />
      <CardMedia component="img" height="194" image={image} alt="nicePlace" />
      <CardContent>
        <Typography>Wind Speed: {windSpeed} mph</Typography>
        <Typography>Fees Like: {feelsLike} °F</Typography>
        <Typography>Tempreature: {temp} °F</Typography>
      </CardContent>
    </Card>
  );
}
