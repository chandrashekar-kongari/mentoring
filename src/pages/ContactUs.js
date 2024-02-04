import { Box, Container, Fab, Typography } from '@mui/material'
import React from 'react'
import Header from '../components/Header'
import NavigationIcon from '@mui/icons-material/Navigation';
import Footer from '../components/Footer';
const ContactUs = () => {
  return (
    <>
    <Header/>
    <Container sx={{paddingBottom:'3rem'}}>

    <Container maxWidth="md" sx={{padding:'2rem'}}>
        {/* #FAF0ED #f7a288 */}
        <Box sx={{ bgcolor: '#F5F0FF', height:{ xs: '45vh', md: '60vh' } ,borderRadius:'5px',justifyContent:'center',textAlign:'center',alignItems:'center',display: 'flex', }} >
            <Box>
            <Typography variant='h4'>Support</Typography>
            <Typography sx={{fontSize:'18px',color:'#616161',paddingTop:'6px',paddingBottom:'1rem'}}>We are here available to assist and address any questions you might have.</Typography>
            <Fab variant="extended" sx={{backgroundColor:'white',textTransform:'lowercase',fontSize:'16px'}}>
            <NavigationIcon sx={{ mr: 1 }} />
            mentoring@techpact.org
            </Fab>
            </Box>
        </Box>
      </Container>

      <Container maxWidth="md" sx={{padding:'2rem'}}>
        {/* #FAF0ED #f7a288 */}
        <Box sx={{ bgcolor: '#F0F7FF', height:{ xs: '45vh', md: '60vh' } ,borderRadius:'5px',justifyContent:'center',textAlign:'center',alignItems:'center',display: 'flex', }} >
            <Box>
            <Typography variant='h4'>Collaboration</Typography>
            <Typography sx={{fontSize:'18px',color:'#616161',paddingTop:'6px',}}>Excited about a potential partnership or collaboration? </Typography>
            <Typography sx={{fontSize:'18px',color:'#616161',paddingTop:'2px',paddingBottom:'1rem'}}>Share your ideas with us – we're eager to explore the possibilities! </Typography>
            <Fab variant="extended" sx={{backgroundColor:'white',textTransform:'lowercase',fontSize:'16px'}}>
            <NavigationIcon sx={{ mr: 1 }} />
            mentoring@techpact.org
            </Fab>
            </Box>
        </Box>
      </Container>

    </Container>

    <Footer/>

    
    </>
  )
}

export default ContactUs