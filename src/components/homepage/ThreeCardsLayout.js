import React from 'react';
import { Grid, Card, CardContent, Typography, Stack, Box } from '@mui/material';

const ThreeCardsLayout = () => {
  return (
    <Box sx={{marginTop:'3rem'}}>
          <svg style={{position:'absolute',zIndex:-1,width:'80vw'}} width="1120" height="1033" viewBox="0 0 1120 1033" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="scale(-1, 1) translate(-1120, 0)">
        <path d="M675.361 22.5597C530.361 -16.4405 313.061 19.0599 235.861 257.06C139.361 554.56 310.361 697.56 319.361 868.56C328.361 1039.56 205.861 1036.61 157.361 990.56C99.9078 936.013 112.361 857.06 181.861 821.56C251.361 786.06 315.944 823.465 515.361 945.06C556.361 970.06 776.861 1052.56 844.861 1006.06" stroke="#D0D2D2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="8 16"></path>
    </g></svg>
        
        <Grid container spacing={3} justifyContent={'center'}>
      {/* 1st Card */}
      <Grid item xs={12} md={6} lg={5} >
      <Card sx={{ maxWidth:'550px',borderRadius:'2rem',backgroundColor:'#F0EFFF',paddingTop:'2rem',paddingLeft:'1rem',paddingBottom:'2rem',margin:'1rem'}} elevation={0}>
          <CardContent >
            <Stack spacing={3}>
            <Typography variant='h5'>
              Create Account
            </Typography>
            <Typography variant='subtitle1'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, doloremque similique? Eum dolorum, ducimus aperiam, provident earum, dolor at ab 
            </Typography>
            <img src='./login_image_nobg2.png' style={{maxWidth: '550px',height:'auto'}}/>
            </Stack>
          </CardContent>
        </Card>
      </Grid>

      {/* 2nd Card */}
      <Grid item xs={12} md={6} lg={5} sx={{ marginTop: { xs: 3, md: 20 }, marginLeft: { lg: 20, }, }}>
      <Card sx={{ maxWidth:'550px',borderRadius:'2rem',backgroundColor:'#E9F7F6',paddingTop:'2rem',paddingLeft:'1rem',paddingBottom:'2rem',margin:'1rem'}} elevation={0}>
          <CardContent >
            <Stack spacing={3}>
            <Typography variant='h5'>
              Top Head
            </Typography>
            <Typography variant='subtitle1'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, doloremque similique? Eum dolorum, ducimus aperiam, provident earum, dolor at ab 
            </Typography>
            <img src='./communicate_image2.png' style={{maxWidth: '550px',height:'auto'}}/>
            </Stack>
          </CardContent>
        </Card>
      </Grid>

      {/* 3rd Card */}
      <Grid item xs={12} md={12} lg={5} sx={{ marginTop: 3, position:{lg:'relative'}, left:{lg:'-200px'},top:{lg:'-100px'}}} justifyContent={'left'} >
      <Card sx={{ maxWidth:'550px',borderRadius:'2rem',backgroundColor:'#fdf6f0',paddingTop:'2rem',paddingLeft:'1rem',paddingBottom:'2rem',margin:'1rem'}} elevation={0}>
          <CardContent >
            <Stack spacing={3}>
            <Typography variant='h5'>
              Top Head
            </Typography>
            <Typography variant='subtitle1'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, doloremque similique? Eum dolorum, ducimus aperiam, provident earum, dolor at ab 
            </Typography>
            <img src='./interview-nobg3.png' style={{maxWidth: '550px',height:'auto',borderRadius:'1rem'}}/>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </Box>
  );
};

export default ThreeCardsLayout;
