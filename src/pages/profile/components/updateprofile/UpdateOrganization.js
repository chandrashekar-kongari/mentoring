import { Box, Button, Checkbox, FormControl, FormControlLabel, IconButton, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { faL } from '@fortawesome/free-solid-svg-icons';
const UpdateOrganization = ({handleClose,organization,setOrganization,handleSave}) => {


    const handleChange=(event)=>{
        const {name,value}=event.target
        setOrganization(value)
        

      }
      const [v,setV]=useState('')


   
    const handleSubmit = (e) => {
        e.preventDefault(); 
        handleSave()
        // You can add your form submission logic here
      };


  const [abilityNotToSpecify,setAbilityNotToSpecify]=useState(false)

  return (
    <form onSubmit={handleSubmit}>
        <Box sx={{justifyContent:'center'}}>
        <Stack sx={{flex:1,flexDirection:'row',justifyContent:'center',paddingBottom:'1rem',marginTop:'0px'}}>
            <Typography sx={{fontWeight:'bold',padding:'0px',margin:'0px'}}>Organization: </Typography>
            </Stack>
   
            <IconButton onClick={handleClose} sx={{top:'0px', right:'0px',position:'absolute'}}><CloseIcon sx={{fontSize:'16px'}}/></IconButton>
        <Stack direction='column' >
        
        
        <FormControl variant="outlined" style={{paddingBottom:'1rem'}}>
                <InputLabel >Organization</InputLabel>
                <OutlinedInput
                required
                name='organization'
                value={organization}
                onChange={handleChange}
                   
                    type={'text'}
                    
                    label="First Name"
                />
                
                </FormControl>
                
                {/* <FormControlLabel  name='ability' onChange={()=>{}} control={<Checkbox size='small' checked={false} sx={{}}/>} sx={{fontSize:'10px'}}  label={<Typography variant="body2">Prefer not to specify" or "Not applicable"</Typography>} /> */}

                </Stack>
                <FormControl fullWidth>        
                    <Button type='submit' variant='contained' sx={{marginTop:'1rem'}}>Save</Button>
                </FormControl>
                </Box>
    </form>
  )
}

export default UpdateOrganization