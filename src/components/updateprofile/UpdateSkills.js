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
import CloseIcon from '@mui/icons-material/Close';
import { Button, Container, FormLabel, IconButton, Stack, Typography } from '@mui/material';
import { useSelector,useDispatch } from 'react-redux';
import { setMentee,setMentorIntrests,updateSkill } from '../../features/UserSlice';
import Autosuggest from 'react-autosuggest';
import './updateskills.css'
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

export default function UpdateSkills({val,setVal,handleUpdateSkills,handleClose}) {


  
  const dispatch=useDispatch()
  
  const [intrests, setIntrests] = useState([
   
  ]);
  const [role,setRole]=useState('Update Skills')

//   const val=useSelector(state=>state.skills)
  const mentee=useSelector(state=>state.mentee)
  const mentor=useSelector(state=>state.mentor)
  

  React.useEffect(()=>{
    setIntrests(val)

    
    if(mentor){
      // setIntrests(val)
      setRole('Please tell us your professional area(s) of expertise: ')
    }
    if(mentee){
      // setIntrests(val2)
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
    

    const intr=intrests.map((intr) =>
    intr.title === title
          ? { ...intr, selected: !intr.selected }
          : intr
      )

      setIntrests(intr)

    

    dispatch(updateSkill(intr))
    setVal(intr)

    
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

    if (value!=''){
      const s=[...intrests,{
        title:value,
        selected:true
      }]
      setIntrests(s)
      setVal(s)
      dispatch(updateSkill(s))
    }

    setValue('');
  }

  return (
    
    <>
<Box style={{padding:'0px',margin:'0px',width:'100%'}}>
<Stack sx={{flex:1,flexDirection:'column',textAlign:'center',paddingBottom:'1rem',marginTop:'0px'}}>
            <Typography sx={{fontWeight:'bold',padding:'0px',margin:'0px'}}>Update Skills</Typography>
            <Typography sx={{fontSize:'11px'}}>(Click to select and deselect)</Typography>
            </Stack>
            
   
            
            <IconButton onClick={handleClose} sx={{top:'0px', right:'0px',position:'absolute'}}><CloseIcon sx={{fontSize:'16px'}}/></IconButton>
    
        <Stack textAlign='start' >
        </Stack>
        
        
      <FormControl sx={{ width:'100%'}}>
      
        
        <Box sx={{marginBottom:'4px'}}>
        
          {intrests.map((intrest,index) => (
          
              <Chip sx={{margin:'2px',fontSize:'11px'}} label={intrest.title} color="primary" variant={intrest.selected?'solid':'outlined'} onClick={()=>handleSelect(intrest.title)} />
            
          ))}
          </Box>
          <Stack direction={'row'} sx={{justifyContent:'center',marginTop:'3px'}}>
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

          <Button onClick={handleUpdateSkills} variant='contained' sx={{marginTop:'1rem'}}>Save</Button>
    
  
      </FormControl>
      
      
    </Box>
    </>
  );
}