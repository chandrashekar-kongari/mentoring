import { Box, FormControl, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useSelector,useDispatch } from 'react-redux';
import { saveFirstName, saveLastName, setRequiredDetails } from '../../features/UserSlice';
const RequriedInformation = ({step}) => {
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

    

  return (
    <>{
        step==1?<Stack direction='column' >
        <FormControl variant="outlined" style={{paddingBottom:'1rem'}}>
                <InputLabel >Email</InputLabel>
                <OutlinedInput
                name='gmail'
                value={reqDetails.gmail}
                onChange={handleChange}
                   
                    type={'text'}
                    
                    label="Gmail"
                />
                </FormControl>
                <FormControl variant="outlined" style={{paddingBottom:'1rem'}}>
                <InputLabel >First Name</InputLabel>
                <OutlinedInput
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
                <Stack sx={{paddingTop:'1rem',textAlign:'start', display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                    <Link style={{textDecoration:'none'}} to='/login'>
                    <Typography sx={{fontSize:'12px'}}>Already a user ?</Typography>
                    </Link>
                    
                </Stack>
                
               
        </Stack>:''
    }
    </>
  )
}

export default RequriedInformation