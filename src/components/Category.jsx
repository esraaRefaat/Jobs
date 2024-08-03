import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';


export default function CategoryCard({ category,number }) {
    const navigate = useNavigate();
  //  console.log(category.replace(/\s/g, '').toLowerCase())
    return (
        <CardActions onClick={()=>
            navigate(`/search?keyword=${category.toLowerCase()}`)
        }>
        <Card sx={{ width: '274px', height: '190px' }}>
            <img src={`/categories/${category.replace(/\s/g, '').toLowerCase()}.svg`} style={{ paddingLeft: '32px', paddingTop: '32px' }} />
            <CardContent sx={{ paddingTop: '32px', paddingLeft: '32px' }}>
                <Typography gutterBottom variant="h4" component="div" sx={{ fontSize: '24px', fontWeight: 'bold' }}>
                    {category}
                </Typography>
                <Box display="flex" alignItems="center" gap={2}>
                    <Typography gutterBottom variant="subtitle1" sx={{ color: '#7C8493' }}>
                        {number} jobs available
                    </Typography>
                    <SvgIcon sx={{ marginBottom: '6px' }}>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.75 12.2261L4.75 12.2261" stroke="#25324B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.7002 6.20149L19.7502 12.2255L13.7002 18.2505" stroke="#25324B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </SvgIcon>
                </Box>
            </CardContent>
        </Card>
        </CardActions>
    );
}
