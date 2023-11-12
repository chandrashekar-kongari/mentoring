import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react'
import { Banner } from './Banner';
import { CustomBox, MainHeadTypography } from '../newhomepage/PageComponents';

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
    <CustomBox>
      <Container sx={{}}>
        <Stack flexDirection={'column'} sx={{textAlign:'center'}}>
        <MainHeadTypography >
    Get guidance from experts
          </MainHeadTypography>
        <Banner images={images} speed={50000} />
        </Stack>
    </Container>
    </CustomBox>
  )
}

export default CompanyIconsDisplay