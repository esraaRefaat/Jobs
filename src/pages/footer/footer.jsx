import * as React from "react";
import { Box, Typography, IconButton, Container } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#f0f0f0",
        padding: 4,
        borderTop: "1px solid #e0e0e0",
        marginTop: 10,
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="public/logo.svg"
              alt="Company Logo"
              style={{
                width: "150px",
                height: "auto",
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
            }}
          >
            <IconButton href="https://www.facebook.com" color="primary">
              <Facebook />
            </IconButton>
            <IconButton href="https://www.twitter.com" color="primary">
              <Twitter />
            </IconButton>
            <IconButton href="https://www.instagram.com" color="primary">
              <Instagram />
            </IconButton>
            <IconButton href="https://www.linkedin.com" color="primary">
              <LinkedIn />
            </IconButton>
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Company Name. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

