import React from 'react'
import successAnimation from './success_animation8.gif'
import { Box, Container, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const SuccessPage = () => {
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
                            alignItems="center" sx={{paddingBottom:'20px'}}>
                           <img  alt="Logo" src={successAnimation} style={{
                            width: '50%', // Adjust the width as needed
                            height: '50%', // Adjust the height as needed
                                }}/>
                        </Box>
                        <Box>
            <Typography sx={{fontWeight:'bold',fontSize:'18px'}}>
                Your account created successfully, we will get back to you soon.
            </Typography>
        </Box>
        </Box>

        
        </Stack>
    
        
    </Container>

    
    
    
    </>
  )
}

export default SuccessPage