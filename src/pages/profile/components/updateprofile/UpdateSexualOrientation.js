import { Box, Button, FormControl, FormGroup, IconButton, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Checkbox, FormControlLabel, Grid } from '@mui/material';

const UpdateSexualOrientation = ({handleClose,sexualOrientation,setSexualOrientation,handleSave,sexualOrientationLocalState}) => {

    useEffect(()=>{
        setSexualOrientation(sexualOrientation)

    },[])
    
    const handleChange=(event)=>{
        const {name,value}=event.target

        if(sexualOrientationLocalState.includes(value)){
            const newArray = sexualOrientationLocalState.filter(item => item !== value);
            setSexualOrientation(newArray)
        }
        else{
            setSexualOrientation([...sexualOrientationLocalState, value])
        }
        // dispatch(addEducation({...edu,[name]:value}))
    }
    const checkboxes = [
        { label: 'Black/African-American', value: 'black' },
        { label: 'East Asian', value: 'eastAsian' },
        { label: 'Hispanic/Latinx', value: 'latinx' },
        { label: 'Middle Eastern', value: 'middleEastern' },
        { label: 'Native American/Alaska Native/First Nations', value: 'nativeAmerican' },
        { label: 'South Asian', value: 'southAsian' },
      ];
      const handleClick=()=>{
       
      }
  return (
    <form>
        <Box sx={{justifyContent:'center',minHeight:250}}>
            
            <Stack sx={{flex:1,flexDirection:'row',justifyContent:'center',paddingBottom:'1rem',marginTop:'0px'}}>
            <Typography sx={{fontWeight:'bold',padding:'0px',margin:'0px'}}>More About Me</Typography>
            </Stack>
   
            <IconButton onClick={handleClose} sx={{top:'0px', right:'0px',position:'absolute'}}><CloseIcon sx={{fontSize:'16px'}}/></IconButton>
            <Typography sx={{fontWeight:'bold'}}>Sexual Orientation: </Typography>
            <FormGroup>
            <FormControlLabel control={<Checkbox onChange={handleChange} checked={sexualOrientationLocalState.includes('Asexual​')}/>} value={"Asexual​"} label="Asexual​" />
            <FormControlLabel  control={<Checkbox onChange={handleChange} checked={sexualOrientationLocalState.includes('Bisexual​')}/>} value={"Bisexual​"} label="Bisexual​" />
            <FormControlLabel control={<Checkbox onChange={handleChange} checked={sexualOrientationLocalState.includes('Gay​')}/>} value={"Gay​"} label="Gay​" />
            <FormControlLabel control={<Checkbox  onChange={handleChange} checked={sexualOrientationLocalState.includes('Heterosexual or straight​')}/>} value={"Heterosexual or straight​"} label="Heterosexual or straight​" />
            <FormControlLabel  control={<Checkbox onChange={handleChange} checked={sexualOrientationLocalState.includes('Lesbian​')}/>} value={"Lesbian​"} label="Lesbian​" />
            <FormControlLabel  control={<Checkbox onChange={handleChange} checked={sexualOrientationLocalState.includes('Pansexual')}/>} value={"Pansexual"} label="Pansexual" />
            <FormControlLabel  control={<Checkbox onChange={handleChange} checked={sexualOrientationLocalState.includes('Queer​')}/>} value={"Queer​"} label="Queer​" />

            
            <FormControlLabel control={<Checkbox onChange={handleChange} checked={sexualOrientationLocalState.includes('Prefer not to specify')}/>} value={"Prefer not to specify"} label="Prefer not to specify" />
            </FormGroup>
      
      
        </Box>
        <Button fullWidth onClick={handleSave} variant='contained' sx={{marginTop:'1rem',}}>Save</Button>
    </form>
  )
}

export default UpdateSexualOrientation