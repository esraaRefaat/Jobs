import * as React from "react";
import { Box, Typography, Button, Paper, Avatar } from "@mui/material";
import { AddCircleOutline as AddIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function NoJobsApplied() {
  const navigate = useNavigate();
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
        textAlign: "center",
        borderRadius: 2,
        maxWidth: 400,
        margin: "auto",
      }}
    >
      <img
        src="public/Profile/Updated Resume.svg"
        style={{
          width: "150px", // Adjust size as needed
          height: "auto", // Maintain aspect ratio
          marginBottom: "25px",
        }}
      />
      <Typography variant="h6" gutterBottom>
        You haven't applied to any jobs yet
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Start exploring job opportunities and apply to your desired positions to
        get started.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: 2 }}
        onClick={() => navigate("/search")}
      >
        Start Applying
      </Button>
    </Paper>
  );
}

