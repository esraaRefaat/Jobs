import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ImageAvatars from "./avatar";
import { Box } from "@mui/material";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 900, position: "relative" }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/Profile/Canvas Design System Frame 53.png"
        title="green iguana"
      />
      <Box
        sx={{
          position: "absolute",
          top: 140, // This should be the same as your CardMedia height
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      >
        <ImageAvatars></ImageAvatars>
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

