import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ImageAvatars from "./avatar";
import { Box, Divider } from "@mui/material";
import FeaturedJobsCard from "../FeaturedJobsCard";

export default function MediaCard({ user }) {
  return (
    <Card sx={{ maxWidth: 900, position: "relative" }}>
      <CardContent>
        <Box
          flexDirection={"column"}
          display={"flex"}
          alignItems={"flexStart"}
          marginTop={1}
        >
          <Typography gutterBottom variant="h5" component="div">
            Applied Jobs
          </Typography>
          <Typography variant="body2" color="text.secondary">
            see below the list of your applied jobs
          </Typography>
        </Box>
      </CardContent>
      <Divider variant="middle" />
      <FeaturedJobsCard></FeaturedJobsCard>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

