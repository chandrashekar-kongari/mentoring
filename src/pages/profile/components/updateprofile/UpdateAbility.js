import { Box, Button, FormControl, IconButton, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
const UpdateAbility = ({handleClose,ability,setAbility,handleSave}) => {
    const handleChange=(event)=>{
        const {name,value}=event.target
        setAbility(value)
        

      }
      const [v,setV]=useState('')


   
    const handleSubmit = (e) => {
        e.preventDefault(); 
        handleSave()
        // You can add your form submission logic here
      };

  return (
    <form onSubmit={handleSubmit}>
        <Box sx={{justifyContent:'center'}}>
        <Stack sx={{flex:1,flexDirection:'row',justifyContent:'center',paddingBottom:'1rem',marginTop:'0px'}}>
            <Typography sx={{fontWeight:'bold',padding:'0px',margin:'0px'}}>More about me</Typography>
            </Stack>
   
            <IconButton onClick={handleClose} sx={{top:'0px', right:'0px',position:'absolute'}}><CloseIcon sx={{fontSize:'16px'}}/></IconButton>
        <Stack direction='column' >
        
        
                <textarea placeholder='Ability' required style={{maxWidth:'320px'}} name="ability" value={ability} onChange={handleChange} rows={4} cols={40}  />
                </Stack>
                <FormControl fullWidth>        
                    <Button type='submit' variant='contained' sx={{marginTop:'1rem'}}>Save</Button>
                </FormControl>
                </Box>
    </form>
  )
}

export default UpdateAbility