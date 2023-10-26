import { Box, Checkbox, FormControl, FormControlLabel, InputLabel, OutlinedInput, Radio, RadioGroup, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { TextField, Button, TextareaAutosize } from '@mui/material';

import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useSelector,useDispatch } from 'react-redux';
import { saveFirstName, saveLastName, setRequiredDetails } from '../../features/UserSlice';
const RequriedInformation = ({step,handleNext}) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const vals=useSelector(state=>state.requiredDetails)
    console.log(vals)

    const dispatch=useDispatch()
    const [reqDetails,setReqDetails]=useState({
        gmail:'',
        phoneNumber:'',
        password:''
    })

    const handleChange=(event)=>{
        const {name,value}=event.target
        console.log('i am here',name,value)
        setReqDetails({...reqDetails,[name]:value})
        dispatch(setRequiredDetails({...reqDetails,[name]:value}))
    }

    const [firstname,setFirstName]=useState('')
    const [lastname,setLastName]=useState('')

    const handleNameChange=(event)=>{
        const {name,value}=event.target
        if(name=='firstname'){
            setFirstName(value)
            dispatch(saveFirstName(value))
        }
        else if(name=='lastname'){
            setLastName(value)
            dispatch(saveLastName(value))
        }
        
    }
    const handleSubmit = (e) => {
        e.preventDefault(); 
        handleNext()
        // You can add your form submission logic here
      };

      const handleOptionsChange = (event) => {
        setOptions({ ...options, [event.target.name]: event.target.checked });
      };
      const [options, setOptions] = useState({
        option1: false,
        option2: false,
        option3: false,
      });
      const [gender, setGender] = useState('')
      const handleGenderChange = (event) => {
        setGender(event.target.value);
      };
      const [isOptionsValid, setOptionsValid] = useState(true);
    

    

  return (
    <>{
        step==1?
        
            <form onSubmit={handleSubmit}>
                <Stack direction='column' >
        <FormControl variant="outlined" style={{paddingBottom:'1rem'}}>
                <InputLabel >Email</InputLabel>
                <OutlinedInput
                name='gmail'
                required
                value={reqDetails.gmail}
                onChange={handleChange}
                   
                    type={'text'}
                    
                    label="Gmail"
                />
                </FormControl>
                <FormControl variant="outlined" style={{paddingBottom:'1rem'}}>
                <InputLabel >First Name</InputLabel>
                <OutlinedInput
                required
                name='firstname'
                value={firstname}
                onChange={handleNameChange}
                   
                    type={'text'}
                    
                    label="First Name"
                />
                
                </FormControl>
                <FormControl variant="outlined" style={{paddingBottom:'1rem'}}>
                <InputLabel >Last Name</InputLabel>
                <OutlinedInput
                required
                name='lastname'
                value={lastname}
                onChange={handleNameChange}
                   
                    type={'text'}
                    
                    label="Last Name"
                />
                
                </FormControl>
                <FormControl variant="outlined" style={{width:'100%'}} >
                        <InputLabel >Password</InputLabel>
                        <OutlinedInput
                        required
                        name='password'
                        value={reqDetails.password}
                        onChange={handleChange}
                           
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showPassword ?  <Visibility />:<VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label="Passcode"
                        />
                        </FormControl>
                        
                        
                
            <Box sx={{flex:1,width:'100%',paddingTop:'1rem'}}>
        
            
                </Box>
                <Stack sx={{paddingBottom:'1rem',textAlign:'start', display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                    <Link style={{textDecoration:'none'}} to='/login'>
                    <Typography sx={{fontSize:'12px'}}>Already a user ?</Typography>
                    </Link>
                    
                </Stack>
                
                <Stack sx={{flexDirection:'row',justifyContent:'space-between'}}>
                <Button disabled variant="text" color="primary" type="submit" sx={{float:'right'}}>
        Back
      </Button>
                <Button variant="text" color="primary" type="submit" sx={{float:'right'}}>
        Next
      </Button>
                </Stack>
      </Stack>
                </form>
                
               
   
    //     <form onSubmit={handleSubmit}>
    //   <Typography variant="h6">Title</Typography>
    //   <FormControl variant="outlined" fullWidth>
    //     <TextField
    //       type="text"
    //       required
    //       label="Required Text Field"
    //     />
    //   </FormControl>
    //   <FormControl variant="outlined" fullWidth>
    //     <TextField
    //       type="email"
    //       required
    //       label="Required Email Address"
    //     />
    //   </FormControl>
    //   <FormControl variant="outlined" fullWidth>
    //     <TextareaAutosize
    //       required
    //       minRows={3}
    //       aria-label="minimum height"
    //       placeholder="Required Textarea"
    //     />
    //   </FormControl>
    //   <FormControl variant="outlined" fullWidth>
    //     <TextField
    //       type="email"
    //       label="Email Address"
    //       defaultValue="Validation error"
    //     />
    //   </FormControl>
    //   <Button variant="contained" color="primary" type="submit" sx={{float:'right'}}>
    //     Submit
    //   </Button>
    // </form>
        
        :''
    }
    </>
  )
}

export default RequriedInformation