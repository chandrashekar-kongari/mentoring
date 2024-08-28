import { Box, Button, FormControl,FormControlLabel,Checkbox, IconButton, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
const UpdateSixplus = ({handleClose,sixtyplus,setSixtyplus,handleSave}) => {
    
    const handleChange=(val)=>{
      
        setSixtyplus(val)
   
    }
  return (
    <form>
        <Box sx={{justifyContent:'center',minHeight:250}}>
            
            <Stack sx={{flex:1,flexDirection:'row',justifyContent:'center',paddingBottom:'1rem',marginTop:'0px'}}>
            <Typography sx={{fontWeight:'bold',padding:'0px',margin:'0px'}}>More About Me</Typography>
            </Stack>
   
            <IconButton onClick={handleClose} sx={{top:'0px', right:'0px',position:'absolute'}}><CloseIcon sx={{fontSize:'16px'}}/></IconButton>

        {/* <FormControl sx={{ }} fullWidth style={{justifyContent:'center'}}>
            <InputLabel id="demo-simple-select-helper-label">60+</InputLabel>
                <Select
                required
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={sixtyplus}
                name='sixtyplus'
                label="60+"
                onChange={handleChange}
                sx={{textAlign:'left'}}
                >
            <MenuItem value={'Yes'}>Yes</MenuItem>
            <MenuItem value={'No'}>No</MenuItem>
            <MenuItem value={'Prefer not to specify'}>Prefer not to specify</MenuItem>
            </Select>
       
      </FormControl>
       */}
         <Stack >
         <FormControlLabel  name='ability' onChange={()=>handleChange('16-25')} control={<Checkbox size='small' checked={sixtyplus=='16-25'} sx={{}}/>} sx={{fontSize:'10px'}}  label={<Typography variant="body2">16-25</Typography>} />
        <FormControlLabel  name='ability' onChange={()=>handleChange('26-35')} control={<Checkbox size='small' checked={sixtyplus=='26-35'} sx={{}}/>} sx={{fontSize:'10px'}}  label={<Typography variant="body2">26-35</Typography>} />
        <FormControlLabel  name='ability' onChange={()=>handleChange('36-45')} control={<Checkbox size='small' checked={sixtyplus=='36-45'} sx={{}}/>} sx={{fontSize:'10px'}}  label={<Typography variant="body2">36-45</Typography>} />
        <FormControlLabel  name='ability' onChange={()=>handleChange('45-55')} control={<Checkbox size='small' checked={sixtyplus=='45-55'} sx={{}}/>} sx={{fontSize:'10px'}}  label={<Typography variant="body2">46-55</Typography>} />
        <FormControlLabel  name='ability' onChange={()=>handleChange('56-65')} control={<Checkbox size='small' checked={sixtyplus=='56-65'} sx={{}}/>} sx={{fontSize:'10px'}}  label={<Typography variant="body2">56-65</Typography>} />
        <FormControlLabel  name='ability' onChange={()=>handleChange('66+')} control={<Checkbox size='small' checked={sixtyplus=='66+'} sx={{}}/>} sx={{fontSize:'10px'}}  label={<Typography variant="body2">66+</Typography>} />

    

         </Stack>
        </Box>
        <Button fullWidth onClick={handleSave} variant='contained' sx={{marginTop:'1rem',}}>Save</Button>
    </form>
  )
}

export default UpdateSixplus