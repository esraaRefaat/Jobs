import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { Box, Button } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AvatarFormDialog from "./changeAvatar";

const image = {
  male: "/Profile/avatar/Avatar Compilation (3).svg",
  female: "/Profile/avatar/Avatar Compilation (1).svg",
};

export default function ImageAvatars({ user }) {
  const [show, setShow] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [avatar, setAvatar] = React.useState(
    `Profile/avatar/${user.avatar || 4}.svg`
  );

  const handleClickOpen = () => {
    setOpen(true);
   
  };

  const handleClose = () => {
    setOpen(false);
    setShow(false);
    
  };

  return (
    <Box
      position={"relative"}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Avatar
        alt="Cindy Baker"
        src={avatar}
        sx={{
          width: 100,
          height: 100,
          border: "4px solid white",
        }}
      />
      <Button
        variant="text"
        sx={{
          position: "absolute",
          top: "4px",
          right: 4,
          color: "grey",
          backgroundColor: "rgba(0,0,0,.4)",
          width: 100,
          height: 100,
          borderRadius: 50,
          display: show ? "flex" : "none",
        }}
        onClick={handleClickOpen}
        // onClick={(event) => event.stopPropagation()}
      >
        <CameraAltIcon color="grey"></CameraAltIcon>
      </Button>
      <AvatarFormDialog
        handleClose={handleClose}
        open={open}
        avatar={avatar}
      ></AvatarFormDialog>
    </Box>
  );
}

