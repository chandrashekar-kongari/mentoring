import * as React from 'react';
import './homepage.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { faBullseye, faUser ,faWandMagicSparkles} from '@fortawesome/free-solid-svg-icons';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Avatar, Card, CardActions, CardContent, CardMedia, Chip, Container, Divider, Fab, List, ListItem, ListItemAvatar, ListItemText, Paper, Rating, Stack } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import arrow from './arrow2.gif'
import ImageDisplay from '../../components/ImageDisplay';
import TextDisplay from '../../components/TextDisplay';
import Questions from './components/Questions';
import CompanyIconsDisplay from './components/CompanyIconsDisplay';
import UniversitiesDisplay from './components/UniversitiesDisplay';
import TopBanner from './components/TopBanner';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Steps from './components/Steps';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {AnimatePresence, motion} from 'framer-motion'
import ScrollingCards from './components/scrollingcards/ScrollingCards';
import Carousel from 'react-material-ui-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageTransition from './components/ImageTransition';
import StepsAnimation from './components/StepsAnimation';
import { CustomBox, CustomPaddingBox, MainHeadTypography } from '../../components/page/PageComponents';
import ThreeCardsLayout from './components/ThreeCardsLayout';
import Footer from './components/Footer';


export default function HomePage() {
  
  const onClickSignUp=()=>{
    navigate('/signup')
  }
  const hue = (h) => `hsl(${h}, 100%, 50%)`;
  const backgroundGradient = `linear-gradient(306deg, ${hue(205)}, ${hue(245)})`;


  const [testimonials,setTestimonials]=React.useState([
    {
      id:1,
      response:"I have goten millions of dollers worth of advice, Greg is literally helping me achieve my dreams ",
      name:'Chandrashekar Kongari',
      role:'Mentee',
      profile:'chandrashekar.jpg'
    },
    {
      id:2,
      response:"Naz is an amazing person and a wonderful mentor. She is supportive and knowledgeable with extensive practical experience. ",
      name:'Chandrashekar Kongari',
      role:'Mentee',
      profile:'chandrashekar.jpg'
    }
  ])
  React.useEffect(()=>{

    // const val=localStorage.getItem('auth')
    // if(val=='true'){
    //     navigate('/homepage')
    // }

    
  },)

  
    const navigate=useNavigate()

    const onClickLogin=()=>{
        navigate('/login')

    }
    const onClickSignup=()=>{
      navigate('/signup')

  }

  
  return (
    <Box sx={{ }}>

      <ResponsiveAppBar/>

      <svg style={{position:'absolute',zIndex:-1}} width="90%" height="770" viewBox="0 0 1440 770" fill="none" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.8" x="951" y="70" width="480" height="480" fill="url(#radial1)"></rect><rect opacity="0.8" x="32" y="14" width="586" height="586" fill="url(#radial2)"></rect><defs> <radialGradient id="radial1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1191 310) rotate(90) scale(240)"><stop stop-color="#c9cbf5"></stop><stop offset="1" stop-color="#e6e7fa" stop-opacity="0"></stop></radialGradient><radialGradient id="radial2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(325 307) rotate(90) scale(293)"><stop stop-color="#c9cbf5"></stop><stop offset="1" stop-color="#c9cbf5" stop-opacity="0"></stop></radialGradient></defs></svg>
      <TopBanner/>


      <ImageTransition/>
    
  
      <Box sx={{position:'relative',top:{ xs: '-300px', md: '-80px' }}}>
      <ThreeCardsLayout/>
      <Box sx={{zIndex:'0',}}>
      


  
      <CompanyIconsDisplay/>
      
     

     <UniversitiesDisplay/>
      </Box >
      

      <CustomPaddingBox>
       <Box sx={{ backgroundColor:'#F9F6F9',paddingTop:'2rem',paddingBottom:'4rem',}}>
      <Container sx={{marginTop:'2rem',}}>


      <Typography variant='h4' sx={{fontWeight:'bold',textAlign:'center'}}>
      Why mentoring?​
          </Typography>
      {/* <Typography sx={{fontWeight:'normal', justifyContent:'center' ,textAlign:'center'}}>No single answer exists to how to best navigate a career. You do not have to travel alone.  Having someone beside you can have a profound difference.​</Typography> */}
      <Stack sx={{paddingTop:'50px',flexDirection:'row',justifyContent:'space-around',display:'flex',flexWrap:'wrap'}}>
      <Card 
          
          
          elevation={5} sx={{ maxWidth: '500px', textAlign: 'center',  borderRadius: '1rem',margin:'1rem'}}>
          <Box
        sx={{

          height: 300,
          backgroundImage:"url('diversity6.jpg')",
          // borderRadius: '1rem', // Add a rounded border
          boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)', // Add elevation with a fading effect
          overflow: 'hidden', // Hide the shadow outside the border
        }}
      >
          <CardMedia
        sx={{ height: 270, opacity:'1' ,margin:'1rem',borderRadius:'1rem'}}
        image="diversity6.jpg"
        title="green iguana"
        
      />
      
      
      </Box>
          

 

      <CardContent>
        <Typography variant='h5'   sx={{ 

          textAlign:'left',
          paddingLeft: '1rem',
          fontWeight: '600', }}>
          From the mentee’s chair​
        </Typography>
        <Typography variant="subtitle1"  sx={{textAlign:'left',
fontWeight:'400', padding: '1rem',paddingBottom:'2px' }}>
Career choices are tough. A neutral opinion from someone on the outside may be the key to unlocking the answer. Our mentoring program empowers you to shape a mentoring relationship that is right for you today and grows with you tomorrow.​        </Typography>
<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem sx={{paddingTop:0,paddingBottom:0}}>
      <KeyboardArrowRightIcon/>
        <ListItemText  >Learn from experienced technologists​​</ListItemText>
        
      </ListItem>
      <ListItem sx={{paddingTop:0,paddingBottom:0}}>
      <KeyboardArrowRightIcon/>
        <ListItemText>Accelerate personal development​​</ListItemText>
      </ListItem>
      <ListItem sx={{paddingTop:0,paddingBottom:0}}>
      <KeyboardArrowRightIcon/>
        <ListItemText>Build a 1x1 relationship​​</ListItemText>
      </ListItem>
      <ListItem sx={{paddingTop:0,paddingBottom:0}}>
      <KeyboardArrowRightIcon/>
        <ListItemText>Expand your network​​</ListItemText>
      </ListItem>
      <ListItem sx={{paddingTop:0,paddingBottom:0}}>
      <KeyboardArrowRightIcon/>
        <ListItemText> Shape the discussion to suit your needs​​</ListItemText>
      </ListItem>
      
    </List>
      </CardContent>
    </Card>
          <Card 
          
          
          elevation={5} sx={{ maxWidth: '500px', textAlign: 'center', borderRadius: '1rem',margin:'1rem' }}>
          <Box
        sx={{
          height: 300,
          backgroundImage:"url('diversity4.jpg')",
          zIndex: -1,
          backdropFilter: 'blur(10px)', // Apply the blur effect
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Add a semi-transparent background to control the blur intensity
          // borderRadius: '1rem', // Add a rounded border
          boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)', // Add elevation with a fading effect
          overflow: 'hidden', // Hide the shadow outside the border
        }}
      >
         
         <CardMedia
        sx={{ height: 270, opacity:'1' ,margin:'1rem',borderRadius:'1rem'}}
        image="diversity4.jpg"
        title="green iguana"
        
      />

      
      
      </Box>
          

 

      <CardContent>
        <Typography variant='h5'  sx={{ 
          

          paddingLeft: '1rem',
          fontWeight: '600', textAlign:'left',}}>
          From the mentor’s chair​
        </Typography>
        <Typography variant="subtitle1"  sx={{textAlign:'left', fontWeight:'400',  padding: '1rem',paddingBottom:'2px' }}>
        You have valuable insights and unique perspectives earned from years of experience as a technologist.  Be the spark that ignites a career. Be the key that opens doors. Share your story to show someone they are not alone.​        </Typography>
    
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem sx={{paddingTop:0,paddingBottom:0}}>
      <KeyboardArrowRightIcon/>
        <ListItemText  >Create space for others to thrive​</ListItemText>
        
      </ListItem>
      <ListItem sx={{paddingTop:0,paddingBottom:0}}>
      <KeyboardArrowRightIcon/>
        <ListItemText>Be a multiplier​</ListItemText>
      </ListItem>
      <ListItem sx={{paddingTop:0,paddingBottom:0}}>
      <KeyboardArrowRightIcon/>
        <ListItemText>Shape future technologists​​</ListItemText>
      </ListItem>
      <ListItem sx={{paddingTop:0,paddingBottom:0}}>
      <KeyboardArrowRightIcon/>
        <ListItemText>Gain fresh perspectives​​</ListItemText>
      </ListItem>
      <ListItem sx={{paddingTop:0,paddingBottom:0}}>
      <KeyboardArrowRightIcon/>
        <ListItemText>Expand your networ​k​</ListItemText>
      </ListItem>
      
    </List>
      </CardContent>
    </Card>

    
    
      </Stack>
          
      </Container>
      </Box> 
      </CustomPaddingBox>
     


      <CustomBox>
      <Container>

        
<Container  style={{}}>
<Card sx={{padding:'2rem',paddingLeft:'2rem',backgroundImage:"url('diversity5v3.png')",borderRadius:'2rem'}}>

  <CardContent >
    <Stack spacing={2}>
    <Typography  variant='h4' sx={{fontWeight:'bold'}}>Join The Program.</Typography>
    <Typography variant='h4' sx={{fontWeight:'bold'}}>Where people help people grow.</Typography>

    {/* <Typography variant='subtitle1' sx={{}}>Get unstuck with mentorship</Typography> */}
    </Stack>
    
  </CardContent>
  <CardActions>
  <Fab onClick={onClickSignUp} variant="extended" color='primary' size='large' sx={{ marginTop:'1rem',fontWeight:'bold',zIndex:'1',textTransform:'none'}}>

Create an account
<ChevronRightIcon sx={{ ml: 1 }} />
</Fab>

  </CardActions>
</Card>


</Container>
</Container>
      </CustomBox>


      {/* <CustomBox>
      <Container  sx={{height:{xs:'80vh',md:'90vh'},marginTop:'2rem',marginBottom:'2rem',borderRadius:'2rem', paddingTop:'6rem',paddingBottom:'6rem',backgroundColor:'#f7f7f7',marginTop:'100px'}}>
      <Carousel
            
            
            navButtonsProps={{          
            style: { 
                opacity:0.3
            }
        
        }} indicatorContainerProps={{
            style:{
                // backgroundColor:'white',
                // elevation:0
            }
        }}
        sx={{elevation:8}}
        indicators={true} autoPlay={true} navButtonsAlwaysVisible={false} animation='slide' duration='900'>
                {
                    testimonials.map( (data, i) => 
                    <Stack sx={{justifyContent:'center',textAlign:'center',flexDirection:'row'}}>


                      <Box>
                        <Stack sx={{flexDirection:'row',justifyContent:'center'}}>
                        <Avatar  sx={{ width: 100, height: 100,textAlign:'center', marginBottom:'1rem'}}/>

                        </Stack>

                      <Typography variant="h4" 
        sx={{
          color:'black',fontWeight:'bold', 
          textAlign:'center',maxWidth:'md'
        }}>
          <FormatQuoteIcon  style={{transform:'rotate(180deg)'}}/>
          {data.response}
          <FormatQuoteIcon  style={{}}/>
        </Typography>

        <Typography variant="body2" color="text.secondary"
        sx={{
          color:'#6b665f',fontWeight:'400',
          textAlign:'center',maxWidth:'md',
          paddingTop:'1rem',
          paddingBottom:'2rem'
        }}>
          
          {data.name} /{data.role}
          
        </Typography>
                      </Box>
                      
                    </Stack> )
                }
            </Carousel>
      </Container>
      </CustomBox> */}
      

      

      <Questions/>
      </Box>
      
      
      <Footer/>
    </Box>
  );
}