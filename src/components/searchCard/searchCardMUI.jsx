import { Card, CardContent, Typography, Grid } from '@mui/material';

const SearchCardMUI = ({ job }) => {
  return (
    <Card sx={{ minWidth: 275, marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {job.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {job.company}
        </Typography>
        <Typography variant="body2">
          {job.details}
        </Typography>
        <Grid container spacing={1} sx={{ marginTop: 1 }}>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              Location: {job.location}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              Category: {job.category}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              Type: {job.employmentType}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              Created At: {new Date(job.createdAt).toLocaleDateString()}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SearchCardMUI;
