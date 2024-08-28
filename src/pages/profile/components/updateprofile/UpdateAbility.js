import { Box, Button, Checkbox, FormControl, FormControlLabel, IconButton, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { faL } from '@fortawesome/free-solid-svg-icons';
const UpdateAbility = ({handleClose,ability,setAbility,handleSave}) => {
    const handleChange=(val)=>{
        // const {name,value}=event.target
        setAbility(val)
        

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
            <Typography sx={{fontWeight:'bold',padding:'0px',margin:'0px'}}>More about me</Typography>
            </Stack>
   
            <IconButton onClick={handleClose} sx={{top:'0px', right:'0px',position:'absolute'}}><CloseIcon sx={{fontSize:'16px'}}/></IconButton>
        <Stack direction='column' >
        
        <Typography sx={{padding:'0px',margin:'0px'}}>Ability:</Typography>
                {/* <textarea placeholder='Ability' required style={{maxWidth:'320px'}} name="ability" value={ability} onChange={handleChange} rows={4} cols={40}  /> */}

                
                <FormControlLabel  name='ability' onChange={()=>handleChange('Yes')} control={<Checkbox size='small' checked={ability=='Yes'} sx={{}}/>} sx={{fontSize:'10px'}}  label={<Typography variant="body2">Yes</Typography>} />
                <FormControlLabel  name='ability' onChange={()=>handleChange('Prefer not to specify or not applicable')} control={<Checkbox size='small' checked={ability=='Prefer not to specify or not applicable'} sx={{}}/>} sx={{fontSize:'10px'}}  label={<Typography variant="body2">Prefer not to specify or not applicable</Typography>} />

                </Stack>
                <FormControl fullWidth>        
                    <Button type='submit' variant='contained' sx={{marginTop:'1rem'}}>Save</Button>
                </FormControl>
                </Box>
    </form>
  )
}

export default UpdateAbility