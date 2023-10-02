import { Box, Checkbox, Container, FormControl, FormControlLabel, InputLabel, MenuItem, OutlinedInput, Select, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addEducation,addResume, saveLinkedinProfile} from '../../features/UserSlice';
import { MuiFileInput } from 'mui-file-input'
import { styled } from 'styled-components'
import './education.css'



const Education = ({step}) => {
  const MuiFileInputStyled = styled(MuiFileInput)`
  & input + span {
    color: red;
  }
 
`
  const [value, setValue] = React.useState(null)

  const handleFileChange = (newValue) => {
    setValue(newValue)

    console.log(newValue)
    dispatch(addResume(newValue))
  }


    const dispatch=useDispatch()

    const [edu,setEdu]=useState({
        university:'',
        degree:'',
        fieldofstudy:'',
    })

    const [res,setRes]=useState()

    const handleChange=(event)=>{
        const {name,value}=event.target
        setEdu({...edu,[name]:value})
        dispatch(addEducation({...edu,[name]:value}))
    }

    const handleResumeUpload=(event)=>{
        const {name,files}=event.target
        setRes(files[0])
        dispatch(addResume(files[0]))
    }

    const [role,setRole]=useState()
    const val=useSelector(state=>state.mentee)
    useEffect(()=>{
      setRole(val)
      
    })

    const [resumeUpload,setResumeUpload]=useState(false)
    const [linkedinShare,setLinkedinShare]=useState(false)

    const handleResumeUploadFlag=()=>{
      const v=resumeUpload
      setResumeUpload(!v)
    }
    const handleLinkedinShareFlag=()=>{
      const v=linkedinShare
      setLinkedinShare(!v)
    }

    const [linkedinProfile,setLinkedinProfile]=useState('')

    const handleLinkedinProfile=(event)=>{
        const {name,value}=event.target
        setLinkedinProfile(value)
        dispatch(saveLinkedinProfile(value))
    }



  return (
    <>
    {step==5?<Container sx={{justifyContent:'center'}}>
        {role && <>
          <FormControl sx={{ }} fullWidth style={{justifyContent:'center'}}>
        <InputLabel id="demo-simple-select-helper-label">University</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={edu.university}
          name='university'
          label="University"
          onChange={handleChange}
          sx={{textAlign:'left'}}
        >
          <MenuItem value={'Sacred Heart University'}>Sacred Heart University</MenuItem>
          <MenuItem value={'Fordham University'}>Fordham University</MenuItem>
          <MenuItem value={'Howard University'}>Howard University</MenuItem>
          <MenuItem value={'Boston University'}>Boston University</MenuItem>
        </Select>
       
      </FormControl>
      <FormControl sx={{marginTop:'1rem' }} fullWidth style={{justifyContent:'center'}}>
        <InputLabel id="demo-simple-select-helper-label">Degree</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={edu.degree}
          name='degree'
          label="Degree"
          onChange={handleChange}
          sx={{textAlign:'left'}}
        >

          <MenuItem value={"Masters"}>Masters</MenuItem>
          <MenuItem value={'Bachelors'}>Bachelors</MenuItem>
         
        </Select>
       
      </FormControl>
      <FormControl sx={{marginTop:'1rem' }} fullWidth style={{justifyContent:'center'}}>
        <InputLabel id="demo-simple-select-helper-label">Field of study</InputLabel>
        <Select
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

        </Select>
       
      </FormControl></>}

      <Box sx={{paddingTop:'3px'}}>

      <FormControlLabel name='mentor' onChange={handleResumeUploadFlag} control={<Checkbox checked={resumeUpload} />} label="Do you have resume?" />

       
     
        {/* <Typography sx={{fontSize:'12px'}}>Please upload your resume</Typography> */}
        {/* <OutlinedInput sx={{border:'0px'}}
        
        
                name='resume'
               
                onChange={handleResumeUpload}
                   
                    type={'file'}
                    label=''
                    // multiline={true}
                    
                     fullWidth/> */}
        {resumeUpload && <MuiFileInput  hideSizeText value={value}   placeholder='Please upload resume' sx={{}} onChange={handleFileChange} />
}
        <FormControlLabel name='mentor' onChange={handleLinkedinShareFlag} control={<Checkbox checked={linkedinShare} />} sx={{}}  label="Do you have LinkedIn?" />
        {linkedinShare && <FormControl fullWidth variant="outlined" style={{paddingBottom:'1rem'}}>
                <InputLabel >Linkedin profile link</InputLabel>
                <OutlinedInput
                name='firstname'
                value={linkedinProfile}
                onChange={handleLinkedinProfile}
                   
                    type={'text'}
                    
                    label="Linkedin profile link"
                    // placeholder='please share linkedin profile url'
                />
                
                </FormControl>}
      </Box>
        

    </Container>:''}
    </>
  )
}

export default Education