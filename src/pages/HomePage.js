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
      {/* <AppBar position="static" sx={{backgroundColor:'white',flexGrow: 1,zIndex:2}} elevation={0}>
        <Container>
            <Toolbar >
  
            <Box sx={{flex:1,width:'100px'}}>
            <Box sx={{width:'15rem'}}>
            <img  alt="Logo" src="techpact-logo.png" style={{
                            width: '50%', 
                            height: '50%',
                            justifyContent:'center',
                            display:'flex' 
            }}/>
            </Box>

            </Box>

            <Button color="inherit" onClick={onClickLogin}  style={{fontWeight:'bold',color:'#0c0ce8',marginRight:'1rem',paddingLeft:'1rem',paddingRight:'1rem'}}>Login</Button>
            <Button color="inherit" onClick={onClickSignup} variant="contained" style={{fontWeight:'bold',backgroundColor:'white',color:'#0c0ce8'}}>Signup</Button>
           
            </Toolbar>
        </Container>

        <Profile/>

        <Container>
        

          

        </Container>
      </AppBar> */}
      <ResponsiveAppBar/>
      {/* <Stack sx={{flex:1,textAlign:'center',justifyContent:'center',paddingTop:'1rem'}}>
      <Container>
      <Typography sx={{fontSize:'18px'}}>
        Please create an account and share your experience
      </Typography>

      <Typography  sx={{fontSize:'14px'}}>
       (We are working on validation of input fields, we will add soon)
      </Typography>
      </Container>
      <Container sx={{width:'auto',height:'200px'}}>
      <img  alt="Logo" src={arrow} style={{
                             // Adjust the height as needed
                                }}/>
      
      </Container>
      
      </Stack> */}
      {/* <ImageDisplay/> */}
      {/* <TextDisplay/> */}

      {/* <img src={'shutterstock.jpg'} style={{position:'absolute',width:'100%',height:'100%',opacity:0.3,zIndex:'-1',right:'0px'}}/> */}
      <svg style={{position:'absolute',zIndex:-1}} width="90%" height="770" viewBox="0 0 1440 770" fill="none" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.8" x="951" y="70" width="480" height="480" fill="url(#radial1)"></rect><rect opacity="0.8" x="32" y="14" width="586" height="586" fill="url(#radial2)"></rect><defs> <radialGradient id="radial1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1191 310) rotate(90) scale(240)"><stop stop-color="#c9cbf5"></stop><stop offset="1" stop-color="#e6e7fa" stop-opacity="0"></stop></radialGradient><radialGradient id="radial2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(325 307) rotate(90) scale(293)"><stop stop-color="#c9cbf5"></stop><stop offset="1" stop-color="#c9cbf5" stop-opacity="0"></stop></radialGradient></defs></svg>
      <TopBanner/>

      <ImageTransition/>

      <Stack sx={{justifyContent:'space-between',flexDirection:'row',display:'flex',flexWrap:'wrap'}}>
      <Card style={{position:'relative',top:'-280px',maxWidth:'300px'}} elevation={0} >
      <CardContent sx={{textAlign:'center'}}>
        <Box sx={{ display: 'flex', justifyContent: 'center',paddingBottom:'12px' }}>
        <Avatar src="rating4.jpeg" sx={{width: 50, height: 50}}></Avatar>
       
        </Box>

  <Rating name="read-only" size='small' value={5} readOnly />
  <Typography variant="body2" color="text.secondary"
        sx={{
          color:'#6b665f',fontWeight:'400',lineHeight:'28px', fontSize: '16px',
          textAlign:'center',
          
        }}>"Beyond my expectations, I have gotten best advice"</Typography>

</CardContent>
    </Card>
    <Card style={{position:'relative',top:'-280px',maxWidth:'300px'}} elevation={0} >
      <CardContent sx={{textAlign:'center'}}>
        <Box sx={{ display: 'flex', justifyContent: 'center',paddingBottom:'12px' }}>
        <Avatar src="rating1.jpg" sx={{width: 50, height: 50}}></Avatar>
       
        </Box>

  <Rating name="read-only" size='small'  value={5} readOnly />
  <Typography variant="body2" color="text.secondary"
        sx={{
          color:'#6b665f',fontWeight:'400',lineHeight:'28px', fontSize: '16px',
          textAlign:'center',
          
        }}>"Andrii is the best mentor I have ever met."</Typography>

</CardContent>
    </Card>
    <Card style={{position:'relative',top:'-280px',maxWidth:'300px'}} elevation={0} >
      <CardContent sx={{textAlign:'center'}}>
        <Box sx={{ display: 'flex', justifyContent: 'center',paddingBottom:'12px' }}>
        <Avatar src="rating3.jpeg" sx={{width: 50, height: 50}}></Avatar>
       
        </Box>

  <Rating name="read-only" size='small'  value={5} readOnly />
  <Typography variant="body2" color="text.secondary"
        sx={{
          color:'#6b665f',fontWeight:'400',lineHeight:'28px', fontSize: '16px',
          textAlign:'center',
          
        }}>"Greg is literally helping me achieve my dreams"</Typography>

</CardContent>
    </Card>
    <Card style={{position:'relative',top:'-280px',maxWidth:'300px'}} elevation={0} >
      <CardContent sx={{textAlign:'center'}}>
        <Box sx={{ display: 'flex', justifyContent: 'center',paddingBottom:'12px' }}>
        <Avatar src="rating2.jpg" sx={{width: 50, height: 50}}></Avatar>
       
        </Box>

  <Rating name="read-only" size='small'  value={5} readOnly />
  <Typography variant="body2" color="text.secondary"
        sx={{
          color:'#6b665f',fontWeight:'400',lineHeight:'28px', fontSize: '16px',
          textAlign:'center',
          
        }}>"Than you, I got my first internship"</Typography>

</CardContent>
    </Card>
      </Stack>

      

      

      <Box sx={{zIndex:'0',}}>
      


      {/* <Container sx={{
backgroundColor:'#f7f7f7',height:'400px',width:'100%'}}>
  <Box className='domainsBox'>
  <Chip 
  color='primary'
  variant='outlined'
style={{position:'absolute',right:'100px',margin:'2rem',borderRadius:'2rem'}}

label="Data Science and Analytics" component={motion.div} animate={{
  scale: [1, 0.8,1],
    rotate: [-5, 0,-5, ],
    borderRadius: ["0%", "0%", "0%", "0%", "0%"]
  }}
  viewport={{ once: true,}}
  transition={{
    duration: 4,
    ease: "easeInOut",
    times: [0, 0.2, 0.5, 0.8, 1],
    repeat:Infinity,
    repeatDelay: 1
  }}/>

<Chip 
  color='primary'
  variant='outlined'
style={{position:'absolute',left:'200px',margin:'2rem',borderRadius:'2rem'}}

label="Software Development" component={motion.div} animate={{
  scale: [1, 0.8,1],
    rotate: [-5, 0,-5, ],
    borderRadius: ["0%", "0%", "0%", "0%", "0%"]
  }}
  viewport={{ once: true,}}
  transition={{
    duration: 3,
    ease: "easeInOut",
    times: [0, 0.5, 0.2, 0.8, 1],
    repeat:Infinity,
    repeatDelay: 1
  }}/>
  <Chip 
  color='primary'
  variant='outlined'

style={{position:'absolute',bottom:'-300px',margin:'2rem',borderRadius:'2rem'}}

label="Cybersecurity" component={motion.div} animate={{
  scale: [1, 0.8,1],
    rotate: [-5, 0,-5, ],
    borderRadius: ["0%", "0%", "0%", "0%", "0%"]
  }}
  viewport={{ once: true,}}
  transition={{
    duration: 3,
    ease: "easeInOut",
    times: [0, 0.5, 0.2, 0.8, 1],
    repeat:Infinity,
    repeatDelay: 1
  }}/>

<Chip 
  color='primary'
  variant='outlined'

style={{position:'absolute',right:'30px',bottom:'-300px',margin:'2rem',borderRadius:'2rem'}}

label="Database Mangement" component={motion.div} animate={{
  scale: [1, 0.8,1],
  rotate: [-5, 0,-5, ],
    borderRadius: ["0%", "0%", "0%", "0%", "0%"]
  }}
  viewport={{ once: true,}}
  transition={{
    duration: 3,
    ease: "easeInOut",
    times: [0, 0.5, 0.2, 0.8, 1],
    repeat:Infinity,
    repeatDelay: 1
  }}/>

<Chip 
  color='primary'
  variant='outlined'

style={{position:'absolute',right:'300px',bottom:'-400px',margin:'2rem',borderRadius:'2rem'}}

label="Cloud Computing" component={motion.div} animate={{
  scale: [1, 0.8,1],
    rotate: [-5, 0,-5, ],
    borderRadius: ["0%", "0%", "0%", "0%", "0%"]
  }}
  viewport={{ once: true,}}
  transition={{
    duration: 3,
    ease: "easeInOut",
    times: [0, 0.5, 0.2, 0.8, 1],
    repeat:Infinity,
    repeatDelay: 1
  }}/>
<Chip 
  color='primary'
  variant='outlined'

style={{position:'absolute',left:'300px',bottom:'-400px',margin:'2rem',borderRadius:'2rem'}}

label="AI and Machine Laerning" component={motion.div} animate={{
  scale: [1, 0.8,1],
    rotate: [-5, 0,-5, ],
    borderRadius: ["0%", "0%", "0%", "0%", "0%"]
  }}
  viewport={{ once: true,}}
  transition={{
    duration: 3,
    ease: "easeInOut",
    times: [0, 0.5, 0.2, 0.8, 1],
    repeat:Infinity,
    repeatDelay: 1
  }}/>
  <Chip 
  color='primary'
  variant='outlined'

style={{position:'absolute',right:'300px',top:'670px',margin:'2rem',borderRadius:'2rem'}}

label="Database Mangement" component={motion.div} animate={{
  scale: [1, 0.8,1],
    rotate: [-5, 0,-5, ],
    borderRadius: ["0%", "0%", "0%", "0%", "0%"]
  }}
  viewport={{ once: true,}}
  transition={{
    duration: 3,
    ease: "easeInOut",
    times: [0, 0.5, 0.2, 0.8, 1],
    repeat: Infinity,
    repeatDelay: 1
  }}/>
  <Chip 
  color='primary'
  variant='outlined'

style={{position:'absolute',left:'250px',top:'770px',margin:'2rem',borderRadius:'2rem'}}

label="DevOps Operations" component={motion.div} animate={{
  scale: [1, 0.8,1],
    rotate: [-5, 0,-5, ],
    borderRadius: ["0%", "0%", "0%", "0%", "0%"]
  }}
  viewport={{ once: true,}}
  transition={{
    duration: 3,
    ease: "easeInOut",
    times: [0, 0.5, 0.2, 0.8, 1],
    repeat: Infinity,
    repeatDelay: 1
  }}/>
  <Chip 
  color='primary'
  variant='outlined'

style={{position:'absolute',right:'200px',top:'790px',margin:'2rem',borderRadius:'2rem'}}

label="Software Testing" component={motion.div} animate={{
  scale: [1, 0.8,1],
    rotate: [-5, 0,-5, ],
    borderRadius: ["0%", "0%", "0%", "0%", "0%"]
  }}
  viewport={{ once: true,}}
  transition={{
    duration: 3,
    ease: "easeInOut",
    times: [0, 0.5, 0.2, 0.8, 1],
    repeat: Infinity,
    repeatDelay: 1
  }}/>
  <Chip 
  color='primary'
  variant='outlined'

style={{position:'absolute',left:'200px',top:'870px',margin:'2rem',borderRadius:'2rem'}}

label="Project Management" component={motion.div} animate={{
  scale: [1, 0.8,1],
    rotate: [-5, 0,-5, ],
    borderRadius: ["0%", "0%", "0%", "0%", "0%"]
  }}
  viewport={{ once: true,}}
  transition={{
    duration: 3,
    ease: "easeInOut",
    times: [0, 0.5, 0.2, 0.8, 1],
    repeat: Infinity,
    repeatDelay: 1
  }}/>
  </Box>
<Stack
      sx={{
        display: 'flex',
        alignItems: 'center', // Center vertically
        justifyContent: 'center', // Center horizontally
        height:'400px',
       
      }}
    >
      <Typography sx={{ textAlign: 'center',lineHeight:'60px',fontWeight:'700',fontSize:'48px',width:'400px' }} variant="h4">Find a mentor in any domain of your wish</Typography>
    </Stack>
  

      </Container> */}

      <Container maxWidth='xl' sx={{position:'relative',top:'-200px',marginTop:'2rem', paddingTop:'2rem',paddingBottom:'2rem',background:backgroundGradient,color:'white'}}>
        <Stack sx={{flexDirection:'row',justifyContent:'space-around',display:'flex',flexWrap:'wrap'}}>
          <Box>
          <Stack sx={{textAlign:'center'}}>
          <FontAwesomeIcon icon={faUser} style={{fontSize:'30px'}}/>
          <Typography sx={{fontSize:'24px',fontWeight:'bold',lineHeight:'56px',paddingBottom:'1rem'}}>
          Create Account
          </Typography>
          <Typography sx={{fontWeight:'400',lineHeight:'28px', fontSize: '20px'}}> wqyfad wqhdg hqwdj qwdaugqh wqdh</Typography>
          </Stack>
          
          </Box>
          <Box>
          <Stack sx={{textAlign:'center'}}>
          <FontAwesomeIcon icon={faWandMagicSparkles}  style={{fontSize:'30px'}}/>
          <Typography sx={{fontSize:'24px',fontWeight:'bold',lineHeight:'56px',paddingBottom:'1rem'}}>
            Get A Mentor
          </Typography>
          <Typography sx={{fontWeight:'400',lineHeight:'28px', fontSize: '20px'}}> wqyfad wqhdg hqwdj qwdaugqh wqdh</Typography>
          </Stack>
          
          </Box>
          <Box>
          <Stack sx={{textAlign:'center'}}>
          <FontAwesomeIcon icon={faBullseye}  style={{fontSize:'30px'}}/>
          <Typography sx={{fontSize:'24px',fontWeight:'bold',lineHeight:'56px',paddingBottom:'1rem'}}>
            Reach Your Goal
          </Typography>
          <Typography sx={{fontWeight:'400',lineHeight:'28px', fontSize: '20px'}}> wqyfad wqhdg hqwdj qwdaugqh wqdh</Typography>
          </Stack>
          
          </Box>
        </Stack>
      </Container>

      <Container sx={{paddingTop:'50px',position:'relative',top:'-100px'}}>
      <Stack sx={{flexDirection:'row',justifyContent:'space-around',display:'flex',flexWrap:'wrap'}}>
        <Box sx={{maxWidth:'550px'}}>
          <Typography sx={{fontSize:'48px',fontWeight:'bold',lineHeight:'56px',paddingBottom:'1rem'}}>
            Lorem ipsum dolor sit
          </Typography>
          <Typography sx={{
            // fontSize:'32px',fontWeight:'400',lineHeight:'44px'
            color:'#6b665f',fontWeight:'400',lineHeight:'28px', fontSize: '20px',
            }}>
            Lorem elit. Placeat qui non tempore adipisci quis tempore adipisci quis, necessitatibus accusamus atque aliquam impedit. Veniam reprehenderit aut illum. Facilis molestias pariatur voluptas vel, veritatis reprehenderit!
          </Typography>
          <Typography sx={{
            // fontSize:'32px',fontWeight:'400',lineHeight:'44px'
            color:'#6b665f',fontWeight:'400',lineHeight:'28px', fontSize: '20px',
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




<UniversitiesDisplay/>
<Box sx={{paddingTop:'100px'}}>
      {/* <ScrollingCards/> */}
      </Box>
      
      

      
      
      <Box sx={{marginTop:'50px'}}>
      {/* <Divider/> */}

      <Typography sx={{fontSize:'48px',fontWeight:'bold',lineHeight:'56px',paddingBottom:'1rem',textAlign:'center'}}>
    Top title
          </Typography>
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
        <Typography   sx={{ color:'#191919',
          lineHeight:'48px',

          fontWeight: '600', fontSize: '40px'}}>
          Title
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
color:'#6b665f',fontWeight:'400',lineHeight:'28px', fontSize: '20px', padding: '1rem' }}>
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
        <Typography  sx={{ 
          color:'#191919',
          lineHeight:'48px',

          fontWeight: '600', fontSize: '40px' }}>
          Title
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ color:'#6b665f',fontWeight:'400',lineHeight:'28px', fontSize: '20px', padding: '1rem' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quod cupiditate ullam unde pariatur consequuntur harum! Quam itaque commodi tempore error excepturi saepe, pariatur fuga explicabo sit perspiciatis, quas nihil!
        </Typography>
      </CardContent>
    </Card>

    
    
      </Stack>
          
      </Box>
      




      
      {/* <Steps/> */}
      <CompanyIconsDisplay/>
      </Box >
      {/* <Box>
      <Container maxWidth='md' sx={{textAlign:'center',paddingTop:'2rem',paddingBottom:'3rem',}}>

<Typography sx={{fontSize:'30px',fontWeight:'bold',paddingBottom:'1rem'}}>
Pick the brains of <span 
style={{
  padding: '4px',
  paddingLeft:'1rem',
  paddingRight:'1rem',
  borderRadius:'1rem',
  backgroundColor: '#014ABF',
  color: 'white',
  display: 'inline-block', // To ensure the rotation affects the entire element
  transform: 'rotate(5deg)', // Rotate the text by 45 degrees
  transformOrigin: 'center center', // Rotate from the center of the element
}}>
  mentors</span> and grow in your <span 
style={{
  padding: '4px',
  paddingLeft:'1rem',
  paddingRight:'1rem',
  borderRadius:'1rem',
  backgroundColor: '#014ABF',
  color: 'white',
  display: 'inline-block', // To ensure the rotation affects the entire element
  transform: 'rotate(-10deg)', // Rotate the text by 45 degrees
  transformOrigin: 'center center', // Rotate from the center of the element
}}>
  career</span>
  </Typography>
<Typography>
Your online mentor can elevate your career or be a shoulder to lean on. Get a personalized mentoring program, including curated study plans, regular check-ins, and unlimited actionable support. Be part of an online mentor community that spans across the globe.
</Typography>
</Container>
      </Box> */}
      
      
      


      <Container sx={{padding:'2rem',paddingTop:'100px'}}>
      <Typography sx={{fontSize:'48px',fontWeight:'bold',lineHeight:'56px',paddingBottom:'1rem',textAlign:'center'}}>
    Title
          </Typography>
        <Stack flexDirection={'row'} sx={{justifyContent:'space-around',display:'flex',flexWrap:'wrap'}}>
          <Card sx={{maxWidth:'350px',textAlign:'left'}} elevation={0}> 
          <CardMedia
        sx={{ height: 140 }}
        image="diversity4.jpg"
        title="green iguana"
      />

          <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold'}}>
          Title
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
          color:'#6b665f',fontWeight:'400',lineHeight:'28px', fontSize: '20px',
          textAlign:'left'
        }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quod cupiditate ullam unde pariatur consequuntur harum! Quam itaque commodi tempore error excepturi saepe, pariatur fuga explicabo sit perspiciatis, quas nihil!
        </Typography>
      </CardContent>
          </Card>
          <Card sx={{maxWidth:'350px',textAlign:'left'}} elevation={0}> 
          <CardMedia
        sx={{ height: 140, }}
        image="diversity6.jpg"
        title="green iguana"
        
      />
          <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold',textAlign:'left'}}>
          Title
        </Typography>
        <Typography variant="body2" color="text.secondary"
        sx={{
          color:'#6b665f',fontWeight:'400',lineHeight:'28px', fontSize: '20px',
          textAlign:'left'
        }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quod cupiditate ullam unde pariatur consequuntur harum! Quam itaque commodi tempore error excepturi saepe, pariatur fuga explicabo sit perspiciatis, quas nihil!
        </Typography>
      </CardContent>
          </Card>
          <Card sx={{maxWidth:'350px',textAlign:'left'}} elevation={0}> 
          <CardMedia
        sx={{ height: 140 }}
        image="diversity5.jpg"
        title="green iguana"
      />
          <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold'}}>
          Title
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
          color:'#6b665f',fontWeight:'400',lineHeight:'28px', fontSize: '20px',
          textAlign:'left'
        }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quod cupiditate ullam unde pariatur consequuntur harum! Quam itaque commodi tempore error excepturi saepe, pariatur fuga explicabo sit perspiciatis, quas nihil!
        </Typography>
      </CardContent>
          </Card>
        </Stack>
      </Container>

{/* 
      <Container>
      <Typography sx={{textAlign:'center',fontSize:'34px',fontWeight:'bold',paddingBottom:'2rem'}}>Diversity Is The Opportunity</Typography>


      <Stack sx={{flexDirection:'row',display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
      <Box maxWidth={'300px'}>
                    <Typography sx={{ fontSize:'20px',textAlign:'center'}}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aspernatur earum error quis doloremque sunt esse dolor recusandae 
                    </Typography>
                    </Box>
                    <Box  >
                    <Card sx={{maxWidth:'350px',}}>
                    <CardMedia
        sx={{ height: 140 ,width:'320px'}}
        image="diversity5.jpg"
        title="green iguana"
      />
       
                    </Card>
                </Box>

      </Stack>
      
        


    

      </Container> */}


      <Container>

        
        <Container  style={{paddingTop:'100px'}}>
        <Card sx={{padding:'2rem',backgroundImage:"url('diversity5v3.png')",borderRadius:'2rem'}}>
        
          <CardContent>
            <Typography  variant='h3' sx={{fontWeight:'bold'}}>Join the community.</Typography>
            <Typography variant='h3' sx={{fontWeight:'bold'}}>Where people help people grow.</Typography>

            <Typography sx={{}}>Get unstuck with mentorship</Typography>
            
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
          color:'black',fontWeight:'bold',lineHeight:'28px', fontSize: '25px',
          textAlign:'center',maxWidth:'md'
        }}>
          <FormatQuoteIcon  style={{transform:'rotate(180deg)'}}/>
          {data.response}
          <FormatQuoteIcon  style={{}}/>
        </Typography>

        <Typography variant="body2" color="text.secondary"
        sx={{
          color:'#6b665f',fontWeight:'400',lineHeight:'28px', fontSize: '20px',
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
      

      

      <Questions/>
      
      
      
    </Box>
  );
}