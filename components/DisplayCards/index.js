import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

export default function DisplayCards() {
  return (
    <Card>
      <CardHeader title={"Location name"} subheader={"location weather?"} />
      <CardMedia
        component="img"
        height="194"
        image="https://i.guim.co.uk/img/media/a5d5199c51a4fdc0e78db59436bcd411a9be4eb2/0_343_5420_3252/master/5420.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=5674cd2334e980eac14a619af736d081"
        alt="nicePlace"
      />
      <CardContent>
        <Typography>windy and stuff</Typography>
        <Typography>maffins winds</Typography>
        <Typography>dont fly away</Typography>
      </CardContent>
    </Card>
  );
}
