import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import { Box, Chip } from '@mui/material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function SearchJobCard({ job }) {


  let categoriespallete = ['business', 'design', 'engineering', 'finance', 'human', 'marketing', 'sales', 'technology']
  let categoryColors = [
    "rgba(70, 64, 222, 0.1)",
    "rgba(86, 205, 173, 0.1)",
    "rgba(95, 214, 224, 0.1)",
    "rgba(240, 242, 58, 0.1)",
    "rgba(219, 136, 237, 0.1)",
    "rgba(235, 133, 51, 0.1)",
    "rgba(240, 76, 190, 0.1)",
    "rgba(255, 101, 80, 0.1)"
  ]
  let categoryColorsText = [
    "rgba(70, 64, 222, 1)",
    "rgba(86, 205, 173, 1)",
    "rgba(95, 214, 224, 1)",
    "rgba(240, 242, 58, 1)",
    "rgba(219, 136, 237, 1)",
    "rgba(235, 133, 51, 1)",
    "rgba(240, 76, 190, 1)",
    "rgba(255, 101, 80, 1)"
  ]
  let category2 = `${job.category}`;
  let index = categoriespallete.indexOf(category2)
  let colorBG = categoryColors[index];
  let colorText = categoryColorsText[index];

  return (
    <Card sx={{ width: '800px', height: '250px', margin:"20px", padding:"10px" }}>

      <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>

        <img src={`/categories/${job.category}.svg`} />
        <Button variant="outlined">{job.employmentType}</Button>
      </CardContent>
      <CardContent>
        <Box sx={{ marginTop: '16px' }}>
          <Typography variant="h5" sx={{ color: '#25324B' }}>
            {job.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {job.company}  <img src={`/dot.svg`} />  {job.location}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{
          marginTop: '16px', whiteSpace: 'nowrap',
          width: 240,
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {job.details}
        </Typography>
        <Box display="flex" gap={1} mt={2}>
          <Chip label={job.category}
            sx={{
              backgroundColor: `${colorBG}`,
              color: `${colorText}`,
             display:'flex',
             flexDirection:'row',
             justifyContent:'center',
             alignItems:'center',
             textAlign:'center'
            }} />
        </Box>
      </CardContent>
    </Card>
  );
}
