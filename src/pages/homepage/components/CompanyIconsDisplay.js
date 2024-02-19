import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react'
import { Banner } from './Banner';
import { CustomBox, CustomPaddingBox, MainHeadTypography } from '../../../components/page/PageComponents';

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
    <CustomPaddingBox>
    <Box sx={{backgroundColor:'#FCFCFC'}}>
      <CustomPaddingBox>
      
      <Container sx={{}}>
        <Stack flexDirection={'column'} sx={{textAlign:'center'}}>
        <MainHeadTypography>
        Our Mentors Have Experience
          </MainHeadTypography>
        <Banner images={images} speed={50000} />
        </Stack>
    </Container>
    </CustomPaddingBox>
    </Box>
    <Box sx={{backgroundImage:"url('top.svg')",height:'40px'}}>

      </Box>
    </CustomPaddingBox>
  )
}

export default CompanyIconsDisplay