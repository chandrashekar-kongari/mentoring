import { Alert, Box, Container, Stack, Typography } from '@mui/material'
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
import Loading from './Loading';
import AlertComponent from './AlertComponent';
import showToast from './ShowToast';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const [gmail, setGmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [message,setMessage]=useState('')
    const [type,setType]=useState('')


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleLogin=async(e)=>{
        e.preventDefault()
        setLoading(true)
   

        const obj={
            'email':gmail,
            'password':password
        }
        
        
     
        try {
        const response = await axios.post(endpoint+ '/signin', obj);
      
            if (response.status === 200) {
              const a=true
              // dispatch(setAuth(a))
              const user=response.data.user
              console.log('lo ',user)
              if(user==null || Object.keys(user).length === 0){
                setMessage(response.data.message)
                setType(response.data.type)
                handleShowAlert(true)
                callToast(response.data.message,response.data.type)
                setLoading(false)
                
              }
              else{
                dispatch(saveUserObj(response.data.user))
                
                dispatch(setAuth(true))
                localStorage.setItem('auth', 'true');
                localStorage.setItem('userid',response.data.user._id)
                console.log('response from login ',response.data.user)
                setLoading(false)
                navigate('/homepage');
              }
         
            
      
            } else {
              console.error('Failed to submit user data.');
              setMessage('Something went wrong')
              setType('error')
              callToast('Something went wrong','error')
              handleShowAlert(true)
              setLoading(false)
              }
            } catch (error) {
            console.error('Error:', error);
            setMessage('Something went wrong')
            setType('error')
            handleShowAlert(true)
            callToast('Something went wrong','error')
            setLoading(false)
            }
      
            handleShowAlert(false)
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
    const [showAlert,setShowAlert]=React.useState(false)
    const handleShowAlert=(val)=>{
      // const val=!showAlert
      setShowAlert(val)
    }
  
    const [errorMessage,setErrorMessage]=React.useState("Error message")
    const [loading,setLoading]=useState(false)
    const callToast=(m,t)=>{
      if(t=='success'){
        toast.success(m, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }else if(t=='info'){
        toast.info(m, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }else if(t=='error'){
        toast.error(m, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }else if(t=='warning'){
        toast.warn(m, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }else{
        toast(m, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      }
    }
    useEffect(()=>{
      
    },[])
    

  return (
    <><ToastContainer/>
    
    <Loading loading={loading}/>
    <Container sx={{height:'90vh'}} component="main" maxWidth="xs">

      
      <Stack sx={{flex:1,flexDirection:'row',justifyContent:'center'}}>
        {/* {showAlert && <AlertComponent type={type} message={message}/>} */}
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
                <form onSubmit={handleLogin}>
                <Stack direction='column' >
                  <FormControl variant="outlined">
                        <InputLabel >Gmail</InputLabel>
                        <OutlinedInput
                        name='gmail'
                        value={gmail}
                        onChange={handleChange}
                           
                            type={'text'}
                            
                            label="Gmail"
                            required
                        />
                        </FormControl>
                    <Box sx={{flex:1,width:'100%',paddingTop:'1rem'}}>
                
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
                        
                        <Stack sx={{paddingTop:'1rem',textAlign:'start', display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                            <Link style={{textDecoration:'none'}} to='/signup'>
                            <Typography sx={{fontSize:'12px'}}>Are you new user ?</Typography>
                            </Link>
                            <Link style={{textDecoration:'none'}} to='/forgotpassword'>
                            <Typography sx={{fontSize:'12px',color:'black'}}>Forgot password ?</Typography>
                            </Link>
                        </Stack>
                        <Button
                            // onClick={handleLogin}
                            type='submit'
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, '&:hover': {
                               
                                
                            },}}
                            
                        >
                            Login <FontAwesomeIcon style={{paddingLeft:'1rem'}} icon={faArrowRight} />
                        </Button>
                       
                </Stack>
                </form>
                    

            </Box>
        </Stack>
    </Container></>
  )
}

export default Login














// import { Alert, Box, Container, Stack, Typography } from '@mui/material'
// import React,{useState} from 'react'
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import IconButton from '@mui/material/IconButton';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
// import InputAdornment from '@mui/material/InputAdornment';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import Select from '@mui/material/Select';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import Button from "@mui/material/Button";
// import axios from 'axios'
// import endpoint from '../API/api';
// import { saveUserObj, setAuth } from '../features/UserSlice';
// import { Link, useNavigate } from 'react-router-dom';
// import {useDispatch,useSelector} from 'react-redux'

// const Login = () => {
//     const navigate=useNavigate()
//     const dispatch=useDispatch()

//     const [gmail, setGmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);

//     const handleClickShowPassword = () => setShowPassword((show) => !show);

//     const handleMouseDownPassword = (event) => {
//         event.preventDefault();
//     };
//     const handleLogin=async()=>{
//         const obj={
//             'email':gmail,
//             'password':password
//         }

        
     
//         try {
//         const response = await axios.post(endpoint+ '/signin', obj);
      
//             if (response.status === 200) {
//               const a=true
//               // dispatch(setAuth(a))
//               const user=response.data
//               console.log('lo ',user)
//               if(user==null || Object.keys(user).length === 0){
//                 setErrorMessage('Something went wrong')
//                 handleShowAlert(true)
//               }
//               else{
//                 dispatch(saveUserObj(response.data))
                
//                 dispatch(setAuth(true))
//                 localStorage.setItem('auth', 'true');
//                 localStorage.setItem('userid',response.data._id)
//                 console.log('response from login ',response.data)
//                 navigate('/homepage');
//               }
         
            
      
//             } else {
//               console.error('Failed to submit user data.');
//               }
//             } catch (error) {
//             console.error('Error:', error);
//             }
      
        
//       }

//     const handleChange = (event) => {
      
//       const {name,value}=event.target
//       if(name=='gmail'){
//         setGmail(value)
//       }
//       else{
//         setPassword(value)
//       }


//     };

//     const handleClick=async()=>{
//         try{
//             const p={
//                 gmail:gmail,
//                 passwod:password
//             }
//             const res= await axios.post(endpoint+'auth',p);
//               if(res.status === 200){
//                 console.log(res)
//                 const s=res.data
                
//                 if(s.status){
//                     dispatch(setAuth(true))
//                     navigate('/home')
//                 }else{
//                     Alert('Error')
//                 }
//               }
//               else {
//                 console.error('Failed to submit user data.');
//               }
//             } catch (error) {
//               console.error('Error:', error);
//             }

         
//     }
//     const [showAlert,setShowAlert]=React.useState(false)
//     const handleShowAlert=(val)=>{
//       // const val=!showAlert
//       setShowAlert(val)
//     }
  
//     const [errorMessage,setErrorMessage]=React.useState("Error message")

//   return (
//     <Container sx={{height:'90vh'}} component="main" maxWidth="xs">
      
//       <Stack sx={{flex:1,flexDirection:'row',justifyContent:'center'}}>
//         {showAlert && <Alert onClose={()=>{handleShowAlert(false)}} sx={{position:'absolute',top:'2%'}} severity="error">{errorMessage}</Alert>}
//         </Stack>
      
//         <Stack sx={{height:'100%',justifyContent:'center',textAlign:'center'}}>
//         <Typography>We are working on login</Typography>
           
//             <Box sx={{boxShadow: 3,
//                     borderRadius: 2,
//                     px: 4,
//                     py: 3,
//                     }} >
//                         <Box display="flex"
//                             justifyContent="center"
//                             alignItems="center" sx={{paddingBottom:'20px'}}>
//                             <Link to="/"><img  alt="Logo" src="techpact-logo.png" style={{
//                             width: '50%', // Adjust the width as needed
//                             height: '50%', // Adjust the height as needed
//             }}/></Link>
//                         </Box>
//                 <Stack direction='column' >
//                 <FormControl variant="outlined">
//                         <InputLabel >Gmail</InputLabel>
//                         <OutlinedInput
//                         name='gmail'
//                         value={gmail}
//                         onChange={handleChange}
                           
//                             type={'text'}
                            
//                             label="Gmail"
//                         />
//                         </FormControl>
//                     <Box sx={{flex:1,width:'100%',paddingTop:'1rem'}}>
                
//                     <FormControl variant="outlined" style={{width:'100%'}} >
//                         <InputLabel >Password</InputLabel>
//                         <OutlinedInput
//                         name='password'
//                         value={password}
//                         onChange={handleChange}
                           
//                             type={showPassword ? 'text' : 'password'}
//                             endAdornment={
//                             <InputAdornment position="end">
//                                 <IconButton
//                                 aria-label="toggle password visibility"
//                                 onClick={handleClickShowPassword}
//                                 onMouseDown={handleMouseDownPassword}
//                                 edge="end"
//                                 >
//                                 {showPassword ?  <Visibility />:<VisibilityOff />}
//                                 </IconButton>
//                             </InputAdornment>
//                             }
//                             label="Passcode"
//                         />
//                         </FormControl>
//                         </Box>
                        
//                         <Stack sx={{paddingTop:'1rem',textAlign:'start', display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
//                             <Link style={{textDecoration:'none'}} to='/signup'>
//                             <Typography sx={{fontSize:'12px'}}>Are you new user ?</Typography>
//                             </Link>
//                             <Link style={{textDecoration:'none'}} to='/signup'>
//                             <Typography sx={{fontSize:'12px',color:'black'}}>Forgot password ?</Typography>
//                             </Link>
//                         </Stack>
//                         <Button
//                             onClick={handleLogin}
//                             fullWidth
//                             variant="contained"
//                             sx={{ mt: 3, mb: 2, '&:hover': {
                               
                                
//                             },}}
                            
//                         >
//                             Login <FontAwesomeIcon style={{paddingLeft:'1rem'}} icon={faArrowRight} />
//                         </Button>
                       
//                 </Stack>
                    

//             </Box>
//         </Stack>
//     </Container>
//   )
// }

// export default Login