import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';
import Box from '@mui/material/Box';

export default function CategoryCard() {
    return (
        <Card sx={{ width: '274px', height: '190px'}}>
            <SvgIcon sx={{ paddingLeft: '32px', paddingTop: '32px' }}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1509_1280)">
                        <path d="M6 42.0001H14L40 16.0001C41.0609 14.9393 41.6569 13.5004 41.6569 12.0001C41.6569 10.4998 41.0609 9.06098 40 8.00012C38.9391 6.93925 37.5003 6.34326 36 6.34326C34.4997 6.34326 33.0609 6.93925 32 8.00012L6 34.0001V42.0001Z" stroke="#4640DE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M29 11L37 19" stroke="#4640DE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M24 16L14 6L6 14L16 24" stroke="#4640DE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14 16L11 19" stroke="#4640DE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M32 24L42 34L34 42L24 32" stroke="#4640DE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M32 34L29 37" stroke="#4640DE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1509_1280">
                            <rect width="48" height="48" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </SvgIcon>
            <CardContent sx={{ paddingTop: '32px', paddingLeft: '32px' }}>
                <Typography gutterBottom variant="h4" component="div" sx={{fontSize:'24px',fontWeight:'bold'}}>
                Design
                </Typography>
                <Box  display="flex"   alignItems="center"  gap={2}>
                <Typography gutterBottom variant="subtitle1" sx={{ color: '#7C8493' }}>
                    235 jobs available
                </Typography>
                <SvgIcon  sx={{marginBottom:'6px'}}>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.75 12.2261L4.75 12.2261" stroke="#25324B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13.7002 6.20149L19.7502 12.2255L13.7002 18.2505" stroke="#25324B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </SvgIcon>
                </Box>
            </CardContent>
        </Card>
    );
}
