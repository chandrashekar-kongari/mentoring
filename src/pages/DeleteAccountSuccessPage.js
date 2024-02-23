import { Box, Container, Fab, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
const DeleteAccountSuccessPage = () => {
  const navigate=useNavigate()
  const handleGoHome=()=>{
    navigate('/homepage')
}
  return (
    <>
    <Container maxWidth="xs" sx={{height:'100vh'}} component="main">
        <Stack sx={{height:'100%',justifyContent:'center',textAlign:'center',display:'flex'}}>
            <Box sx={{
              // boxShadow: 3,
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
                        {/* <Box display="flex"
                            justifyContent="center"
                            alignItems="center" sx={{paddingBottom:'20px',zIndex:-1}}>
                           <img  alt="successanimation" src={successAnimation} style={{
                            width: '50%', 
                            height: '50%',
                                }}/>
                        </Box> */}
                        <Box>
                        
                            
            <Typography sx={{fontWeight:'bold',fontSize:'18px'}}>
            Your account has been deleted. We are sorry to see you go.
            </Typography>

            <Fab onClick={handleGoHome} variant="extended" sx={{marginTop:'2rem',backgroundColor:'white',textTransform:'capitalize',fontSize:'16px'}}>
          
            Go To Home
            </Fab>
        </Box>
        </Box>

        
        </Stack>
    
        
    </Container>
    </>
  )
}

export default DeleteAccountSuccessPage