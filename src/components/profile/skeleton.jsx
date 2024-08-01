import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box"; // Import Box for layout styling

export default function Variants() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center horizontally
        justifyContent: "flexStart", // Center vertically
        minHeight: "100vh", // Full viewport height
        p: 2, // Padding
        marginTop: "70px",
      }}
    >
      <Stack spacing={1} alignItems="center">
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton
          variant="text"
          sx={{ fontSize: "1rem" }}
          height={100}
          width={900}
        />
        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="rectangular" width={900} height={160} />
        <Skeleton variant="rounded" width={900} height={60} />
        <Skeleton variant="rectangular" width={900} height={160} />
        <Skeleton variant="rounded" width={900} height={60} />
        <Skeleton variant="rectangular" width={900} height={160} />
        <Skeleton variant="rounded" width={900} height={60} />
      </Stack>
    </Box>
  );
}

