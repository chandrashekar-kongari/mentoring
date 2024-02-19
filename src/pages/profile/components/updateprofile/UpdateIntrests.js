import { FormControl } from '@mui/base'
import { Box, Button, Chip, IconButton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
const UpdateIntrests = ({handleClose,intrests,setIntrests,handleSave}) => {

    
      const handleSelect=(title)=>{
        const intr=intrests.map((intr) =>
        intr.title === title
              ? { ...intr, selected: !intr.selected }
              : intr
          )
    
          setIntrests(intr)}
  return (
    <form>
        <Stack sx={{flex:1,flexDirection:'column',textAlign:'center',paddingBottom:'1rem',marginTop:'0px'}}>
            <Typography sx={{fontWeight:'bold',padding:'0px',margin:'0px'}}>Update Interests</Typography>
            <Typography sx={{fontSize:'11px'}}>(Click to select and deselect)</Typography>
            </Stack>
            
   
            
            <IconButton onClick={handleClose} sx={{top:'0px', right:'0px',position:'absolute'}}><CloseIcon sx={{fontSize:'16px'}}/></IconButton>
    
        <FormControl sx={{ }}>
        <Box>
          {intrests.map((intrest,index) => (
           
            
            
              <Chip sx={{margin:'1px',fontSize:'11px',marginBottom:'2px'}} label={intrest.title} color="primary" variant={intrest.selected?'solid':'outlined'} onClick={()=>handleSelect(intrest.title)} />
            
          ))}
          </Box>

          
          

      </FormControl>

      <Button fullWidth onClick={handleSave} variant='contained' sx={{marginTop:'1rem'}}>Save</Button>

    </form>
  )
}

export default UpdateIntrests