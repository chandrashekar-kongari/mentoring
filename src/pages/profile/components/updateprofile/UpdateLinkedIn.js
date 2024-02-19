import { Box, Button, FormControl, IconButton, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
const UpdateLinkedIn = ({handleClose,linkedIn,setLinkedIn,handleSave}) => {
    const [linkedinProfile,setLinkedinProfile]=useState('')

    const handleLinkedinProfile=(event)=>{
        const {name,value}=event.target
        setLinkedIn(value)

    }
  return (
    <form onSubmit={handleSave}>
         <Box sx={{justifyContent:'center'}}>
        <Stack sx={{flex:1,flexDirection:'row',justifyContent:'center',paddingBottom:'1rem',marginTop:'0px'}}>
            <Typography sx={{fontWeight:'bold',padding:'0px',margin:'0px'}}>Update Linkedin profile</Typography>
            </Stack>
   
            <IconButton onClick={handleClose} sx={{top:'0px', right:'0px',position:'absolute'}}><CloseIcon sx={{fontSize:'16px'}}/></IconButton>
        <FormControl  fullWidth variant="outlined" style={{}}>
                <InputLabel >Linkedin profile link</InputLabel>
                <OutlinedInput
                required
                
                name='linkedin'
                value={linkedIn}
                onChange={handleLinkedinProfile}
                   
                    type={'text'}
                    
                    label="Linkedin profile link"
                    // placeholder='please share linkedin profile url'
                />

<Button type='submit' variant='contained' sx={{marginTop:'1rem'}}>Save</Button>

                </FormControl>
        </Box>
    </form>
  )
}

export default UpdateLinkedIn