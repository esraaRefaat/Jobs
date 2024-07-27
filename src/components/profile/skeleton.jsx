import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function Variants() {
  return (
    <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} height={100} />
      {/* For other variants, adjust the size with `width` and `height` */}
      <div style={{ display: "flex", justifyContent: "center", width: "2" }}>
        <Skeleton variant="circular" width={100} height={100} />
      </div>
      <Skeleton variant="rectangular" width={900} height={160} />
      <Skeleton variant="rounded" width={900} height={60} />
    </Stack>
  );
}

