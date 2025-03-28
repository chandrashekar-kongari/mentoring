import { Box, Button, FormControl, IconButton, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
const UpdatePhoneNumber = ({handleClose,phone,setPhone,handleSave}) => {


    const handleChange=(event)=>{
        const {value}=event.target
        setPhone(value)
      }
   
    const handleSubmit = (e) => {
        e.preventDefault(); 
        handleSave()
        setPhone(phone)
      };



  return (
    <form onSubmit={handleSubmit}>
        <Box sx={{justifyContent:'center'}}>
        <Stack sx={{flex:1,flexDirection:'row',justifyContent:'center',paddingBottom:'1rem',marginTop:'0px'}}>
            <Typography sx={{fontWeight:'bold',padding:'0px',margin:'0px'}}>Title: </Typography>
            </Stack>
   
            <IconButton onClick={handleClose} sx={{top:'0px', right:'0px',position:'absolute'}}><CloseIcon sx={{fontSize:'16px'}}/></IconButton>
        <Stack direction='column' >
        
        
        <FormControl variant="outlined" style={{paddingBottom:'1rem'}}>
                <InputLabel >Phone</InputLabel>
                <OutlinedInput
                
                name='phonenumber'
                value={phone}
                onChange={handleChange}
                   
                    type={'text'}
                    
                    label="Phone"
                />
                
                </FormControl>
                

                </Stack>
                <FormControl fullWidth>        
                    <Button type='submit' variant='contained' sx={{marginTop:'1rem'}}>Save</Button>
                </FormControl>
                </Box>
    </form>
  )
}

export default UpdatePhoneNumber