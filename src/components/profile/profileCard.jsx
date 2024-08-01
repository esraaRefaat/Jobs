import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ImageAvatars from "./avatar";
import { Box } from "@mui/material";
import FormDialog from "./formDialog";

export default function MediaCard({ user }) {
  return (
    <Card sx={{ maxWidth: 900, position: "relative", marginTop: 12 }}>
      <CardMedia
        sx={{ height: 180 }}
        image="/Profile/Canvas Design System Frame 53.png"
        title="green iguana"
      />
      <Box
        sx={{
          position: "absolute",
          top: 170, // This should be the same as your CardMedia height
          // left: "50%",
          transform: "translate(0%, -50%)",
          zIndex: 1,
          padding: "15px",
        }}
      >
        {/* <ImageAvatars></ImageAvatars> */}
      </Box>
      <Box sx={{ position: "absolute", right: 0, margin: 2 }}>
        <FormDialog user={user}></FormDialog>
      </Box>
      <CardContent>
        <Box
          flexDirection={"column"}
          display={"flex"}
          alignItems={"flexStart"}
          marginTop={1}
        >
          <Typography gutterBottom variant="h5" component="div">
            {user.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

