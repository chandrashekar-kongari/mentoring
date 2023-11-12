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
    <Container sx={{paddingTop:'100px',marginBottom:'2rem'}}>
        <Stack flexDirection={'column'} sx={{textAlign:'center'}}>
        <Typography sx={{fontSize:'48px',fontWeight:'bold',lineHeight:'56px',paddingBottom:'2rem',textAlign:'center'}}>
    Get guidance from experts
          </Typography>
        <Banner images={images} speed={50000} />
        </Stack>
    </Container>
  )
}

export default CompanyIconsDisplay