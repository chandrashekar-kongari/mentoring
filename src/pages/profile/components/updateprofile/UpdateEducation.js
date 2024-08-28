import { Box, Button, FormControl, IconButton, InputLabel, MenuItem, OutlinedInput, Select, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
const UpdateEducation = ({handleClose,edu,setEdu,handleSave}) => {
    
    const handleChange=(event)=>{
        const {name,value}=event.target
        setEdu({...edu,[name]:value})
        // dispatch(addEducation({...edu,[name]:value}))
    }



  return (

    <form>
    <Box sx={{justifyContent:'center'}}>
        
        <Stack sx={{flex:1,flexDirection:'row',justifyContent:'center',paddingBottom:'1rem',marginTop:'0px'}}>
        <Typography sx={{fontWeight:'bold',padding:'0px',margin:'0px'}}>Update Education</Typography>
        </Stack>

        <IconButton onClick={handleClose} sx={{top:'0px', right:'0px',position:'absolute'}}><CloseIcon sx={{fontSize:'16px'}}/></IconButton>

        <FormControl  fullWidth variant="outlined" style={{marginTop:8}}>
                <InputLabel >University</InputLabel>
                <OutlinedInput
                required
                
                name='university'
                value={edu.university}
                onChange={handleChange}
                   
                    type={'text'}
                    
                    label="University"
                    // placeholder='please share linkedin profile url'
                />

                
                </FormControl>
    {/* <FormControl sx={{ }} fullWidth style={{justifyContent:'center'}}>
        <InputLabel id="demo-simple-select-helper-label">University</InputLabel>
            <Select
            required
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={edu.university}
            name='university'
            label="University"
            onChange={handleChange}
            sx={{textAlign:'left'}}
            >
        <MenuItem value={'Sacred Heart University'}>Sacred Heart University</MenuItem>

        <MenuItem value={'Boston University'}>Boston University</MenuItem>
        <MenuItem value={'Johnson C. Smith University'}>Johnson C. Smith University</MenuItem>
        </Select>
   
  </FormControl> */}


  <FormControl sx={{marginTop:'1rem' }} fullWidth style={{justifyContent:'center'}}>
    <InputLabel id="demo-simple-select-helper-label">Degree</InputLabel>
    <Select
    required
      labelId="demo-simple-select-helper-label"
      id="demo-simple-select-helper"
      value={edu.degree}
      name='degree'
      label="Degree"
      onChange={handleChange}
      sx={{textAlign:'left'}}
    >

      <MenuItem value={'Associate​'}>Associate​</MenuItem>
      <MenuItem value={'Bachelor'}>Bachelor</MenuItem>
      <MenuItem value={'Master'}>Master</MenuItem>
      <MenuItem value={'Doctorate'}>Doctorate</MenuItem>
     
    </Select>
   
  </FormControl>
  <FormControl sx={{marginTop:'1rem' }} fullWidth style={{justifyContent:'center'}}>
    <InputLabel id="demo-simple-select-helper-label">Field of study</InputLabel>
    <Select
    required
      labelId="demo-simple-select-helper-label"
      id="demo-simple-select-helper"
      value={edu.fieldofstudy}
      name='fieldofstudy'
      label="Field of study"
      onChange={handleChange}
      sx={{textAlign:'left'}}
    >

      <MenuItem value={'Computer Science'}>Computer Science</MenuItem>
      <MenuItem value={'Engineering'}>Engineering</MenuItem>
      <MenuItem value={'Information Technology'}>Information Technology</MenuItem>
      <MenuItem value={'Data Science'}>Data Science</MenuItem>
      <MenuItem value={'Cyber Security'}>Cyber Security</MenuItem>
      <MenuItem value={'Other'}>Other</MenuItem>
    </Select>

    <Button onClick={handleSave} variant='contained' sx={{marginTop:'1rem'}}>Save</Button>
   
  </FormControl>
  

    </Box>
</form>
  )
}

export default UpdateEducation