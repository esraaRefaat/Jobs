import React, { useState } from 'react';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import ApplicantDetailsDialog from './applicantDetailsDialog.jsx'; // Make sure to adjust the path

const ApplicantCard = ({ applicant }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const avatarSrc = `/Profile/avatar/${applicant.avatar || 4}.svg`;

  const handleCardClick = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <Card onClick={handleCardClick} sx={{ cursor: 'pointer', mb: 2 }}>
        <CardContent>
          <Box display="flex" alignItems="center">
            <Avatar
              src={avatarSrc}
              onError={(e) => { e.target.onerror = null; e.target.src = '/profile/avatar/default.svg'; }} // Fallback to default avatar
              sx={{ mr: 2, width: 56, height: 56 }}
            />
            <Box>
              <Typography variant="body1">{applicant.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                {applicant.role}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
      <ApplicantDetailsDialog
        applicant={applicant}
        isOpen={isDialogOpen}
        onClose={handleDialogClose}
      />
    </>
  );
};

export default ApplicantCard;
