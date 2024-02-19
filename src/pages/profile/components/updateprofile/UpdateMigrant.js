import { Box, Button, FormControl, IconButton, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
const UpdateMigrant = ({handleClose,migrant,setMigrant,handleSave}) => {
    
    const handleChange=(event)=>{
        const {name,value}=event.target
        setMigrant(value)
   
    }
  return (
    <form>
        <Box sx={{justifyContent:'center',minHeight:250}}>
            
            <Stack sx={{flex:1,flexDirection:'row',justifyContent:'center',paddingBottom:'1rem',marginTop:'0px'}}>
            <Typography sx={{fontWeight:'bold',padding:'0px',margin:'0px'}}>More About Me</Typography>
            </Stack>
   
            <IconButton onClick={handleClose} sx={{top:'0px', right:'0px',position:'absolute'}}><CloseIcon sx={{fontSize:'16px'}}/></IconButton>

        <FormControl sx={{ }} fullWidth style={{justifyContent:'center'}}>
            <InputLabel id="demo-simple-select-helper-label">Migrant</InputLabel>
                <Select
                required
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={migrant}
                name='migrant'
                label="Migrant"
                onChange={handleChange}
                sx={{textAlign:'left'}}
                >
            <MenuItem value={'Yes'}>Yes</MenuItem>
            <MenuItem value={'No'}>No</MenuItem>
            <MenuItem value={'Prefer not to specify'}>Prefer not to specify</MenuItem>
            </Select>
       

   
      
        
       
      </FormControl>
      
      
        </Box>
        <Button fullWidth onClick={handleSave} variant='contained' sx={{marginTop:'1rem',}}>Save</Button>
    </form>
  )
}

export default UpdateMigrant