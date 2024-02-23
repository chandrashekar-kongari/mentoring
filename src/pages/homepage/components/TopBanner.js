// import { Box, Chip, Container, Fab, Stack, Typography } from '@mui/material'
// import React from 'react'
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import {AnimatePresence, motion} from 'framer-motion'
// import { CustomActionButton, CustomBox, CustomPaddingBox, CustomTypography, MainHeadTypography } from '../../../components/page/PageComponents';
// import { useNavigate } from 'react-router-dom';

// const TopBanner = () => {
//   const navigate=useNavigate()
//   const onClickSignUp=()=>{
//     navigate('/signup')
//   }
//   return (

//     <CustomPaddingBox>
      
//       <Box sx={{paddingTop:'10rem',zIndex:'0', }}>
//     <Box sx={{backgroundImage:'url("herobg.svg")'}}>
//         <Stack sx={{justifyContent:'center'}}>
//             <Container maxWidth='md'  sx={{ justifyContent:'center',textAlign:'center'}}>
//             <Typography sx={{color:'#1976d2', fontSize:'50px',fontWeight:900, fontFamily:"'Inter', serif"}}>
//             <span style={{fontSize:'56px'}}>GROW</span> <span style={{fontSize:'56px',paddingLeft:'10px'}}>TOGETHER</span>
//         </Typography>

//         <Typography sx={{fontSize:'50px',fontWeight:900,fontFamily:"'Inter', serif"}}>
//             through 1:1 mentorship
//         </Typography>
       
        
//         <Box sx={{paddingTop:'1rem'}}>
//         <CustomTypography>
        
//         Achieve your goals as a mentee or mentor.      
//         </CustomTypography>
//         </Box>

//         <Box sx={{paddingTop:'1rem'}}>
//         <Fab onClick={onClickSignUp} variant="extended" color='primary' size='large' sx={{ marginTop:'1rem',fontWeight:'bold',zIndex:'1',textTransform:'none'}}>

// Sign Up Now
// <ChevronRightIcon sx={{ ml: 1 }} />
// </Fab>
//         </Box>
        
//             </Container>
       
//         </Stack>

//         <Stack sx={{ textAlign:'center', margin:'1rem',marginTop:'10rem', marginRight:'0px',backgroundColor:'#414756',borderRadius:'2rem',  display:'flex', flexWrap:'wrap'}}>
       
      

//         </Stack>
        
//         </Box>
        


        
//         <Box sx={{backgroundColor:'#FCFCFC'}}>
//         <CustomPaddingBox>
//         <Container maxWidth='lg' sx={{justifyContent:{xs:'left',md:'center'},textAlign:'center'}}>
//         <Container maxWidth='sm' sx={{}}>
       
    



  

//         <MainHeadTypography>
//          Meet Some Participants
//         </MainHeadTypography>
//         <Stack sx={{flexDirection:'row',justifyContent:'right'}}>

//         <img src='./poweredby.png' style={{width:'35%',height:'auto'}}/>
//         </Stack>
//         </Container>
//         <Box sx={{paddingTop:'5px'}}>
//         {/* <Typography variant='subtitle1' sx={{textAlign:{xs:'left',md:'center'}}}>
        
//          1000+ mentees and mentors joined the program.      
//         </Typography> */}
//         </Box>
       
//         <img style={{maxWidth:'90%',height:'auto',paddingTop:'1rem'}} src='./peoples2.png'/>
//         </Container>
//         </CustomPaddingBox>
//         </Box>
       

//     </Box>

//     </CustomPaddingBox>
    
//   )
// }

// export default TopBanner



import { Box, Chip, Container, Fab, Stack, Typography } from '@mui/material'
import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {AnimatePresence, motion} from 'framer-motion'
import { CustomActionButton, CustomBox, CustomPaddingBox, CustomTypography, MainHeadTypography } from '../../../components/page/PageComponents';
import { useNavigate } from 'react-router-dom';
import GridWithCards from './GridWithCards';
import HeroImg from './heroimg.png'
const TopBanner = () => {
  const navigate=useNavigate()
  const onClickSignUp=()=>{
    navigate('/signup')
  }
  return (

    <CustomPaddingBox>

<Box sx={{backgroundImage:'url("herobg.svg")',backgroundColor:'#FCFCFC',display: { xs: 'none', lg: 'flex' }}}>

<Stack sx={{flexDirection:'row',justifyContent:'space-between'}}>
  <Box sx={{paddingLeft:'5rem', alignItems:'center', textAlign:'center',justifyContent:'center',display:'flex'}}>
 
      <Stack sx={{paddingTop:'5rem'}}>
      <Typography sx={{textAlign:'left',fontSize:'60px', fontWeight:'400',wordSpacing:'2px'}}>
      Where people help people grow
      </Typography>
      
      <Box sx={{paddingTop:'1rem'}}>
      <Typography sx={{textAlign:'left',}}>
  
      Become a mentor or mentee today      
      </Typography>
      </Box>
      <Box sx={{paddingTop:'1rem',textAlign:'left'}}>
      <Fab onClick={onClickSignUp} variant="extended" color='primary' size='large' sx={{ borderRadius:'6px',padding:8, fontSize:'16px', marginTop:'1rem',fontWeight:'bold',zIndex:'1',textTransform:'none'}}>

      Sign Up Now
      <ChevronRightIcon sx={{ ml: 1 }} />
      </Fab>

      
      </Box>

      <Box sx={{paddingTop:'5rem',textAlign:'left',}}>
      <img src='poweredbyshu.svg' style={{margin:0,padding:0,justifyContent:'left', width:'200px',height:'auto',}}/>
      </Box>
     
      </Stack>
      
  </Box>

  <Box sx={{padding:'0',display: { xs: 'none', lg: 'flex' }}}>
    <img style={{ width:'auto',height:'90vh'}} src={HeroImg}/>
  </Box>
  </Stack>
  </Box>



<Box sx={{backgroundColor:'#FCFCFC',display: { xs: 'flex', lg: 'none' },paddingBottom:'2rem',paddingTop:'2rem',textAlign:'center',alignItems:'center',height:'80vh'}}>

<Stack sx={{flexDirection:'row',justifyContent:'center',marginX: 'auto'}}>
  <Box sx={{ alignItems:'center', textAlign:'center',justifyContent:'center'}}>
 
      <Stack sx={{textAlign:'center',}}>
      <Typography sx={{textAlign:'center',fontSize:'60px', fontWeight:'400'}}>
      Where people help people grow
      </Typography>
     
      <Box sx={{paddingTop:'1rem'}}>
      <Typography sx={{textAlign:'center',}}>
  
      Become a mentor or mentee today    
      </Typography>
      </Box>
      <Box sx={{paddingTop:'1rem',textAlign:'center'}}>
      <Fab onClick={onClickSignUp} variant="extended" color='primary' size='large' sx={{borderRadius:'6px',padding:8,fontSize:'16px', marginTop:'1rem',fontWeight:'bold',zIndex:'1',textTransform:'none'}}>

      Sign Up Now
      <ChevronRightIcon sx={{ ml: 1 }} />
      </Fab>
      </Box>
      <Box sx={{paddingTop:'2rem',textAlign:'center',}}>
      <img src='poweredbyshu.png' style={{margin:0,padding:0,justifyContent:'left', width:'200px',height:'auto',}}/>
      </Box>
      </Stack>
  </Box>

  
</Stack>
</Box>



      
      <Box sx={{paddingTop:'0',zIndex:'0', }}>
  
        
        <Box sx={{backgroundColor:'#FCFCFC',backgroundImage:'url("bgdots.svg")'}}>
        <CustomPaddingBox>
        <Container maxWidth='lg' sx={{justifyContent:{xs:'left',md:'center'},textAlign:'center'}}>
        <Container maxWidth='sm' sx={{}}>
       
  
        <Typography variant='h5'>
        Take The First Step
        </Typography>
        <Typography sx={{paddingBottom:'1rem',textTransform:'uppercase'}}>
        Be Among the First 50 Participants
        </Typography>
        {/* <Stack sx={{flexDirection:'row',justifyContent:'right'}}>

        <img src='./poweredby.png' style={{width:'35%',height:'auto'}}/>
        </Stack> */}
        </Container>
        <Box sx={{paddingTop:'5px'}}>
        {/* <Typography variant='subtitle1' sx={{textAlign:{xs:'left',md:'center'}}}>
        
         1000+ mentees and mentors joined the program.      
        </Typography> */}
        </Box>

        

        <GridWithCards/>
       
        {/* <img style={{maxWidth:'90%',height:'auto',paddingTop:'1rem'}} src='./peoples2.png'/> */}
        </Container>
        </CustomPaddingBox>
        </Box>

  
       

    </Box>

    </CustomPaddingBox>
    
  )
}

export default TopBanner