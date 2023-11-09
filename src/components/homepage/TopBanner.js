import { Box, Chip, Container, Fab, Stack, Typography } from '@mui/material'
import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {AnimatePresence, motion} from 'framer-motion'
const TopBanner = () => {
  return (
    <Box sx={{paddingTop:'12rem',paddingBottom:'10rem',backgroundRepeat: 'no-repeat',zIndex:'0'}}>

        <Stack sx={{justifyContent:'center'}}>
            <Container maxWidth='md'  sx={{ justifyContent:'center',textAlign:'center'}}>
            {/* <Typography sx={{fontSize:'14px',paddingBottom:'1rem'}}>
            No need to struggle alone anymore.
            </Typography> */}

            <Chip  icon={<PlayArrowIcon/>} label={"Create account, Next program start's from Jan 1st 2024"}/>
            <Typography sx={{fontSize:'50px',fontWeight:900}}>
            Unlocking your full potential with 1:1 MENTORSHIP
        </Typography>

        <Typography sx={{fontSize:'18px',paddingBottom:'1rem',fontWeight:'bold',paddingTop:'5px'}}>
        Take help from mentor to achieve your goals.        
        </Typography>

        <Fab component={motion.div}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.1 }
          }}
          whileTap={{ scale: 0.9 }} variant="extended" size='large' color="primary" sx={{marginTop:'1rem',fontWeight:'bold',zIndex:'1',textTransform:'none'}}>
        
        Create an account
        <ChevronRightIcon sx={{ ml: 1 }} />
        </Fab>
        



            </Container>
       
        </Stack>


    </Box>
  )
}

export default TopBanner