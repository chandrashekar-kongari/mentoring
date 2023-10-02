import * as React from 'react';
import {useState} from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

import { Button, Container, FormLabel, Stack, Typography } from '@mui/material';
import { useSelector,useDispatch } from 'react-redux';
import { setMentee,setMentorIntrests,updateSkill } from '../../features/UserSlice';
import Autosuggest from 'react-autosuggest';
import './skills.css'
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
  'AI and Machine Learning',
  'Full Stack Development',
  'Network Admistration',
  'Cybersecurity',
  'Data Science',
  'Data Analytics',
  'Project Management'
];

const skills=[
  //lang
  {
    title:'Game Development'
  },
  {
    title:'Python Programming'
  },
  {
    title:'C Programming'
  },{
    title:'C++ Programming'
  },
  {
    title:'C# Programming'
  },
  //frame
  {
    title:'React JS'
  },
  {
    title:'React Native'
  },{
    title:'Angular'
  },
  {
    title:'Vue JS'
  },
  //back
  {
    title:'Flask'
  },
  {
    title:'Springboot'
  },{
    title:'Node js'
  },
  {
    title:'Express Js'
  },
  {
    title:'Mongodb'
  },
  {
    title:'SQL'
  },{
    title:'AWS'
  },
  {
    title:'Docker'
  },
  {
    title:'Google Cloud'
  },
  {
    title:'Deep learning'
  },{
    title:'Automation testing'
  },
  {
    title:'Product Management'
  }
]

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());
  
  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return skills.filter(language => regex.test(language.title));
}

function getSuggestionValue(suggestion) {
  return suggestion.title;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.title}</span>
  );
}

function getStyles(name, intrests, theme) {
  return {
    fontWeight:
    intrests.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Skills({step,handleNext}) {


  const [selected,setSelected]=React.useState([])
  const dispatch=useDispatch()
  const theme = useTheme();
  const [intrests, setIntrests] = useState([
   
  ]);
  const [role,setRole]=useState('learn')

  const val=useSelector(state=>state.skills)
  const mentee=useSelector(state=>state.mentee)
  const mentor=useSelector(state=>state.mentor)

  React.useEffect(()=>{
    const val=[
      {
        title:'Software Development',
        selected:false
      },
      {
        title:'Testing',
        selected:false
      },
      {
        title:'Full Stack Development',
        selected:false
      },
      
      {
        title:'Cybersecurity',
        selected:false
      },
      
      {
        title:'Data Science and Analytics',
        selected:false
      },
      {
        title:'Cloud Computing',
        selected:false
      },
      {
        title:'IT Project Management',
        selected:false
      },
      {
        title:'IT Consultant',
        selected:false
      }
    ]
    
    const val2=[
      {
        title:'Software Development',
        selected:false
      },
      {
        title:'Python',
        selected:false
      },
      {
        title:'Full Stack Development',
        selected:false
      },
      
      {
        title:'Cybersecurity',
        selected:false
      },
      
      {
        title:'Data Science and Analytics',
        selected:false
      },
      {
        title:'Cloud Computing',
        selected:false
      },
      {
        title:'Database Develpment',
        selected:false
      },
      {
        title:'C# Programming',
        selected:false
      }
    ]
   
    if(mentor){
      setIntrests(val)
      setRole('Please tell us your professional area(s) of expertise: ')
    }
    if(mentee){
      setIntrests(val2)
      setRole('Please tell us your area(s) of interest: ')
    }
  },[mentee,mentor])

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
    // if (selected.includes(num)) {
    //   // If the number is already in the array, remove it
    //   setSelected(selected.filter((n) => n !== num));
    // } else {
    //   // If the number is not in the array, add it
    //   setSelected([...selected, num]);
    // }

    // const vals=[...intrests,{title:title,selected:}]
    // vals=vals.filter
    // setSelected((s)=>{s.title==title?{title,selected:!s.selected}:s});
    // setIntrests((prevIntrest) =>
    // prevIntrest.map((intr) =>
    // intr.title === title
    //       ? { ...intr, selected: !intr.selected }
    //       : intr
    //   )
      

    // );

    const intr=intrests.map((intr) =>
    intr.title === title
          ? { ...intr, selected: !intr.selected }
          : intr
      )

      setIntrests(intr)

    // const i=[...intrests]

    dispatch(updateSkill(intr))

    
  }

  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const onChange = (event, { newValue, method }) => {
    setValue(newValue);
    console.log('i am here')
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: " Ex: Game Development",
    value,
    onChange,
  };

  const handleAdd=()=>{

    const s=[...intrests,{
      title:value,
      selected:true
    }]
    setIntrests(s)
    dispatch(updateSkill(s))

    setValue('');
  }

  return (
    
    <>
    {step==3?<Box style={{padding:'0px',margin:'0px',width:'100%'}}>
    
        <Stack textAlign='start' >
        {/* <FormLabel style={{fontSize:'12px',color:'blue'}}>You can pick multiple</FormLabel> */}
        </Stack>
        <Container sx={{marginBottom:'10px'}}>
        <Typography id="demo-multiple-chip-label">{role}</Typography>
        </Container>
        
      <FormControl sx={{ width:'100%'}}>
      
        
        <Box sx={{marginBottom:'10px'}}>
        
          {intrests.map((intrest,index) => (
            // <Chip
            //   key={intrest}
            //   value={intrest}
              
            // >

            //   {intrest}
            // </Chip>
            
            
              <Chip sx={{margin:'1px',fontSize:'11px',marginBottom:'6px'}} label={intrest.title} color="primary" variant={intrest.selected?'solid':'outlined'} onClick={()=>handleSelect(intrest.title)} />
            
          ))}
          </Box>
          <Stack direction={'row'} sx={{justifyContent:'space-around',marginTop:'3px'}}>
              <Autosuggest
              id='inputID'
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
          <Button onClick={handleAdd} variant='outlined'>Add</Button>
          </Stack>
    
  
      </FormControl>
      {
        mentee&&<Container style={{textAlign:'center'}}>
                          <Button onClick={handleNext} sx={{fontSize:'10px',marginTop:'10px',color:'black',textDecoration:'underline',textTransform:'none'}}>I am not sure skip to next step.</Button>

          </Container>
      }
      
    </Box>:''}
    </>
  );
}