import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

const Cards = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={props.dog.photo} />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {props.dog.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
            {props.dog.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
