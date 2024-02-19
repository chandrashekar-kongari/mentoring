import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { Container, FormLabel, Stack, Typography } from '@mui/material';
import { useSelector,useDispatch } from 'react-redux';
import { addSkill, setMentee,setMentorIntrests,updateSkill,saveNumberOfMentees } from '../../../../features/UserSlice';
import {useState} from 'react'
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

const areaOfIntrests = [
  // 'AI and Machine Learning',
  // 'Full Stack Development',
  // 'Network Admistration',
  // 'Cybersecurity',
  // 'Data Science',
  // 'Data Analytics',
  // 'Project Management'
  {
    title:'Leadership',
    selected:false
  },
  {
    title:'Career guidance',
    selected:false
  },
  {
    title:'Thought parter',
    selected:false
  },
  {
    title:'Transition',
    selected:false
  },
  {
    title:'Personal Development',
    selected:false
  }
];

function getStyles(name, intrests, theme) {
  return {
    fontWeight:
    intrests.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function AreaOfIntrestsForMentors() {


  const [selected,setSelected]=React.useState([])
  const dispatch=useDispatch()
  const theme = useTheme();
  const [intrests, setIntrests] = React.useState([]);
  const val=useSelector(state=>state.mentorIntrests)
  React.useEffect(()=>{
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
},
{
  title:'React Native',
  selected:false
},
{
  title:'Angular',
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
]

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setIntrests(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    dispatch(setMentorIntrests(
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

    dispatch(setMentorIntrests(intr))
   
  }
  const handleSelectNumberOfMentees=(title)=>{
    const intr=numOfMentees.map((intr) =>
    intr.title === title
          ? { ...intr, selected: true }
          : { ...intr, selected: false }
      )

      setNumberOfMentees(intr)

    // const i=[...intrests]
    if (title=='1 Mentee'){
      dispatch(saveNumberOfMentees(1))
    }
    else if (title=='2 Mentees'){
      dispatch(saveNumberOfMentees(2))
    }
    if (title=='3 Mentees'){
      dispatch(saveNumberOfMentees(3))
    }

    
   
  }
  const [numOfMentees,setNumberOfMentees]=useState([
    {
      title:'1 Mentee',
      selected:false
    },
    {
      title:'2 Mentees',
      selected:false
    },
    {
      title:'3 Mentees',
      selected:false
    }
  ])

  const handleNumberOfmentees=(val)=>{
    setNumberOfMentees(val)

  }

  const numberofmentees=useSelector(state=>state.numberofmentees)

  return (
    <Box sx={{padding:'0px',margin:'0px',paddingTop:'1rem'}}>
        <Stack textAlign='center' >
        {/* <FormLabel style={{fontSize:'12px',color:'blue'}}>You can pick multiple</FormLabel> */}
        <Typography id="demo-multiple-chip-label" sx={{fontSize:'14px'}}>I have capacity to mentor: </Typography>
        <Stack flexDirection={'row'} justifyContent={'space-around'} >
        {numOfMentees.map((intrest,index) => (
            
            
            
            <Chip sx={{margin:'1px',fontSize:'11px',marginBottom:'2px'}} label={intrest.title} color="primary" variant={numberofmentees==index+1?'solid':'outlined'} onClick={()=>handleSelectNumberOfMentees(intrest.title)} />
          
        ))}

        </Stack>
        </Stack>
        <Box sx={{marginBottom:'10px',paddingTop:'1rem'}}>
        <Typography id="demo-multiple-chip-label" sx={{fontSize:'14px'}}>I have experience in: </Typography>
        {/* <Typography sx={{fontSize:'11px'}}>(Click to select and deselect)</Typography> */}
        </Box>
        
      <FormControl sx={{ }}>
        <Box>
        
          {intrests.map((intrest,index) => (
            
            
            
              <Chip sx={{margin:'1px',fontSize:'11px',marginBottom:'2px'}} label={intrest.title} color="primary" variant={intrest.selected?'solid':'outlined'} onClick={()=>handleSelect(intrest.title)} />
            
          ))}
          </Box>
  
      </FormControl>
    </Box>
  );
}