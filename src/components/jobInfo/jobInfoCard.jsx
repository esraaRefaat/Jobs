import React from 'react';
import { Card, CardContent, Typography, Grid, Button, Stack } from '@mui/material';

const JobInfoCard = ({ jobInfo, onApply, onEdit, onDelete, isCreator, isAdmin }) => {
  return (
    <Card sx={{ minWidth: 275, margin: '20px auto', padding: '10px' }}>
      <CardContent sx={{ padding: '10px' }}>
        <Typography variant="h5" component="div">
          {jobInfo.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {jobInfo.company}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
              <strong>Details:</strong> {jobInfo.details}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">
              <strong>Location:</strong> {jobInfo.location}
            </Typography>
            <Typography variant="body2">
              <strong>Category:</strong> {jobInfo.category}
            </Typography>
            <Typography variant="body2">
              <strong>Employment Type:</strong> {jobInfo.employmentType}
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              <strong>Created At:</strong> {new Date(jobInfo.createdAt).toLocaleDateString()}
            </Typography>
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
