import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const image = {
  male: "/Profile/male.jpeg",
  female: "/Profile/female.jpeg",
};

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Cindy Baker"
        src={image.female}
        sx={{
          width: 100,
          height: 100,
          border: "4px solid white",
        }}
      />
    </Stack>
  );
}

