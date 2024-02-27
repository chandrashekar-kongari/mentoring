import { Box, Button, FormControl, FormGroup, IconButton, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Checkbox, FormControlLabel, Grid } from '@mui/material';

const UpdateRacial = ({handleClose,racial,setRacial,handleSave,racialLocalState}) => {

    useEffect(()=>{
        setRacial(racial)

    },[])
    
    const handleChange=(event)=>{
        const {name,value}=event.target

        if(racialLocalState.includes(value)){
            const newArray = racialLocalState.filter(item => item !== value);
            setRacial(newArray)
        }
        else{
            setRacial([...racialLocalState, value])
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
            <Typography sx={{fontWeight:'bold'}}>Racial/Ethnic Identities: </Typography>
            <FormGroup>
            <FormControlLabel control={<Checkbox onChange={handleChange} checked={racialLocalState.includes('American Indian or Alaskan Native​')}/>} value={"American Indian or Alaskan Native​"} label="American Indian or Alaskan Native​" />
            <FormControlLabel  control={<Checkbox onChange={handleChange} checked={racialLocalState.includes('Asian / Pacific Islander​')}/>} value={"Asian / Pacific Islander​"} label="Asian / Pacific Islander​" />
            <FormControlLabel control={<Checkbox onChange={handleChange} checked={racialLocalState.includes('Black or African American​')}/>} value={"Black or African American​"} label="Black or African American​" />
            <FormControlLabel control={<Checkbox  onChange={handleChange} checked={racialLocalState.includes('Hispanic')}/>} value={"Hispanic"} label="Hispanic" />
            <FormControlLabel  control={<Checkbox onChange={handleChange} checked={racialLocalState.includes('White / Caucasian​')}/>} value={"White / Caucasian​"} label="White / Caucasian​" />
            <FormControlLabel control={<Checkbox onChange={handleChange} checked={racialLocalState.includes('Other')}/>} value={"Other"} label="Other" />
            <FormControlLabel control={<Checkbox onChange={handleChange} checked={racialLocalState.includes('Prefer not to specify')}/>} value={"Prefer not to specify"} label="Prefer not to specify" />
            </FormGroup>
      
      
        </Box>
        <Button fullWidth onClick={handleSave} variant='contained' sx={{marginTop:'1rem',}}>Save</Button>
    </form>
  )
}

export default UpdateRacial