import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function MyComponent() {
  return (
    <>
    <Box
      display="flex"
      justifyContent="center" 
      
      sx={{opacity:1,width:'10px',height:'5rem',zIndex:1,position:'absolute',}} 
    >

        <img src='transparent-img3.jpeg' style={{width:'10px',height:'5rem'}}/>
    
      
    </Box>
    <Box
      display="flex"
      justifyContent="center" 
      
      sx={{opacity:0.8,width:'15px',height:'5rem',zIndex:1,position:'absolute',}} 
    >
    
    <img src='transparent-img3.jpeg'/>
    </Box>
    </>
  );
}

export default MyComponent;
