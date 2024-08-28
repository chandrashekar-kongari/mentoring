import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, InputLabel, MenuItem, OutlinedInput, Select, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addEducation,addResume, saveLinkedinProfile,saveOrganization,savePrivacyPolicyResidentConsent,saveSkipResume, saveTitle} from '../../../../features/UserSlice';
import { MuiFileInput } from 'mui-file-input'
import { styled } from 'styled-components'
import './education.css'



const Education = ({step,handleNext,handleBack}) => {
  const MuiFileInputStyled = styled(MuiFileInput)`
  & input + span {
    color: red;
  }
 
`
  const [value, setValue] = React.useState(null)

  const handleFileChange = (newValue) => {
    setValue(newValue)

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
    const [linkedinShare,setLinkedinShare]=useState(true)

    const handleResumeUploadFlag=()=>{
      const v=resumeUpload
      setResumeUpload(!v)
      dispatch(saveSkipResume(!v))
    }
    const handleLinkedinShareFlag=()=>{
      const v=linkedinShare
      setLinkedinShare(!v)
    }

    const [linkedinProfile,setLinkedinProfile]=useState('')
    const [organization,setOrganization]=useState('')
    const [title,setTitle]=useState('')
    const [ppResidentConsent,setPPResidentConset]=useState(false)
    const handleLinkedinProfile=(event)=>{
        const {name,value}=event.target
        setLinkedinProfile(value)
        dispatch(saveLinkedinProfile(value))
    }
    const handleppResidentConsent=()=>{

      setPPResidentConset(!ppResidentConsent)
      dispatch(savePrivacyPolicyResidentConsent(!ppResidentConsent))
  }
    
    const handleOrganizationChange=(event)=>{
      const {name,value}=event.target
      setOrganization(value)
      dispatch(saveOrganization(value))
    }
    const handleTitleChange=(event)=>{
      const {name,value}=event.target
      setTitle(value)
      dispatch(saveTitle(value))
    }
    const handleSubmit = (e) => {
      e.preventDefault(); 
      handleNext()
      // You can add your form submission logic here
    };
    const goBack=()=>{
      handleBack()
    }


  return (
    <>
    {step==5?<form onSubmit={handleSubmit}><Box sx={{justifyContent:'center'}}>
        {role && <>

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
          <MenuItem value={'Fordham University'}>Fordham University</MenuItem>
          <MenuItem value={'Howard University'}>Howard University</MenuItem> 
          <MenuItem value={'Boston University'}>Boston University</MenuItem>
          <MenuItem value={'Johnson C. Smith University'}>Johnson C. Smith University</MenuItem>
        </Select>
       
      </FormControl>
      <Typography sx={{fontSize:'11px',pt:3}}>If your school is not listed, please email mentoring@techpact.org.</Typography> */}
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

          <MenuItem value={"Associate​"}>Associate​</MenuItem>
          <MenuItem value={"Bachelor​"}>Bachelor​</MenuItem>
          <MenuItem value={"Master​"}>Master​</MenuItem>
          <MenuItem value={"Doctorate"}>Doctorate</MenuItem>
          
         
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
          <MenuItem value={'Information Technology​'}>Information Technology​</MenuItem>
          <MenuItem value={'Data Science​'}>Data Science​</MenuItem>
          <MenuItem value={'Cyber Security​'}>Cyber Security​</MenuItem>
          <MenuItem value={'Other'}>Other</MenuItem>
 

        </Select>
       
      </FormControl></>}

      
      {(!role) && <>


        <FormControl  fullWidth variant="outlined" style={{marginTop:8}}>
                <InputLabel >Organization</InputLabel>
                <OutlinedInput
                required
               
                name='organization'
                value={organization}
                onChange={handleOrganizationChange}
                   
                    type={'text'}
                    
                    label="Organization"
                    // placeholder='please share linkedin profile url'
                />

                
                </FormControl>
                <FormControl  fullWidth variant="outlined" style={{marginTop:8}}>
                <InputLabel >Title</InputLabel>
                <OutlinedInput
                required
               
                name='Title'
                value={title}
                onChange={handleTitleChange}
                   
                    type={'text'}
                    
                    label="Title"
                    // placeholder='please share linkedin profile url'
                />

                
                </FormControl>

                
                


      
      </>}


      <Box sx={{paddingTop:'3px'}}>

      

       
     
        {/* <Typography sx={{fontSize:'12px'}}>Please upload your resume</Typography> */}
        {/* <OutlinedInput sx={{border:'0px'}}
        
        
                name='resume'
               
                onChange={handleResumeUpload}
                   
                    type={'file'}
                    label=''
                    // multiline={true}
                    
                     fullWidth/> */}
        <MuiFileInput  disabled={resumeUpload} hideSizeText value={value}   placeholder='Please upload resume(accepts only PDFs)*' sx={{marginTop:'1rem'}} onChange={handleFileChange} />
        <FormControlLabel  name='mentor' onChange={handleResumeUploadFlag} control={<Checkbox size='small' checked={resumeUpload} />} label={<Typography sx={{fontSize:'10px'}} variant="body2" >Add later</Typography>} />
        <FormControl  fullWidth variant="outlined" style={{marginTop:8}}>
                <InputLabel >LinkedIn Profile URL</InputLabel>
                <OutlinedInput
                required
                disabled={!linkedinShare}
                name='firstname'
                value={linkedinProfile}
                onChange={handleLinkedinProfile}
                   
                    type={'text'}
                    
                    label="Linkedin profile link"
                    // placeholder='please share linkedin profile url'
                />

                
                </FormControl>
                
                <FormControlLabel  name='mentor' onChange={handleLinkedinShareFlag} control={<Checkbox size='small' checked={!linkedinShare} sx={{}}/>} sx={{fontSize:'10px'}}  label={<Typography variant="body2" sx={{fontSize:'10px'}}>Add later</Typography>} />


                <FormControlLabel onChange={handleppResidentConsent} control={<Checkbox size='small' checked={ppResidentConsent} sx={{}}/>} sx={{}} labelPlacement='end' label={<Typography sx={{fontSize:'10px'}}>Due to data privacy requirements, our mentoring pilot is open only to residents of the United States. Please confirm you reside in the USA.</Typography>}/>

      </Box>
      <Stack sx={{flexDirection:'row',justifyContent:'space-between'}}>
                <Button onClick={goBack} variant="text"  type="submit" sx={{float:'right',color:'black'}}>
        Back
      </Button>
                <Button variant="text" color="primary" type="submit" sx={{float:'right'}}>
        Submit
      </Button>
                </Stack>
        

    </Box></form>:''}
    </>
  )
}

export default Education