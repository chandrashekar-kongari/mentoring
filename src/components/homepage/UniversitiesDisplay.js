import { Box, Card, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { CustomBox, MainHeadTypography } from '../newhomepage/PageComponents'

const UniversitiesDisplay = () => {
  return (
   <CustomBox>
     <Container maxWidth='md' sx={{position:'relative',top:'0rem',backgroundColor:'white',paddingBottom:'1rem',borderRadius:'2rem',borderBottom:'solid 2px #7e7f80'}} >
        

        <Stack sx={{flexDirection:'row',justifyContent:'center',display:'flex',flexWrap:'wrap'}}>
            <Box>

            <Typography variant='h4' sx={{paddingBottom:'1rem',textAlign:{xs:'left',md:'center'}}}>
            Participating Universities
          </Typography>

            </Box>
            <Box sx={{justifyContent:'space-between'}}>

                <img src='shu.png'/>
                <img src='boston.png'/>
                <img src='fordham.png'/>
                <img src='howard.svg'/>
                
            </Box>

        </Stack>



    </Container>
   </CustomBox>
  )
}

export default UniversitiesDisplay