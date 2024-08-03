import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Avatar, Container, Typography } from "@mui/material";

export default function ResponsiveGrid({
  onAvatarSelect,
  currentAvatar,
  handleAvatar,
}) {
  return (
    <Container maxWidth="md">
      <Box sx={{ flexGrow: 1, marginTop: 4 }}>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {Array.from(Array(11)).map((_, index) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              key={index}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  border:
                    currentAvatar === `Profile/avatar/${index + 1}.svg`
                      ? "5px solid #1976d2"
                      : "3px solid #f0f0f0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease-in-out",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.1)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  },
                }}
                alt={`Avatar ${index + 1}`}
                src={`Profile/avatar/${index + 1}.svg`}
                onClick={() =>
                  handleAvatar(`Profile/avatar/${index + 1}.svg`, index + 1)
                }
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

