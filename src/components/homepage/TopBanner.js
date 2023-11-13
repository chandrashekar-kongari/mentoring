import { Box, Chip, Container, Fab, Stack, Typography } from '@mui/material'
import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {AnimatePresence, motion} from 'framer-motion'
import { CustomActionButton, CustomBox, CustomTypography, MainHeadTypography } from '../newhomepage/PageComponents';
import { useNavigate } from 'react-router-dom';
const TopBanner = () => {
  const navigate=useNavigate()
  const onClickSignUp=()=>{
    navigate('/signup')
  }
  return (
    <Box sx={{paddingTop:'12rem',backgroundRepeat: 'no-repeat',zIndex:'0'}}>

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
        <Fab onClick={onClickSignUp} variant="extended" color='primary' size='large' sx={{ marginTop:'1rem',fontWeight:'bold',zIndex:'1',textTransform:'none'}}>

Sign Up Now
<ChevronRightIcon sx={{ ml: 1 }} />
</Fab>
        </Box>
        
            </Container>
       
        </Stack>

        <Stack sx={{ textAlign:'center', margin:'1rem',marginTop:'10rem', marginRight:'0px',backgroundColor:'#414756',borderRadius:'2rem',  display:'flex', flexWrap:'wrap'}}>
       
      

        </Stack>
        <Box sx={{paddingTop:'3rem',paddingBottom:'3rem',backgroundColor:'#f7f7f7'}}>
        <Container maxWidth='lg' sx={{justifyContent:{xs:'left',md:'center'},textAlign:'center'}}>
        <Container maxWidth='sm'>
        <Typography variant='h5' sx={{fontWeight:900,textAlign:{xs:'left',md:'center'}}}>
            TechPACT Mentoring Program
        </Typography>
        <Stack sx={{flexDirection:'row',justifyContent:'right'}}>

        <img src='./poweredby.png' style={{width:'35%',height:'auto'}}/>
        </Stack>
        </Container>
        <Box sx={{paddingTop:'5px'}}>
        <Typography variant='subtitle1' sx={{textAlign:{xs:'left',md:'center'}}}>
        
         1000+ mentees and mentors joined the program.      
        </Typography>
        </Box>
       
        <img style={{maxWidth:'90%',height:'auto',paddingTop:'1rem'}} src='./peoples2.png'/>
        </Container>

        </Box>

    </Box>
  )
}

export default TopBanner