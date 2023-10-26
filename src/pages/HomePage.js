import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Stack } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Profile from '../components/profile/Profile';
import arrow from './arrow2.gif'
import ImageDisplay from '../components/ImageDisplay';
import TextDisplay from '../components/TextDisplay';
export default function HomePage() {
  

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
      <AppBar position="static" sx={{backgroundColor:'white',color:'#1976D2',flexGrow: 1}} elevation={5}>
        <Container>
            <Toolbar >
            {/* <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                 <MenuIcon /> 
            </IconButton> */}
            <Box sx={{flex:1,width:'100px'}}>
            <Box sx={{width:'15rem'}}>
            <img  alt="Logo" src="techpact-logo.png" style={{
                            width: '50%', // Adjust the width as needed
                            height: '50%',
                            justifyContent:'center',
                            display:'flex' // Adjust the height as needed
            }}/>
            </Box>

            </Box>
           
            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            
               
            </Typography> */}
            <Button color="inherit" onClick={onClickLogin}  style={{fontWeight:'bold',color:'#0c0ce8',marginRight:'1rem',paddingLeft:'1rem',paddingRight:'1rem'}}>Login</Button>
            <Button color="inherit" onClick={onClickSignup} variant="contained" style={{fontWeight:'bold',backgroundColor:'white',color:'#0c0ce8'}}>Signup</Button>
           
            </Toolbar>
        </Container>

        <Profile/>

        <Container>
        

          

        </Container>
      </AppBar>
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

      <Stack sx={{justifyContent:'center',flex:1,flexDirection:'row',paddingTop:'1rem'}}>
        <Typography sx={{fontWeight:'bold'}}>Home page</Typography>
      </Stack>
      
    </Box>
  );
}