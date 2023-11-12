import { Box, Chip, Container, Fab, Stack, Typography } from '@mui/material'
import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {AnimatePresence, motion} from 'framer-motion'
import { CustomActionButton, CustomBox, CustomTypography } from '../newhomepage/PageComponents';
const TopBanner = () => {
  return (
    <Box sx={{paddingTop:'12rem',paddingBottom:'6rem',backgroundRepeat: 'no-repeat',zIndex:'0'}}>

        <Stack sx={{justifyContent:'center'}}>
            <Container maxWidth='md'  sx={{ justifyContent:'center',textAlign:'center'}}>
            
            <Typography sx={{color:'#1976d2', fontSize:'50px',fontWeight:900, fontFamily:"'Inter', serif"}}>
            <span style={{fontSize:'56px'}}>GROW TOGETHER</span> 
        </Typography>
        <Typography sx={{fontSize:'50px',fontWeight:900,fontFamily:"'Inter', serif"}}>
            through 1:1 mentorship
        </Typography>
       
      
        <Box sx={{paddingTop:'1rem'}}>
        <CustomTypography>
        
        Achieve your goals as a mentee or mentor.      
        </CustomTypography>
        </Box>

        <Box sx={{paddingTop:'1rem'}}>
        <CustomActionButton>
          Sign up now
        </CustomActionButton>
        </Box>
        
            </Container>
       
        </Stack>

        <Stack sx={{ textAlign:'center', margin:'1rem',marginTop:'10rem', marginRight:'0px',backgroundColor:'#414756',borderRadius:'2rem',  display:'flex', flexWrap:'wrap'}}>
       
      

        </Stack>
        <CustomBox>
        <Container maxWidth='lg' sx={{justifyContent:'center',textAlign:'center'}}>
        <Typography sx={{fontSize:'35px',fontWeight:900,fontFamily:"'Inter', serif"}}>
            TechPACT Mentoring Program
        </Typography>
        <Box sx={{paddingTop:'5px'}}>
        <CustomTypography>
        
         1000+ mentees and mentors joined the program.      
        </CustomTypography>
        </Box>
       
        <img style={{maxWidth:'90%',height:'auto',paddingTop:'1rem'}} src='./peoples2.png'/>
        </Container>

        </CustomBox>

    </Box>
  )
}

export default TopBanner