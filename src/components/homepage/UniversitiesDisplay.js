import { Box, Card, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { CustomBox, MainHeadTypography } from '../newhomepage/PageComponents'

const UniversitiesDisplay = () => {
  return (
   <CustomBox>
     <Container maxWidth='lg' sx={{position:'relative',top:'0rem',backgroundColor:'white',paddingBottom:'1rem',borderBottom:'solid 2px #7e7f80'}} >
        

        <Stack sx={{flexDirection:'row',justifyContent:'center',display:'flex',flexWrap:'wrap'}}>
            <Box>

            <Typography variant='h4' sx={{paddingBottom:'1rem',textAlign:{xs:'left',md:'center'}}}>
            Participating Universities
          </Typography>

            </Box>
            <Box sx={{justifyContent:'space-between'}}>

                <img src='sacred-heart-university-logo.png' style={{width:'auto',height:'100px'}}/>
                <img src='boston-university-logo.png' style={{width:'auto',height:'80px'}}/>
                <img src='fordham-university-logo.png' style={{width:'auto',height:'100px'}}/>
                <img src='howard-university-logo.png' style={{width:'auto',height:'80px'}}/>
                
            </Box>

        </Stack>



    </Container>
   </CustomBox>
  )
}

export default UniversitiesDisplay