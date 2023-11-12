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

import { Avatar, Card, CardActions, CardContent, CardMedia, Chip, Container, Divider, Fab, Paper, Rating, Stack } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Profile from '../components/profile/Profile';
import arrow from './arrow2.gif'
import ImageDisplay from '../components/ImageDisplay';
import TextDisplay from '../components/TextDisplay';
import Questions from '../components/homepage/Questions';
import CompanyIconsDisplay from '../components/homepage/CompanyIconsDisplay';
import UniversitiesDisplay from '../components/homepage/UniversitiesDisplay';
import TopBanner from '../components/homepage/TopBanner';
import ResponsiveAppBar from '../components/homepage/ResponsiveAppBar';
import Steps from '../components/homepage/Steps';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {AnimatePresence, motion} from 'framer-motion'
import ScrollingCards from '../components/homepage/scrollingcards/ScrollingCards';
import Carousel from 'react-material-ui-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageTransition from '../components/homepage/ImageTransition';
import StepsAnimation from '../components/homepage/StepsAnimation';
import { CustomBox, MainHeadTypography } from '../components/newhomepage/PageComponents';


export default function HomePage() {
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

    const val=localStorage.getItem('auth')
    if(val=='true'){
        navigate('/homepage')
    }

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

      
      <Box sx={{position:'relative',top:'-200px'}}>

      <Box sx={{zIndex:'0',}}>
      


      <Box sx={{}}>
      <CompanyIconsDisplay/>
     
      </Box>
      <CustomBox>
      <Container maxWidth='xl' sx={{marginTop:'2rem', paddingTop:'2rem',paddingBottom:'2rem',background:backgroundGradient,color:'white'}}>
        <Typography variant='h5' sx={{textAlign:'center',paddingBottom:'2rem',}}>Achieve your goals in goals in 3 steps</Typography>
      
        <Stack sx={{flexDirection:'row',justifyContent:'space-around',display:'flex',flexWrap:'wrap'}}>
          <Box>
          <Stack sx={{textAlign:'center'}}>
          
          <FontAwesomeIcon icon={faUser} style={{}}/>
          <Typography variant='h5' sx={{fontWeight:'bold',paddingBottom:'1rem'}}>
          Create Account
          </Typography>
          <Typography variant='h6' sx={{fontWeight:'400',}}> wqyfad wqhdg hqwdj qwdaugqh wqdh</Typography>
          </Stack>
          
          </Box>
          <Box>
          <Stack sx={{textAlign:'center'}}>
          <FontAwesomeIcon icon={faWandMagicSparkles}  style={{}}/>
          <Typography variant='h5' sx={{fontWeight:'bold',paddingBottom:'1rem'}}>
            Get A Mentor
          </Typography>
          <Typography variant='subtitle1' sx={{fontWeight:'400',}}> wqyfad wqhdg hqwdj qwdaugqh wqdh</Typography>
          </Stack>
          
          </Box>
          <Box>
          <Stack sx={{textAlign:'center'}}>
          <FontAwesomeIcon icon={faBullseye}  style={{}}/>
          <Typography variant='h5'  sx={{fontWeight:'bold',paddingBottom:'1rem'}}>
            Reach Your Goal
          </Typography>
          <Typography  variant='subtitle1'  sx={{fontWeight:'400', }}> wqyfad wqhdg hqwdj qwdaugqh wqdh</Typography>
          </Stack>
          
          </Box>
        </Stack>
      </Container>
      </CustomBox>

      <CustomBox>

      <Container sx={{}}>
      <Stack sx={{flexDirection:'row',justifyContent:'space-around',display:'flex',flexWrap:'wrap'}}>
        <Box  sx={{maxWidth:'550px'}}>
          <Typography variant='h5' sx={{fontWeight:'bold',paddingBottom:'1rem'}}>
            Lorem ipsum dolor sit
          </Typography>
          <Typography variant='subtitle1' sx={{
            // fontSize:'32px',fontWeight:'400',lineHeight:'44px'
            color:'#6b665f',fontWeight:'400',
            }}>
            Lorem elit. Placeat qui non tempore adipisci quis tempore adipisci quis, necessitatibus accusamus atque aliquam impedit. Veniam reprehenderit aut illum. Facilis molestias pariatur voluptas vel, veritatis reprehenderit!
          </Typography>
          <Typography variant='subtitle1'  sx={{
            // fontSize:'32px',fontWeight:'400',lineHeight:'44px'
            color:'#6b665f',fontWeight:'400', 
            paddingTop:'1rem'
            }}>
            Lorem elit. Placeat qui non tempore adipisci quis tempore Placeat qui non tempore adipisci quis tempore adipisci quis, necessitatibus accusamus atque aliquam impedit. Veniam reprehenderit aut illum. Facilis molestias pariatur voluptas vel, veritatis reprehenderit!
          </Typography>
        </Box>
        <Box >
          <img className='imgBox' style={{maxWidth:'500px',height:'auto'}} src='mentor-network-image.webp'/>
        </Box>
      </Stack>
      </Container>
      </CustomBox>




<UniversitiesDisplay/>

      
      
      </Box >

      <CustomBox>
      <Box sx={{marginTop:'50px'}}>
      {/* <Divider/> */}

      <MainHeadTypography sx={{paddingLeft:'2rem',fontWeight:'bold',textAlign:'left'}}>
    Main Head goes here
          </MainHeadTypography>
      <Stack sx={{paddingTop:'50px',flexDirection:'row',justifyContent:'space-around',display:'flex',flexWrap:'wrap'}}>
      <Card 
          
          
          elevation={5} sx={{ maxWidth: '550px', textAlign: 'center',  borderRadius: '1rem',margin:'1rem' }}>
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
        <MainHeadTypography   sx={{ color:'#191919',

          textAlign:'left',
          padding: '1rem',
          fontWeight: '600', }}>
          Sub head
        </MainHeadTypography>
        <Typography variant="subtitle1" color="text.secondary" sx={{textAlign:'left',
color:'#6b665f',fontWeight:'400', padding: '1rem' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quod cupiditate ullam unde pariatur consequuntur harum! Quam itaque commodi tempore error excepturi saepe, pariatur fuga explicabo sit perspiciatis, quas nihil!
        </Typography>
      </CardContent>
    </Card>
          <Card 
          
          
          elevation={5} sx={{ maxWidth: '550px', textAlign: 'center', borderRadius: '1rem',margin:'1rem' }}>
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
        <MainHeadTypography  sx={{ 
          color:'#191919',

          padding: '1rem',
          fontWeight: '600', textAlign:'left',}}>
          Sub head
        </MainHeadTypography>
        <Typography variant="subtitle1" color="text.secondary" sx={{textAlign:'left', color:'#6b665f',fontWeight:'400',  padding: '1rem' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quod cupiditate ullam unde pariatur consequuntur harum! Quam itaque commodi tempore error excepturi saepe, pariatur fuga explicabo sit perspiciatis, quas nihil!
        </Typography>
      </CardContent>
    </Card>

    
    
      </Stack>
          
      </Box>
      </CustomBox>
     


      <CustomBox>
      <Container>

        
<Container  style={{paddingTop:'100px'}}>
<Card sx={{padding:'2rem',backgroundImage:"url('diversity5v3.png')",borderRadius:'2rem'}}>

  <CardContent>
    <Typography  variant='h4' sx={{fontWeight:'bold'}}>Join The Program.</Typography>
    <Typography variant='h4' sx={{fontWeight:'bold'}}>Where people help people grow.</Typography>

    <Typography variant='subtitle1' sx={{}}>Get unstuck with mentorship</Typography>
    
  </CardContent>
  <CardActions>
  <Fab variant="extended" color='primary' size='large' sx={{ marginTop:'1rem',fontWeight:'bold',zIndex:'1',textTransform:'none'}}>

Create an account
<ChevronRightIcon sx={{ ml: 1 }} />
</Fab>

  </CardActions>
</Card>


</Container>
</Container>
      </CustomBox>


      <CustomBox>
      <Container  sx={{marginTop:'2rem',marginBottom:'2rem',borderRadius:'2rem', paddingTop:'6rem',paddingBottom:'6rem',backgroundColor:'#f7f7f7',marginTop:'100px'}}>
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

                      <Typography variant="body2" color="text.secondary"
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
      </CustomBox>
      

      

      <Questions/>
      </Box>
      
      
      
    </Box>
  );
}