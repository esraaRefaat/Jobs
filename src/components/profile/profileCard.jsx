import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ImageAvatars from "./avatar";
import { Box, Divider } from "@mui/material";
import FormDialog from "./formDialog";
import ChangePwdDialog from "./chnagePwdDialog";

export default function MediaCard({ user }) {
  return (
    <Card sx={{ maxWidth: 900, position: "relative", marginTop: 6 }}>
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
        <ImageAvatars user={user}></ImageAvatars>
      </Box>
      <Box
        sx={{
          position: "absolute",
          right: 0,
          margin: 2,
          columnGap: 2,
          display: "flex",
        }}
      >
        <ChangePwdDialog></ChangePwdDialog>
        <FormDialog user={user}></FormDialog>
      </Box>
      <CardContent>
        <Box
          flexDirection={"column"}
          display={"flex"}
          alignItems={"flexStart"}
          marginTop={5}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight="400"
          >
            {user.name}
          </Typography>
          <Typography
            variant="body2"
            color="rgb(156,163,175)"
            fontSize={20}
            fontWeight={500}
            marginTop={"-10px"}
          >
            {user.currentPosition}
          </Typography>
        </Box>
        <Divider
          variant="fullWidth"
          sx={{ marginTop: "20px", marginBottom: "20px" }}
        />
        <Box sx={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 2 }}>
          <Typography variant="body2" fontWeight="500" fontSize="16px">
            Education
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            fontSize={16}
            fontWeight={350}
          >
            {user.education}
          </Typography>

          <Box gridColumn="span 2">
            <Divider sx={{ my: 2 }} />
          </Box>

          <Typography variant="body2" fontWeight="500" fontSize="16px">
            Experience
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            fontSize={16}
            fontWeight={350}
          >
            {user.experience}
          </Typography>
          <Box gridColumn="span 2">
            <Divider sx={{ my: 2 }} />
          </Box>

          <Typography variant="body2" fontWeight="500" fontSize="16px">
            Mobile Number
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            fontSize={16}
            fontWeight={350}
          >
            {user.mobileNumber}
          </Typography>
          <Box gridColumn="span 2">
            <Divider sx={{ my: 2 }} />
          </Box>

          <Typography variant="body2" fontWeight="500" fontSize="16px">
            Email
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            fontSize={16}
            fontWeight={350}
          >
            {user.email}
          </Typography>
          <Box gridColumn="span 2">
            <Divider sx={{ my: 2 }} />
          </Box>

          <Typography variant="body2" fontWeight="500" fontSize="16px">
            Role
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            fontSize={16}
            fontWeight={350}
          >
            {user.role}
          </Typography>
        </Box>

        <Divider
          variant="fullWidth"
          sx={{ marginTop: "20px", marginBottom: "0px" }}
        />
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

