import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react'
import { Banner } from './Banner';

const CompanyIconsDisplay = () => {
    const images = [
        "deloitte.png",
        "estee_lauder.png",
        "ralphlauren.svg",
        "cummins.png",
        "techpact-logo.png",
        "novant_health.png"
      ].map((image) => ({
        id: crypto.randomUUID(),
        image
      }));
  return (
    <Container sx={{paddingTop:'3rem',marginBottom:'2rem'}}>
        <Stack flexDirection={'column'} sx={{textAlign:'center'}}>
        
        <Typography variant='h4' sx={{fontWeight:'bold',color:'#7e7f80',paddingTop:'1rem',paddingBottom:'1rem'}}>Learn From Experts </Typography>
        <Banner images={images} speed={50000} />
        </Stack>
    </Container>
  )
}

export default CompanyIconsDisplay