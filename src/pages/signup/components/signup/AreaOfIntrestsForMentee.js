import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { Button, Container, FormLabel, Stack ,Typography} from '@mui/material';
import { useSelector,useDispatch } from 'react-redux';
import { addSkill, setMentee,setMentorshipIntrests,updateSkill,saveNumberOfMentees } from '../../../../features/UserSlice';
import {useState} from 'react'
import { Link } from 'react-router-dom';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 16;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 2.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


function getStyles(name, intrests, theme) {
  return {
    fontWeight:
    intrests.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function AreaOfIntrestsForMentee() {


  const [selected,setSelected]=React.useState([])
  const dispatch=useDispatch()
  const theme = useTheme();
  const [intrests, setIntrests] = React.useState([]);
  const val=useSelector(state=>state.mentorshipIntrests)

  const mentee=useSelector(state=>state.mentee)
  const mentor=useSelector(state=>state.mentor)

  React.useEffect(()=>{
    
    const areaOfIntrests = [
      // 'AI and Machine Learning',
      // 'Full Stack Development',
      // 'Network Admistration',
      // 'Cybersecurity',
      // 'Data Science',
      // 'Data Analytics',
      // 'Project Management'
      
    ];
    setIntrests(val)

  },[])

  const [allSkills,setAllSkills]=useState([])
  const Ai=[{
    title:'Python',
    selected:false
  },
  {
    title:'TensorFlow',
    selected:false
  },
  {
    title:'PyTorch',
    selected:false
  },
  {
    title:'scikit-learn',
    selected:false
  },
  {
    title:'Matplotlib',
    selected:false
  },
  {
    title:'Seaborn',
    selected:false
  }
]

const Fullstack=[{
  title:'Python',
  selected:false
},
{
  title:'Java',
  selected:false
},
{
  title:'Java Script',
  selected:false
},
{
  title:'React Js',
  selected:false
}

,
{
  title:'Vue Js',
  selected:false
}
,
{
  title:'MongoDB',
  selected:false
}
,
{
  title:'SQL',
  selected:false
}
,
{
  title:'MariaDB',
  selected:false
}
,
{
  title:'React Native',
  selected:false
},
{
  title:'Angular',
  selected:false
}
]

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setIntrests(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    dispatch(setMentorshipIntrests(
      typeof value === 'string' ? value.split(',') : value,
    ))
  };
  const handleSelect=(title)=>{
    const intr=intrests.map((intr) =>
    intr.title === title
          ? { ...intr, selected: !intr.selected }
          : intr
      )

      setIntrests(intr)

    // const i=[...intrests]

    dispatch(setMentorshipIntrests(intr))


    // if (selected.includes(num)) {
    //   // If the number is already in the array, remove it
    //   if(num==0){
    //    dispatch(updateSkill([]))
    //     // dispatch(updateSkill(Ai))
        
    //   }
    //   setSelected(selected.filter((n) => n !== num));
    // } else {
    //   if(num==0){
    //     // dispatch(updateSkill([]))
    //     dispatch(updateSkill(Ai))
    //     dispatch(setMentorshipIntrests('AI and Machine Learning'))
    //   }
     
    //     if(num==1){
    //       // dispatch(updateSkill([]))
    //       dispatch(updateSkill(Fullstack))
    //       dispatch(setMentorshipIntrests('Full Stack Development'))
    //     }

    //   // If the number is not in the array, add it
    //   setSelected([...selected, num]);
    // }
    // Ai.map((ski)=>{
    //   dispatch(addSkill(ski))
    // })    
  }

  

  return (
    <Box style={{padding:'0px',margin:'0px'}}>
        <Stack textAlign='start' >
        {/* <FormLabel style={{fontSize:'12px',color:'blue'}}>You can pick multiple</FormLabel> */}
        </Stack>
        <Box sx={{marginBottom:'10px'}}>
        <Typography id="demo-multiple-chip-label" sx={{fontSize:'14px'}}>I’d like guidance on:</Typography>
        {/* <Typography sx={{fontSize:'11px'}}>(Click to select and deselect)</Typography> */}
        </Box>
      <FormControl sx={{ }}>
        <Box>
          {intrests.map((intrest,index) => (
            // <Chip
            //   key={intrest}
            //   value={intrest}
              
            // >

            //   {intrest}
            // </Chip>
            
            
              <Chip sx={{margin:'1px',fontSize:'11px',marginBottom:'2px'}} label={intrest.title} color="primary" variant={intrest.selected?'solid':'outlined'} onClick={()=>handleSelect(intrest.title)} />
            
          ))}
          </Box>

          
  
      </FormControl>
    </Box>
  );
}