import { Box, Button, FormControl, IconButton, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { MuiFileInput } from 'mui-file-input';
const UpdateResume = ({handleClose}) => {
  const [value, setValue] = useState(null)

  const handleFileChange = (newValue) => {
    setValue(newValue)
    console.log(value)

    console.log(newValue)
    
  }
  return (
    <form>
         <Box sx={{justifyContent:'center'}}>
        <Stack sx={{flex:1,flexDirection:'row',justifyContent:'center',paddingBottom:'1rem',marginTop:'0px'}}>
            <Typography sx={{fontWeight:'bold',padding:'0px',margin:'0px'}}>Update Resume</Typography>
            </Stack>
   
            
            <IconButton onClick={handleClose} sx={{top:'0px', right:'0px',position:'absolute'}}><CloseIcon sx={{fontSize:'16px'}}/></IconButton>
            <MuiFileInput  hideSizeText value={value}   placeholder='Please upload resume' sx={{}} onChange={handleFileChange} />

        <FormControl  fullWidth variant="outlined" style={{}}>
                

<Button onClick={()=>{}} variant='contained' sx={{marginTop:'1rem'}}>Save</Button>

                </FormControl>
        </Box>
    </form>
  )
}

export default UpdateResume