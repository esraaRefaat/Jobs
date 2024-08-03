import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, Box, Grid, Avatar } from '@mui/material';

const ApplicantDetailsDialog = ({ applicant, isOpen, onClose }) => {
  const avatarSrc = `/Profile/avatar/${applicant.avatar || 4}.svg`;

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Box display="flex" alignItems="center">
          <Avatar src={avatarSrc} sx={{ mr: 2, width: 56, height: 56 }} />
          <Typography variant="h6">{applicant.name}</Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          {applicant.email && (
            <Grid item xs={12}>
              <Typography variant="body1"><strong>Email:</strong> {applicant.email}</Typography>
            </Grid>
          )}
          {applicant.role && (
            <Grid item xs={12}>
              <Typography variant="body1"><strong>Role:</strong> {applicant.role}</Typography>
            </Grid>
          )}
          {applicant.education && (
            <Grid item xs={12}>
              <Typography variant="body1"><strong>Education:</strong> {applicant.education}</Typography>
            </Grid>
          )}
          {applicant.experience && (
            <Grid item xs={12}>
              <Typography variant="body1"><strong>Experience:</strong> {applicant.experience}</Typography>
            </Grid>
          )}
          {applicant.mobileNumber && (
            <Grid item xs={12}>
              <Typography variant="body1"><strong>Mobile Number:</strong> {applicant.mobileNumber}</Typography>
            </Grid>
          )}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicantDetailsDialog;
