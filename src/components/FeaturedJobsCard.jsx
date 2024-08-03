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

export default function FeaturedJobsCard({ category, type, catTitle, catLocation, catCompany, catDetails }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: '274px', height: '283px' }}>

      <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>

        <img src={`/categories/${category}.svg`} />
        <Button variant="outlined">{type}</Button>
      </CardContent>
      <CardContent>
        <Box sx={{ marginTop: '16px' }}>
          <Typography variant="h5" sx={{ color: '#25324B' }}>
            {catTitle}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {catCompany}  <img src={`/dot.svg`} />  {catLocation}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: '16px' ,whiteSpace: 'nowrap',
            width: 240,
            overflow: 'hidden',
            textOverflow: 'ellipsis'}}>
          {catDetails}
        </Typography>
        <Box display="flex" gap={1} mt={2}>
          <Chip label="Marketing" sx={{
            backgroundColor: '#EB85331A', color: '#FFB836'  }} />
        </Box>
      </CardContent>
    </Card>
  );
}
