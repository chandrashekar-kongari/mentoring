import { Alert, Box, Container, Stack, Typography } from '@mui/material'
import React,{useState} from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from "@mui/material/Button";
import axios from 'axios'
import endpoint from '../API/api';
import { setAuth } from '../features/UserSlice';
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'

const Login = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const [gmail, setGmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleLogin=async()=>{
        const obj={
            gmail:gmail,
            password:password
        }

        
     
        try {
        const response = await axios.get('http://127.0.0.1:5000/signin', obj);
      
            if (response.status === 200) {
              const a=true
              // dispatch(setAuth(a))
              
         
            // navigate('/homepage');
      
            } else {
              console.error('Failed to submit user data.');
              }
            } catch (error) {
            console.error('Error:', error);
            }
      
        
      }

    const handleChange = (event) => {
      
      const {name,value}=event.target
      if(name=='gmail'){
        setGmail(value)
      }
      else{
        setPassword(value)
      }


    };

    const handleClick=async()=>{
        try{
            const p={
                gmail:gmail,
                passwod:password
            }
            const res= await axios.post(endpoint+'auth',p);
              if(res.status === 200){
                console.log(res)
                const s=res.data
                
                if(s.status){
                    dispatch(setAuth(true))
                    navigate('/home')
                }else{
                    Alert('Error')
                }
              }
              else {
                console.error('Failed to submit user data.');
              }
            } catch (error) {
              console.error('Error:', error);
            }

         
    }


  return (
    <Container sx={{height:'90vh'}} component="main" maxWidth="xs">
      
        <Stack sx={{height:'100%',justifyContent:'center',textAlign:'center'}}>
        <Typography>We are working on login</Typography>
           
            <Box sx={{boxShadow: 3,
                    borderRadius: 2,
                    px: 4,
                    py: 3,
                    }} >
                        <Box display="flex"
                            justifyContent="center"
                            alignItems="center" sx={{paddingBottom:'20px'}}>
                            <Link to="/"><img  alt="Logo" src="techpact-logo.png" style={{
                            width: '50%', // Adjust the width as needed
                            height: '50%', // Adjust the height as needed
            }}/></Link>
                        </Box>
                <Stack direction='column' >
                <FormControl variant="outlined">
                        <InputLabel >Gmail</InputLabel>
                        <OutlinedInput
                        name='gmail'
                        value={gmail}
                        onChange={handleChange}
                           
                            type={'text'}
                            
                            label="Gmail"
                        />
                        </FormControl>
                    <Box sx={{flex:1,width:'100%',paddingTop:'1rem'}}>
                
                    <FormControl variant="outlined" style={{width:'100%'}} >
                        <InputLabel >Password</InputLabel>
                        <OutlinedInput
                        name='password'
                        value={password}
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
                        </Box>
                        <Stack sx={{paddingTop:'1rem',textAlign:'start', display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                            <Link style={{textDecoration:'none'}} to='/signup'>
                            <Typography sx={{fontSize:'12px'}}>Are you new user ?</Typography>
                            </Link>
                            <Link style={{textDecoration:'none'}} to='/signup'>
                            <Typography sx={{fontSize:'12px',color:'black'}}>Forgot password ?</Typography>
                            </Link>
                        </Stack>
                        <Button
                            onClick={handleLogin}
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, '&:hover': {
                               
                                
                            },}}
                            
                        >
                            Login <FontAwesomeIcon style={{paddingLeft:'1rem'}} icon={faArrowRight} />
                        </Button>
                       
                </Stack>
                    

            </Box>
        </Stack>
    </Container>
  )
}

export default Login