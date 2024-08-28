import { Box, Card, CardContent, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { CustomBox, CustomPaddingBox, MainHeadTypography } from '../../../components/page/PageComponents'

const UniversitiesDisplay = () => {
  return (
    <Box sx={{ backgroundRepeat:'no-repeat', backgroundImage:`url('unibackgroungimg2-removebg.png')`,backgroundColor:'#616161'}}>
      <Box sx={{backgroundImage:"url('top2.svg')",height:'40px'}}>
   </Box>
      <Box sx={{}}>
      
   <CustomPaddingBox>
     <Container maxWidth='lg' sx={{position:'relative',top:'0rem', }} >
        

        <Stack sx={{justifyContent:'center',display:'flex',flexWrap:'wrap'}}>
            <Box sx={{paddingBottom:'1rem'}}>

            {/* <MainHeadTypography>
            We Serve Future Technologists
          </MainHeadTypography> */}
          <Typography variant='h5'  sx={{color:'white',fontWeight:'bold',lineHeight:'56px',paddingBottom:'1rem',textAlign:'center',}}>We Serve Future Technologists</Typography>

            </Box>


            <Stack spacing={3} sx={{alignItems: 'center',flexDirection:'row',display:'flex',flexWrap:'wrap', justifyContent:'space-evenly'}}>
            <Card elevation={4} sx={{backgroundColor:'#FCFCFC',margin:'1rem', alignItems: 'center',height:'100px', width: '300px', display: 'flex', justifyContent: 'center' }}>
            <CardContent>
              <img src='sacred-heart-university-logo2.png' style={{ width: 'auto', height: '50px', padding: '1rem' }} />
            </CardContent>
          </Card>

          <Card elevation={4} sx={{backgroundColor:'#FCFCFC',margin:'1rem', alignItems: 'center',height:'100px', width: '300px', display: 'flex', justifyContent: 'center' }}>
            <CardContent>
            <img src='boston-university-logo.png' style={{width:'auto',height:'60px'}}/>
            </CardContent>
          </Card>
          <Card elevation={4} sx={{backgroundColor:'#FCFCFC',margin:'1rem', alignItems: 'center',height:'100px', width: '300px', display: 'flex', justifyContent: 'center' }}>
            <CardContent>
            <img src='jcsu-logo.png' style={{width:'auto',height:'65px'}}/>
            </CardContent>
          </Card>
         

             
                
                
            </Stack>
            
            

        </Stack>
        



    </Container>
   </CustomPaddingBox>
   </Box>
  
   
   </Box>
  )
}

export default UniversitiesDisplay