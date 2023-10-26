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
const PurposeInformation = ({step,handleNext,handleSkip}) => {
   
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
    const handleOptionsChange = (event) => {
        setOptions({ ...options, [event.target.name]: event.target.checked });
      };
      const [options, setOptions] = useState({
        option1: false,
        option2: false,
        option3: false,
      });


  return (
    <>{
        step==2?<Stack direction='column'sx={{}} >
           
            
           
            <Box sx={{padding:0,width:'100%'}}>
            <Typography id="demo-multiple-chip-label" sx={{fontSize:'14px',width:'100%'}}>

            I would like to be a?


            </Typography>
            <Stack sx={{flexDirection:'row',justifyContent:'space-between'}}>
                <FormControlLabel required name='mentor' onChange={onSelectMentor} control={<Checkbox checked={mentorSelected} />} label="Mentor" />
                <FormControlLabel required name='mentee' onChange={onSelectMentee} control={<Checkbox checked={menteeSelected} />} label="Mentee"  />
            </Stack>
            
           
            {mentorSelected && <AreaOfIntrestsForMentors/>}
            {menteeSelected && <AreaOfIntrestsForMentee/>}
      
            {menteeSelected && <Container >
                          <Button onClick={handleSkip} sx={{fontSize:'10px',marginTop:'10px',color:'black',textDecoration:'underline',textTransform:'none'}}>I am not sure skip to next step.</Button>
                </Container>}
            </Box>
           
            

               
        </Stack>:''
    }
    </>
  )
}

export default PurposeInformation