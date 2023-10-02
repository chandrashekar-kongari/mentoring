import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, FormLabel, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AreaOfIntrests from './AreaOfIntrests';
import AreaOfIntrestsForMentors from './AreaOfIntrestsForMentor';
import AreaOfIntrestsForMentee from './AreaOfIntrestsForMentee';
import { useSelector,useDispatch } from 'react-redux';
import { setMentee,setMentor } from '../../features/UserSlice';
const PurposeInformation = ({step,handleNext}) => {
   
    const dispatch=useDispatch()
    const onSelectMentor=()=>{
        const val=mentorSelected
        setMentorSelected(!val)
        dispatch(setMentor(!val))

        const val2=menteeSelected
        setMenteeSeleceted(false)
        dispatch(setMentee(false))
    }
    const onSelectMentee=()=>{
        const val2=menteeSelected
        setMenteeSeleceted(!val2)
        dispatch(setMentee(!val2))

        const val=mentorSelected
        setMentorSelected(false)
        dispatch(setMentor(false))
    }


    const [mentorSelected,setMentorSelected]=useState(false)
    const [menteeSelected,setMenteeSeleceted]=useState(false)

  return (
    <>{
        step==2?<Stack direction='column'sx={{}} >
           
            <Typography sx={{fontSize:'16px',width:'100%'}}>

            I would like to be a?


            </Typography>
           
            <Container sx={{marginTop:'3px',padding:0,width:'100%'}}>
            <Stack sx={{flexDirection:'row',justifyContent:'space-between'}}>
                <FormControlLabel name='mentor' onChange={onSelectMentor} control={<Checkbox checked={mentorSelected} />} label="Mentor" />
                <FormControlLabel name='mentee' onChange={onSelectMentee} control={<Checkbox checked={menteeSelected} />} label="Mentee" />
            </Stack>
           
            {mentorSelected && <AreaOfIntrestsForMentors/>}
            {menteeSelected && <AreaOfIntrestsForMentee/>}
      
            {menteeSelected && <Container >
                          <Button onClick={handleNext} sx={{fontSize:'10px',marginTop:'10px',color:'black',textDecoration:'underline',textTransform:'none'}}>I am not sure skip to next step.</Button>
                </Container>}
            </Container>
           
            

               
        </Stack>:''
    }
    </>
  )
}

export default PurposeInformation