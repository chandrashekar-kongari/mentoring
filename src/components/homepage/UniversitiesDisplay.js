import { Box, Card, Container, Stack, Typography } from '@mui/material'
import React from 'react'

const UniversitiesDisplay = () => {
  return (
    <Container maxWidth='md' sx={{position:'relative',top:'0rem',backgroundColor:'white',padding:'2rem',borderRadius:'2rem',borderBottom:'solid 2px #7e7f80'}} >
        

        <Stack sx={{flexDirection:'row',justifyContent:'center',display:'flex',flexWrap:'wrap'}}>
            <Box>
            <Typography variant='h4' sx={{fontWeight:'bold',color:'#7e7f80',paddingTop:'1rem',paddingBottom:'1rem'}}>Partner with  </Typography>

            </Box>
            <Box sx={{justifyContent:'space-between'}}>

                <img src='shu.png'/>
                <img src='boston.png'/>
                <img src='fordham.png'/>
                <img src='howard.svg'/>
                
            </Box>

        </Stack>



    </Container>
  )
}

export default UniversitiesDisplay