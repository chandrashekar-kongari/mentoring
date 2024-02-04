import React, { useEffect } from 'react'
import successAnimation from './success_animation8.gif'
import celebration from './celebration2.gif'
import { Box, Container, Fab, Stack, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import { useDispatch } from 'react-redux'
import { setMentorIntrests, setMentorshipIntrests, updateSkill } from '../../../../features/UserSlice'
const SuccessPage = () => {

    const navigate=useNavigate()
    const dispatch=useDispatch()
    useEffect(()=>{

        dispatch(updateSkill([{
            title:'Software Development',
            selected:false
          },
          {
            title:'Python',
            selected:false
          },
          {
            title:'Full Stack Development',
            selected:false
          },
          
          {
            title:'Cybersecurity',
            selected:false
          },
          
          {
            title:'Data Science and Analytics',
            selected:false
          },
          {
            title:'Cloud Computing',
            selected:false
          },
          {
            title:'Database Develpment',
            selected:false
          },
          {
            title:'C# Programming',
            selected:false
          }]))

        dispatch(setMentorIntrests([{
            title:'Leadership',
            selected:false
          },
          {
            title:'Career guidance',
            selected:false
          },
          {
            title:'Thought parter',
            selected:false
          },
          {
            title:'Transition',
            selected:false
          },
          {
            title:'Personal Development',
            selected:false
          },]))
          dispatch(setMentorshipIntrests([{
            title:'Leadership',
            selected:false
          },
          {
            title:'Career guidance',
            selected:false
          },
          {
            title:'Thought parter',
            selected:false
          },
          {
            title:'Transition',
            selected:false
          },
          {
            title:'Personal Development',
            selected:false
          }]))

    },[])

    const handleGoHome=()=>{
        navigate('/homepage')
    }
  return (
    <>
    <Container maxWidth="xs" sx={{height:'100vh'}} component="main">
        <Stack sx={{height:'100%',justifyContent:'center',textAlign:'center',display:'flex'}}>
            <Box sx={{boxShadow: 3,
                    borderRadius: 2,
                    px: 4,
                    py: 3,
                    }} >
                        <Box display="flex"
                            justifyContent="center"
                            alignItems="center" sx={{paddingBottom:'20px'}}>
                            <Link to="/"><img  alt="Logo" src="techpact-logo.png" style={{
                            width: '50%', // Adjust the width as needed
                            height: '50%', // Adjust the height as needed
            }}/></Link>
                        </Box>
                        <Box display="flex"
                            justifyContent="center"
                            alignItems="center" sx={{paddingBottom:'20px',zIndex:-1}}>
                           <img  alt="successanimation" src={successAnimation} style={{
                            width: '50%', // Adjust the width as needed
                            height: '50%', // Adjust the height as needed
                                }}/>
                        </Box>
                        <Box>
                        
                            
            <Typography sx={{fontWeight:'bold',fontSize:'18px'}}>
                Your account created successfully
            </Typography>

            <Fab onClick={handleGoHome} variant="extended" sx={{marginTop:'2rem',backgroundColor:'white',textTransform:'capitalize',fontSize:'16px'}}>
            <HomeIcon sx={{ mr: 1 }} />
            Go To Home
            </Fab>
        </Box>
        </Box>

        
        </Stack>
    
        
    </Container>

    
    
    
    </>
  )
}

export default SuccessPage