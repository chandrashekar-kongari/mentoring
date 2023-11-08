import { Box, Chip, Container, Stack, Typography } from '@mui/material'
import React from 'react'

const Steps = () => {
  return (
    <Container maxWidth='lg' sx={{color:'black',borderRadius:'2rem'}}>
              <svg style={{position:'absolute'}} width="90%" height="770" viewBox="0 0 1440 770" fill="none" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.8" x="951" y="70" width="480" height="480" fill="url(#radial1)"></rect><rect opacity="0.8" x="32" y="14" width="586" height="586" fill="url(#radial2)"></rect><defs> <radialGradient id="radial1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1191 310) rotate(90) scale(240)"><stop stop-color="#c9cbf5"></stop><stop offset="1" stop-color="#e6e7fa" stop-opacity="0"></stop></radialGradient><radialGradient id="radial2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(325 307) rotate(90) scale(293)"><stop stop-color="#c9cbf5"></stop><stop offset="1" stop-color="#c9cbf5" stop-opacity="0"></stop></radialGradient></defs></svg>

        <Typography sx={{fontSize:'30px',fontWeight:'bold',paddingBottom:'1rem',textAlign:'center',color:'black',}}>How it works?</Typography>

        <Stack flexDirection={'row'} sx={{justifyContent:'left'}}>
            <Stack flexDirection={'row'} sx={{display:'flex',flexWrap:'wrap', position:'relative',maxWidth:'xs',paddingTop:'1rem',paddingBottom:'1rem',paddingLeft:'1rem',}}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                <Stack>
                <Chip label='Step 1: Create Account' variant='outlined' sx={{fontWeight:'bold',marginBottom:'1rem'}}/>
                    <Box maxWidth={'400px'}>
                    <Typography sx={{fontWeight:'bold', fontSize:'20px',textAlign:'right'}}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aspernatur earum error quis doloremque sunt esse dolor recusandae 
                    </Typography>
                    </Box>
                </Stack>
                
            </Box>
                <Box  >
                <img src={'account-creation.svg'} style={{width:'150px',height:'auto'}}/>
                </Box>
                
                
            </Stack>
            {/* <svg style={{ transform: 'rotate(20deg)',position:'relative',left:'2rem',bottom:'-5rem',zIndex:'1'}} width="100" height="100" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-[.8] absolute left-[-17%] top-[14%] md:block hidden"><path d="M88.086 48.865c-.129-.478-.605-.83-1.214-.725a1 1 0 0 0-.725 1.214c.557 2.208.803 3.081 1.292 4.41-9.452-5.623-26.598-11.447-44.178-11.447-10.596 0-21.344 2.114-30.665 7.662a1.001 1.001 0 0 0 1.023 1.72c24.07-14.33 58.05-5.013 72.771 3.77-1.744.166-4.519.804-4.519.804a1 1 0 0 0 .428 1.954s3.526-.772 7.226-.97c.32-.017.657-.16.83-.43.175-.27.15-.596.048-.931 0 0-1.627-4.484-2.317-7.031Z" fill="#014ABF"></path></svg> */}
            
            
            
        </Stack>
        <Stack flexDirection={'row'} sx={{justifyContent:'right'}}>
        <Stack flexDirection={'row'} sx={{display:'flex',flexWrap:'wrap',position:'relative',maxWidth:'xs',paddingTop:'1rem',paddingBottom:'1rem',paddingRight:'1rem'}}>
                <Box  >
                <img src={'mentoring.svg'} style={{width:'150px',height:'auto'}}/>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                <Stack>
                <Chip label='Step 2: Start Mentorship' variant='outlined' sx={{fontWeight:'bold',marginBottom:'1rem'}}/>
                <Box maxWidth={'400px'}>
                    <Typography sx={{fontWeight:'bold', fontSize:'20px',textAlign:'left'}}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aspernatur earum error quis doloremque sunt esse dolor recusandae 
                    </Typography>
                    </Box>
                </Stack>
                </Box>
                
            </Stack>
            </Stack>
    </Container>
  )
}

export default Steps