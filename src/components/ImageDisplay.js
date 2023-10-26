import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel'
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import KeyboardTabOutlinedIcon from '@mui/icons-material/KeyboardTabOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ShareIcon from '@mui/icons-material/Share';
import { Box, Fab, IconButton, Stack } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function ImageDisplay() {
  var items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!",
        src:'image1.jpg'
    },
    {
        name: "Random Name #2",
        description: "Hello World!",
        src:'image2.jpg'
    },
    {
        name: "Random Name #2",
        description: "Hello World!",
        src:'image3.jpg'
    }
]
  return (
    // <Card sx={{paddingTop:'',flex:1,height:'300px',width:'400px' }} elevation={0} >height of carasol 200px</Card>
    <Card sx={{paddingTop:'',flex:1, }} elevation={0} >
      <Carousel
        navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
          style: {
              // backgroundColor: 'none',
              // borderRadius: 0,
              opacity:0.5
          }
      }} 
    //   navButtonsWrapperProps={{   // Move the buttons to the bottom. Unsetting top here to override default style.
    //     style: {
    //         bottom: '0',
    //         top: 'unset',
    //         backgroundColor:'red'
    //     }
    // }} 
        // NextIcon={<KeyboardTabOutlinedIcon/>}
        // PrevIcon={<NavigateNextOutlinedIcon/>}
       indicators={true} navButtonsAlwaysVisible={true} animation='slide' duration='800'>
            {
                items.map( (item, i) => <CardMedia
                key={i}
                sx={{ height:'100vh',width:'auto' }}
                image={item.src}
                title="green iguana"
              /> )
            }
        </Carousel>
    </Card>
  );
}