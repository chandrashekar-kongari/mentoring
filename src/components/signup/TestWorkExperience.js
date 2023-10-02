import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Model from './Model'
import { useSelector,useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const TestWorkExperience = ({step}) => {

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
  useEffect(()=>{
    setExperiences(exps)
    console.log(exps)
  },[exps])
  return (
    <>
    {step==3?<Container>


        <Stack sx={{flexDirection:'row',display:'flex'}}>
                    <Box sx={{flex:1,flexDirection:'column',display:'flex',justifyContent:'center',textAlign:'center',paddingRight:'2px'}}>
                        <Typography sx={{fontSize:'12px'}}>Would you like to add work experience?</Typography>
                    </Box>
                    <Box>
                       <Model exp={workExperience}/>
                    </Box>
                    
                </Stack>
                <Stack sx={{paddingTop:'1rem'}}>
                {experiences.map((exp)=>{
                      return (<Stack sx={{flexDirection:'row',justifyContent:'space-between', backgroundColor:'white',boxShadow: 3,padding:'6px',borderRadius: 1}}>
                      <Stack sx={{display:'flex',justifyContent:'center',textAlign:'center',paddingLeft:'1px'}}>
                      <Typography>{exp.company}</Typography>
                      </Stack>
                      <Stack sx={{flexDirection:'row'}}>
                        <EditIcon sx={{paddingRight:'6px'}} />
                        <DeleteIcon/>

                      </Stack>
                    </Stack>)
                    })}
                </Stack>
        
        </Container>:''}
    </>
    
  )
}

export default TestWorkExperience