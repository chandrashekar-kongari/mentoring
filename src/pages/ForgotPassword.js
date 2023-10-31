import { Alert, Box, CircularProgress, Container, Stack, Typography } from '@mui/material'
import React,{useEffect, useState} from 'react'
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
import { saveUserObj, setAuth } from '../features/UserSlice';
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import AlertComponent from '../components/AlertComponent';
import Loading from '../components/Loading';

const ForgotPassword = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const [gmail, setGmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [sentOTP,setSentOTP]=useState(false)
    const [otp,setOtp]=useState('')
    const [disableGmail,setDisableGmail]=useState(false)

    const [otpFromServer,setOtpFromServer]=useState('')

    const [userid,setUserid]=useState('')

    const checkOtpSameOrNot=async()=>{
        handleShowAlert(false)

        if(otp==otpFromServer){
            setSentOTP(false)
            setShowSubmitOTPBtn(false)
            setShowChangePasswordBtn(true)
            setLoading(false)
            
        }else{
          for(let i=0;i<1000000000;i++){
            continue
          }
            let m='Please enter correct OTP'
            setAlertMessage(m)
            setType('error')
            setShowAlert(true)
            
            setLoading(false)
            
        }
       
    }

    const sendOTP=async()=>{
        const obj={
            'email':gmail
        }

        try {
            const response = await axios.post(endpoint+ '/sendotp', obj);
          
                if (response.status === 200) {
                  const a=true
                  // dispatch(setAuth(a))
                  const type=response.data.type
                  if (type=='error'){
                    setType('error')
                    const message=response.data.message
                    setAlertMessage(message)
                    handleShowAlert(true)
                    setLoading(false)
                  }else if(type=='success'){
                    setType(type)
                    const message=response.data.message
                    setUserid(response.data.userid)
                    setOtpFromServer(response.data.otp)
                    setAlertMessage(message)
                    handleShowAlert(true)
                    setShowSubmitEmailBtn(false)
                    setShowSubmitOTPBtn(true)
                    setDisableGmail(true)
        
                    setSentOTP(true)
                    setLoading(false)
                  }else{
                    setType('error')
                    
                    setAlertMessage('Something went wrong')
                    handleShowAlert(true)
                  }
             
                } else {
                  console.error('Failed to submit user data.');
                  setType('error')

                    
                  setAlertMessage('Something went wrong')
                handleShowAlert(true)
                  }
                } catch (error) {
                console.error('Error:', error);
                setType('error')
                    
                setAlertMessage('Something went wrong')
                handleShowAlert(true)
                }
        
    }
    const [showPassword, setShowPassword] = useState(false);

    const [showSubmitEmailBtn,setShowSubmitEmailBtn]=useState(true)
    const [showSubmitOTPBtn,setShowSubmitOTPBtn]=useState(false)
    const [showChangePasswordBtn,setShowChangePasswordBtn]=useState(false)

    const [loading,setLoading]=useState(false)

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleLogin=async(e)=>{
        e.preventDefault()

        const obj={
            'email':gmail,
            'password':password
        }

        
     
        try {
        const response = await axios.post(endpoint+ '/signin', obj);
      
            if (response.status === 200) {
              const a=true
              // dispatch(setAuth(a))
              const user=response.data
              console.log('lo ',user)
              if(user==null || Object.keys(user).length === 0){
                setType('error')
                setAlertMessage('Something went wrong')
                handleShowAlert(true)
              }
              else{
                dispatch(saveUserObj(response.data))
                
                dispatch(setAuth(true))
                localStorage.setItem('auth', 'true');
                localStorage.setItem('userid',response.data._id)
                console.log('response from login ',response.data)
                
              }
         
            
      
            } else {
              console.error('Failed to submit user data.');
              }
            } catch (error) {
            console.error('Error:', error);
            }
      
        
      }

    const handleChangePassword=async()=>{
        if(password!=confirmpassword){
            setAlertMessage('Password not matching')
            setType('error')
            handleShowAlert(true)
            return
        }
        const obj={
            'password':password,
            'email':gmail,
            'userid':userid
        }
        try {
            const response = await axios.post(endpoint+ '/changepassword', obj);
          
                if (response.status === 200) {
                  const t=response.data.type
                  if(t=='error'){
                    setType(t)
                    setAlertMessage(response.data.message)
                    handleShowAlert(true)
                  }else{
                    setType(t)
                    setAlertMessage(response.data.message)
                    handleShowAlert(true)
                    setLoading(false)
                    setSuccess(true)
                  }
                
          
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
      else if(name=='password'){
        setPassword(value)
      }else if(name=='confirmpassword'){
        setConfirmPassword(value)
      }

    };
    const handleOTPChange = (event) => {
      
        const {name,value}=event.target
        setOtp(value)
  
      };

    
    useEffect(()=>{
      handleShowAlert(false)
      setLoading(false)
      setSuccess(false)
    },[])
    
    const [showAlert,setShowAlert]=React.useState(false)
    const handleShowAlert=(val)=>{
      // const val=!showAlert
      const v=val
      setShowAlert(v)
    }
  
    const [alertMessage,setAlertMessage]=React.useState("Error message")

    

    const handleSubmit=(event)=>{
        event.preventDefault()
        const v=false
        handleShowAlert(v)
        
        setLoading(true)
        if(showSubmitEmailBtn){
            sendOTP()
            
        }
        else if (showSubmitOTPBtn){
            
            checkOtpSameOrNot()
        }else if(showChangePasswordBtn){
            handleChangePassword()
        }
    }

    const [type,setType]=useState('error')
    const handleLoginClick=()=>{
      
        navigate('/login')
    
    }
    const [success,setSuccess]=useState(false)

  return (
    <>
    
    <Container sx={{height:'90vh'}} component="main" maxWidth="xs">
      
        
      
    
       
      <Stack sx={{flex:1,flexDirection:'row',justifyContent:'center'}}>
        {showAlert && <AlertComponent type={type} message={alertMessage} />}
        </Stack>
      
        <Stack sx={{height:'100%',justifyContent:'center',textAlign:'center'}}>
        
           
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
                {success?<>
                <Typography>Please login <Button onClick={handleLoginClick}>Click Here</Button></Typography>
                </>:<form onSubmit={handleSubmit}>
                <Stack direction='column' spacing={2}>
                  <FormControl variant="outlined">
                        <InputLabel >Gmail</InputLabel>
                        <OutlinedInput
                        disabled={disableGmail}
                        name='gmail'
                        value={gmail}
                        onChange={handleChange}
                           
                            type={'text'}
                            
                            label="Gmail"
                            required
                        />
                        </FormControl>
                    
                        {sentOTP && <FormControl variant="outlined">
                        <InputLabel >OTP</InputLabel>
                        <OutlinedInput
                        name='otp'
                        value={otp}
                        onChange={handleOTPChange}
                           
                            type={'text'}
                            
                            label="OTP"
                            required
                        />
                        </FormControl> }
                        {showChangePasswordBtn && <>
                            <Box sx={{flex:1,width:'100%'}}>
                    <FormControl variant="outlined" style={{width:'100%'}} >
                        <InputLabel >Password</InputLabel>
                        <OutlinedInput
                        required
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
                        <Box sx={{flex:1,width:'100%'}}>
                    <FormControl variant="outlined" style={{width:'100%'}} >
                        <InputLabel >Confirm Password</InputLabel>
                        <OutlinedInput
                        required
                        name='confirmpassword'
                        value={confirmpassword}
                        onChange={handleChange}
                           
                            type={ 'password'}
                            
                            label="Confirm password"
                        />
                        </FormControl>
                        </Box>
                        </>}
                        
                        <Stack sx={{textAlign:'start', display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                            
                        </Stack>
                        {showSubmitEmailBtn && <Button
                            type='submit'
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, '&:hover': {
                                  
                            },}}  
                        >
                            Submit Email Address <FontAwesomeIcon style={{paddingLeft:'1rem'}} icon={faArrowRight} />
                        </Button> } 
                        {showSubmitOTPBtn && <Button
                            type='submit'
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, '&:hover': {
                                  
                            },}}  
                        >
                            Submit OTP <FontAwesomeIcon style={{paddingLeft:'1rem'}} icon={faArrowRight} />
                        </Button> } 
                        {showChangePasswordBtn && <Button
                            type='submit'
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, '&:hover': {
                                  
                            },}}  
                        >
                            Change Password <FontAwesomeIcon style={{paddingLeft:'1rem'}} icon={faArrowRight} />
                        </Button> }       
                </Stack>
                </form>}
                    

            </Box>
        </Stack>
    </Container></>
  )
}

export default ForgotPassword