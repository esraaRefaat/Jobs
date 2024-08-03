import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Stack,
  Chip,
  Box,
} from "@mui/material";

const JobInfoCard = ({
  jobInfo,
  onApply,
  onEdit,
  onDelete,
  isCreator,
  isAdmin,
}) => {
  const categoriesPalette = [
    "business",
    "design",
    "engineering",
    "finance",
    "human",
    "marketing",
    "sales",
    "technology",
  ];
  const categoryColors = [
    "rgba(70, 64, 222, 0.1)",
    "rgba(86, 205, 173, 0.1)",
    "rgba(95, 214, 224, 0.1)",
    "rgba(240, 242, 58, 0.1)",
    "rgba(219, 136, 237, 0.1)",
    "rgba(235, 133, 51, 0.1)",
    "rgba(240, 76, 190, 0.1)",
    "rgba(255, 101, 80, 0.1)",
  ];
  const categoryColorsText = [
    "rgba(70, 64, 222, 1)",
    "rgba(86, 205, 173, 1)",
    "rgba(95, 214, 224, 1)",
    "rgba(240, 242, 58, 1)",
    "rgba(219, 136, 237, 1)",
    "rgba(235, 133, 51, 1)",
    "rgba(240, 76, 190, 1)",
    "rgba(255, 101, 80, 1)",
  ];

  const categoryIndex = categoriesPalette.indexOf(jobInfo.category);
  const colorBG = categoryColors[categoryIndex];
  const colorText = categoryColorsText[categoryIndex];

  return (
    <Card sx={{ minWidth: 275, margin: "20px auto", padding: "10px" }}>
      <CardContent sx={{ padding: "10px" }}>
        <Typography variant="h5" component="div">
          {jobInfo.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {jobInfo.company}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
              <strong>Details:</strong> {jobInfo.details}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" sx={{ mt: 2 }}>
              <strong>Location:</strong> {jobInfo.location}
            </Typography>

            <Typography variant="body2" sx={{ mt: 2 }}>
              <strong>Employment Type:</strong> {jobInfo.employmentType}
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              <strong>Created At:</strong>{" "}
              {new Date(jobInfo.createdAt).toLocaleDateString()}
            </Typography>
            <Box display="flex" gap={1} mt={3}>
              <Chip
                label={jobInfo.category}
                sx={{
                  backgroundColor: `${colorBG}`,
                  color: `${colorText}`,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          {!isCreator && !isAdmin && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => onApply(jobInfo._id)}
            >
              Apply
            </Button>
          )}
          {isCreator && (
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => onEdit(jobInfo._id)}
            >
              Edit
            </Button>
          )}
          {(isCreator || isAdmin) && (
            <Button
              variant="outlined"
              color="error"
              onClick={() => onDelete(jobInfo._id)}
            >
              Delete
            </Button>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default JobInfoCard;
