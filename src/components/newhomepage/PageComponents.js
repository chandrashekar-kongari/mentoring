import { Box, Fab, Typography } from '@mui/material'
import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
export const MainHeadTypography = ({children}) => {
  return (
    <Typography sx={{fontFamily:'Inter',fontSize:'35px',fontWeight:'bold',lineHeight:'56px',paddingBottom:'1rem',textAlign:'center',}}>
        {children}
    </Typography>
  )
}

export const SubHeadTypography = ({children}) => {
    return (
      <Typography>
          {children}
      </Typography>
    )
  }
  export const CustomBox = ({children}) => {
    return (
      <Box sx={{paddingTop:'8rem'}}>
          {children}
      </Box>
    )
}

export const CustomActionButton = ({children}) => {
    return (
        <Fab component={motion.div}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.1 }
        }}
        whileTap={{ scale: 0.9 }} variant="extended" size='large' color="primary" sx={{marginTop:'1rem',fontWeight:'bold',zIndex:'1',textTransform:'none'}}>
      
      {children}
      <ChevronRightIcon sx={{ ml: 1 }} />
      </Fab>
    )
}

export const CustomTypography = ({children,style}) => {
    return (
      <Typography sx={[{fontFamily:'Inter',fontSize:'16px',lineHeight:'22px',fontWeight:'400'},style]}>
          {children}
      </Typography>
    )
}




