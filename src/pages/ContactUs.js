import { Box, Chip, Container, Fab, Stack, Typography } from '@mui/material'
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
            <Stack spacing={2}>
            <Typography variant='h4'>Contact Us</Typography>
            <Chip variant="extended" size='medium' label="mentoring@techpact.org"  sx={{padding:2,cursor:'text', backgroundColor:'white',textTransform:'lowercase',fontSize:'16px',}}>

            
            </Chip>
            </Stack>
        </Box>
      </Container>

   

    </Container>

    <Footer/>

    
    </>
  )
}

export default ContactUs