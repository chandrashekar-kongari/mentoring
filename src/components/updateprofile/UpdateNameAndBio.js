import { Box, Button, FormControl, IconButton, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
const UpdateNameAndBio = ({handleClose,personalInfo,setPersonalInfo,handleSave}) => {
    const handleChange=(event)=>{
        const {name,value}=event.target
        setPersonalInfo({...personalInfo,[name]:value})
        

      }
      const [v,setV]=useState('')
      const [firstname,setFirstName]=useState('')
    const [lastname,setLastName]=useState('')

    const handleNameChange=(event)=>{
        const {name,value}=event.target
        if(name=='firstname'){
            setFirstName(value)
    
        }
        else if(name=='lastname'){
            setLastName(value)

        }
        
    }
    const handleSubmit = (e) => {
        e.preventDefault(); 
        handleSave()
        // You can add your form submission logic here
      };

  return (
    <form onSubmit={handleSubmit}>
        <Box sx={{justifyContent:'center'}}>
        <Stack sx={{flex:1,flexDirection:'row',justifyContent:'center',paddingBottom:'1rem',marginTop:'0px'}}>
            <Typography sx={{fontWeight:'bold',padding:'0px',margin:'0px'}}>Update Personal Information</Typography>
            </Stack>
   
            <IconButton onClick={handleClose} sx={{top:'0px', right:'0px',position:'absolute'}}><CloseIcon sx={{fontSize:'16px'}}/></IconButton>
        <Stack direction='column' >
        <FormControl variant="outlined" style={{paddingBottom:'1rem'}}>
                <InputLabel >First Name</InputLabel>
                <OutlinedInput
                required
                name='firstname'
                value={personalInfo.firstname}
                onChange={handleChange}
                   
                    type={'text'}
                    
                    label="First Name"
                />
                
                </FormControl>
        <FormControl variant="outlined" style={{paddingBottom:'1rem'}}>
                <InputLabel >Last Name</InputLabel>
                <OutlinedInput
                required
                name='lastname'
                value={personalInfo.lastname}
                onChange={handleChange}
                   
                    type={'text'}
                    
                    label="Last Name"
                />

                
                </FormControl>
                <textarea placeholder='Bio' required style={{maxWidth:'320px'}} name="additionalInformation" value={personalInfo.additionalInformation} onChange={handleChange} rows={4} cols={40}  />
                </Stack>
                <FormControl fullWidth>        
                    <Button type='submit' variant='contained' sx={{marginTop:'1rem'}}>Save</Button>
                </FormControl>
                </Box>
    </form>
  )
}

export default UpdateNameAndBio