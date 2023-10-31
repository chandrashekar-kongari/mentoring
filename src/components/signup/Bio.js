import { Box, Button, Container, FormControl, IconButton, Input, Stack, TextareaAutosize, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Model from './Model'
import { useSelector,useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { setAdditionaInformation } from '../../features/UserSlice';
const Bio = ({step,handleNext,handleBack}) => {

  const dispatch=useDispatch()



  const [experiences,setExperiences]=useState([])
  const [workExperience,setWorkExperience]=React.useState({
    title:'',
    company:'',
    startmonth:'',
    startyear:'',
    endmonth:'',
    endyear:'',
    skills:[],
    currentlyWorking:false
  })
  const exps=useSelector(state=>state.experience)
  const mentee=useSelector(state=>state.mentee)
  const [val,setVal]=useState('')
  useEffect(()=>{
    if(mentee){
      setVal('Would you like tell us anything more about yourself or your areas of interest?')

    }
    else{
      setVal('Would you like to add anything about your professional or personal life?')
    }
    setExperiences(exps)
    console.log(exps)
  },[mentee])

  const handleChange=(event)=>{
    const {name,value}=event.target
    setV(value)
    dispatch(setAdditionaInformation(value))
  }
  const [v,setV]=useState('')
  const handleSubmit=(e)=>{
    e.preventDefault(); 
    handleNext()

  }
  return (
    <>
    {step==4?<Box style={{ }}>


        <Stack sx={{flexDirection:'column',display:'flex',width:'100%'}}>
                    <Box sx={{flex:1,flexDirection:'column',display:'flex',justifyContent:'center',textAlign:'center',paddingRight:'2px'}}>
                        <Typography sx={{fontSize:'12px'}}>{val}</Typography>
                    </Box>
                    <Box>
                      
                    </Box>
                    {/* <Box>
                       <Model exp={workExperience}/>
                    </Box> */}
                  <form onSubmit={handleSubmit}>
                  <textarea required style={{marginTop:'5px',maxWidth:'320px'}} name="additionaInformation" value={v} onChange={handleChange} rows={4} cols={30}  />
                  <Button onClick={handleNext} sx={{fontSize:'10px',marginTop:'2px',color:'black',textDecoration:'underline',textTransform:'none'}}>I will add later skip for now.</Button>

                  <Stack sx={{flexDirection:'row',justifyContent:'space-between'}}>
                <Button onClick={handleBack} variant="text"  type="submit" sx={{float:'right',color:'black'}}>
        Back
      </Button>
                <Button variant="text" color="primary" type="submit" sx={{float:'right'}}>
        Next
      </Button>
                </Stack>
        </form>                    
                </Stack>
                
                
                

        
        </Box>:''}
    </>
    
  )
}

export default Bio